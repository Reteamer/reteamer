if Rails.env.development? || Rails.env.text?
  ENV["ALLOW_SIGN_UP"] = "true"
end
