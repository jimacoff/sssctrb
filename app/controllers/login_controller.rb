class LoginController < ApplicationController
  layout 'sssctBookingLayout1'
  protect_from_forgery :except => [:signin]

  def signin
    result = Hash.new
    result["success"] = true

    if(params[:email])
      user = User.authenticate(params[:email],params[:password])
      if(user)
        puts "current_user email ==>",current_user
        redirect_to :controller => 'home'
      end
    end

  end

  def signout
  end

  def remember_me
  end
end
