# SwaggerClient::UserApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**change_password**](UserApi.md#change_password) | **POST** /v1/user/{userId}/password | Change a user&#39;s password, or switch a user to SSO
[**create_user**](UserApi.md#create_user) | **POST** /v1/user | Create a new user
[**find_users**](UserApi.md#find_users) | **GET** /v1/user | Return all users within an org or across orgs
[**get_me**](UserApi.md#get_me) | **GET** /v1/user/me | Return the currently logged in user
[**get_me_view**](UserApi.md#get_me_view) | **GET** /v1/user/me/view | Return the user the user is currently viewing as
[**get_user**](UserApi.md#get_user) | **GET** /v1/user/{userId} | Return a particular user by id
[**get_user_by_person_id**](UserApi.md#get_user_by_person_id) | **GET** /v1/user/person/{personId} | Return a particular user by its corresponding person id
[**revoke_user_token**](UserApi.md#revoke_user_token) | **DELETE** /v1/user/{userId}/token | Revoke a user&#39;s access token
[**send_reset_email**](UserApi.md#send_reset_email) | **POST** /v1/user/sendreset | Send a password reset email
[**signup_user**](UserApi.md#signup_user) | **POST** /v1/user/signup | Sign up for a new ChartHop account
[**update_user**](UserApi.md#update_user) | **PATCH** /v1/user/{userId} | Update an existing user


# **change_password**
> change_password(user_id, opts)

Change a user's password, or switch a user to SSO



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::UserApi.new

user_id = 'user_id_example' # String | User id

opts = { 
  body: SwaggerClient::ChangePasswordRequest.new # ChangePasswordRequest | 
}

begin
  #Change a user's password, or switch a user to SSO
  api_instance.change_password(user_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling UserApi->change_password: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **String**| User id | 
 **body** | [**ChangePasswordRequest**](ChangePasswordRequest.md)|  | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **create_user**
> User create_user(opts)

Create a new user



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::UserApi.new

opts = { 
  body: SwaggerClient::CreateUser.new # CreateUser | User data to create
}

begin
  #Create a new user
  result = api_instance.create_user(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling UserApi->create_user: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateUser**](CreateUser.md)| User data to create | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **find_users**
> ResultsUser find_users(opts)

Return all users within an org or across orgs



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::UserApi.new

opts = { 
  org_id: 'org_id_example', # String | Org id to search within
  from: 'from_example', # String | User id to start from
  limit: 56, # Integer | Number of results to return
  sort: 'sort_example' # String | Sort by
}

begin
  #Return all users within an org or across orgs
  result = api_instance.find_users(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling UserApi->find_users: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org id to search within | [optional] 
 **from** | **String**| User id to start from | [optional] 
 **limit** | **Integer**| Number of results to return | [optional] 
 **sort** | **String**| Sort by | [optional] 

### Return type

[**ResultsUser**](ResultsUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_me**
> User get_me

Return the currently logged in user



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::UserApi.new

begin
  #Return the currently logged in user
  result = api_instance.get_me
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling UserApi->get_me: #{e}"
end
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_me_view**
> User get_me_view

Return the user the user is currently viewing as



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::UserApi.new

begin
  #Return the user the user is currently viewing as
  result = api_instance.get_me_view
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling UserApi->get_me_view: #{e}"
end
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_user**
> User get_user(user_id)

Return a particular user by id



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::UserApi.new

user_id = 'user_id_example' # String | User id


begin
  #Return a particular user by id
  result = api_instance.get_user(user_id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling UserApi->get_user: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **String**| User id | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_user_by_person_id**
> User get_user_by_person_id(person_id, opts)

Return a particular user by its corresponding person id



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::UserApi.new

person_id = 'person_id_example' # String | Person id to fetch user for

opts = { 
  org_id: 'org_id_example' # String | Org id to search within
}

begin
  #Return a particular user by its corresponding person id
  result = api_instance.get_user_by_person_id(person_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling UserApi->get_user_by_person_id: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person_id** | **String**| Person id to fetch user for | 
 **org_id** | **String**| Org id to search within | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **revoke_user_token**
> revoke_user_token(user_id)

Revoke a user's access token



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::UserApi.new

user_id = 'user_id_example' # String | User id


begin
  #Revoke a user's access token
  api_instance.revoke_user_token(user_id)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling UserApi->revoke_user_token: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **String**| User id | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **send_reset_email**
> send_reset_email(opts)

Send a password reset email



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::UserApi.new

opts = { 
  body: SwaggerClient::EmailRequest.new # EmailRequest | User email address
}

begin
  #Send a password reset email
  api_instance.send_reset_email(opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling UserApi->send_reset_email: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EmailRequest**](EmailRequest.md)| User email address | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **signup_user**
> signup_user(opts)

Sign up for a new ChartHop account



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::UserApi.new

opts = { 
  body: SwaggerClient::SignupRequest.new # SignupRequest | Signup information
}

begin
  #Sign up for a new ChartHop account
  api_instance.signup_user(opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling UserApi->signup_user: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SignupRequest**](SignupRequest.md)| Signup information | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **update_user**
> update_user(user_id, opts)

Update an existing user



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::UserApi.new

user_id = 'user_id_example' # String | User id

opts = { 
  body: SwaggerClient::UpdateUser.new # UpdateUser | User data to update
}

begin
  #Update an existing user
  api_instance.update_user(user_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling UserApi->update_user: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **String**| User id | 
 **body** | [**UpdateUser**](UpdateUser.md)| User data to update | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



