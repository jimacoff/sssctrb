class DeviseUsers::ConfirmationsController < Devise::ConfirmationsController

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
      devise_confirmation_token = Devise.token_generator.digest(self, :confirmation_token, confirmation_token)
      user_to_be_confirmed =
          resource_class.find_by_confirmation_token(devise_confirmation_token)
      if(user_to_be_confirmed)
        self.resource = resource_class.confirm_by_token(confirmation_token)
        sign_in("user", resource)
        flash[:message] = "Your account has been Activated."
      else
        flash[:message] = "This is an In-valid Activation Token. Please check the token and try again."
      end

    end

    redirect_to "/"

  end

end
