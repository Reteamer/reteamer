# SwaggerClient::FieldApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_field**](FieldApi.md#create_field) | **POST** /v1/org/{orgId}/field | Create a field
[**delete_field**](FieldApi.md#delete_field) | **DELETE** /v1/org/{orgId}/field/{fieldId} | Delete a field
[**delete_fields**](FieldApi.md#delete_fields) | **DELETE** /v1/org/{orgId}/field/delete | Delete fields
[**find_fields**](FieldApi.md#find_fields) | **GET** /v1/org/{orgId}/field | Return all fields in the organization paginated
[**get_field**](FieldApi.md#get_field) | **GET** /v1/org/{orgId}/field/{fieldId} | Return a particular field by id
[**remove_field_category**](FieldApi.md#remove_field_category) | **POST** /v1/org/{orgId}/field/remove-category | Remove field from all associated categories
[**update_field**](FieldApi.md#update_field) | **PATCH** /v1/org/{orgId}/field/{fieldId} | Update an existing field
[**update_field_dry_run**](FieldApi.md#update_field_dry_run) | **PATCH** /v1/org/{orgId}/field/{fieldId}/dryrun | Perform a dry-run of an update to an existing field that will require migrations
[**update_field_status**](FieldApi.md#update_field_status) | **POST** /v1/org/{orgId}/field/status | Update status for existing fields


# **create_field**
> Field create_field(org_id, opts)

Create a field



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::FieldApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  body: SwaggerClient::CreateField.new # CreateField | Field data to create
}

begin
  #Create a field
  result = api_instance.create_field(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling FieldApi->create_field: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **body** | [**CreateField**](CreateField.md)| Field data to create | [optional] 

### Return type

[**Field**](Field.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **delete_field**
> delete_field(org_id, field_id)

Delete a field



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::FieldApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

field_id = 'field_id_example' # String | Field id


begin
  #Delete a field
  api_instance.delete_field(org_id, field_id)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling FieldApi->delete_field: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **field_id** | **String**| Field id | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **delete_fields**
> delete_fields(org_id, opts)

Delete fields



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::FieldApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  body: [SwaggerClient::Array<String>.new] # Array<String> | Field ids
}

begin
  #Delete fields
  api_instance.delete_fields(org_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling FieldApi->delete_fields: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **body** | **Array&lt;String&gt;**| Field ids | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **find_fields**
> ResultsField find_fields(org_id, opts)

Return all fields in the organization paginated



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::FieldApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  from: 'from_example', # String | Field id to start paginating from
  limit: 56 # Integer | Number of results to return
}

begin
  #Return all fields in the organization paginated
  result = api_instance.find_fields(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling FieldApi->find_fields: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **from** | **String**| Field id to start paginating from | [optional] 
 **limit** | **Integer**| Number of results to return | [optional] 

### Return type

[**ResultsField**](ResultsField.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_field**
> Field get_field(org_id, field_id)

Return a particular field by id



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::FieldApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

field_id = 'field_id_example' # String | Field id


begin
  #Return a particular field by id
  result = api_instance.get_field(org_id, field_id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling FieldApi->get_field: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **field_id** | **String**| Field id | 

### Return type

[**Field**](Field.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **remove_field_category**
> remove_field_category(org_id, opts)

Remove field from all associated categories



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::FieldApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  body: SwaggerClient::FieldRemoveCategoryRequest.new # FieldRemoveCategoryRequest | Fields to set as uncategorized
}

begin
  #Remove field from all associated categories
  api_instance.remove_field_category(org_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling FieldApi->remove_field_category: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **body** | [**FieldRemoveCategoryRequest**](FieldRemoveCategoryRequest.md)| Fields to set as uncategorized | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **update_field**
> update_field(org_id, field_id, opts)

Update an existing field



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::FieldApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

field_id = 'field_id_example' # String | Field id

opts = { 
  body: SwaggerClient::UpdateField.new # UpdateField | Field data to update
}

begin
  #Update an existing field
  api_instance.update_field(org_id, field_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling FieldApi->update_field: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **field_id** | **String**| Field id | 
 **body** | [**UpdateField**](UpdateField.md)| Field data to update | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **update_field_dry_run**
> update_field_dry_run(org_id, field_id, opts)

Perform a dry-run of an update to an existing field that will require migrations



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::FieldApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

field_id = 'field_id_example' # String | Field id

opts = { 
  body: SwaggerClient::UpdateField.new # UpdateField | Field data to update
}

begin
  #Perform a dry-run of an update to an existing field that will require migrations
  api_instance.update_field_dry_run(org_id, field_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling FieldApi->update_field_dry_run: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **field_id** | **String**| Field id | 
 **body** | [**UpdateField**](UpdateField.md)| Field data to update | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **update_field_status**
> update_field_status(org_id, opts)

Update status for existing fields



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::FieldApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  body: SwaggerClient::FieldStatusUpdateRequest.new # FieldStatusUpdateRequest | Field data to update
}

begin
  #Update status for existing fields
  api_instance.update_field_status(org_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling FieldApi->update_field_status: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **body** | [**FieldStatusUpdateRequest**](FieldStatusUpdateRequest.md)| Field data to update | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



