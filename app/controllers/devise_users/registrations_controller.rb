require 'multi_json'
require 'active_support'

class DeviseUsers::RegistrationsController < Devise::RegistrationsController
  layout 'sssctBookingLayout1',:except => []

  respond_to :json


  def create
    #userParams = params[:user]

    #newUserParams = JSON.parse!(userParams)
    #puts "newUserParams : #{newUserParams}"

    #user_group_id = userParams[:user_group_id]

    #if user_group_id == 2
    #  IndianUser.new(userParams)
    #elsif user_group_id == 3 || user_group_id == 4
    #
    #elsif user_group_id == 5
    #
    #end

    @newUser = User.new(user_params)

    if(@newUser.valid?)

      @newUser.save

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
      :email,
      :password,
      :first_name,
      :last_name,
      :user_group_id
  )
end

def indianNationalDetailsParams
  params.require(:indianNational).permit(:mobile_number,:verification_id_number,:verification_id_proof,:pincode,:city,:state,:address)
end
