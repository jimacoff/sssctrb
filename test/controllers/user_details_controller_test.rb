require 'test_helper'

class UserDetailsControllerTest < ActionController::TestCase
  test "should get save_personal_details" do
    get :save_personal_details
    assert_response :success
  end

end
