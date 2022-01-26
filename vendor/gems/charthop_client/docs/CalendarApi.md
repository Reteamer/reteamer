# SwaggerClient::CalendarApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**find_calendar_entries**](CalendarApi.md#find_calendar_entries) | **GET** /v1/org/{orgId}/calendar | Return calendar entries in a given time period


# **find_calendar_entries**
> find_calendar_entries(org_id, opts)

Return calendar entries in a given time period



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CalendarApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  start: 'start_example', # String | Start date
  _end: '_end_example', # String | End date
  type: 'type_example', # String | Type of calendar entries to retrieve (timeoff, anniversary, birthday)
  q: 'q_example', # String | Query filter to filter for part of the organization
  format: 'format_example' # String | Format to return data in
}

begin
  #Return calendar entries in a given time period
  api_instance.find_calendar_entries(org_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CalendarApi->find_calendar_entries: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **start** | **String**| Start date | [optional] 
 **_end** | **String**| End date | [optional] 
 **type** | **String**| Type of calendar entries to retrieve (timeoff, anniversary, birthday) | [optional] 
 **q** | **String**| Query filter to filter for part of the organization | [optional] 
 **format** | **String**| Format to return data in | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



