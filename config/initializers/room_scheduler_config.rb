module RoomSchedulerConfig
  class << self

    # All Site wide configurations needs to be declared as constants
    DEFAULT_NUMBER_OF_DAYS = 0

    # Dynamic methods to get these constants. Getter methods will be created in lowercases
    # Ex: DEFAULT_NUMBER_OF_DAYS ==> default_number_of_days
    all_constants = constants(true)
    all_constants.each do |each_constant|
      each_constant_sym = each_constant.to_s.downcase.to_sym
      define_method(each_constant_sym) do
        eval(each_constant.to_s)
      end
    end

  end

end