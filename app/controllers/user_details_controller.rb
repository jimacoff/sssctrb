class UserDetailsController < ApplicationController

  def get_user_details
    main_user_id =params[:id]
    getMainUserGroupId = User.find(main_user_id).user_group_id
    users = nil
    #userjson = users.to_json(:include => [:personal_detail,:non_indian_specific_detail])
    ActiveRecord::Base.include_root_in_json = false
    includeTables = [:personal_detail]


    if getMainUserGroupId == 2
      users = IndianUser.where("id = ? or dependent_user_id = ?", main_user_id, main_user_id)
      includeTables.push(:verification_id_detail)
    elsif getMainUserGroupId == 3
      users = NRIUser.where("id = ? or dependent_user_id = ?", main_user_id, main_user_id)
      includeTables.push(:nri_detail)
    elsif getMainUserGroupId == 4
      users = NepalBhutanUser.where("id = ? or dependent_user_id = ?", main_user_id, main_user_id)
      includeTables.push(:nri_detail)
    elsif getMainUserGroupId == 5
      users = OverseasUser.where("id = ? or dependent_user_id = ?", main_user_id, main_user_id)
      includeTables.push(:passport_detail)
    end

    json_user_data = users.to_json(:include => includeTables)

    render :json => json_user_data

    #render :json => {
    #    "success" => true,
    #    "user_details" => users.to_json(:include => [:personal_detail,:non_indian_specific_detail])
    #}

    #[
    #    {
    #        "user" => user,
    #        "personal_detail" => user.personal_detail,
    #        "non_indian_specific_detail" => user.non_indian_specific_detail,
    #        #"indianSpecific_detail" => user.personal_detail
    #    }
    #]

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

    non_indian_specific_details_params = JSON.parse(params[:non_indian_specific_detail])

    if non_indian_specific_details
      save_op =
          non_indian_specific_details.update(user_non_indian_specific_details_params(non_indian_specific_details_params))
    else
      save_op =
          create_non_indian_specific_details_for_user(user.id,user_non_indian_specific_details_params(non_indian_specific_details_params))
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

    personal_details = JSON.parse(params[:personal_detail])

    puts personal_details

    user_personal_details = user.personal_detail
    save_op = false

    if user_personal_details
      permitted_params = user_personal_details_params(personal_details)
      puts "permitted_params :",permitted_params
      save_op =
          user_personal_details.update(permitted_params)
    else
      puts "New user_personal_details record"
      save_op =
          create_personal_details_for_user(user.id,user_personal_details_params(personal_details))
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

  def create_personal_details_for_user(user_id,personal_details_params)
    new_user_personal_detail = PersonalDetail.new(personal_details_params)
    new_user_personal_detail.user_id=user_id
    new_user_personal_detail.save

    new_user_personal_detail
  end

  def create_non_indian_specific_details_for_user(user_id,non_indian_specific_details_params)
    new_non_indian_specific_detail =
        NonIndianSpecificDetail.new(non_indian_specific_details_params)
    new_non_indian_specific_detail.user_id=user_id
    new_non_indian_specific_detail.save

    new_non_indian_specific_detail
  end

  private

  def user_personal_details_params(personal_details)
    personal_detail_params = ActionController::Parameters.new(personal_details)

    personal_detail_params.except(
        :photo_path,:user_id,:photo_original_url,:photo_medium_url,:photo_thumb_url,
        :photo_small_url,:updated_at,:id
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
        :date_of_birth
    )
  end

  def user_non_indian_specific_details_params(non_indian_specific_detail)
    non_indian_specific_detail_params = ActionController::Parameters.new(non_indian_specific_detail)

    non_indian_specific_detail_params.except(
        :user_id,:updated_at,:id
    ).permit(
        :passport_number,
        :passport_city_of_issue,
        :passport_country_of_issue,
        :passport_date_of_issue,
        :passport_valid_till,
    )
  end


end
