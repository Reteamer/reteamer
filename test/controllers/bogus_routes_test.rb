require "test_helper"

class ApiBaseControllerTest < ActionDispatch::IntegrationTest
  test "do not raise a 500 if a WordPress bot is scanning us at the root level" do
    get "/wp-includes/wlwmanifest.xml"
    assert_response :missing
  end

  test "do not raise a 500 if a WordPress bot is scanning us at other levels" do
    get "/blog/wp-includes/wlwmanifest.xml"
    assert_response :missing
  end
end
