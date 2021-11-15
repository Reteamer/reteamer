require "application_system_test_case"

class EffectiveDateFieldsTest < ApplicationSystemTestCase
  include ActionView::Helpers::TranslationHelper
  test "The component is initialized correctly" do
    AccountLeader.visit_effective_date_fields_style_guide

    within("effective-date-fields") do
      assert(all("label")[0].has_text?(l(Date.today, format: :people_date)))
      assert(all("label")[1].has_text?(l(Date.today, format: :people_date)))
      assert(all("label")[2].has_text?(l(Date.today.next_week(:monday), format: :people_date)))
      assert_equal(find("#other_effective_date").value, Date.today.iso8601)
    end

    assert_equal(find("#selected_date_preview").text, Date.today.iso8601)
  end
end
