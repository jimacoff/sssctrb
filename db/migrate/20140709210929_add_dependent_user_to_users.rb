class AddDependentUserToUsers < ActiveRecord::Migration
  def self.up
    add_column :users, :dependent_user_id, :integer, default: 0
  end

  def self.down
    remove_column :users, :dependent_user_id
  end
end
