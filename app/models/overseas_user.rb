class OverseasUser < User

  has_one :passport_detail,:foreign_key => "user_id"
  has_many :visas

  include ActiveModel::Serializers::JSON

end
