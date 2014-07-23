require 'json'

class AddressBookController < ApplicationController
  layout 'sssctBookingLayout1',:except => [:sample]
  #layout 'application',:except => []
  before_filter :authenticate , :except => [:sample]

  def index

  end

  def get_users_for_address_book
    address_book_users =
        User.where("dependent_user_id = #{current_user.id} OR id = #{current_user.id}").select("first_name,last_name, id")

    render :json => {
        "success" => true,
        "address_book_users" => address_book_users
    }
  end

  def save_member_details
    id = params[:id]
    success = true
    message = ""

    userMemberDetails = params[:userDetails]
    parsedUserMemberDetails = JSON.parse(userMemberDetails);

    #begin
      if(params[:operation] == "add")
        user_to_be_saved = DependentUser.new(new_user_params(parsedUserMemberDetails))
        user_to_be_saved.update(
            {
                :dependent_user_id => current_user.id,
                :email => getRandomNumber
            }
        )
        user_to_be_saved.personal_detail.update({:user_id => user_to_be_saved.id})
        user_to_be_saved.non_indian_specific_detail.update({:user_id => user_to_be_saved.id})

        user_to_be_saved.save
        user_to_be_saved.create_personal_detail(user_personal_details_params(user_to_be_saved.personal_detail))

        user_to_be_saved.create_non_indian_specific_detail(user_to_be_saved.non_indian_specific_detail)

        user_to_be_saved.reload

        puts "User Id : ",user_to_be_saved.id
        puts "user_to_be_saved : ",user_to_be_saved.inspect
        puts 'Personal Details : ',user_to_be_saved.personal_detail.inspect
        puts "Non Indian Details : ",user_to_be_saved.non_indian_specific_detail.inspect


        #new_user = DependentUser.create(new_user_param_values)
        #puts "new_user : ",new_user.inspect

        #personal_detail_param = user_personal_details_params(parsedUserMemberDetails["personal_detail"])
        #puts "User_id : ",personal_detail_param[:user_id]
        #
        #new_user.create_personal_detail(personal_detail_param)
        #
        #new_user.create_non_indian_specific_detail(user_non_indian_specific_details_params(parsedUserMemberDetails["non_indian_specific_detail"]))
        #
        ##puts "user_to_be_saved : ",user_to_be_saved.inspect
        #puts "New User: ",new_user.personal_detail,new_user.non_indian_specific_detail
        #user_to_be_saved.save

        #puts "user_to_be_saved :",user_to_be_saved.inspect

      else
        user_to_be_saved = User.find_by_id(parsedUserMemberDetails["id"])

        permitted_user_details = user_params(parsedUserMemberDetails)
        user_to_be_saved.update(permitted_user_details)

        user_personal_detail_record = user_to_be_saved.personal_detail
        if(user_personal_detail_record)
          user_personal_detail_record.update(user_personal_details_params(parsedUserMemberDetails["personal_detail"]))
        else
          user_to_be_saved.create_personal_detail(user_personal_details_params(parsedUserMemberDetails["personal_detail"]))
        end

        non_indian_specific_detail_record = user_to_be_saved.non_indian_specific_detail
        if(non_indian_specific_detail_record)
          non_indian_specific_detail_record.update(user_non_indian_specific_details_params(parsedUserMemberDetails["non_indian_specific_detail"]))
        else
          user_to_be_saved.create_non_indian_specific_detail(user_non_indian_specific_details_params(parsedUserMemberDetails["non_indian_specific_detail"]))
        end

      end
      message = "Details saved successfully"

    #rescue Exception => e
    #  puts "Exeption ==> ",e,e.exception
    #  success = false
    #  message = "Details wasn't saved successfully. Please try again later"
    #end

    render :json => {
        "success" => success,
        "message" => message
    }

  end

  private
  def user_personal_details_params(personal_detail_hash)
    personal_detail_params = ActionController::Parameters.new(personal_detail_hash)

    personal_detail_params.except(
        :photo_path,:photo_original_url,:photo_medium_url,:photo_thumb_url,
        :photo_small_url,:updated_at,:id,:user
    ).permit(
        :photo,
        :dob,
        :gender,
        :nationality,
        :address,
        :state,
        :city,
        :pincode,
        :country,
        :mobile_number,
        :gender,
        :date_of_birth,
        :user_id
    )
  end

  def user_non_indian_specific_details_params(non_indian_specific_hash)
    non_indian_specific_params = ActionController::Parameters.new(non_indian_specific_hash)

    non_indian_specific_params.except(
        :updated_at,:id
    ).permit(
        :passport_number,
        :passport_city_of_issue,
        :passport_country_of_issue,
        :passport_date_of_issue,
        :passport_valid_till,
        :user_id
    )
  end

  def user_params(user_param_hash)
    user_params = ActionController::Parameters.new(user_param_hash)

    user_params.except(
        :personal_detail,:non_indian_specific_detail,:email,:nationality,
        :dependent_user_id,:full_name,:gender_age
    ).permit(
        :id,
        :first_name,
        :last_name,
    )
  end

  def new_user_params(parsedUserMemberDetails)
    user_params = ActionController::Parameters.new(parsedUserMemberDetails)
    user_params.except(
        :id,
        :full_name,
        :gender_age,
        :email, :nationality,
    ).permit!

    #user_params.except(
    #    :full_name,
    #    :gender_age,
    #    :email, :nationality,
    #).permit(
    #    :id,
    #    :first_name,
    #    :last_name,
    #    :dependent_user_id,
    #    personal_detail:[
    #        :photo,:dob,:gender,:nationality,:address,:state,
    #        :city,:pincode,:country,:mobile_number,:gender,:date_of_birth,
    #        :photo_path,:user_id,:photo_original_url,:photo_medium_url,:photo_thumb_url,
    #        :photo_small_url,:updated_at,user:[]
    #    ],
    #    non_indian_specific_detail:[
    #        :passport_number,
    #        :passport_city_of_issue,
    #        :passport_country_of_issue,
    #        :passport_date_of_issue,
    #        :passport_valid_till,
    #        :user_id,:updated_at,:id
    #    ],
    #)

  end

end
