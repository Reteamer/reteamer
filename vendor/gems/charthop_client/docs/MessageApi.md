# SwaggerClient::MessageApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulk_mark_as_read**](MessageApi.md#bulk_mark_as_read) | **POST** /v1/org/{orgId}/message/bulk/read | Sets each of the designated message&#39;s &#x60;readAt&#x60; property
[**bulk_mark_as_seen**](MessageApi.md#bulk_mark_as_seen) | **POST** /v1/org/{orgId}/message/bulk/seen | Marks each message as &#x60;seen&#x60;
[**create_message**](MessageApi.md#create_message) | **POST** /v1/org/{orgId}/message | Create a new message
[**get_message**](MessageApi.md#get_message) | **GET** /v1/org/{orgId}/message/{messageId} | Return a particular message by id
[**get_message_by_key**](MessageApi.md#get_message_by_key) | **GET** /v1/org/{orgId}/message/me/{messageKey} | Return a particular message by key
[**mark_as_read**](MessageApi.md#mark_as_read) | **POST** /v1/org/{orgId}/message/{messageId}/read | Sets the designated message&#39;s &#x60;readAt&#x60; property
[**me**](MessageApi.md#me) | **GET** /v1/org/{orgId}/message/me | Return all messages for a particular user


# **bulk_mark_as_read**
> bulk_mark_as_read(org_id, opts)

Sets each of the designated message's `readAt` property



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::MessageApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  body: [SwaggerClient::PartialMessage.new] # Array<PartialMessage> | Messages to update
}

begin
  #Sets each of the designated message's `readAt` property
  api_instance.bulk_mark_as_read(org_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling MessageApi->bulk_mark_as_read: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **body** | [**Array&lt;PartialMessage&gt;**](PartialMessage.md)| Messages to update | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **bulk_mark_as_seen**
> bulk_mark_as_seen(org_id, opts)

Marks each message as `seen`



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::MessageApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  body: [SwaggerClient::PartialMessage.new] # Array<PartialMessage> | Messages to update
}

begin
  #Marks each message as `seen`
  api_instance.bulk_mark_as_seen(org_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling MessageApi->bulk_mark_as_seen: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **body** | [**Array&lt;PartialMessage&gt;**](PartialMessage.md)| Messages to update | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **create_message**
> Message create_message(org_id, opts)

Create a new message



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::MessageApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  body: SwaggerClient::PartialMessage.new # PartialMessage | Message data to create
}

begin
  #Create a new message
  result = api_instance.create_message(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling MessageApi->create_message: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **body** | [**PartialMessage**](PartialMessage.md)| Message data to create | [optional] 

### Return type

[**Message**](Message.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_message**
> Message get_message(org_id, message_id)

Return a particular message by id



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::MessageApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

message_id = 'message_id_example' # String | Message id


begin
  #Return a particular message by id
  result = api_instance.get_message(org_id, message_id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling MessageApi->get_message: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **message_id** | **String**| Message id | 

### Return type

[**Message**](Message.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_message_by_key**
> Message get_message_by_key(org_id, message_key)

Return a particular message by key



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::MessageApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

message_key = 'message_key_example' # String | Message key


begin
  #Return a particular message by key
  result = api_instance.get_message_by_key(org_id, message_key)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling MessageApi->get_message_by_key: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **message_key** | **String**| Message key | 

### Return type

[**Message**](Message.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **mark_as_read**
> mark_as_read(org_id, message_id)

Sets the designated message's `readAt` property



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::MessageApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

message_id = 'message_id_example' # String | Message id


begin
  #Sets the designated message's `readAt` property
  api_instance.mark_as_read(org_id, message_id)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling MessageApi->mark_as_read: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **message_id** | **String**| Message id | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **me**
> ResultsMessage me(org_id, opts)

Return all messages for a particular user



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::MessageApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  type: 'type_example', # String | Message \"type\" (WEB, CHAT, or EMAIL)
  unread_only: true, # BOOLEAN | Message \"status\" (read or unread)
  from: 'from_example', # String | MessageId to start paginating from
  limit: 56 # Integer | Limit
}

begin
  #Return all messages for a particular user
  result = api_instance.me(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling MessageApi->me: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **type** | **String**| Message \&quot;type\&quot; (WEB, CHAT, or EMAIL) | [optional] 
 **unread_only** | **BOOLEAN**| Message \&quot;status\&quot; (read or unread) | [optional] 
 **from** | **String**| MessageId to start paginating from | [optional] 
 **limit** | **Integer**| Limit | [optional] 

### Return type

[**ResultsMessage**](ResultsMessage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



