class CreatePersonalDetails < ActiveRecord::Migration
  def self.up
    create_table :personal_details do |t|
      t.text :address
      t.string :state
      t.string :city
      t.string :pincode
      t.string :country

      t.string :mobile_number
      t.boolean :gender
      t.date :date_of_birth

      t.attachment :photo

      t.string :photo_original_url
      t.string :photo_medium_url
      t.string :photo_thumb_url
      t.string :photo_small_url

      t.references :user

      t.timestamps
    end
  end

  def self.down
    drop_table :personal_details
  end
end
