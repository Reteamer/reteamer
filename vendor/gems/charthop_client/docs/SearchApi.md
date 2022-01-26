# SwaggerClient::SearchApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**search_org_data**](SearchApi.md#search_org_data) | **GET** /v1/org/{orgId}/search | Return people, job, group, and field data for a particular org that match a provided search string


# **search_org_data**
> SearchResultResponse search_org_data(org_id, opts)

Return people, job, group, and field data for a particular org that match a provided search string



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::SearchApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  q: 'q_example', # String | Query search term
  entity_types: 'entity_types_example', # String | Entity types
  limit: 56, # Integer | Limit
  include_former: true, # BOOLEAN | Include former users or persons
  date: Date.parse('2013-10-20'), # Date | Date
  scenario_id: 'scenario_id_example' # String | Scenario Id
}

begin
  #Return people, job, group, and field data for a particular org that match a provided search string
  result = api_instance.search_org_data(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling SearchApi->search_org_data: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **q** | **String**| Query search term | [optional] 
 **entity_types** | **String**| Entity types | [optional] 
 **limit** | **Integer**| Limit | [optional] 
 **include_former** | **BOOLEAN**| Include former users or persons | [optional] 
 **date** | **Date**| Date | [optional] 
 **scenario_id** | **String**| Scenario Id | [optional] 

### Return type

[**SearchResultResponse**](SearchResultResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



