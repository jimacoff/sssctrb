class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  respond_to :html, :json

  layout :layout_by_resource

  protected

  def layout_by_resource
    if devise_controller?
      "sssctBookingLayout1"
    elsif is_a?(AddressBookController)
      "sssctBookingLayout1"
    else
    "application"
    end
  end

  def getRandomNumber
    rand(1000000000)
  end

  def sign_in_and_redirect(resource_or_scope,resource)
    if resource_or_scope == :user
      redirect_to home_index_path
    else
      super
    end
  end

  # Set the locale from parameters
  def set_locale
    I18n.locale = params[:locale] unless params[:locale].blank?
  end

  # Make current_user available in templates as a helper
  helper_method :current_user

  # Filter method to enforce a login requirement
  # Apply as a before_filter on any controller you want to protect
  def authenticate
    logged_in? || access_denied
  end

  # Predicate method to test for a logged in user
  def logged_in?
    #current_user.is_a? User
    user_signed_in?
  end

  # Make logged_in? available in templates as a helper
  helper_method :logged_in?
  def access_denied
    #redirect_to login_signin_path

    store_location

    redirect_to new_user_session_path
    #,
    #            :notice => t('application.access_denied') and return false
  end

  def store_location
    # store last url - this is needed for post-login redirect to whatever the user last visited.
    if (request.fullpath != "/users/sign_in" &&
        request.fullpath != "/users/sign_up" &&
        request.fullpath != "/users/password" &&
        request.fullpath != "/users/sign_out" &&
        !request.xhr?) # don't store ajax calls
      session["user_return_to"] = request.fullpath
    end

    logger.info("SSSSSSSSSSSSSSSSSSS : #{session["user_return_to"]} ==> #{session["user_return_to"].class}")

  end

end
