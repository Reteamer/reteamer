module ReteamerApi
  class OrgChartsController < ApplicationController
    before_action :authenticate_user!

    def show
      selected_date = Date.parse(params.fetch(:effective_date, Date.today.iso8601))
      @people = org_chart(selected_date, params[:plan_name])
      @histogram = Entry.histogram.where(versionable_type: People::Person.name)
      @connections = Entry.find_for(selected_date).where(versionable_type: Connection.name).map(&:versionable)
    end

    private

    def org_chart(selected_date, plan_name = nil)
      plan_ids = Reteamer::Plan.where(name: [Reteamer::Plan::MAIN_PLAN_NAME, plan_name].compact).pluck(:id)
      people = Entry.find_for(selected_date).where(versionable_type: People::Person.name, plan_id: plan_ids).select(&:active).map(&:versionable)
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
