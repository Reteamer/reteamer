# SwaggerClient::OrgConfigApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_org_config**](OrgConfigApi.md#create_org_config) | **POST** /v1/org/{orgId}/config | Create an org config if it doesn&#39;t exist
[**delete_org_config**](OrgConfigApi.md#delete_org_config) | **DELETE** /v1/org/{orgId}/config | Delete an org config
[**get_org_config**](OrgConfigApi.md#get_org_config) | **GET** /v1/org/{orgId}/config | Return config for a given org
[**update_org_config**](OrgConfigApi.md#update_org_config) | **PATCH** /v1/org/{orgId}/config | Update an existing org config


# **create_org_config**
> OrgConfig create_org_config(org_id, opts)

Create an org config if it doesn't exist



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::OrgConfigApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  body: SwaggerClient::CreateOrgConfig.new # CreateOrgConfig | Org config to create
}

begin
  #Create an org config if it doesn't exist
  result = api_instance.create_org_config(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling OrgConfigApi->create_org_config: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **body** | [**CreateOrgConfig**](CreateOrgConfig.md)| Org config to create | [optional] 

### Return type

[**OrgConfig**](OrgConfig.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **delete_org_config**
> delete_org_config(org_id)

Delete an org config



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::OrgConfigApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)


begin
  #Delete an org config
  api_instance.delete_org_config(org_id)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling OrgConfigApi->delete_org_config: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_org_config**
> OrgConfig get_org_config(org_id)

Return config for a given org



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::OrgConfigApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)


begin
  #Return config for a given org
  result = api_instance.get_org_config(org_id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling OrgConfigApi->get_org_config: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 

### Return type

[**OrgConfig**](OrgConfig.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **update_org_config**
> update_org_config(org_id, opts)

Update an existing org config



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::OrgConfigApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  body: SwaggerClient::UpdateOrgConfig.new # UpdateOrgConfig | Sort data to update
}

begin
  #Update an existing org config
  api_instance.update_org_config(org_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling OrgConfigApi->update_org_config: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **body** | [**UpdateOrgConfig**](UpdateOrgConfig.md)| Sort data to update | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



