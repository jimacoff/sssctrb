class User < ActiveRecord::Base

  include ActiveModel::Serializers::JSON

  belongs_to :user_group

  #has_one :indian_national_details,:foreign_key => 'users_id'
  has_one :personal_detail,:foreign_key => 'user_id'
  #has_one :non_indian_specific_detail,:foreign_key => 'user_id'

  #has_many :visas

  accepts_nested_attributes_for :personal_detail
                                #:non_indian_specific_detail

  # Include default devise modules. Others available are:
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :confirmable

  attr_accessor :password
                #:personal_detail,:non_indian_specific_detail

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

  def self.get_user(id)
    user_group_id = self.find(id).user_group_id
    user_record = self.find(id)

    if user_group_id == 2
      user_record = IndianUser.find(id)
    end

    user_record

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

  def user_type
    user_type = nil
    if indian?
      user_type = "INDIAN"
    elsif nri?
      user_type = "NRI"
    elsif others?
      user_type = "Others"
    end

    user_type
  end


  def self.users_and_types
    all.map{|x|
      if(!x.user_type.nil? and x.dependent_user_id == 0)
        puts x.email+":"+x.user_type
      end
    }
  end

  def normal_user?
    role == 1
  end

  def indian?
    user_group_id == 2
  end

  def nri?
    user_group_id == 3 || user_group_id == 4
  end

  def others?
    user_group_id == 5
  end

end
