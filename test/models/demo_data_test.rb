require "test_helper"

class DemoDataTest < ActiveSupport::TestCase
  test "It should create demo data in the current account" do
    account = accounts(:company)
    account_owner = users(:one)
    ActsAsTenant.with_tenant(account) do
      assert(People::Person.count < 10)
      DemoData.create_consultancy(account, account_owner)
      assert(People::Person.count > 10)
    end
  end
end
