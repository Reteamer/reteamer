require "test_helper"
module ReteamerApi
  module Support
    class PersonEditorTest < ActiveSupport::TestCase
      test "intention returns the attributes that changed from the previous entry" do
        old_person = FactoryBot.create(:person, title: "Test Specialist")
        new_person = FactoryBot.create(:person, title: "Senior Test Specialist")
        old_entry = FactoryBot.create(:entry, effective_at: 1.day.ago, versionable: old_person)
        new_entry = FactoryBot.create(:entry, effective_at: Time.now, key: old_entry.key, versionable: new_person)
        intentions = PersonEditor.new(new_entry).intentions
        assert_equal(1, intentions.count)
        assert_equal("title", intentions.first.attribute_name)
        assert_equal("Test Specialist", intentions.first.old_value)
        assert_equal("Senior Test Specialist", intentions.first.new_value)
      end

      test "applies the change to future entries" do
        key = "some-test-key"
        the_future = 1.day.from_now.to_date

        old_person = FactoryBot.create(:person, title: "Test Specialist")
        new_person = FactoryBot.create(:person, title: "Senior Test Specialist")
        future_person = FactoryBot.create(:person, title: "Test Specialist")
        _old_entry = FactoryBot.create(:entry, effective_at: 1.day.ago, key: key, versionable: old_person)
        new_entry = FactoryBot.create(:entry, effective_at: Time.now, key: key, versionable: new_person)
        _future_entry = FactoryBot.create(:entry, effective_at: the_future, key: key, versionable: future_person)

        PersonEditor.new(new_entry).apply_intentions_going_forward

        updated_future_entry = Entry.find_for(the_future, key: key).first
        assert_equal("Senior Test Specialist", updated_future_entry.versionable.title)
      end

      test "applies the change to future entries when there is no past entry" do
        key = "some-test-key"
        the_future = 1.day.from_now.to_date

        new_person = FactoryBot.create(:person, title: "Senior Test Specialist")
        future_person = FactoryBot.create(:person, title: "Test Specialist")
        new_entry = FactoryBot.create(:entry, effective_at: Time.now, key: key, versionable: new_person)
        _future_entry = FactoryBot.create(:entry, effective_at: the_future, key: key, versionable: future_person)

        PersonEditor.new(new_entry).apply_intentions_going_forward

        updated_future_entry = Entry.find_for(the_future, key: key).first
        assert_equal("Senior Test Specialist", updated_future_entry.versionable.title)
      end

    end
  end
end
