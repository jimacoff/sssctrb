class Users::EnquiryController < ApplicationController
  include InitializeUser
  layout :resolve_layout

  def index
    puts "User : #{user.inspect}"
  end

  def enquiry

  end

  def calendar_schedule

    from = Date.parse params[:from_date]
    till = Date.parse params[:to_date]

    from_month = from.month
    till_month = till.month

    from_day = from.day
    till_day = till.day

    current_year = from.year

    from_month_schedule_rec,till_month_schedule_rec = nil
    month_cond = []
    (from_month..till_month).each do |each_month|
      month_cond << each_month.to_s
    end

    schedule_recs =
        RoomAvailability.where(month:month_cond,year:current_year.to_s)

    first_last_recs = schedule_recs.slice!(1,schedule_recs.length - 2)

    if(first_last_recs == nil)
      from_month_schedule_rec = schedule_recs.shift
    elsif first_last_recs.empty?
      from_month_schedule_rec = schedule_recs.shift
      till_month_schedule_rec = schedule_recs.pop
    else
      from_month_schedule_rec = first_last_recs.shift
      till_month_schedule_rec = first_last_recs.pop
    end

    all_availabilities = []
    tmp_hash = {}

    # From Month Schedule
    from_month_schedule = from_month_schedule_rec.schedule
    days_in_from_month = from_month_schedule.keys.last.to_i
    (from_day..days_in_from_month).each do |each_day|
      #tmp_hash["date"] = each_day.to_s
      #tmp_hash["availability"] = (from_month_schedule[each_day.to_s]["availability"] > 0 ? "Av" : "Not Av")

      new_from_month = (from_month < 10 ? "0"+from_month.to_s : from_month.to_s)
      new_each_day = (each_day < 10 ? "0"+each_day.to_s : each_day.to_s)
      tmp_hash[new_from_month +"-"+ new_each_day +"-"+ current_year.to_s] =
          (from_month_schedule[each_day.to_s]["availability"] > 0 ? "Av" : "Not Av")

      #tmp_hash[each_day.to_s] = (from_month_schedule[each_day.to_s]["availability"] > 0 ? "Av" : "Not Av")

      #all_availabilities << tmp_hash
    end

    # To Month Schedule
    if(till_month_schedule_rec)
      till_month_schedule = till_month_schedule_rec.schedule
      (1..till_day).each do |each_day|
        #tmp_hash = {}
        new_till_month = (till_month < 10 ? "0"+till_month.to_s : till_month.to_s)
        new_each_day = (each_day < 10 ? "0"+each_day.to_s : each_day.to_s)
        tmp_hash[new_till_month +"-" + new_each_day +"-" + current_year.to_s] =
            (till_month_schedule[each_day.to_s]["availability"] > 0 ? "Av" : "Not Av")

        #all_availabilities << tmp_hash
      end
    end

    puts "all_availabilities : #{all_availabilities.inspect}"

    render :json => {
        "success" => true,
        "cal_data" => tmp_hash
    }

  end

  private

  def resolve_layout
    case action_name
      when "index"
        "sssctBookingLayout1"
      else
        "application"
    end
  end

end
