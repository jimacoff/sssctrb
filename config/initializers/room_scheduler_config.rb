module RoomSchedulerConfig
  class << self

    # All Site wide configurations needs to be declared as constants
    DEFAULT_NUMBER_OF_DAYS = 0

    # User can book from (days)
    USER_BOOKING_TIME_FROM = 2

    # User can book till (month)
    USER_BOOKING_TIME_TILL = 1

    NO_OF_TICKETS_USER_CAN_BOOK = 2


    # Dynamic methods to get these constants. Getter methods will be created in lowercases
    # Ex: DEFAULT_NUMBER_OF_DAYS ==> RoomSchedulerConfig.default_number_of_days
    all_constants = constants(true)
    all_constants.each do |each_constant|
      each_constant_sym = each_constant.to_s.downcase.to_sym
      define_method(each_constant_sym) do
        eval(each_constant.to_s)
      end
    end

  end

end