# SwaggerClient::GoalApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**complete_goal**](GoalApi.md#complete_goal) | **POST** /v1/org/{orgId}/goal/{goalId}/complete | Complete a goal
[**create_goal**](GoalApi.md#create_goal) | **POST** /v1/org/{orgId}/goal | Create a goal
[**delete_goal**](GoalApi.md#delete_goal) | **DELETE** /v1/org/{orgId}/goal/{goalId} | Delete a goal
[**find_goals**](GoalApi.md#find_goals) | **GET** /v1/org/{orgId}/goal | Return all goals in the organization paginated
[**get_goal**](GoalApi.md#get_goal) | **GET** /v1/org/{orgId}/goal/{goalId} | Return a particular goal by id
[**reactivate_goal**](GoalApi.md#reactivate_goal) | **POST** /v1/org/{orgId}/goal/{goalId}/reactivate | Reactivate a goal
[**update_goal**](GoalApi.md#update_goal) | **PATCH** /v1/org/{orgId}/goal/{goalId} | Update an existing goal


# **complete_goal**
> Goal complete_goal(org_id, goal_id)

Complete a goal



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::GoalApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

goal_id = 'goal_id_example' # String | Goal id


begin
  #Complete a goal
  result = api_instance.complete_goal(org_id, goal_id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling GoalApi->complete_goal: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **goal_id** | **String**| Goal id | 

### Return type

[**Goal**](Goal.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **create_goal**
> Goal create_goal(org_id, opts)

Create a goal



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::GoalApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  silent: true, # BOOLEAN | Suppress notification emails
  body: SwaggerClient::CreateGoal.new # CreateGoal | Goal data to create
}

begin
  #Create a goal
  result = api_instance.create_goal(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling GoalApi->create_goal: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **silent** | **BOOLEAN**| Suppress notification emails | [optional] 
 **body** | [**CreateGoal**](CreateGoal.md)| Goal data to create | [optional] 

### Return type

[**Goal**](Goal.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **delete_goal**
> delete_goal(org_id, goal_id)

Delete a goal



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::GoalApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

goal_id = 'goal_id_example' # String | Goal id


begin
  #Delete a goal
  api_instance.delete_goal(org_id, goal_id)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling GoalApi->delete_goal: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **goal_id** | **String**| Goal id | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **find_goals**
> ResultsGoal find_goals(org_id, opts)

Return all goals in the organization paginated



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::GoalApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  type: 'type_example', # String | Type of goal to filter by
  from: 'from_example', # String | Goal id to start paginating from
  limit: 56, # Integer | Number of results to return
  ids: 'ids_example' # String | List of ids to filter by
}

begin
  #Return all goals in the organization paginated
  result = api_instance.find_goals(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling GoalApi->find_goals: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **type** | **String**| Type of goal to filter by | [optional] 
 **from** | **String**| Goal id to start paginating from | [optional] 
 **limit** | **Integer**| Number of results to return | [optional] 
 **ids** | **String**| List of ids to filter by | [optional] 

### Return type

[**ResultsGoal**](ResultsGoal.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_goal**
> Goal get_goal(org_id, goal_id, opts)

Return a particular goal by id



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::GoalApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

goal_id = 'goal_id_example' # String | Goal id

opts = { 
  fields: 'fields_example' # String | Fields to retrieve, comma-separated
}

begin
  #Return a particular goal by id
  result = api_instance.get_goal(org_id, goal_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling GoalApi->get_goal: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **goal_id** | **String**| Goal id | 
 **fields** | **String**| Fields to retrieve, comma-separated | [optional] 

### Return type

[**Goal**](Goal.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **reactivate_goal**
> Goal reactivate_goal(org_id, goal_id)

Reactivate a goal



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::GoalApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

goal_id = 'goal_id_example' # String | Goal id


begin
  #Reactivate a goal
  result = api_instance.reactivate_goal(org_id, goal_id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling GoalApi->reactivate_goal: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **goal_id** | **String**| Goal id | 

### Return type

[**Goal**](Goal.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **update_goal**
> update_goal(org_id, goal_id, opts)

Update an existing goal



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::GoalApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

goal_id = 'goal_id_example' # String | Goal id

opts = { 
  silent: true, # BOOLEAN | Suppress notification emails
  body: SwaggerClient::UpdateGoal.new # UpdateGoal | Goal data to update
}

begin
  #Update an existing goal
  api_instance.update_goal(org_id, goal_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling GoalApi->update_goal: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **goal_id** | **String**| Goal id | 
 **silent** | **BOOLEAN**| Suppress notification emails | [optional] 
 **body** | [**UpdateGoal**](UpdateGoal.md)| Goal data to update | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



