if Rails.env.development? || Rails.env.test?
  ENV["ALLOW_SIGN_UP"] = "true"
  ENV["CAN_RESET_DATA"] = "true"
end

Rails.configuration.allow_sign_up = ENV.fetch("ALLOW_SIGN_UP", "true").to_bool
Rails.configuration.can_reset_data = ENV.fetch("CAN_RESET_DATA", "false").to_bool
