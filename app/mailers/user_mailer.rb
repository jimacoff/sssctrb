class UserMailer < ActionMailer::Base
  default from: "sssct.roombooking@gmail.com"

  def welcome_user(user)
    @user = user
    @url  = 'http://example.com/login'
    mail(
        to: @user.email,
        cc: "sssct.roombooking@gmail.com",
        subject: 'Welcome to My Awesome Site'
    )
  end

end
