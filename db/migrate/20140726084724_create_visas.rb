class CreateVisas < ActiveRecord::Migration
  def self.up
    create_table :visa_details do |t|
      t.string :visa_number
      t.string :visa_city_of_issue
      t.string :visa_country_of_issue
      t.date :visa_date_of_issue
      t.date :visa_valid_till
      t.integer :visa_type
      t.string :visa_other_type

      t.references :user

      t.timestamps
    end
  end

  def self.down
    drop_table :visa_details
  end
end
