# SwaggerClient::FileApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_file**](FileApi.md#delete_file) | **DELETE** /v1/org/{orgId}/file/{fileId} | Delete a file
[**download_file**](FileApi.md#download_file) | **GET** /v1/org/{orgId}/file/{fileId}/download | Download a file
[**find_files**](FileApi.md#find_files) | **GET** /v1/org/{orgId}/file | Returns metadata about a file
[**get_file_metadata**](FileApi.md#get_file_metadata) | **GET** /v1/org/{orgId}/file/{fileId} | Returns metadata about a file
[**upload_file**](FileApi.md#upload_file) | **POST** /v1/org/{orgId}/file | Upload a new file


# **delete_file**
> delete_file(org_id, file_id)

Delete a file



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::FileApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

file_id = 'file_id_example' # String | File id


begin
  #Delete a file
  api_instance.delete_file(org_id, file_id)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling FileApi->delete_file: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **file_id** | **String**| File id | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **download_file**
> download_file(org_id, file_id)

Download a file



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::FileApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

file_id = 'file_id_example' # String | File id


begin
  #Download a file
  api_instance.download_file(org_id, file_id)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling FileApi->download_file: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **file_id** | **String**| File id | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **find_files**
> ResultsFileEntity find_files(org_id, opts)

Returns metadata about a file



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::FileApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  entity_id: 'entity_id_example', # String | Entity id
  entity_type: 'entity_type_example', # String | Entity type
  limit: 56, # Integer | Number of results to return
  from: 'from_example' # String | From result id
}

begin
  #Returns metadata about a file
  result = api_instance.find_files(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling FileApi->find_files: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **entity_id** | **String**| Entity id | [optional] 
 **entity_type** | **String**| Entity type | [optional] 
 **limit** | **Integer**| Number of results to return | [optional] 
 **from** | **String**| From result id | [optional] 

### Return type

[**ResultsFileEntity**](ResultsFileEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_file_metadata**
> FileEntity get_file_metadata(org_id, file_id)

Returns metadata about a file



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::FileApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

file_id = 'file_id_example' # String | File id


begin
  #Returns metadata about a file
  result = api_instance.get_file_metadata(org_id, file_id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling FileApi->get_file_metadata: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **file_id** | **String**| File id | 

### Return type

[**FileEntity**](FileEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **upload_file**
> FileEntity upload_file(org_id, opts)

Upload a new file



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::FileApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  entity_id: 'entity_id_example', # String | entity id (if not passed, defaults to user id)
  entity_type: 'entity_type_example', # String | entity type (if not passed, defaults to user)
  field: 'field_example', # String | field name - can leave blank for a general upload
  sensitive: 'sensitive_example', # String | file sensitivity level - defaults to PERSONAL
  file: File.new('/path/to/file.txt') # File | 
}

begin
  #Upload a new file
  result = api_instance.upload_file(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling FileApi->upload_file: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **entity_id** | **String**| entity id (if not passed, defaults to user id) | [optional] 
 **entity_type** | **String**| entity type (if not passed, defaults to user) | [optional] 
 **field** | **String**| field name - can leave blank for a general upload | [optional] 
 **sensitive** | **String**| file sensitivity level - defaults to PERSONAL | [optional] 
 **file** | **File**|  | [optional] 

### Return type

[**FileEntity**](FileEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json



