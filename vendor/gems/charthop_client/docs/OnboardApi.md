# SwaggerClient::OnboardApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_steps**](OnboardApi.md#get_steps) | **GET** /v1/org/{orgId}/onboard | Returns all the onboarding steps the organization has not completed
[**skip_step**](OnboardApi.md#skip_step) | **POST** /v1/org/{orgId}/onboard/{stepName}/skip | Marks the given onboard step as &#39;skipped&#39; for the given customer


# **get_steps**
> ResultsOnboardStep get_steps(org_id, opts)

Returns all the onboarding steps the organization has not completed



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::OnboardApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  get_uncomplete: true # BOOLEAN | Return only uncompleted steps, or all steps?
}

begin
  #Returns all the onboarding steps the organization has not completed
  result = api_instance.get_steps(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling OnboardApi->get_steps: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **get_uncomplete** | **BOOLEAN**| Return only uncompleted steps, or all steps? | [optional] 

### Return type

[**ResultsOnboardStep**](ResultsOnboardStep.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **skip_step**
> skip_step(org_id, step_name)

Marks the given onboard step as 'skipped' for the given customer



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::OnboardApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

step_name = 'step_name_example' # String | Step name


begin
  #Marks the given onboard step as 'skipped' for the given customer
  api_instance.skip_step(org_id, step_name)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling OnboardApi->skip_step: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **step_name** | **String**| Step name | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



