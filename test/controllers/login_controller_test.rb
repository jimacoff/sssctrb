require 'test_helper'

class LoginControllerTest < ActionController::TestCase
  test "should get signin" do
    get :signin
    assert_response :success
  end

  test "should get signout" do
    get :signout
    assert_response :success
  end

  test "should get remember_me" do
    get :remember_me
    assert_response :success
  end

end
