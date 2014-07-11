class CreateRole < ActiveRecord::Migration
  def self.up
    create_table :roles do |t|
      t.string :role_description

      t.timestamps
    end

    Role.create(id:1,role_description:"admin")
    Role.create(id:2,role_description:"general")

  end

  def self.down
    drop_table :roles
  end
end
