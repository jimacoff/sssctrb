class CreatePassportDetails < ActiveRecord::Migration
  def self.up
    create_table :passport_details do |t|
      t.string :passport_number
      t.string :passport_city_of_issue
      t.string :passport_country_of_issue
      t.date :passport_date_of_issue
      t.date :passport_valid_till

      t.references :user

      t.timestamps
    end
  end

  def self.down
    drop_table :passport_details
  end

end
