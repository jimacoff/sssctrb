module InitializeUser
  extend ActiveSupport::Concern

  included do
    attr_reader :user

    before_filter :authenticate   #, :except => [:sample]
    before_filter :initialize_user
  end

  def initialize_user
    puts "Current user : CCCCCCCCCCCCCCCCCCCCCCCCCC #{current_user.inspect}"

    user_id = current_user.id
    db_user = User.get_user(user_id)

    user_can = Custom::UserCan.new

    user_can.user = db_user

    @user = user_can
  end

end