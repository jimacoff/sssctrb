require 'json'

class Admin::AdminController < ApplicationController
  layout :resolve_layout
  before_filter :authenticate  #, :except => [:sample]

  def index

  end

  private

  def resolve_layout
    case action_name
      when "index"
        "sssctBookingLayout1"
      else
        "application"
    end
  end

end
