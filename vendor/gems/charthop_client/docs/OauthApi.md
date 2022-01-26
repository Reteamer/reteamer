# SwaggerClient::OauthApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_token**](OauthApi.md#delete_token) | **DELETE** /oauth/token | Delete the current Oauth2 bearer token (for signout)
[**handle_redirect**](OauthApi.md#handle_redirect) | **GET** /oauth/app/{appName} | Process an Oauth2 redirect request from an access request for an app installation, storing the accessToken and refreshToken as secrets for the app
[**issue_access_token**](OauthApi.md#issue_access_token) | **POST** /oauth/token | Return an Oauth2 Authorization bearer token, given a username and password
[**issue_sso_token**](OauthApi.md#issue_sso_token) | **POST** /oauth/token/sso/{type} | Return an Oauth2 Authorization bearer token, given a SSO id token
[**issue_view_token**](OauthApi.md#issue_view_token) | **POST** /oauth/token/view | Return a view-as token


# **delete_token**
> delete_token

Delete the current Oauth2 bearer token (for signout)



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::OauthApi.new

begin
  #Delete the current Oauth2 bearer token (for signout)
  api_instance.delete_token
rescue SwaggerClient::ApiError => e
  puts "Exception when calling OauthApi->delete_token: #{e}"
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



# **handle_redirect**
> handle_redirect(app_name, opts)

Process an Oauth2 redirect request from an access request for an app installation, storing the accessToken and refreshToken as secrets for the app



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::OauthApi.new

app_name = 'app_name_example' # String | App name

opts = { 
  state: 'state_example', # String | State, containing orgId and appUserId
  code: 'code_example' # String | Temporary authorization code
}

begin
  #Process an Oauth2 redirect request from an access request for an app installation, storing the accessToken and refreshToken as secrets for the app
  api_instance.handle_redirect(app_name, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling OauthApi->handle_redirect: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_name** | **String**| App name | 
 **state** | **String**| State, containing orgId and appUserId | [optional] 
 **code** | **String**| Temporary authorization code | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **issue_access_token**
> AccessTokenResponse issue_access_token(opts)

Return an Oauth2 Authorization bearer token, given a username and password



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::OauthApi.new

opts = { 
  grant_type: 'grant_type_example', # String | Type of grant; 'password', 'refresh_token', 'authorization_code' supported
  username: 'username_example', # String | Username to authenticate
  password: 'password_example', # String | Password to authenticate
  scope: 'scope_example', # String | Requested access scope or scopes (space separated)
  code: 'code_example', # String | Authorization code
  redirect_uri: 'redirect_uri_example', # String | Redirect URI
  client_id: 'client_id_example', # String | Client id
  refresh_token: 'refresh_token_example' # String | Refresh token
}

begin
  #Return an Oauth2 Authorization bearer token, given a username and password
  result = api_instance.issue_access_token(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling OauthApi->issue_access_token: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grant_type** | **String**| Type of grant; &#39;password&#39;, &#39;refresh_token&#39;, &#39;authorization_code&#39; supported | [optional] 
 **username** | **String**| Username to authenticate | [optional] 
 **password** | **String**| Password to authenticate | [optional] 
 **scope** | **String**| Requested access scope or scopes (space separated) | [optional] 
 **code** | **String**| Authorization code | [optional] 
 **redirect_uri** | **String**| Redirect URI | [optional] 
 **client_id** | **String**| Client id | [optional] 
 **refresh_token** | **String**| Refresh token | [optional] 

### Return type

[**AccessTokenResponse**](AccessTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json



# **issue_sso_token**
> AccessTokenResponse issue_sso_token(type, opts)

Return an Oauth2 Authorization bearer token, given a SSO id token



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::OauthApi.new

type = 'type_example' # String | type of SSO request (google or microsoft)

opts = { 
  token: 'token_example', # String | token that is used as a basis for reset
  create_org: true, # BOOLEAN | automatically create org if possible to do so
  signup_source: 'signup_source_example', # String | sign up source (self-serve, connect, or sequoia)
  body: SwaggerClient::GoogleIdTokenRequest.new # GoogleIdTokenRequest | id token from google login client side
}

begin
  #Return an Oauth2 Authorization bearer token, given a SSO id token
  result = api_instance.issue_sso_token(type, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling OauthApi->issue_sso_token: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| type of SSO request (google or microsoft) | 
 **token** | **String**| token that is used as a basis for reset | [optional] 
 **create_org** | **BOOLEAN**| automatically create org if possible to do so | [optional] 
 **signup_source** | **String**| sign up source (self-serve, connect, or sequoia) | [optional] 
 **body** | [**GoogleIdTokenRequest**](GoogleIdTokenRequest.md)| id token from google login client side | [optional] 

### Return type

[**AccessTokenResponse**](AccessTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **issue_view_token**
> AccessTokenResponse issue_view_token(opts)

Return a view-as token



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::OauthApi.new

opts = { 
  body: SwaggerClient::ViewAsRequest.new # ViewAsRequest | request on whom to view as
}

begin
  #Return a view-as token
  result = api_instance.issue_view_token(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling OauthApi->issue_view_token: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ViewAsRequest**](ViewAsRequest.md)| request on whom to view as | [optional] 

### Return type

[**AccessTokenResponse**](AccessTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



