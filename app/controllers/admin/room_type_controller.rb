class Admin::RoomTypeController < ApplicationController
  def index
    render :json => {
        "all_room_types" => RoomType.all
    }
  end
end
