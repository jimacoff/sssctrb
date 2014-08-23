class CreateVerificationIdDetails < ActiveRecord::Migration
  def self.up
    create_table :verification_id_details do |t|
      t.string :verification_id_number

      t.references :user
      t.references :verification_id_type

      t.timestamps
    end

  end

  def self.down
    drop_table :verification_id_details
  end

end
