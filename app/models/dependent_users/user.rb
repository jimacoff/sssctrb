class DependentUsers::User < ActiveRecord::Base

  self.table_name = 'users'

  include ActiveModel::Serializers::JSON

  has_one :personal_detail,:foreign_key => 'user_id'
  #
  #accepts_nested_attributes_for :personal_detail,
  #                              :non_indian_specific_detail
  #
  attr_accessor :personal_detail

  def fullName
    first_name + last_name
  end

end
