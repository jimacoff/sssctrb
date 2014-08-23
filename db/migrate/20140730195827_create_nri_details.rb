class CreateNriDetails < ActiveRecord::Migration
  def self.up
    create_table :nri_details do |t|
      t.string :verification_id_number
      t.date :date_of_entry_into_india

      t.references :user
      t.references :verification_id_type

      t.timestamps
    end

  end

  def self.down
    drop_table :nri_details
  end

end