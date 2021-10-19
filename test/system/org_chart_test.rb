require "application_system_test_case"

class OrgChartTest < ApplicationSystemTestCase
  test "can navigate with date input" do
    user = FactoryBot.create(:user)
    login_as(user)
  end
  # test "can navigate with date navigator"
  # test "can navigate with url"
end
