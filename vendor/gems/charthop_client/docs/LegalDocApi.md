# SwaggerClient::LegalDocApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_legal_doc**](LegalDocApi.md#create_legal_doc) | **POST** /v1/legaldoc | Create a legal doc
[**get_legal_doc**](LegalDocApi.md#get_legal_doc) | **GET** /v1/legaldoc/{name} | Retrieve the legal doc by name


# **create_legal_doc**
> create_legal_doc(opts)

Create a legal doc



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::LegalDocApi.new

opts = { 
  body: SwaggerClient::CreateLegalDoc.new # CreateLegalDoc | 
}

begin
  #Create a legal doc
  api_instance.create_legal_doc(opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling LegalDocApi->create_legal_doc: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateLegalDoc**](CreateLegalDoc.md)|  | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_legal_doc**
> LegalDoc get_legal_doc(name)

Retrieve the legal doc by name



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::LegalDocApi.new

name = 'name_example' # String | name


begin
  #Retrieve the legal doc by name
  result = api_instance.get_legal_doc(name)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling LegalDocApi->get_legal_doc: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name | 

### Return type

[**LegalDoc**](LegalDoc.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



