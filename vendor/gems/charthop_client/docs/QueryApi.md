# SwaggerClient::QueryApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_query**](QueryApi.md#create_query) | **POST** /v1/org/{orgId}/query | Create a live query token
[**query**](QueryApi.md#query) | **GET** /v1/org/{orgId}/query/{queryToken} | Return the results of a previously created live query


# **create_query**
> QueryToken create_query(org_id, opts)

Create a live query token



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::QueryApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  body: SwaggerClient::CreateQueryToken.new # CreateQueryToken | 
}

begin
  #Create a live query token
  result = api_instance.create_query(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling QueryApi->create_query: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **body** | [**CreateQueryToken**](CreateQueryToken.md)|  | [optional] 

### Return type

[**QueryToken**](QueryToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **query**
> query(org_id, query_token, opts)

Return the results of a previously created live query



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::QueryApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

query_token = 'query_token_example' # String | Query token

opts = { 
  format: 'format_example', # String | Data format to use; default is json, can also use json-extended or json-readable
  mapper: 'mapper_example' # String | Deprecated parameter for backwards-compatibility
}

begin
  #Return the results of a previously created live query
  api_instance.query(org_id, query_token, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling QueryApi->query: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **query_token** | **String**| Query token | 
 **format** | **String**| Data format to use; default is json, can also use json-extended or json-readable | [optional] 
 **mapper** | **String**| Deprecated parameter for backwards-compatibility | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



