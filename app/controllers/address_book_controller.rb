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
    parsedUserMemberDetails = JSON.parse(userMemberDetails)

    user_group_id = parsedUserMemberDetails["user_group_id"]

    #begin
      if params[:operation] == "add"
        user_to_be_saved = nil

        if user_group_id == 2
          user_to_be_saved =
              DependentUsers::IndianUser.new(
                  new_user_params(parsedUserMemberDetails)
              )

        elsif user_group_id == 3 || user_group_id == 4
          user_to_be_saved =
              DependentUsers::NRIUser.new(
                  new_user_params(parsedUserMemberDetails)
              )

        elsif user_group_id == 5
          user_to_be_saved =
              DependentUsers::OverseasUser.new(
                  new_user_params(parsedUserMemberDetails)
              )

        end

        user_to_be_saved.update(
            {
                :dependent_user_id => current_user.id,
                :email => getRandomNumber,
                :user_group_id => current_user.user_group_id
            }
        )
        user_to_be_saved.save
        user_to_be_saved.create_personal_detail(user_personal_details_params(user_to_be_saved.personal_detail))
        #user_to_be_saved.personal_detail.update({:user_id => user_to_be_saved.id})

        if user_group_id == 2

          puts "verification_id_detail : ",parsedUserMemberDetails["verification_id_detail"]

          user_to_be_saved.create_verification_id_detail(
              user_verification_proof_params(
                  parsedUserMemberDetails["verification_id_detail"]
              )
          )
        elsif user_group_id == 3 || user_group_id == 4
          puts "nri_detail : ",parsedUserMemberDetails["nri_detail"]

          user_to_be_saved.create_nri_detail(
              user_verification_proof_params(
                  parsedUserMemberDetails["nri_detail"]
              )
          )
        elsif user_group_id == 5
          puts "nri_detail : ",parsedUserMemberDetails["passport_detail"]
          user_to_be_saved.create_passport_detail(
              user_passport_details_params(
                  parsedUserMemberDetails["passport_detail"]
              )
              #user_to_be_saved.passport_detail
          )
        end

      else

        user_to_be_saved = User.get_user(parsedUserMemberDetails["id"])
        permitted_user_details = user_params(parsedUserMemberDetails)
        user_to_be_saved.update(permitted_user_details)

        user_personal_detail_record = user_to_be_saved.personal_detail
        if(user_personal_detail_record)
          user_personal_detail_record.update(user_personal_details_params(parsedUserMemberDetails["personal_detail"]))
        else
          user_to_be_saved.create_personal_detail(user_personal_details_params(parsedUserMemberDetails["personal_detail"]))
        end

        # Nationality Specific User Details
        user_to_be_saved = User.find_by_id(parsedUserMemberDetails["id"])
        if user_to_be_saved.indian?

          ## Convert User class to Indian class
          indianUser = user_to_be_saved.becomes(IndianUser)

          verification_proof_record = indianUser.verification_id_detail
          if(verification_proof_record)
            verification_proof_record.
                update(
                  user_verification_proof_params(
                    parsedUserMemberDetails["verification_id_detail"]
                  )
                )
          else
            indianUser.create_verification_id_detail(
              user_verification_proof_params(
                  parsedUserMemberDetails["verification_id_detail"]
              )
            )
          end
        elsif user_to_be_saved.nri?
          ## Convert User class to Indian class
          nriUser = user_to_be_saved.becomes(NRIUser)

          nri_detail_record = nriUser.nri_detail
          if(nri_detail_record)
            nri_detail_record.
                update(
                user_verification_proof_params(
                    parsedUserMemberDetails["nri_detail"]
                )
            )
          else
            nriUser.create_nri_detail(
                user_verification_proof_params(
                    parsedUserMemberDetails["nri_detail"]
                )
            )
          end

        elsif user_to_be_saved.others?
          ## Save Oveseas Devotees Information
          overseasUser = user_to_be_saved.becomes(OverseasUser)

          user_passport_detail = overseasUser.passport_detail
          if(user_passport_detail)
            user_passport_detail.update(
                user_passport_details_params(
                    parsedUserMemberDetails["passport_detail"]
                )
            )
          else
            overseasUser.create_passport_detail(
                user_passport_details_params(
                    parsedUserMemberDetails["passport_detail"]
                )
            )
          end

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

  def user_passport_details_params(passport_details_hash)
    passport_details_params =
      ActionController::Parameters.new(passport_details_hash)

    passport_details_params.except(
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

  def user_verification_proof_params(verification_proof_hash)
    verification_proof_params =
        ActionController::Parameters.new(verification_proof_hash)

    verification_proof_params.except(
        :user_id,:id
    ).permit(
        :verification_id_number,
        :verification_id_type_id,
        :date_of_entry_into_india
    )
  end

  def user_params(user_param_hash)
    user_params = ActionController::Parameters.new(user_param_hash)

    user_params.except(
        :personal_detail,:non_indian_specific_detail,:email,:nationality,
        :dependent_user_id,:full_name,:gender_age,:user_group_id,:visa_details,
        :verification_id_details
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
        :verification_id_detail,
        :passport_detail,
        :nri_detail
    ).permit!
  end

end
