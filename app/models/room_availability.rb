class RoomAvailability < ActiveRecord::Base
  self.partial_writes = false

  def getRoomAbbr
    RoomType.find(self.room_type_id).abbr
  end

end
