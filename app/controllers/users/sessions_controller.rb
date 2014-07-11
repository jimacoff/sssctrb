class Users::SessionsController < Devise::SessionsController
  layout 'sssctBookingLayout1',:except => []

  respond_to :json

  def create
    resource = User.find_for_database_authentication(:email => params[:user][:email])
    return invalid_login_attempt unless resource

    if(resource.confirmed?)
      if resource.valid_password?(params[:user][:password])
        sign_in("user", resource)

        # Remember the user if remember me is checked
        if(params[:remember_me])
          resource.remember_me
        end

        render :json=> {
            :success=>true,
            :message => "Login Successful",
            :redirect_to => session["user_return_to"]
        }

        return
      end

      invalid_login_attempt
    else
      render :json=> {
          :success=>false,
          :message => "Account pending for Activation.<br><br>Please check your mail and use the Activation link to Activate your Account",
          :activation_pending => true,
          #:redirect_to => session["user_return_to"]
      }
    end
  end

  #def destroy
  #  sign_out(resource_name)
  #end

  protected
  def ensure_params_exist
    return unless params[:user_login].blank?
    render :json=>{:success=>false, :message=>"missing user_login parameter"}, :status=>422
  end

  def invalid_login_attempt
    warden.custom_failure!
    render :json=> {
        :success => false,
        :message => "Error with your login or password. Please check and continue."
    },:status => 401

  end

end