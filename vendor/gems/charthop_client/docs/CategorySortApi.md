# SwaggerClient::CategorySortApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_category_sort**](CategorySortApi.md#create_category_sort) | **POST** /v1/org/{orgId}/category-sort | Create a category sort order if it doesn&#39;t exist
[**delete_category_sort**](CategorySortApi.md#delete_category_sort) | **DELETE** /v1/org/{orgId}/category-sort | Delete a category sort order
[**get_category_sort**](CategorySortApi.md#get_category_sort) | **GET** /v1/org/{orgId}/category-sort | Return category sort order
[**update_category_sort**](CategorySortApi.md#update_category_sort) | **PATCH** /v1/org/{orgId}/category-sort | Update an existing category sort order


# **create_category_sort**
> CategorySort create_category_sort(org_id, opts)

Create a category sort order if it doesn't exist



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CategorySortApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  body: SwaggerClient::CreateCategorySort.new # CreateCategorySort | Sort data to create
}

begin
  #Create a category sort order if it doesn't exist
  result = api_instance.create_category_sort(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CategorySortApi->create_category_sort: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **body** | [**CreateCategorySort**](CreateCategorySort.md)| Sort data to create | [optional] 

### Return type

[**CategorySort**](CategorySort.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **delete_category_sort**
> delete_category_sort(org_id)

Delete a category sort order



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CategorySortApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)


begin
  #Delete a category sort order
  api_instance.delete_category_sort(org_id)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CategorySortApi->delete_category_sort: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_category_sort**
> CategorySort get_category_sort(org_id)

Return category sort order



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CategorySortApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)


begin
  #Return category sort order
  result = api_instance.get_category_sort(org_id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CategorySortApi->get_category_sort: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 

### Return type

[**CategorySort**](CategorySort.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **update_category_sort**
> update_category_sort(org_id, opts)

Update an existing category sort order



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CategorySortApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  body: SwaggerClient::UpdateCategorySort.new # UpdateCategorySort | Sort data to update
}

begin
  #Update an existing category sort order
  api_instance.update_category_sort(org_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CategorySortApi->update_category_sort: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **body** | [**UpdateCategorySort**](UpdateCategorySort.md)| Sort data to update | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



