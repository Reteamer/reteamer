# SwaggerClient::ScenarioApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adjust_dates_scenario**](ScenarioApi.md#adjust_dates_scenario) | **POST** /v1/org/{orgId}/scenario/{scenarioId}/dates | Adjust the dates of the changes in a scenario
[**bulk_change_approval**](ScenarioApi.md#bulk_change_approval) | **POST** /v1/org/{orgId}/scenario/{scenarioId}/changes/bulkapproval | Bulk update scenario related changes
[**bulk_create_scenario**](ScenarioApi.md#bulk_create_scenario) | **POST** /v1/org/{orgId}/scenario/bulk/goal/{goalId} | Create a scenario
[**bulk_update_status**](ScenarioApi.md#bulk_update_status) | **POST** /v1/org/{orgId}/scenario/bulk/status | 
[**combine_scenarios**](ScenarioApi.md#combine_scenarios) | **POST** /v1/org/{orgId}/scenario/{scenarioId}/combine | Combine multiple scenarios into another scenario
[**create_scenario**](ScenarioApi.md#create_scenario) | **POST** /v1/org/{orgId}/scenario | Create a scenario
[**create_todos**](ScenarioApi.md#create_todos) | **POST** /v1/org/{orgId}/scenario/{scenarioId}/todos | Request an approval on limited edit scenario
[**delete_scenario**](ScenarioApi.md#delete_scenario) | **DELETE** /v1/org/{orgId}/scenario/{scenarioId} | Delete a scenario
[**find_scenarios**](ScenarioApi.md#find_scenarios) | **GET** /v1/org/{orgId}/scenario | Return all scenarios in the organization paginated
[**get_scenario**](ScenarioApi.md#get_scenario) | **GET** /v1/org/{orgId}/scenario/{scenarioId} | Return a particular scenario by id
[**get_scenario_goals**](ScenarioApi.md#get_scenario_goals) | **GET** /v1/org/{orgId}/scenario/{scenarioId}/goal | Return a scenario&#39;s goals, including progress against goals
[**merge_scenario**](ScenarioApi.md#merge_scenario) | **POST** /v1/org/{orgId}/scenario/{scenarioId}/merge | Merge a scenario into the primary timeline
[**preview**](ScenarioApi.md#preview) | **POST** /v1/org/{orgId}/scenario/preview | Build scenarios by target job ids
[**request_scenario_change_for_approval**](ScenarioApi.md#request_scenario_change_for_approval) | **POST** /v1/org/{orgId}/scenario/{scenarioId}/changes/approval | Request an approval on limited edit scenario
[**update_scenario**](ScenarioApi.md#update_scenario) | **PATCH** /v1/org/{orgId}/scenario/{scenarioId} | Update an existing scenario


# **adjust_dates_scenario**
> Process adjust_dates_scenario(org_id, scenario_id, opts)

Adjust the dates of the changes in a scenario



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ScenarioApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

scenario_id = 'scenario_id_example' # String | Scenario id

opts = { 
  body: SwaggerClient::AdjustScenarioDateRequest.new # AdjustScenarioDateRequest | 
}

begin
  #Adjust the dates of the changes in a scenario
  result = api_instance.adjust_dates_scenario(org_id, scenario_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ScenarioApi->adjust_dates_scenario: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **scenario_id** | **String**| Scenario id | 
 **body** | [**AdjustScenarioDateRequest**](AdjustScenarioDateRequest.md)|  | [optional] 

### Return type

[**Process**](Process.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **bulk_change_approval**
> bulk_change_approval(org_id, scenario_id, opts)

Bulk update scenario related changes



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ScenarioApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

scenario_id = 'scenario_id_example' # String | Scenario id

opts = { 
  body: [SwaggerClient::ApproveChange.new] # Array<ApproveChange> | List of change approvals to update
}

begin
  #Bulk update scenario related changes
  api_instance.bulk_change_approval(org_id, scenario_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ScenarioApi->bulk_change_approval: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **scenario_id** | **String**| Scenario id | 
 **body** | [**Array&lt;ApproveChange&gt;**](ApproveChange.md)| List of change approvals to update | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **bulk_create_scenario**
> Process bulk_create_scenario(org_id, opts)

Create a scenario



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ScenarioApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  body: SwaggerClient::BulkCreateScenarioRequest.new # BulkCreateScenarioRequest | 
}

begin
  #Create a scenario
  result = api_instance.bulk_create_scenario(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ScenarioApi->bulk_create_scenario: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **body** | [**BulkCreateScenarioRequest**](BulkCreateScenarioRequest.md)|  | [optional] 

### Return type

[**Process**](Process.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **bulk_update_status**
> bulk_update_status(org_id, opts)



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ScenarioApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  body: [SwaggerClient::PartialScenario.new] # Array<PartialScenario> | List of change approvals to update
}

begin
  api_instance.bulk_update_status(org_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ScenarioApi->bulk_update_status: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **body** | [**Array&lt;PartialScenario&gt;**](PartialScenario.md)| List of change approvals to update | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **combine_scenarios**
> Process combine_scenarios(org_id, scenario_id, opts)

Combine multiple scenarios into another scenario



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ScenarioApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

scenario_id = 'scenario_id_example' # String | Scenario id to combine the other scenarios into

opts = { 
  body: SwaggerClient::CombineScenarioRequest.new # CombineScenarioRequest | 
}

begin
  #Combine multiple scenarios into another scenario
  result = api_instance.combine_scenarios(org_id, scenario_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ScenarioApi->combine_scenarios: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **scenario_id** | **String**| Scenario id to combine the other scenarios into | 
 **body** | [**CombineScenarioRequest**](CombineScenarioRequest.md)|  | [optional] 

### Return type

[**Process**](Process.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **create_scenario**
> Scenario create_scenario(org_id, opts)

Create a scenario



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ScenarioApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  silent: true, # BOOLEAN | Suppress notification emails
  body: SwaggerClient::CreateScenario.new, # CreateScenario | Scenario data to create
  skip_change_creation: true # BOOLEAN | Skip over change creation for COMP/PROMOTION scenarios
}

begin
  #Create a scenario
  result = api_instance.create_scenario(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ScenarioApi->create_scenario: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **silent** | **BOOLEAN**| Suppress notification emails | [optional] 
 **body** | [**CreateScenario**](CreateScenario.md)| Scenario data to create | [optional] 
 **skip_change_creation** | **BOOLEAN**| Skip over change creation for COMP/PROMOTION scenarios | [optional] 

### Return type

[**Scenario**](Scenario.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **create_todos**
> create_todos(org_id, scenario_id, opts)

Request an approval on limited edit scenario



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ScenarioApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

scenario_id = 'scenario_id_example' # String | Scenario id

opts = { 
  scenario_role: 'scenario_role_example' # String | Scenario Role
}

begin
  #Request an approval on limited edit scenario
  api_instance.create_todos(org_id, scenario_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ScenarioApi->create_todos: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **scenario_id** | **String**| Scenario id | 
 **scenario_role** | **String**| Scenario Role | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **delete_scenario**
> delete_scenario(org_id, scenario_id)

Delete a scenario



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ScenarioApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

scenario_id = 'scenario_id_example' # String | Scenario id


begin
  #Delete a scenario
  api_instance.delete_scenario(org_id, scenario_id)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ScenarioApi->delete_scenario: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **scenario_id** | **String**| Scenario id | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **find_scenarios**
> ResultsScenario find_scenarios(org_id, opts)

Return all scenarios in the organization paginated



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ScenarioApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  from: 'from_example', # String | Scenario id to start paginating from
  goal_id: 'goal_id_example', # String | Goal Id to filter by
  status: 'status_example', # String | Scenario status to filter by
  limit: 56 # Integer | Number of results to return
}

begin
  #Return all scenarios in the organization paginated
  result = api_instance.find_scenarios(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ScenarioApi->find_scenarios: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **from** | **String**| Scenario id to start paginating from | [optional] 
 **goal_id** | **String**| Goal Id to filter by | [optional] 
 **status** | **String**| Scenario status to filter by | [optional] 
 **limit** | **Integer**| Number of results to return | [optional] 

### Return type

[**ResultsScenario**](ResultsScenario.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_scenario**
> Scenario get_scenario(org_id, scenario_id)

Return a particular scenario by id



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ScenarioApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

scenario_id = 'scenario_id_example' # String | Scenario id


begin
  #Return a particular scenario by id
  result = api_instance.get_scenario(org_id, scenario_id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ScenarioApi->get_scenario: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **scenario_id** | **String**| Scenario id | 

### Return type

[**Scenario**](Scenario.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_scenario_goals**
> ResultsGoal get_scenario_goals(org_id, scenario_id)

Return a scenario's goals, including progress against goals



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ScenarioApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

scenario_id = 'scenario_id_example' # String | Scenario id


begin
  #Return a scenario's goals, including progress against goals
  result = api_instance.get_scenario_goals(org_id, scenario_id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ScenarioApi->get_scenario_goals: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **scenario_id** | **String**| Scenario id | 

### Return type

[**ResultsGoal**](ResultsGoal.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **merge_scenario**
> Process merge_scenario(org_id, scenario_id, opts)

Merge a scenario into the primary timeline



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ScenarioApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

scenario_id = 'scenario_id_example' # String | Scenario id to merge

opts = { 
  skip_errors: true # BOOLEAN | If passed, will skip any changes that fail validation
}

begin
  #Merge a scenario into the primary timeline
  result = api_instance.merge_scenario(org_id, scenario_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ScenarioApi->merge_scenario: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **scenario_id** | **String**| Scenario id to merge | 
 **skip_errors** | **BOOLEAN**| If passed, will skip any changes that fail validation | [optional] 

### Return type

[**Process**](Process.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **preview**
> Array&lt;CreateScenarioPreview&gt; preview(org_id, opts)

Build scenarios by target job ids



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ScenarioApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  body: SwaggerClient::BuildScenariosByJobIdsRequest.new # BuildScenariosByJobIdsRequest | 
}

begin
  #Build scenarios by target job ids
  result = api_instance.preview(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ScenarioApi->preview: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **body** | [**BuildScenariosByJobIdsRequest**](BuildScenariosByJobIdsRequest.md)|  | [optional] 

### Return type

[**Array&lt;CreateScenarioPreview&gt;**](CreateScenarioPreview.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **request_scenario_change_for_approval**
> request_scenario_change_for_approval(org_id, scenario_id, opts)

Request an approval on limited edit scenario



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ScenarioApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

scenario_id = 'scenario_id_example' # String | Scenario id

opts = { 
  message: 'message_example', # String | Message
  body: [SwaggerClient::Array<String>.new] # Array<String> | The list of changes that we want to request approval for
}

begin
  #Request an approval on limited edit scenario
  api_instance.request_scenario_change_for_approval(org_id, scenario_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ScenarioApi->request_scenario_change_for_approval: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **scenario_id** | **String**| Scenario id | 
 **message** | **String**| Message | [optional] 
 **body** | **Array&lt;String&gt;**| The list of changes that we want to request approval for | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **update_scenario**
> update_scenario(org_id, scenario_id, opts)

Update an existing scenario



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ScenarioApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

scenario_id = 'scenario_id_example' # String | Scenario id

opts = { 
  silent: true, # BOOLEAN | Suppress notification emails
  body: SwaggerClient::UpdateScenario.new # UpdateScenario | Scenario data to update
}

begin
  #Update an existing scenario
  api_instance.update_scenario(org_id, scenario_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ScenarioApi->update_scenario: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **scenario_id** | **String**| Scenario id | 
 **silent** | **BOOLEAN**| Suppress notification emails | [optional] 
 **body** | [**UpdateScenario**](UpdateScenario.md)| Scenario data to update | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



