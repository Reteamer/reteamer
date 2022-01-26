# SwaggerClient::CategoryApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_category**](CategoryApi.md#create_category) | **POST** /v1/org/{orgId}/category | Create a category
[**delete_category**](CategoryApi.md#delete_category) | **DELETE** /v1/org/{orgId}/category/{categoryId} | Delete a category
[**get_categories**](CategoryApi.md#get_categories) | **GET** /v1/org/{orgId}/category | Return categories that are available to the organization
[**get_category**](CategoryApi.md#get_category) | **GET** /v1/org/{orgId}/category/{categoryId} | Return a particular category by id
[**update_category**](CategoryApi.md#update_category) | **PATCH** /v1/org/{orgId}/category/{categoryId} | Update an existing category


# **create_category**
> Category create_category(org_id, opts)

Create a category



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CategoryApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  body: SwaggerClient::CreateCategory.new # CreateCategory | Category data to create
}

begin
  #Create a category
  result = api_instance.create_category(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CategoryApi->create_category: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **body** | [**CreateCategory**](CreateCategory.md)| Category data to create | [optional] 

### Return type

[**Category**](Category.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **delete_category**
> delete_category(org_id, category_id)

Delete a category



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CategoryApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

category_id = 'category_id_example' # String | Category id


begin
  #Delete a category
  api_instance.delete_category(org_id, category_id)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CategoryApi->delete_category: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **category_id** | **String**| Category id | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_categories**
> ResultsCategory get_categories(org_id, opts)

Return categories that are available to the organization



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CategoryApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  type: 'type_example', # String | (Optional) Return only built-in or custom categories
  unsorted: true # BOOLEAN | (Optional) Return categories array unsorted
}

begin
  #Return categories that are available to the organization
  result = api_instance.get_categories(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CategoryApi->get_categories: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **type** | **String**| (Optional) Return only built-in or custom categories | [optional] 
 **unsorted** | **BOOLEAN**| (Optional) Return categories array unsorted | [optional] 

### Return type

[**ResultsCategory**](ResultsCategory.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_category**
> Category get_category(org_id, category_id)

Return a particular category by id



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CategoryApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

category_id = 'category_id_example' # String | Category id


begin
  #Return a particular category by id
  result = api_instance.get_category(org_id, category_id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CategoryApi->get_category: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **category_id** | **String**| Category id | 

### Return type

[**Category**](Category.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **update_category**
> update_category(org_id, category_id, opts)

Update an existing category



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CategoryApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

category_id = 'category_id_example' # String | Category id

opts = { 
  body: SwaggerClient::UpdateCategory.new # UpdateCategory | Category data to update
}

begin
  #Update an existing category
  api_instance.update_category(org_id, category_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CategoryApi->update_category: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **category_id** | **String**| Category id | 
 **body** | [**UpdateCategory**](UpdateCategory.md)| Category data to update | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



