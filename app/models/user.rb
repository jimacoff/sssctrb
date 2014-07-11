class User < ActiveRecord::Base

  include ActiveModel::Serializers::JSON

  #has_one :indian_national_details,:foreign_key => 'users_id'
  has_one :personal_detail,:foreign_key => 'user_id'
  has_one :non_indian_specific_detail,:foreign_key => 'user_id'

  #accepts_nested_attributes_for :indian_national_details

  # Include default devise modules. Others available are:
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :confirmable

  attr_accessor :password

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

  def self.authenticate(username, password)
    user = User.find_for_authentication(:email => username)
    validUser = nil

    if user
      validUser = user.valid_password?(password) ? user : nil
      if(validUser)
        User.success!(validUser)
        #success!(validUser)
      end

    end

    validUser

  end

  def confirmed?
    super
  end

  def password=(password)
    super
  end

  def fullName
    first_name + last_name
  end

  def admin?
    role == 0
  end

  def normal_user?
    role == 1
  end

end
