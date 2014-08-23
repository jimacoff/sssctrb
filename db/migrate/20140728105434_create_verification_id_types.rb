class CreateVerificationIdTypes < ActiveRecord::Migration
  def self.up
    create_table :verification_id_types do |t|
      t.string :verification_id_type_name
      t.string :verification_id_type_description

      #t.references :user

      t.timestamps
    end

    ## Default Verification Types
    VerificationIdType.create([
      {:id=>1,:verification_id_type_name=>"PAN",:verification_id_type_description=>"PAN Card"},
      {:id=>2,:verification_id_type_name=>"Driving License",:verification_id_type_description=>"Driving License"},
      {:id=>3,:verification_id_type_name=>"Voter's Id",:verification_id_type_description=>"Voter's Id"},
      {:id=>4,:verification_id_type_name=>"Passport",:verification_id_type_description=>"Passport"}
    ])

  end

  def self.down
    drop_table :verification_id_types
  end

end
