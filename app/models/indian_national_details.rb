class IndianNationalDetails < ActiveRecord::Base
  belongs_to :user,:foreign_key => 'users_id'

  attr_accessor :mobile_number
end
