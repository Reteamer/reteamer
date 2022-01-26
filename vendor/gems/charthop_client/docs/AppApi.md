# SwaggerClient::AppApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_app**](AppApi.md#create_app) | **POST** /v1/app | Create a new app
[**delete_app**](AppApi.md#delete_app) | **DELETE** /v1/app/{appId} | Delete an app
[**find_apps**](AppApi.md#find_apps) | **GET** /v1/app/org/{orgId} | Return all active apps available for a particular org
[**find_global_apps**](AppApi.md#find_global_apps) | **GET** /v1/app | Return all publicly visible global apps
[**find_installed_apps**](AppApi.md#find_installed_apps) | **GET** /v1/app/org/{orgId}/install | Find installed app users
[**generate_access_token**](AppApi.md#generate_access_token) | **POST** /v1/app/org/{orgId}/install/{appUserId}/token | Generate or regenerate a long-lived access token for the app
[**get_access_token**](AppApi.md#get_access_token) | **GET** /v1/app/org/{orgId}/install/{appUserId}/token | Retrieve the current token for this app
[**get_app**](AppApi.md#get_app) | **GET** /v1/app/{appId} | Return a particular app by id
[**get_app_by_name**](AppApi.md#get_app_by_name) | **GET** /v1/app/name/{appName} | Return a particular app by name
[**get_authorization_code**](AppApi.md#get_authorization_code) | **POST** /v1/app/org/{orgId}/install/{appUserId}/code | Retrieve an Oauth2 authorization code for this app, which can be exchanged for an access token
[**get_installed_app**](AppApi.md#get_installed_app) | **GET** /v1/app/org/{orgId}/install/{appUserId} | Get an installed app
[**get_installed_app_by_name**](AppApi.md#get_installed_app_by_name) | **GET** /v1/app/org/{orgId}/install/name/{appName} | Get an installed app by name
[**install_app**](AppApi.md#install_app) | **POST** /v1/app/org/{orgId}/install | Install an app for a particular org
[**run_installed_app**](AppApi.md#run_installed_app) | **POST** /v1/app/org/{orgId}/install/{appUserId}/run | Run an installed app
[**send_notification**](AppApi.md#send_notification) | **POST** /v1/app/notify | Send an email notification to the configured notify users, on behalf of an app
[**uninstall_app**](AppApi.md#uninstall_app) | **DELETE** /v1/app/org/{orgId}/install/{appUserId} | Uninstall an app
[**update_app**](AppApi.md#update_app) | **PATCH** /v1/app/{appId} | Update an existing app
[**update_installed_app**](AppApi.md#update_installed_app) | **PATCH** /v1/app/org/{orgId}/install/{appUserId} | Update the settings of an installed app
[**validate_bundle**](AppApi.md#validate_bundle) | **GET** /v1/app/org/{orgId}/validate/{appId} | Check if a bundle can be installed for an org.


# **create_app**
> App create_app(opts)

Create a new app



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::AppApi.new

opts = { 
  body: SwaggerClient::CreateApp.new # CreateApp | App data to create
}

begin
  #Create a new app
  result = api_instance.create_app(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AppApi->create_app: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateApp**](CreateApp.md)| App data to create | [optional] 

### Return type

[**App**](App.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **delete_app**
> delete_app(app_id)

Delete an app



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::AppApi.new

app_id = 'app_id_example' # String | App id


begin
  #Delete an app
  api_instance.delete_app(app_id)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AppApi->delete_app: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **String**| App id | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **find_apps**
> ResultsApp find_apps(org_id, opts)

Return all active apps available for a particular org



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::AppApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  q: 'q_example', # String | Search query
  type: 'type_example', # String | Filter by type (app, bundle)
  from: 'from_example', # String | App id to start from
  limit: 56 # Integer | Number of results to return
}

begin
  #Return all active apps available for a particular org
  result = api_instance.find_apps(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AppApi->find_apps: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **q** | **String**| Search query | [optional] 
 **type** | **String**| Filter by type (app, bundle) | [optional] 
 **from** | **String**| App id to start from | [optional] 
 **limit** | **Integer**| Number of results to return | [optional] 

### Return type

[**ResultsApp**](ResultsApp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **find_global_apps**
> ResultsApp find_global_apps(opts)

Return all publicly visible global apps



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::AppApi.new

opts = { 
  tag: 'tag_example', # String | Tag to filter by
  from: 'from_example', # String | App id to start from
  limit: 56 # Integer | Number of results to return
}

begin
  #Return all publicly visible global apps
  result = api_instance.find_global_apps(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AppApi->find_global_apps: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | **String**| Tag to filter by | [optional] 
 **from** | **String**| App id to start from | [optional] 
 **limit** | **Integer**| Number of results to return | [optional] 

### Return type

[**ResultsApp**](ResultsApp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **find_installed_apps**
> ResultsUser find_installed_apps(org_id, opts)

Find installed app users



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::AppApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  type: 'type_example', # String | Filter by type (app, bundle)
  from: 'from_example', # String | App id to start from
  limit: 56 # Integer | Number of results to return
}

begin
  #Find installed app users
  result = api_instance.find_installed_apps(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AppApi->find_installed_apps: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **type** | **String**| Filter by type (app, bundle) | [optional] 
 **from** | **String**| App id to start from | [optional] 
 **limit** | **Integer**| Number of results to return | [optional] 

### Return type

[**ResultsUser**](ResultsUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **generate_access_token**
> AccessTokenResponse generate_access_token(org_id, app_user_id, opts)

Generate or regenerate a long-lived access token for the app



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::AppApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

app_user_id = 'app_user_id_example' # String | App user id

opts = { 
  body: SwaggerClient::ScopeRequest.new # ScopeRequest | 
}

begin
  #Generate or regenerate a long-lived access token for the app
  result = api_instance.generate_access_token(org_id, app_user_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AppApi->generate_access_token: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **app_user_id** | **String**| App user id | 
 **body** | [**ScopeRequest**](ScopeRequest.md)|  | [optional] 

### Return type

[**AccessTokenResponse**](AccessTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_access_token**
> AccessTokenResponse get_access_token(org_id, app_user_id)

Retrieve the current token for this app



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::AppApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

app_user_id = 'app_user_id_example' # String | App user id


begin
  #Retrieve the current token for this app
  result = api_instance.get_access_token(org_id, app_user_id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AppApi->get_access_token: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **app_user_id** | **String**| App user id | 

### Return type

[**AccessTokenResponse**](AccessTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_app**
> App get_app(app_id)

Return a particular app by id



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::AppApi.new

app_id = 'app_id_example' # String | App id


begin
  #Return a particular app by id
  result = api_instance.get_app(app_id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AppApi->get_app: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **String**| App id | 

### Return type

[**App**](App.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_app_by_name**
> App get_app_by_name(app_name)

Return a particular app by name



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::AppApi.new

app_name = 'app_name_example' # String | App name


begin
  #Return a particular app by name
  result = api_instance.get_app_by_name(app_name)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AppApi->get_app_by_name: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_name** | **String**| App name | 

### Return type

[**App**](App.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_authorization_code**
> AccessTokenResponse get_authorization_code(org_id, app_user_id, opts)

Retrieve an Oauth2 authorization code for this app, which can be exchanged for an access token



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::AppApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

app_user_id = 'app_user_id_example' # String | App user id

opts = { 
  scope: 'scope_example' # String | Scopes
}

begin
  #Retrieve an Oauth2 authorization code for this app, which can be exchanged for an access token
  result = api_instance.get_authorization_code(org_id, app_user_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AppApi->get_authorization_code: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **app_user_id** | **String**| App user id | 
 **scope** | **String**| Scopes | [optional] 

### Return type

[**AccessTokenResponse**](AccessTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_installed_app**
> User get_installed_app(org_id, app_user_id)

Get an installed app



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::AppApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

app_user_id = 'app_user_id_example' # String | App user id


begin
  #Get an installed app
  result = api_instance.get_installed_app(org_id, app_user_id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AppApi->get_installed_app: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **app_user_id** | **String**| App user id | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_installed_app_by_name**
> User get_installed_app_by_name(org_id, app_name)

Get an installed app by name



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::AppApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

app_name = 'app_name_example' # String | App name


begin
  #Get an installed app by name
  result = api_instance.get_installed_app_by_name(org_id, app_name)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AppApi->get_installed_app_by_name: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **app_name** | **String**| App name | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **install_app**
> install_app(org_id, opts)

Install an app for a particular org



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::AppApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  body: SwaggerClient::CreateUser.new # CreateUser | App user data to create
}

begin
  #Install an app for a particular org
  api_instance.install_app(org_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AppApi->install_app: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **body** | [**CreateUser**](CreateUser.md)| App user data to create | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **run_installed_app**
> Process run_installed_app(org_id, app_user_id, opts)

Run an installed app



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::AppApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

app_user_id = 'app_user_id_example' # String | App user id

opts = { 
  body: nil # Object | 
}

begin
  #Run an installed app
  result = api_instance.run_installed_app(org_id, app_user_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AppApi->run_installed_app: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **app_user_id** | **String**| App user id | 
 **body** | **Object**|  | [optional] 

### Return type

[**Process**](Process.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **send_notification**
> send_notification(opts)

Send an email notification to the configured notify users, on behalf of an app



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::AppApi.new

opts = { 
  body: SwaggerClient::NotifyRequest.new # NotifyRequest | 
}

begin
  #Send an email notification to the configured notify users, on behalf of an app
  api_instance.send_notification(opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AppApi->send_notification: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**NotifyRequest**](NotifyRequest.md)|  | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **uninstall_app**
> uninstall_app(org_id, app_user_id)

Uninstall an app



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::AppApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

app_user_id = 'app_user_id_example' # String | App user id


begin
  #Uninstall an app
  api_instance.uninstall_app(org_id, app_user_id)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AppApi->uninstall_app: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **app_user_id** | **String**| App user id | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **update_app**
> update_app(app_id, opts)

Update an existing app



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::AppApi.new

app_id = 'app_id_example' # String | App id

opts = { 
  body: SwaggerClient::UpdateApp.new # UpdateApp | App data to update
}

begin
  #Update an existing app
  api_instance.update_app(app_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AppApi->update_app: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **String**| App id | 
 **body** | [**UpdateApp**](UpdateApp.md)| App data to update | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **update_installed_app**
> update_installed_app(org_id, app_user_id, opts)

Update the settings of an installed app



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::AppApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

app_user_id = 'app_user_id_example' # String | App user id

opts = { 
  body: SwaggerClient::UpdateUser.new # UpdateUser | App user data to update
}

begin
  #Update the settings of an installed app
  api_instance.update_installed_app(org_id, app_user_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AppApi->update_installed_app: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **app_user_id** | **String**| App user id | 
 **body** | [**UpdateUser**](UpdateUser.md)| App user data to update | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **validate_bundle**
> Bundle validate_bundle(org_id, app_id)

Check if a bundle can be installed for an org.



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::AppApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

app_id = 'app_id_example' # String | App id


begin
  #Check if a bundle can be installed for an org.
  result = api_instance.validate_bundle(org_id, app_id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AppApi->validate_bundle: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **app_id** | **String**| App id | 

### Return type

[**Bundle**](Bundle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



