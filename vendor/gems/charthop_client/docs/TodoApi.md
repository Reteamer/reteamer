# SwaggerClient::TodoApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_todo**](TodoApi.md#delete_todo) | **DELETE** /v1/org/{orgId}/todo/{todoId} | Delete todo
[**find_todos**](TodoApi.md#find_todos) | **GET** /v1/org/{orgId}/todo | Return all existing todos
[**find_todos_summary**](TodoApi.md#find_todos_summary) | **GET** /v1/org/{orgId}/todo/summary/{goalId} | Return the todos for a given goal
[**get_my_todos**](TodoApi.md#get_my_todos) | **GET** /v1/org/{orgId}/todo/me | Return the todos for the current user
[**query_todos**](TodoApi.md#query_todos) | **GET** /v1/org/{orgId}/todo/todo | Query todos for goals in the organization
[**remind_todo**](TodoApi.md#remind_todo) | **POST** /v1/org/{orgId}/todo/{todoId}/remind | Send a reminder notification for a particular todo
[**remove_form_from_goal**](TodoApi.md#remove_form_from_goal) | **DELETE** /v1/org/{orgId}/todo/{goalId}/{formId} | Delete todo


# **delete_todo**
> delete_todo(org_id, todo_id)

Delete todo



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::TodoApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

todo_id = 'todo_id_example' # String | Todo id


begin
  #Delete todo
  api_instance.delete_todo(org_id, todo_id)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling TodoApi->delete_todo: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **todo_id** | **String**| Todo id | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **find_todos**
> ResultsTodo find_todos(org_id, opts)

Return all existing todos



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::TodoApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  user_id: 'user_id_example', # String | Todo User id
  goal_id: 'goal_id_example', # String | Goal id
  status: 'status_example', # String | Todo.Status. (PENDING/DONE)
  type: 'type_example', # String | Todo.Type of todo (form)
  entity_id: 'entity_id_example', # String | Entity Id
  target_id: 'target_id_example', # String | Target Id
  limit: 56 # Integer | Number of results to return
}

begin
  #Return all existing todos
  result = api_instance.find_todos(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling TodoApi->find_todos: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **user_id** | **String**| Todo User id | [optional] 
 **goal_id** | **String**| Goal id | [optional] 
 **status** | **String**| Todo.Status. (PENDING/DONE) | [optional] 
 **type** | **String**| Todo.Type of todo (form) | [optional] 
 **entity_id** | **String**| Entity Id | [optional] 
 **target_id** | **String**| Target Id | [optional] 
 **limit** | **Integer**| Number of results to return | [optional] 

### Return type

[**ResultsTodo**](ResultsTodo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **find_todos_summary**
> find_todos_summary(org_id, goal_id)

Return the todos for a given goal



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::TodoApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

goal_id = 'goal_id_example' # String | Goal id


begin
  #Return the todos for a given goal
  api_instance.find_todos_summary(org_id, goal_id)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling TodoApi->find_todos_summary: #{e}"
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



# **get_my_todos**
> ResultsTodo get_my_todos(org_id, opts)

Return the todos for the current user



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::TodoApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  goal_id: 'goal_id_example', # String | Goal id
  status: 'status_example', # String | Todo.Status. (PENDING/ACTIVE)
  type: 'type_example', # String | Todo.Type of todo (form)
  entity_id: 'entity_id_example', # String | Entity Id
  target_id: 'target_id_example', # String | Target Id
  limit: 56 # Integer | Number of results to return
}

begin
  #Return the todos for the current user
  result = api_instance.get_my_todos(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling TodoApi->get_my_todos: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **goal_id** | **String**| Goal id | [optional] 
 **status** | **String**| Todo.Status. (PENDING/ACTIVE) | [optional] 
 **type** | **String**| Todo.Type of todo (form) | [optional] 
 **entity_id** | **String**| Entity Id | [optional] 
 **target_id** | **String**| Target Id | [optional] 
 **limit** | **Integer**| Number of results to return | [optional] 

### Return type

[**ResultsTodo**](ResultsTodo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **query_todos**
> ResultsData query_todos(org_id, opts)

Query todos for goals in the organization



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::TodoApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  user_id: 'user_id_example', # String | Todo User id
  goal_id: 'goal_id_example', # String | Goal id
  status: 'status_example', # String | Todo.Status. (PENDING/DONE)
  type: 'type_example', # String | Todo.Type. (FORM_SUBMIT/CHANGE_APPROVE)
  entity_id: 'entity_id_example', # String | Entity Id
  target_id: 'target_id_example', # String | Target Id
  limit: 56, # Integer | Number of results to return
  fields: 'fields_example', # String | Fields to retrieve, comma-separated
  format: 'format_example', # String | Data format to use; default is json, can also use json-extended or json-readable
  from: 'from_example' # String | Job id to start paginating from
}

begin
  #Query todos for goals in the organization
  result = api_instance.query_todos(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling TodoApi->query_todos: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **user_id** | **String**| Todo User id | [optional] 
 **goal_id** | **String**| Goal id | [optional] 
 **status** | **String**| Todo.Status. (PENDING/DONE) | [optional] 
 **type** | **String**| Todo.Type. (FORM_SUBMIT/CHANGE_APPROVE) | [optional] 
 **entity_id** | **String**| Entity Id | [optional] 
 **target_id** | **String**| Target Id | [optional] 
 **limit** | **Integer**| Number of results to return | [optional] 
 **fields** | **String**| Fields to retrieve, comma-separated | [optional] 
 **format** | **String**| Data format to use; default is json, can also use json-extended or json-readable | [optional] 
 **from** | **String**| Job id to start paginating from | [optional] 

### Return type

[**ResultsData**](ResultsData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **remind_todo**
> remind_todo(org_id, todo_id, opts)

Send a reminder notification for a particular todo



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::TodoApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

todo_id = 'todo_id_example' # String | Todo id

opts = { 
  body: SwaggerClient::TodoRemindRequest.new # TodoRemindRequest | 
}

begin
  #Send a reminder notification for a particular todo
  api_instance.remind_todo(org_id, todo_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling TodoApi->remind_todo: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **todo_id** | **String**| Todo id | 
 **body** | [**TodoRemindRequest**](TodoRemindRequest.md)|  | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **remove_form_from_goal**
> remove_form_from_goal(org_id, goal_id, form_id)

Delete todo



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::TodoApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

goal_id = 'goal_id_example' # String | Goal id

form_id = 'form_id_example' # String | Form id


begin
  #Delete todo
  api_instance.remove_form_from_goal(org_id, goal_id, form_id)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling TodoApi->remove_form_from_goal: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **goal_id** | **String**| Goal id | 
 **form_id** | **String**| Form id | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



