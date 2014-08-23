class CreateUserGroups < ActiveRecord::Migration
  def self.up
    create_table :user_groups do |t|
      t.string :group_name
      t.text :group_description
      t.references :role, :null => false, :default => 2

      t.timestamps
    end

    UserGroup.create([
        {:id=>1,:group_name => "Admin",:role_id => 1},
        {:id=>2,:group_name => "Indian",:group_description => "Indian Devotees"},
        {:id=>3,:group_name => "NRI",:group_description => "Indians settled Abroad"},
        {:id=>4,:group_name => "Nepal/Bhutan",:group_description => "Nepalese and Bhutanese"},
        {:id=>5,:group_name => "Others",:group_description => "Overseas Devotees"}
    ])

  end

  def self.down
    drop_table :user_groups
  end

end
