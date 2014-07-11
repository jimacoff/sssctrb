require 'multi_json'
require 'active_support'

class Users::RegistrationsController < Devise::RegistrationsController
  layout 'sssctBookingLayout1',:except => []

  respond_to :json


  def create
    #userParams = params[:user]
    jsonResponse = {}

    #newUserParams = JSON.parse!(userParams)
    #puts "newUserParams : #{newUserParams}"

    @newUser = User.new(user_params)
    @newUser.role_id = 2

    if(@newUser.valid?)

      @newUser.save
      #newIndianNational.users_id = @newUser.id
      #
      #newIndianNational.save

      #UserMailer.welcome_user(@newUser).deliver

      #sign_in("user", @newUser)
      #puts "New U"

      render :json=> {
        :success=>true,
        :message => "#{@newUser.first_name.capitalize!} successfully Registered. <br><br>An Activation link had been sent to your registered mail-id. Please use it to Activate your Account."
      }

      return
    else
      render :json=> {
          :success=>false,
          :message => @newUser.errors.messages
      }
    end

  end

  def check_for_duplicate_user
    jsonResponse = {}
    # Check for Duplicate user
    if(User.find_by_email(params[:email]))
       jsonResponse[:success] = false
       jsonResponse[:message] = "Duplicate User"

       render :json => jsonResponse
       return
    else
      jsonResponse[:success] = true
      jsonResponse[:message] = "Available"
      render :json => jsonResponse
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
    render :json=> {:success=>false, :message=>"Error with your login or password. Please check and continue."}, :status=>401
  end

  end

private

def user_params
  params.require(:user).permit(
      :photo,
      :indian,
      :email,
      :password,
      :first_name,
      :last_name,
      :dob,
      :gender,
      :nationality,
  )
end

def indianNationalDetailsParams
  params.require(:indianNational).permit(:mobile_number,:verification_id_number,:verification_id_proof,:pincode,:city,:state,:address)
end
