module ReteamerApi
  module Support
    class OrgChartPeople
      def self.org_chart(selected_date)
        people = Entry.find_for(selected_date, versionable_type: People::Person.name).map(&:versionable)
        fake_root_node = FakeRootNode.new
        people.select { |person| person.supervisor_key.nil? }.map { |person| person.supervisor_key = fake_root_node.key }
        people << fake_root_node
      end

      class FakeRootNode
        attr_reader :image_url

        def key
          "fake_root_node_key"
        end

        def name
          ActsAsTenant.current_tenant.name
        end

        def first_name
          ""
        end

        def last_name
          ""
        end

        def supervisor_key
          nil
        end

        def type
          "account"
        end

        def employee_id
          ""
        end

        def title
          ""
        end
      end
    end
  end
end
