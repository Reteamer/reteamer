# SwaggerClient::WebauthnApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**complete_register_web_authn**](WebauthnApi.md#complete_register_web_authn) | **POST** /v1/webauthn/register | Check for an existing WebAuthn key for this user
[**complete_verify_web_authn**](WebauthnApi.md#complete_verify_web_authn) | **POST** /v1/webauthn/verify | Check for an existing physical key for this user
[**delete_registered_credentials**](WebauthnApi.md#delete_registered_credentials) | **DELETE** /v1/webauthn/register/{emailBase64} | Delete registered credentials by the given email
[**start_register_web_authn**](WebauthnApi.md#start_register_web_authn) | **GET** /v1/webauthn/register | Check for an existing physical key for this user
[**start_verify_web_authn**](WebauthnApi.md#start_verify_web_authn) | **GET** /v1/webauthn/verify | Check for an existing physical key for this user


# **complete_register_web_authn**
> complete_register_web_authn(opts)

Check for an existing WebAuthn key for this user



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::WebauthnApi.new

opts = { 
  body: SwaggerClient::WebAuthnRequest.new # WebAuthnRequest | 
}

begin
  #Check for an existing WebAuthn key for this user
  api_instance.complete_register_web_authn(opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling WebauthnApi->complete_register_web_authn: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**WebAuthnRequest**](WebAuthnRequest.md)|  | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **complete_verify_web_authn**
> complete_verify_web_authn(opts)

Check for an existing physical key for this user



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::WebauthnApi.new

opts = { 
  body: SwaggerClient::WebAuthnRequest.new # WebAuthnRequest | 
}

begin
  #Check for an existing physical key for this user
  api_instance.complete_verify_web_authn(opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling WebauthnApi->complete_verify_web_authn: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**WebAuthnRequest**](WebAuthnRequest.md)|  | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **delete_registered_credentials**
> delete_registered_credentials(email_base64)

Delete registered credentials by the given email



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::WebauthnApi.new

email_base64 = 'email_base64_example' # String | Email


begin
  #Delete registered credentials by the given email
  api_instance.delete_registered_credentials(email_base64)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling WebauthnApi->delete_registered_credentials: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email_base64** | **String**| Email | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **start_register_web_authn**
> start_register_web_authn

Check for an existing physical key for this user



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::WebauthnApi.new

begin
  #Check for an existing physical key for this user
  api_instance.start_register_web_authn
rescue SwaggerClient::ApiError => e
  puts "Exception when calling WebauthnApi->start_register_web_authn: #{e}"
end
```

### Parameters
This endpoint does not need any parameter.

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **start_verify_web_authn**
> start_verify_web_authn

Check for an existing physical key for this user



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::WebauthnApi.new

begin
  #Check for an existing physical key for this user
  api_instance.start_verify_web_authn
rescue SwaggerClient::ApiError => e
  puts "Exception when calling WebauthnApi->start_verify_web_authn: #{e}"
end
```

### Parameters
This endpoint does not need any parameter.

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



