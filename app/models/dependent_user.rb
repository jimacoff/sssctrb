class DependentUser < ActiveRecord::Base

  self.table_name = 'users'

  include ActiveModel::Serializers::JSON

  #has_one :indian_national_details,:foreign_key => 'users_id'
  has_one :personal_detail,:foreign_key => 'user_id'
  has_one :non_indian_specific_detail,:foreign_key => 'user_id'

  accepts_nested_attributes_for :personal_detail,
                                :non_indian_specific_detail

  # Include default devise modules. Others available are:
  # :lockable, :timeoutable and :omniauthable
  #devise :database_authenticatable, :registerable,
  #       :recoverable, :rememberable, :trackable, :validatable,
  #       :confirmable

  attr_accessor :personal_detail,:non_indian_specific_detail

                #:indianNationalData

  #has_attached_file :photo,
  #                  :styles =>
  #                      {
  #                          :medium => "300x300>",
  #                          :thumb => "100x100>",
  #                          :small => "150x150>"
  #                      },
  #                  :url  => "/assets/userPhotos/:id/:style/:basename.:extension",
  #                  :path => ":rails_root/public/assets/userPhotos/:id/:style/:basename.:extension"
  #
  #validates_attachment_size :photo, :less_than => 2.megabytes
  #validates_attachment_content_type :photo, :content_type => %w(image/jpeg image/jpg image/png)

  def fullName
    first_name + last_name
  end

end
