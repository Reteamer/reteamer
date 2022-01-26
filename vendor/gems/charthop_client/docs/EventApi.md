# SwaggerClient::EventApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**find_events**](EventApi.md#find_events) | **GET** /v1/event | Return past events, paginated, without payloads present
[**get_event**](EventApi.md#get_event) | **GET** /v1/event/{eventId} | Return individual event, including payload
[**replay_event**](EventApi.md#replay_event) | **POST** /v1/event/{eventId}/notify | Resend all associated notifications for a previous event (superusers only)
[**trigger_event**](EventApi.md#trigger_event) | **POST** /v1/event/org/{orgId}/notify/{appName} | Trigger event with third party integration


# **find_events**
> ResultsEvent find_events(opts)

Return past events, paginated, without payloads present



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::EventApi.new

opts = { 
  org_id: 'org_id_example', # String | Org identifier (either id or slug)
  user_id: 'user_id_example', # String | User id
  entity_id: 'entity_id_example', # String | Entity id
  from: 789, # Integer | Timestamp to start search at
  limit: 56 # Integer | Number of results to return
}

begin
  #Return past events, paginated, without payloads present
  result = api_instance.find_events(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling EventApi->find_events: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | [optional] 
 **user_id** | **String**| User id | [optional] 
 **entity_id** | **String**| Entity id | [optional] 
 **from** | **Integer**| Timestamp to start search at | [optional] 
 **limit** | **Integer**| Number of results to return | [optional] 

### Return type

[**ResultsEvent**](ResultsEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_event**
> Event get_event(event_id, opts)

Return individual event, including payload



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::EventApi.new

event_id = 'event_id_example' # String | 

opts = { 
  body: SwaggerClient::UserAuth.new # UserAuth | 
}

begin
  #Return individual event, including payload
  result = api_instance.get_event(event_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling EventApi->get_event: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_id** | **String**|  | 
 **body** | [**UserAuth**](UserAuth.md)|  | [optional] 

### Return type

[**Event**](Event.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **replay_event**
> replay_event(event_id, opts)

Resend all associated notifications for a previous event (superusers only)



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::EventApi.new

event_id = 'event_id_example' # String | Event id

opts = { 
  app: 'app_example' # String | App name to restrict notifications to
}

begin
  #Resend all associated notifications for a previous event (superusers only)
  api_instance.replay_event(event_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling EventApi->replay_event: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_id** | **String**| Event id | 
 **app** | **String**| App name to restrict notifications to | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **trigger_event**
> trigger_event(org_id, opts)

Trigger event with third party integration



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::EventApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  app: 'app_example', # String | App name to restrict notifications to
  scenario_id: 'scenario_id_example', # String | Scenario id
  body: nil # Object | data
}

begin
  #Trigger event with third party integration
  api_instance.trigger_event(org_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling EventApi->trigger_event: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **app** | **String**| App name to restrict notifications to | [optional] 
 **scenario_id** | **String**| Scenario id | [optional] 
 **body** | **Object**| data | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



