# SwaggerClient::GroupApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_group**](GroupApi.md#create_group) | **POST** /v2/org/{orgId}/group/{type} | Create a group
[**delete_group**](GroupApi.md#delete_group) | **DELETE** /v2/org/{orgId}/group/{type}/{groupId} | Delete a group
[**find_groups**](GroupApi.md#find_groups) | **GET** /v2/org/{orgId}/group/{type} | Find groups in the organization of a certain type
[**get_group**](GroupApi.md#get_group) | **GET** /v2/org/{orgId}/group/{type}/{groupId} | Return a particular group by id
[**import_csv1**](GroupApi.md#import_csv1) | **POST** /v2/org/{orgId}/group/{type}/import | Import data from CSV file
[**update_group**](GroupApi.md#update_group) | **PATCH** /v2/org/{orgId}/group/{type}/{groupId} | Update a group


# **create_group**
> create_group(org_id, type, opts)

Create a group



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::GroupApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

type = 'type_example' # String | Group type

opts = { 
  scenario_id: 'scenario_id_example', # String | Scenario id to create the group in
  date: Date.parse('2013-10-20'), # Date | Effective date of group creation
  body: nil # Object | 
}

begin
  #Create a group
  api_instance.create_group(org_id, type, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling GroupApi->create_group: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **type** | **String**| Group type | 
 **scenario_id** | **String**| Scenario id to create the group in | [optional] 
 **date** | **Date**| Effective date of group creation | [optional] 
 **body** | **Object**|  | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **delete_group**
> delete_group(org_id, type, group_id, opts)

Delete a group



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::GroupApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

type = 'type_example' # String | Group type

group_id = 'group_id_example' # String | Group id

opts = { 
  scenario_id: 'scenario_id_example', # String | Scenario id to update the group in
  date: Date.parse('2013-10-20') # Date | Effective date of group update
}

begin
  #Delete a group
  api_instance.delete_group(org_id, type, group_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling GroupApi->delete_group: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **type** | **String**| Group type | 
 **group_id** | **String**| Group id | 
 **scenario_id** | **String**| Scenario id to update the group in | [optional] 
 **date** | **Date**| Effective date of group update | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **find_groups**
> ResultsData find_groups(org_id, type, opts)

Find groups in the organization of a certain type



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::GroupApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

type = 'type_example' # String | Group type

opts = { 
  scenario_id: 'scenario_id_example', # String | Scenario id to query
  date: Date.parse('2013-10-20'), # Date | Date to search as of
  from: 'from_example', # String | Group id to start paginating from
  limit: 56, # Integer | Number of results to return
  fields: 'fields_example', # String | Fields to retrieve, comma-separated
  include_all: true, # BOOLEAN | Include all groups, including deleted groups
  format: 'format_example' # String | Data format to use; default is json, can also use json-extended or json-readable
}

begin
  #Find groups in the organization of a certain type
  result = api_instance.find_groups(org_id, type, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling GroupApi->find_groups: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **type** | **String**| Group type | 
 **scenario_id** | **String**| Scenario id to query | [optional] 
 **date** | **Date**| Date to search as of | [optional] 
 **from** | **String**| Group id to start paginating from | [optional] 
 **limit** | **Integer**| Number of results to return | [optional] 
 **fields** | **String**| Fields to retrieve, comma-separated | [optional] 
 **include_all** | **BOOLEAN**| Include all groups, including deleted groups | [optional] 
 **format** | **String**| Data format to use; default is json, can also use json-extended or json-readable | [optional] 

### Return type

[**ResultsData**](ResultsData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_group**
> Hash&lt;String, Object&gt; get_group(org_id, type, group_id, opts)

Return a particular group by id



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::GroupApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

type = 'type_example' # String | Group type

group_id = 'group_id_example' # String | Group id

opts = { 
  scenario_id: 'scenario_id_example', # String | Scenario id to query
  date: Date.parse('2013-10-20'), # Date | Date
  fields: 'fields_example', # String | Fields to retrieve, comma-separated
  format: 'format_example' # String | Data format to use; default is json, can also use json-extended or json-readable
}

begin
  #Return a particular group by id
  result = api_instance.get_group(org_id, type, group_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling GroupApi->get_group: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **type** | **String**| Group type | 
 **group_id** | **String**| Group id | 
 **scenario_id** | **String**| Scenario id to query | [optional] 
 **date** | **Date**| Date | [optional] 
 **fields** | **String**| Fields to retrieve, comma-separated | [optional] 
 **format** | **String**| Data format to use; default is json, can also use json-extended or json-readable | [optional] 

### Return type

**Hash&lt;String, Object&gt;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **import_csv1**
> Process import_csv1(org_id, type, opts)

Import data from CSV file



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::GroupApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

type = 'type_example' # String | Group type

opts = { 
  file: File.new('/path/to/file.txt'), # File | 
  date: Date.parse('2013-10-20') # Date | Date to update as of
}

begin
  #Import data from CSV file
  result = api_instance.import_csv1(org_id, type, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling GroupApi->import_csv1: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **type** | **String**| Group type | 
 **file** | **File**|  | [optional] 
 **date** | **Date**| Date to update as of | [optional] 

### Return type

[**Process**](Process.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json



# **update_group**
> update_group(org_id, type, group_id, opts)

Update a group



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::GroupApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

type = 'type_example' # String | Group type

group_id = 'group_id_example' # String | Group id

opts = { 
  scenario_id: 'scenario_id_example', # String | Scenario id to update the group in
  date: Date.parse('2013-10-20'), # Date | Effective date of group update
  body: nil # Object | 
}

begin
  #Update a group
  api_instance.update_group(org_id, type, group_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling GroupApi->update_group: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **type** | **String**| Group type | 
 **group_id** | **String**| Group id | 
 **scenario_id** | **String**| Scenario id to update the group in | [optional] 
 **date** | **Date**| Effective date of group update | [optional] 
 **body** | **Object**|  | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



