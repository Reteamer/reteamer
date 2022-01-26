# SwaggerClient::DataViewApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_data_view**](DataViewApi.md#create_data_view) | **POST** /v1/org/{orgId}/data-view | Create a data view
[**delete_data_view**](DataViewApi.md#delete_data_view) | **DELETE** /v1/org/{orgId}/data-view/{dataViewId} | Delete a data  view
[**find_data_views**](DataViewApi.md#find_data_views) | **GET** /v1/org/{orgId}/data-view | Return all data views in the organization paginated
[**get_data_view**](DataViewApi.md#get_data_view) | **GET** /v1/org/{orgId}/data-view/{dataViewId} | Return a particular data view by id
[**update_data_view**](DataViewApi.md#update_data_view) | **PATCH** /v1/org/{orgId}/data-view/{dataViewId} | Update an existing data view


# **create_data_view**
> DataView create_data_view(org_id, opts)

Create a data view



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::DataViewApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  body: SwaggerClient::CreateDataView.new # CreateDataView | Data view data to create
}

begin
  #Create a data view
  result = api_instance.create_data_view(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DataViewApi->create_data_view: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **body** | [**CreateDataView**](CreateDataView.md)| Data view data to create | [optional] 

### Return type

[**DataView**](DataView.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **delete_data_view**
> delete_data_view(org_id, data_view_id)

Delete a data  view



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::DataViewApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

data_view_id = 'data_view_id_example' # String | Data view id


begin
  #Delete a data  view
  api_instance.delete_data_view(org_id, data_view_id)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DataViewApi->delete_data_view: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **data_view_id** | **String**| Data view id | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **find_data_views**
> ResultsDataView find_data_views(org_id, opts)

Return all data views in the organization paginated



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::DataViewApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  from: 'from_example', # String | Data view id to start paginating from
  type: 'type_example', # String | Data view type to filter by
  limit: 56, # Integer | Number of results to return
  ids: 'ids_example' # String | Comma delimited of ids to return
}

begin
  #Return all data views in the organization paginated
  result = api_instance.find_data_views(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DataViewApi->find_data_views: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **from** | **String**| Data view id to start paginating from | [optional] 
 **type** | **String**| Data view type to filter by | [optional] 
 **limit** | **Integer**| Number of results to return | [optional] 
 **ids** | **String**| Comma delimited of ids to return | [optional] 

### Return type

[**ResultsDataView**](ResultsDataView.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_data_view**
> DataView get_data_view(org_id, data_view_id)

Return a particular data view by id



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::DataViewApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

data_view_id = 'data_view_id_example' # String | Data view id


begin
  #Return a particular data view by id
  result = api_instance.get_data_view(org_id, data_view_id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DataViewApi->get_data_view: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **data_view_id** | **String**| Data view id | 

### Return type

[**DataView**](DataView.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **update_data_view**
> DataView update_data_view(org_id, data_view_id, opts)

Update an existing data view



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::DataViewApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

data_view_id = 'data_view_id_example' # String | Data view id

opts = { 
  body: SwaggerClient::UpdateDataView.new # UpdateDataView | Data view data to update
}

begin
  #Update an existing data view
  result = api_instance.update_data_view(org_id, data_view_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DataViewApi->update_data_view: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **data_view_id** | **String**| Data view id | 
 **body** | [**UpdateDataView**](UpdateDataView.md)| Data view data to update | [optional] 

### Return type

[**DataView**](DataView.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



