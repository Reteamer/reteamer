# SwaggerClient::PersonApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_person**](PersonApi.md#create_person) | **POST** /v2/org/{orgId}/person | Create a person
[**delete_person**](PersonApi.md#delete_person) | **DELETE** /v2/org/{orgId}/person/{personId} | Delete a person
[**find_persons**](PersonApi.md#find_persons) | **GET** /v2/org/{orgId}/person | Find persons in the organization
[**get_person**](PersonApi.md#get_person) | **GET** /v2/org/{orgId}/person/{personId} | Return a particular person by id
[**update_person**](PersonApi.md#update_person) | **PATCH** /v2/org/{orgId}/person/{personId} | Update a person


# **create_person**
> Object create_person(org_id, opts)

Create a person



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::PersonApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  scenario_id: 'scenario_id_example', # String | Scenario id to create the person in
  date: Date.parse('2013-10-20'), # Date | Effective date of person creation
  body: nil # Object | 
}

begin
  #Create a person
  result = api_instance.create_person(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling PersonApi->create_person: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **scenario_id** | **String**| Scenario id to create the person in | [optional] 
 **date** | **Date**| Effective date of person creation | [optional] 
 **body** | **Object**|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **delete_person**
> delete_person(org_id, person_id)

Delete a person



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::PersonApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

person_id = 'person_id_example' # String | Person id


begin
  #Delete a person
  api_instance.delete_person(org_id, person_id)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling PersonApi->delete_person: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **person_id** | **String**| Person id | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **find_persons**
> ResultsData find_persons(org_id, opts)

Find persons in the organization



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::PersonApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  scenario_id: 'scenario_id_example', # String | Scenario id to query
  date: Date.parse('2013-10-20'), # Date | Date to search as of
  q: 'q_example', # String | Search query
  from: 'from_example', # String | Person id to start paginating from
  limit: 56, # Integer | Number of results to return
  fields: 'fields_example', # String | Fields to retrieve, comma-separated
  include_all: true, # BOOLEAN | Include all persons in the system, including ex-employees or persons who were never in jobs
  format: 'format_example' # String | Data format to use; default is json, can also use json-extended or json-readable
}

begin
  #Find persons in the organization
  result = api_instance.find_persons(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling PersonApi->find_persons: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **scenario_id** | **String**| Scenario id to query | [optional] 
 **date** | **Date**| Date to search as of | [optional] 
 **q** | **String**| Search query | [optional] 
 **from** | **String**| Person id to start paginating from | [optional] 
 **limit** | **Integer**| Number of results to return | [optional] 
 **fields** | **String**| Fields to retrieve, comma-separated | [optional] 
 **include_all** | **BOOLEAN**| Include all persons in the system, including ex-employees or persons who were never in jobs | [optional] 
 **format** | **String**| Data format to use; default is json, can also use json-extended or json-readable | [optional] 

### Return type

[**ResultsData**](ResultsData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_person**
> Object get_person(org_id, person_id, opts)

Return a particular person by id



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::PersonApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

person_id = 'person_id_example' # String | Person id

opts = { 
  scenario_id: 'scenario_id_example', # String | Scenario id to query
  date: Date.parse('2013-10-20'), # Date | Date
  fields: 'fields_example', # String | Fields to retrieve, comma-separated
  format: 'format_example' # String | Data format to use; default is json, can also use json-extended or json-readable
}

begin
  #Return a particular person by id
  result = api_instance.get_person(org_id, person_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling PersonApi->get_person: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **person_id** | **String**| Person id | 
 **scenario_id** | **String**| Scenario id to query | [optional] 
 **date** | **Date**| Date | [optional] 
 **fields** | **String**| Fields to retrieve, comma-separated | [optional] 
 **format** | **String**| Data format to use; default is json, can also use json-extended or json-readable | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **update_person**
> update_person(org_id, person_id, opts)

Update a person



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::PersonApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

person_id = 'person_id_example' # String | Person id

opts = { 
  scenario_id: 'scenario_id_example', # String | Scenario id to update the person in
  date: Date.parse('2013-10-20'), # Date | Effective date of person update
  body: nil # Object | 
}

begin
  #Update a person
  api_instance.update_person(org_id, person_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling PersonApi->update_person: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **person_id** | **String**| Person id | 
 **scenario_id** | **String**| Scenario id to update the person in | [optional] 
 **date** | **Date**| Effective date of person update | [optional] 
 **body** | **Object**|  | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



