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

end
