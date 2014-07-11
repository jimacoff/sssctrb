class CreateIndianSpecificDetails < ActiveRecord::Migration
  def change
    create_table :indian_specific_details do |t|
      t.string :verification_id_proof
      t.string :verification_id_number

      t.references :user

      t.timestamps
    end
  end
end
