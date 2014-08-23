class DependentUsers::OverseasUser < DependentUsers::User

  has_one :passport_detail,:foreign_key => "user_id"

  include ActiveModel::Serializers::JSON

end
