class AdminUser < ActiveRecord::Base

  self.table_name = 'users'

  include ActiveModel::Serializers::JSON

  mattr_accessor :pepper
  pepper = Devise.pepper

  # The number of times to encrypt password.
  mattr_accessor :stretches
  stretches = Devise.stretches

  def self.create_admin(params_for_admin)
    params_for_admin[:encrypted_password] =
        Devise.bcrypt(self,params_for_admin[:encrypted_password])

    create(params_for_admin)
  end

end
