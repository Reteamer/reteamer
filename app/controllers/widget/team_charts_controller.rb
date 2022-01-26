module Widget
  module ChartHop
    class TeamChartsController < ApplicationController
      def show
        api_instance = SwaggerClient::ActionApi.new

        org_id = 'org_id_example' # String | Org identifier (either id or slug)

        opts = {
          body: SwaggerClient::CreateAction.new # CreateAction | Action data to create
        }

        begin
          #Create an action
          result = api_instance.create_action(org_id, opts)
          p result
        rescue SwaggerClient::ApiError => e
          puts "Exception when calling ActionApi->create_action: #{e}"
        end

      end
    end
  end
end
