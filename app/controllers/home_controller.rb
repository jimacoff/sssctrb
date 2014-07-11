class HomeController < ApplicationController
  layout 'sssctBookingLayout1',:except => [:sample]
  #layout 'application',:except => []
  before_filter :authenticate , :except => [:sample]

  def index
  end

  def sample

  end

  def all_users

    @users = User.all

    #puts "UUUUUUUUUUUUUUUUUUUUUUUUUUUUU : #{@users.first.indian_national_details}"

    #@users.each do |each_user|
    #  each_user.indianNationalData = each_user.indian_national_details
    #end

    render json: @users.to_json(:include => :indian_national_details)

    #render :json=> {
    #    :success=>true,
    #    :all_users_root => @users_json
    #}

  end

end
