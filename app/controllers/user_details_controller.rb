class UserDetailsController < ApplicationController

  def get_user_details
    user = User.find_by_id(params[:id])

    render :json => {
        "success" => true,
        "user_details" => [
            {
                "user" => user,
                "personal_detail" => user.personal_detail,
                "non_indian_specific_detail" => user.non_indian_specific_detail,
                #"indianSpecific_detail" => user.personal_detail
            }
        ]
    }
  end

  def get_personal_details
    user = User.find_by_id(params[:id])

    render :json => {
        "success" => true,
        "user_specific_detail" => user.personal_detail
    }

  end

  def get_non_indian_specific_details
    user = User.find_by_id(params[:id])

    render :json => {
        "success" => true,
        "user_specific_detail" => user.non_indian_specific_detail
    }

  end

  def save_non_indian_specific_details
    user = User.find_by_id(params[:id])
    non_indian_specific_details = user.non_indian_specific_detail
    save_op = false

    if non_indian_specific_details
      save_op =
          non_indian_specific_details.update(user_non_indian_specific_details_params)
    else
      save_op =
          create_non_indian_specific_details_for_user(user.id,user_non_indian_specific_details_params)
    end

    user.reload

    if(save_op)
      save_op_params = {
          :success=>true,
          :message => "Non Indian Specific Details of #{user.first_name.capitalize!} successfully modified."
      }
    else
      save_op_params = {
          :success=>false,
          :message => "Non Indian Specific Details of #{user.first_name.capitalize!} wasn't successfully modified. Please bring this to notice of the Administrator."
      }
    end

    render :json => save_op_params
  end

  def save_personal_details
    user = User.find_by_id(params[:id])
    user_personal_details = user.personal_detail
    save_op = false

    if user_personal_details
      save_op =
          user_personal_details.update(user_personal_details_params)
    else
      save_op =
          create_personal_details_for_user(user.id,user_personal_details_params)
    end

    #Update the Photo URLs
    user.reload
    user.personal_detail.update({
      :photo_original_url => user.personal_detail.photo.url,
      :photo_medium_url => user.personal_detail.photo.url(:medium),
      :photo_thumb_url => user.personal_detail.photo.url(:thumb),
      :photo_small_url => user.personal_detail.photo.url(:small)
    })

    if(save_op)
      save_op_params = {
          :success=>true,
          :message => "Personal Details of #{user.first_name.capitalize!} successfully modified."
      }
    else
      save_op_params = {
          :success=>false,
          :message => "Personal Details of #{user.first_name.capitalize!} wasn't successfully modified. Please bring this to notice of the Administrator."
      }
    end

    render :json => save_op_params
  end

  private
  def create_personal_details_for_user(user_id,personal_details_params)
    new_user_personal_detail = PersonalDetail.new(personal_details_params)
    new_user_personal_detail.user_id=user_id
    new_user_personal_detail.save
  end

  def user_personal_details_params
    params.require(:personal_detail).permit(
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
        :date_of_birth
    )
  end

  def create_non_indian_specific_details_for_user(user_id,non_indian_specific_details_params)
    new_non_indian_specific_detail =
        NonIndianSpecificDetail.new(non_indian_specific_details_params)
    new_non_indian_specific_detail.user_id=user_id
    new_non_indian_specific_detail.save
  end

  def user_non_indian_specific_details_params
    params.require(:non_indian_specific_detail).permit(
        :passport_number,
        :passport_city_of_issue,
        :passport_country_of_issue,
        :passport_date_of_issue,
        :passport_valid_till,
    )
  end


end
