require "test_helper"

class StringTest < ActiveSupport::TestCase
  %w[0 f F false FALSE False off OFF Off].each do |falsey_string|
    test("converts #{falsey_string} to false") do
      assert_equal(falsey_string.to_bool, false)
    end
  end

  %w[1 t T true TRUE True on ON On].each do |truthy_string|
    test("converts #{truthy_string} to true") do
      assert_equal(truthy_string.to_bool, true)
    end
  end
end
