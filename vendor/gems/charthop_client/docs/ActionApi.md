# SwaggerClient::ActionApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_action**](ActionApi.md#create_action) | **POST** /v1/org/{orgId}/action | Create an action
[**delete_action**](ActionApi.md#delete_action) | **DELETE** /v1/org/{orgId}/action/{actionId} | Delete an action
[**find_actions**](ActionApi.md#find_actions) | **GET** /v1/org/{orgId}/action | Return all actions in the organization paginated
[**get_action**](ActionApi.md#get_action) | **GET** /v1/org/{orgId}/action/{actionId} | Return a particular action by id
[**run_action**](ActionApi.md#run_action) | **POST** /v1/org/{orgId}/action/{actionId}/run | Run an action - for testing
[**update_action**](ActionApi.md#update_action) | **PATCH** /v1/org/{orgId}/action/{actionId} | Update an existing action


# **create_action**
> Action create_action(org_id, opts)

Create an action



### Example
```ruby
# load the gem
require 'swagger_client'

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
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **body** | [**CreateAction**](CreateAction.md)| Action data to create | [optional] 

### Return type

[**Action**](Action.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **delete_action**
> delete_action(org_id, action_id)

Delete an action



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ActionApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

action_id = 'action_id_example' # String | Action id


begin
  #Delete an action
  api_instance.delete_action(org_id, action_id)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ActionApi->delete_action: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **action_id** | **String**| Action id | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **find_actions**
> ResultsAction find_actions(org_id, opts)

Return all actions in the organization paginated



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ActionApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  from: 'from_example', # String | Action id to start paginating from
  limit: 56 # Integer | Number of results to return
}

begin
  #Return all actions in the organization paginated
  result = api_instance.find_actions(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ActionApi->find_actions: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **from** | **String**| Action id to start paginating from | [optional] 
 **limit** | **Integer**| Number of results to return | [optional] 

### Return type

[**ResultsAction**](ResultsAction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_action**
> Action get_action(org_id, action_id)

Return a particular action by id



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ActionApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

action_id = 'action_id_example' # String | Action id


begin
  #Return a particular action by id
  result = api_instance.get_action(org_id, action_id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ActionApi->get_action: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **action_id** | **String**| Action id | 

### Return type

[**Action**](Action.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **run_action**
> run_action(org_id, action_id, opts)

Run an action - for testing



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ActionApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

action_id = 'action_id_example' # String | Action id

opts = { 
  body: SwaggerClient::ActionRunRequest.new # ActionRunRequest | 
}

begin
  #Run an action - for testing
  api_instance.run_action(org_id, action_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ActionApi->run_action: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **action_id** | **String**| Action id | 
 **body** | [**ActionRunRequest**](ActionRunRequest.md)|  | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **update_action**
> update_action(org_id, action_id, opts)

Update an existing action



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ActionApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

action_id = 'action_id_example' # String | Action id

opts = { 
  body: SwaggerClient::UpdateAction.new # UpdateAction | Action data to update
}

begin
  #Update an existing action
  api_instance.update_action(org_id, action_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ActionApi->update_action: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **action_id** | **String**| Action id | 
 **body** | [**UpdateAction**](UpdateAction.md)| Action data to update | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



