class PersonalDetail < ActiveRecord::Base
  belongs_to :user

  has_attached_file :photo,
                    :styles =>
                        {
                            :medium => "300x300>",
                            :thumb => "100x100>",
                            :small => "150x150>"
                        },
                    :url  => "/assets/userPhotos/:id/:style/:basename.:extension",
                    :path => ":rails_root/public/assets/userPhotos/:id/:style/:basename.:extension"

  validates_attachment_size :photo, :less_than => 2.megabytes
  validates_attachment_content_type :photo, :content_type => %w(image/jpeg image/jpg image/png)

end
