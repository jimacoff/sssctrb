require 'json'

class Admin::RoomScheduleController < ApplicationController
  layout 'sssctBookingLayout2'  #,:except => [:sample]
  before_filter :authenticate  #, :except => [:sample]

  #include RoomSchedulerConfig

  def index
    current_year = Date.today.year
    all_schedules_for_current_year =
        RoomAvailability.where("year = ?",current_year.to_s)

    all_schedules_array = []
    for each_schedule in all_schedules_for_current_year
      month_schedule = each_schedule.schedule
      month = each_schedule.month
      for_each_month = (month.to_i < 10 ? "0" + month : month)

      month_schedule.each do |each_date,availablity_info|
        each_schedule_hash = {}
        each_date = (each_date.to_i < 10 ? "0"+each_date : each_date)
        each_day_in_month =  for_each_month + "-" + each_date + "-" + each_schedule.year
        each_schedule_hash["date"] = each_day_in_month
        each_schedule_hash["room_type_id"] = each_schedule.room_type_id
        each_schedule_hash["room_type"] = each_schedule.getRoomAbbr
        each_schedule_hash["availability"] = availablity_info["availability"]
        each_schedule_hash["description"] = availablity_info["description"]

        all_schedules_array << each_schedule_hash

      end

    end

    render :json => {
        "success" => true,
        "all_room_schedules" => all_schedules_array
    }

  end

  def create
    newScheduleRecord = params[:newScheduleRecord]
    newScheduleRecordHash = JSON.parse(newScheduleRecord)

    to_full_date = newScheduleRecordHash["to_date"]
    from_full_date = newScheduleRecordHash["from_date"]

    parsed_from_date = Time.parse(from_full_date)
    from_date = parsed_from_date.day
    from_date_month = parsed_from_date.month
    from_date_year = parsed_from_date.year

    if(to_full_date)
      parsed_to_date = Time.parse(to_full_date)
      to_date = parsed_to_date.day
      to_date_month = parsed_to_date.month
      to_date_year = parsed_to_date.year
    end

    schedule_for_month = RoomAvailability.find_by_year_and_month(from_date_year.to_s,from_date_month.to_s)

    # New Availability Schedule For the Month
    if(!schedule_for_month)
      days_in_month = Time.days_in_month(from_date_month,from_date_year)
      month_hash = {}

      (0..days_in_month).each do |i|
        month_hash[i] = {
            "availability"  =>  RoomSchedulerConfig.default_number_of_days,
            "description"   =>  ""
        }
      end

      schedule_for_month = RoomAvailability.create({
        :year => from_date_year,
        :month => from_date_month,
        :schedule => month_hash.to_json,
        :room_type_id => newScheduleRecordHash["room_type_id"]
      })
    end

    month_schedule = schedule_for_month.schedule
    to_be_updated_month_schedule = {}

    if(to_full_date)
      # Date Range Schedule
      (from_date..to_date).each do |each_date|
        to_be_updated_month_schedule[each_date.to_s] = {
          "availability"  =>  newScheduleRecordHash["number_of_rooms_available"],
          "description"   =>  newScheduleRecordHash["schedule_desc"]
        }
      end
    else
    # Single Date Schedule
      to_be_updated_month_schedule[from_date.to_s] = {
        "availability"  =>  newScheduleRecordHash["number_of_rooms_available"],
        "description"   =>  newScheduleRecordHash["schedule_desc"]
      }
    end

    month_schedule.merge!(to_be_updated_month_schedule)

    schedule_for_month.update({
      :schedule => month_schedule.to_json
    })

    render :json => {
        "success" => true,
        "message" => "Schedule Successfully Saved"
    }

  end

end
