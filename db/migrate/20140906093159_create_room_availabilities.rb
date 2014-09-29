class CreateRoomAvailabilities < ActiveRecord::Migration

  def self.up
    create_table :room_availabilities do |t|
      t.string :year
      t.string :month
      t.column :schedule, :json

      t.references :room_type

      t.timestamps
    end
  end

  def self.down
    drop_table :room_availabilities
  end

end
