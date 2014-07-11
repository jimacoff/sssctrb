class Users::ConfirmationsController < Devise::ConfirmationsController

  # POST /resource/confirmation
  def create
    puts "In the create method"
    resource_class.send_confirmation_instructions(resource_params)
    puts "Confirmation Instructions sent"
  end

  def show

    confirmation_token = params[:confirmation_token]
    confirmed_user = resource_class.find_by_confirmation_token(confirmation_token)

    if(confirmed_user)
      sign_in("user", confirmed_user)
      flash[:message] = "Your account was already Activated."
    else
      self.resource = resource_class.confirm_by_token(confirmation_token)
      sign_in("user", resource)
      flash[:message] = "Your account has been Activated."
    end

    redirect_to "/"

  end

end
