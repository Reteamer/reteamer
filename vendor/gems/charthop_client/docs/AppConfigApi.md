# SwaggerClient::AppConfigApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_app_config**](AppConfigApi.md#create_app_config) | **POST** /v1/app-config | Create a new app config
[**get_app_config**](AppConfigApi.md#get_app_config) | **GET** /v1/app-config/{appId} | Return default app configuration by app
[**get_combined_app_config**](AppConfigApi.md#get_combined_app_config) | **GET** /v1/app-config/{appId}/{userId} | Return user app configuration by app and user
[**update_app_config**](AppConfigApi.md#update_app_config) | **PATCH** /v1/app-config/{appId}/{userId} | Update an existing app


# **create_app_config**
> AppConfig create_app_config(opts)

Create a new app config



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::AppConfigApi.new

opts = { 
  body: SwaggerClient::CreateAppConfig.new # CreateAppConfig | App config data to create
}

begin
  #Create a new app config
  result = api_instance.create_app_config(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AppConfigApi->create_app_config: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateAppConfig**](CreateAppConfig.md)| App config data to create | [optional] 

### Return type

[**AppConfig**](AppConfig.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_app_config**
> AppConfig get_app_config(app_id)

Return default app configuration by app



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::AppConfigApi.new

app_id = 'app_id_example' # String | App id


begin
  #Return default app configuration by app
  result = api_instance.get_app_config(app_id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AppConfigApi->get_app_config: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **String**| App id | 

### Return type

[**AppConfig**](AppConfig.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_combined_app_config**
> AppConfig get_combined_app_config(app_id, user_id)

Return user app configuration by app and user



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::AppConfigApi.new

app_id = 'app_id_example' # String | App id

user_id = 'user_id_example' # String | User id


begin
  #Return user app configuration by app and user
  result = api_instance.get_combined_app_config(app_id, user_id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AppConfigApi->get_combined_app_config: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **String**| App id | 
 **user_id** | **String**| User id | 

### Return type

[**AppConfig**](AppConfig.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **update_app_config**
> update_app_config(app_id, user_id, opts)

Update an existing app



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::AppConfigApi.new

app_id = 'app_id_example' # String | App id

user_id = 'user_id_example' # String | User id

opts = { 
  body: SwaggerClient::UpdateAppConfig.new # UpdateAppConfig | App data to update
}

begin
  #Update an existing app
  api_instance.update_app_config(app_id, user_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AppConfigApi->update_app_config: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **String**| App id | 
 **user_id** | **String**| User id | 
 **body** | [**UpdateAppConfig**](UpdateAppConfig.md)| App data to update | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



