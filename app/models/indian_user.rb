class IndianUser < User

  has_one :verification_id_detail,:foreign_key => "user_id"

  include ActiveModel::Serializers::JSON

end
