# SwaggerClient::SamlApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_xml_certificate**](SamlApi.md#get_xml_certificate) | **GET** /saml/org/{orgId}/xml-cert | Save per org Xml Cert from IDP
[**redirect_to_idp**](SamlApi.md#redirect_to_idp) | **POST** /saml/{org}/login | Return an redirect to the designated Idp, given an identity provider
[**sso**](SamlApi.md#sso) | **POST** /saml/sso/{org} | Single sign on URL, where SAML assertion is perform
[**upload_xml_certificate**](SamlApi.md#upload_xml_certificate) | **POST** /saml/org/{orgId}/xml-cert | Save per org Xml Cert from IDP


# **get_xml_certificate**
> get_xml_certificate(org_id, opts)

Save per org Xml Cert from IDP



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::SamlApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  idp: 'idp_example' # String | Identifier Provider
}

begin
  #Save per org Xml Cert from IDP
  api_instance.get_xml_certificate(org_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling SamlApi->get_xml_certificate: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **idp** | **String**| Identifier Provider | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **redirect_to_idp**
> redirect_to_idp(org, opts)

Return an redirect to the designated Idp, given an identity provider



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::SamlApi.new

org = 'org_example' # String | Org slug

opts = { 
  idp: 'idp_example' # String | Identifier Provider
}

begin
  #Return an redirect to the designated Idp, given an identity provider
  api_instance.redirect_to_idp(org, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling SamlApi->redirect_to_idp: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org** | **String**| Org slug | 
 **idp** | **String**| Identifier Provider | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/xml



# **sso**
> sso(org, opts)

Single sign on URL, where SAML assertion is perform



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::SamlApi.new

org = 'org_example' # String | Org slug

opts = { 
  saml_response: 'saml_response_example', # String | SAML Response
  relay_state: 'relay_state_example' # String | Relay State
}

begin
  #Single sign on URL, where SAML assertion is perform
  api_instance.sso(org, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling SamlApi->sso: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org** | **String**| Org slug | 
 **saml_response** | **String**| SAML Response | [optional] 
 **relay_state** | **String**| Relay State | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/xml



# **upload_xml_certificate**
> upload_xml_certificate(org_id, opts)

Save per org Xml Cert from IDP



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::SamlApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  idp: 'idp_example', # String | Identifier Provider
  file: File.new('/path/to/file.txt') # File | 
}

begin
  #Save per org Xml Cert from IDP
  api_instance.upload_xml_certificate(org_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling SamlApi->upload_xml_certificate: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **idp** | **String**| Identifier Provider | [optional] 
 **file** | **File**|  | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json



