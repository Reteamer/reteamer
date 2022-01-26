# SwaggerClient::FormApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**collect_form_data**](FormApi.md#collect_form_data) | **POST** /v1/org/{orgId}/form/{formId}/collect | Collect data for an existing form, sending emails and chat notifications to people being requested
[**create_form**](FormApi.md#create_form) | **POST** /v1/org/{orgId}/form | Create a form
[**delete_form**](FormApi.md#delete_form) | **DELETE** /v1/org/{orgId}/form/{formId} | Delete a form
[**delete_forms**](FormApi.md#delete_forms) | **DELETE** /v1/org/{orgId}/form/delete | Delete forms
[**find_forms**](FormApi.md#find_forms) | **GET** /v1/org/{orgId}/form | Return all forms in the organization paginated
[**find_forms_for_person**](FormApi.md#find_forms_for_person) | **GET** /v1/org/{orgId}/form/person/{personId} | Return all active forms applicable to a particular person
[**get_form**](FormApi.md#get_form) | **GET** /v1/org/{orgId}/form/{formId} | Return a particular form by id
[**get_form_draft**](FormApi.md#get_form_draft) | **GET** /v1/org/{orgId}/form/{formId}/draft | Get the current state of form draft data
[**remind_form_data**](FormApi.md#remind_form_data) | **POST** /v1/org/{orgId}/form/{formId}/remind | Sends reminder for a form with existing todos, sending emails and chat notifications to people being requested
[**submit_form**](FormApi.md#submit_form) | **POST** /v1/org/{orgId}/form/{formId} | Submit data from a form
[**submit_form_draft**](FormApi.md#submit_form_draft) | **POST** /v1/org/{orgId}/form/{formId}/draft | Submit draft data from a form
[**update_form**](FormApi.md#update_form) | **PATCH** /v1/org/{orgId}/form/{formId} | Update an existing form
[**update_form_status**](FormApi.md#update_form_status) | **POST** /v1/org/{orgId}/form/status | Update status for existing forms


# **collect_form_data**
> Form collect_form_data(org_id, form_id, opts)

Collect data for an existing form, sending emails and chat notifications to people being requested



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::FormApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

form_id = 'form_id_example' # String | Form id

opts = { 
  body: SwaggerClient::FormCollectRequest.new # FormCollectRequest | Details on the data collection
}

begin
  #Collect data for an existing form, sending emails and chat notifications to people being requested
  result = api_instance.collect_form_data(org_id, form_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling FormApi->collect_form_data: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **form_id** | **String**| Form id | 
 **body** | [**FormCollectRequest**](FormCollectRequest.md)| Details on the data collection | [optional] 

### Return type

[**Form**](Form.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **create_form**
> Form create_form(org_id, opts)

Create a form



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::FormApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  body: SwaggerClient::CreateForm.new # CreateForm | Form data to create
}

begin
  #Create a form
  result = api_instance.create_form(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling FormApi->create_form: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **body** | [**CreateForm**](CreateForm.md)| Form data to create | [optional] 

### Return type

[**Form**](Form.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **delete_form**
> delete_form(org_id, form_id)

Delete a form



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::FormApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

form_id = 'form_id_example' # String | Form id


begin
  #Delete a form
  api_instance.delete_form(org_id, form_id)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling FormApi->delete_form: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **form_id** | **String**| Form id | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **delete_forms**
> delete_forms(org_id, opts)

Delete forms



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::FormApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  body: [SwaggerClient::Array<String>.new] # Array<String> | Form ids
}

begin
  #Delete forms
  api_instance.delete_forms(org_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling FormApi->delete_forms: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **body** | **Array&lt;String&gt;**| Form ids | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **find_forms**
> ResultsForm find_forms(org_id, opts)

Return all forms in the organization paginated



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::FormApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  status: 'status_example', # String | Status to filter by
  from: 'from_example', # String | Form id to start paginating from
  limit: 56 # Integer | Number of results to return
}

begin
  #Return all forms in the organization paginated
  result = api_instance.find_forms(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling FormApi->find_forms: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **status** | **String**| Status to filter by | [optional] 
 **from** | **String**| Form id to start paginating from | [optional] 
 **limit** | **Integer**| Number of results to return | [optional] 

### Return type

[**ResultsForm**](ResultsForm.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **find_forms_for_person**
> ResultsForm find_forms_for_person(org_id, person_id)

Return all active forms applicable to a particular person



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::FormApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

person_id = 'person_id_example' # String | Person id


begin
  #Return all active forms applicable to a particular person
  result = api_instance.find_forms_for_person(org_id, person_id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling FormApi->find_forms_for_person: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **person_id** | **String**| Person id | 

### Return type

[**ResultsForm**](ResultsForm.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_form**
> Form get_form(org_id, form_id)

Return a particular form by id



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::FormApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

form_id = 'form_id_example' # String | Form id


begin
  #Return a particular form by id
  result = api_instance.get_form(org_id, form_id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling FormApi->get_form: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **form_id** | **String**| Form id | 

### Return type

[**Form**](Form.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_form_draft**
> FormDraft get_form_draft(org_id, form_id, opts)

Get the current state of form draft data



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::FormApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

form_id = 'form_id_example' # String | Form id

opts = { 
  person_id: 'person_id_example' # String | Person id
}

begin
  #Get the current state of form draft data
  result = api_instance.get_form_draft(org_id, form_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling FormApi->get_form_draft: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **form_id** | **String**| Form id | 
 **person_id** | **String**| Person id | [optional] 

### Return type

[**FormDraft**](FormDraft.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **remind_form_data**
> Form remind_form_data(org_id, form_id, opts)

Sends reminder for a form with existing todos, sending emails and chat notifications to people being requested



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::FormApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

form_id = 'form_id_example' # String | Form id

opts = { 
  body: SwaggerClient::FormCollectRequest.new # FormCollectRequest | Details on the data collection
}

begin
  #Sends reminder for a form with existing todos, sending emails and chat notifications to people being requested
  result = api_instance.remind_form_data(org_id, form_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling FormApi->remind_form_data: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **form_id** | **String**| Form id | 
 **body** | [**FormCollectRequest**](FormCollectRequest.md)| Details on the data collection | [optional] 

### Return type

[**Form**](Form.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **submit_form**
> Form submit_form(org_id, form_id, opts)

Submit data from a form



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::FormApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

form_id = 'form_id_example' # String | Org id

opts = { 
  body: SwaggerClient::FormSubmitRequest.new # FormSubmitRequest | Form data to submit
}

begin
  #Submit data from a form
  result = api_instance.submit_form(org_id, form_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling FormApi->submit_form: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **form_id** | **String**| Org id | 
 **body** | [**FormSubmitRequest**](FormSubmitRequest.md)| Form data to submit | [optional] 

### Return type

[**Form**](Form.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **submit_form_draft**
> FormDraft submit_form_draft(org_id, form_id, opts)

Submit draft data from a form



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::FormApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

form_id = 'form_id_example' # String | Org id

opts = { 
  body: SwaggerClient::FormSubmitRequest.new # FormSubmitRequest | Form data to submit
}

begin
  #Submit draft data from a form
  result = api_instance.submit_form_draft(org_id, form_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling FormApi->submit_form_draft: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **form_id** | **String**| Org id | 
 **body** | [**FormSubmitRequest**](FormSubmitRequest.md)| Form data to submit | [optional] 

### Return type

[**FormDraft**](FormDraft.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **update_form**
> update_form(org_id, form_id, opts)

Update an existing form



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::FormApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

form_id = 'form_id_example' # String | Form id

opts = { 
  body: SwaggerClient::UpdateForm.new # UpdateForm | Form data to update
}

begin
  #Update an existing form
  api_instance.update_form(org_id, form_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling FormApi->update_form: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **form_id** | **String**| Form id | 
 **body** | [**UpdateForm**](UpdateForm.md)| Form data to update | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **update_form_status**
> update_form_status(org_id, opts)

Update status for existing forms



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::FormApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  body: SwaggerClient::FormStatusUpdateRequest.new # FormStatusUpdateRequest | Form data to update
}

begin
  #Update status for existing forms
  api_instance.update_form_status(org_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling FormApi->update_form_status: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **body** | [**FormStatusUpdateRequest**](FormStatusUpdateRequest.md)| Form data to update | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



