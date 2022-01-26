# SwaggerClient::MetricApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**record_metric**](MetricApi.md#record_metric) | **POST** /v1/org/{orgId}/metric | Record a daily metric


# **record_metric**
> record_metric(org_id, opts)

Record a daily metric



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::MetricApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  body: SwaggerClient::RecordMetricRequest.new # RecordMetricRequest | 
}

begin
  #Record a daily metric
  api_instance.record_metric(org_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling MetricApi->record_metric: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **body** | [**RecordMetricRequest**](RecordMetricRequest.md)|  | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



