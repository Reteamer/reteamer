# SwaggerClient::UsageApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**record_usage**](UsageApi.md#record_usage) | **POST** /v1/org/{orgId}/usage/{type} | Record usage of a product feature


# **record_usage**
> record_usage(org_id, type)

Record usage of a product feature



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::UsageApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

type = 'type_example' # String | Type of usage


begin
  #Record usage of a product feature
  api_instance.record_usage(org_id, type)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling UsageApi->record_usage: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **type** | **String**| Type of usage | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



