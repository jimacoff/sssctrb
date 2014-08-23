class UserGroup < ActiveRecord::Base
  belongs_to :role
  has_many :users

  scope :all_general_user_categories, -> { where(:role_id => 2) }
  scope :all_admin_categories, -> { where(:role_id => 1) }

end
