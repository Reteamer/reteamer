# SwaggerClient::ChangeApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approve_change**](ChangeApi.md#approve_change) | **POST** /v1/org/{orgId}/change/{changeId}/approve | Approve or reject a change
[**bulk_change**](ChangeApi.md#bulk_change) | **POST** /v1/org/{orgId}/change/bulkchange | Perform a series of changes at once
[**bulk_update**](ChangeApi.md#bulk_update) | **POST** /v1/org/{orgId}/change/bulkupdate | Perform a bulk update on a number of jobs
[**change_approver**](ChangeApi.md#change_approver) | **GET** /v1/org/{orgId}/change/{changeId}/approver | Given a of change id, see if the person can approve/reject
[**create_change**](ChangeApi.md#create_change) | **POST** /v1/org/{orgId}/change/{type} | Create a new change
[**delete_change**](ChangeApi.md#delete_change) | **DELETE** /v1/org/{orgId}/change/{changeId} | Delete a previous change
[**depart_rehire**](ChangeApi.md#depart_rehire) | **POST** /v1/org/{orgId}/change/depart-rehire | Create a depart-rehire pair of changes, for filling in historical data
[**find_changes**](ChangeApi.md#find_changes) | **GET** /v1/org/{orgId}/change | Return recent changes across an org, or for a particular person or job
[**find_scenario_changes**](ChangeApi.md#find_scenario_changes) | **GET** /v1/org/{orgId}/change/scenario/{scenarioId} | Return all changes for a particular scenario, with before job
[**get_change**](ChangeApi.md#get_change) | **GET** /v1/org/{orgId}/change/{changeId} | Return a particular change by id
[**sync_change**](ChangeApi.md#sync_change) | **POST** /v1/org/{orgId}/change/sync/{type} | Sync a change (create the change only if it does not already exist)
[**update_change**](ChangeApi.md#update_change) | **PATCH** /v1/org/{orgId}/change/{changeId} | Make a change to a change
[**validate_change**](ChangeApi.md#validate_change) | **POST** /v1/org/{orgId}/change/{type}/validate | Validate a change


# **approve_change**
> approve_change(org_id, change_id, opts)

Approve or reject a change



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ChangeApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

change_id = 'change_id_example' # String | Change id

opts = { 
  body: SwaggerClient::ApproveChange.new # ApproveChange | Change approval details
}

begin
  #Approve or reject a change
  api_instance.approve_change(org_id, change_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ChangeApi->approve_change: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **change_id** | **String**| Change id | 
 **body** | [**ApproveChange**](ApproveChange.md)| Change approval details | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **bulk_change**
> Process bulk_change(org_id, opts)

Perform a series of changes at once



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ChangeApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  body: SwaggerClient::BulkChangeRequest.new # BulkChangeRequest | Bulk change data
}

begin
  #Perform a series of changes at once
  result = api_instance.bulk_change(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ChangeApi->bulk_change: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **body** | [**BulkChangeRequest**](BulkChangeRequest.md)| Bulk change data | [optional] 

### Return type

[**Process**](Process.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **bulk_update**
> Process bulk_update(org_id, opts)

Perform a bulk update on a number of jobs



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ChangeApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  body: SwaggerClient::BulkUpdateRequest.new # BulkUpdateRequest | Bulk update data
}

begin
  #Perform a bulk update on a number of jobs
  result = api_instance.bulk_update(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ChangeApi->bulk_update: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **body** | [**BulkUpdateRequest**](BulkUpdateRequest.md)| Bulk update data | [optional] 

### Return type

[**Process**](Process.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **change_approver**
> BOOLEAN change_approver(org_id, change_id, opts)

Given a of change id, see if the person can approve/reject



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ChangeApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

change_id = 'change_id_example' # String | Change Id

opts = { 
  date: Date.parse('2013-10-20') # Date | Date to check the approval on
}

begin
  #Given a of change id, see if the person can approve/reject
  result = api_instance.change_approver(org_id, change_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ChangeApi->change_approver: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **change_id** | **String**| Change Id | 
 **date** | **Date**| Date to check the approval on | [optional] 

### Return type

**BOOLEAN**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **create_change**
> Change create_change(org_id, type, opts)

Create a new change



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ChangeApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

type = 'type_example' # String | Change type

opts = { 
  body: SwaggerClient::CreateChange.new # CreateChange | Change data
}

begin
  #Create a new change
  result = api_instance.create_change(org_id, type, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ChangeApi->create_change: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **type** | **String**| Change type | 
 **body** | [**CreateChange**](CreateChange.md)| Change data | [optional] 

### Return type

[**Change**](Change.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **delete_change**
> delete_change(org_id, change_id)

Delete a previous change



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ChangeApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

change_id = 'change_id_example' # String | Change id


begin
  #Delete a previous change
  api_instance.delete_change(org_id, change_id)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ChangeApi->delete_change: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **change_id** | **String**| Change id | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **depart_rehire**
> Change depart_rehire(org_id, opts)

Create a depart-rehire pair of changes, for filling in historical data



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ChangeApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  start_date: Date.parse('2013-10-20'), # Date | Rehire start date
  body: SwaggerClient::CreateChange.new # CreateChange | Depart data
}

begin
  #Create a depart-rehire pair of changes, for filling in historical data
  result = api_instance.depart_rehire(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ChangeApi->depart_rehire: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **start_date** | **Date**| Rehire start date | [optional] 
 **body** | [**CreateChange**](CreateChange.md)| Depart data | [optional] 

### Return type

[**Change**](Change.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **find_changes**
> ResultsChange find_changes(org_id, opts)

Return recent changes across an org, or for a particular person or job



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ChangeApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  scenario_id: 'scenario_id_example', # String | Scenario id
  date: Date.parse('2013-10-20'), # Date | Date to start from
  type: 'type_example', # String | Types of change to filter by
  fields: 'fields_example', # String | Return changes that modify these fields
  person_id: 'person_id_example', # String | Person id to filter by
  job_id: 'job_id_example', # String | Job id to filter by
  refs: 'refs_example', # String | References to filter by
  q: 'q_example', # String | Query to filter against
  from: 789, # Integer | Paginate from
  limit: 56, # Integer | Number of results to return
  open: 'open_example', # String | Whether the role is open or not
  desc: true, # BOOLEAN | Descending (default false)
  scenario_only: true, # BOOLEAN | Scenario only (exclude primary changes)
  parent_only: true, # BOOLEAN | Parent changes only (exclude child changes)
  include_grant_schedule: true, # BOOLEAN | Whether to include full grant schedule when returning equity updates
  include_struck: true, # BOOLEAN | Deprecated parameter for backwards-compatibility (use statuses) - whether to include STRUCK and PROPOSED changes, or just ACTIVE changes
  status: 'status_example', # String | Statuses to filter by
  strip_updates: true, # BOOLEAN | Whether to strip returned update changes of update types that were not explicitly requested
  format: 'format_example' # String | Data format to use; default is json, can also use json-extended or json-readable
}

begin
  #Return recent changes across an org, or for a particular person or job
  result = api_instance.find_changes(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ChangeApi->find_changes: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **scenario_id** | **String**| Scenario id | [optional] 
 **date** | **Date**| Date to start from | [optional] 
 **type** | **String**| Types of change to filter by | [optional] 
 **fields** | **String**| Return changes that modify these fields | [optional] 
 **person_id** | **String**| Person id to filter by | [optional] 
 **job_id** | **String**| Job id to filter by | [optional] 
 **refs** | **String**| References to filter by | [optional] 
 **q** | **String**| Query to filter against | [optional] 
 **from** | **Integer**| Paginate from | [optional] 
 **limit** | **Integer**| Number of results to return | [optional] 
 **open** | **String**| Whether the role is open or not | [optional] 
 **desc** | **BOOLEAN**| Descending (default false) | [optional] 
 **scenario_only** | **BOOLEAN**| Scenario only (exclude primary changes) | [optional] 
 **parent_only** | **BOOLEAN**| Parent changes only (exclude child changes) | [optional] 
 **include_grant_schedule** | **BOOLEAN**| Whether to include full grant schedule when returning equity updates | [optional] 
 **include_struck** | **BOOLEAN**| Deprecated parameter for backwards-compatibility (use statuses) - whether to include STRUCK and PROPOSED changes, or just ACTIVE changes | [optional] 
 **status** | **String**| Statuses to filter by | [optional] 
 **strip_updates** | **BOOLEAN**| Whether to strip returned update changes of update types that were not explicitly requested | [optional] 
 **format** | **String**| Data format to use; default is json, can also use json-extended or json-readable | [optional] 

### Return type

[**ResultsChange**](ResultsChange.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **find_scenario_changes**
> ScenarioChangesWithBudgetRollup find_scenario_changes(org_id, scenario_id, opts)

Return all changes for a particular scenario, with before job



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ChangeApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

scenario_id = 'scenario_id_example' # String | Scenario id

opts = { 
  fields: 'fields_example', # String | Fields to retrieve
  format: 'format_example', # String | Data format to use; default is json, can also use json-extended or json-readable
  q: 'q_example' # String | Search query
}

begin
  #Return all changes for a particular scenario, with before job
  result = api_instance.find_scenario_changes(org_id, scenario_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ChangeApi->find_scenario_changes: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **scenario_id** | **String**| Scenario id | 
 **fields** | **String**| Fields to retrieve | [optional] 
 **format** | **String**| Data format to use; default is json, can also use json-extended or json-readable | [optional] 
 **q** | **String**| Search query | [optional] 

### Return type

[**ScenarioChangesWithBudgetRollup**](ScenarioChangesWithBudgetRollup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_change**
> Change get_change(org_id, change_id, opts)

Return a particular change by id



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ChangeApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

change_id = 'change_id_example' # String | Change id

opts = { 
  format: 'format_example' # String | Data format to use; default is json, can also use json-extended or json-readable
}

begin
  #Return a particular change by id
  result = api_instance.get_change(org_id, change_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ChangeApi->get_change: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **change_id** | **String**| Change id | 
 **format** | **String**| Data format to use; default is json, can also use json-extended or json-readable | [optional] 

### Return type

[**Change**](Change.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **sync_change**
> Change sync_change(org_id, type, opts)

Sync a change (create the change only if it does not already exist)



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ChangeApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

type = 'type_example' # String | Change type

opts = { 
  body: SwaggerClient::CreateChange.new # CreateChange | Change data
}

begin
  #Sync a change (create the change only if it does not already exist)
  result = api_instance.sync_change(org_id, type, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ChangeApi->sync_change: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **type** | **String**| Change type | 
 **body** | [**CreateChange**](CreateChange.md)| Change data | [optional] 

### Return type

[**Change**](Change.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **update_change**
> update_change(org_id, change_id, opts)

Make a change to a change



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ChangeApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

change_id = 'change_id_example' # String | Change id

opts = { 
  body: SwaggerClient::UpdateChange.new # UpdateChange | Change data
}

begin
  #Make a change to a change
  api_instance.update_change(org_id, change_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ChangeApi->update_change: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **change_id** | **String**| Change id | 
 **body** | [**UpdateChange**](UpdateChange.md)| Change data | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **validate_change**
> Change validate_change(org_id, type, opts)

Validate a change



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ChangeApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

type = 'type_example' # String | Change type

opts = { 
  body: SwaggerClient::CreateChange.new # CreateChange | Change data
}

begin
  #Validate a change
  result = api_instance.validate_change(org_id, type, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ChangeApi->validate_change: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **type** | **String**| Change type | 
 **body** | [**CreateChange**](CreateChange.md)| Change data | [optional] 

### Return type

[**Change**](Change.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



