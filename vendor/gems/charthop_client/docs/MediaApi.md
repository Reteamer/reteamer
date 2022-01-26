# SwaggerClient::MediaApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_media**](MediaApi.md#get_media) | **GET** /v1/media/{mediaId} | Returns metadata about a piece of media
[**upload_media**](MediaApi.md#upload_media) | **POST** /v1/media | Upload a new piece of media


# **get_media**
> Media get_media(media_id)

Returns metadata about a piece of media



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::MediaApi.new

media_id = 'media_id_example' # String | Media id


begin
  #Returns metadata about a piece of media
  result = api_instance.get_media(media_id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling MediaApi->get_media: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **media_id** | **String**| Media id | 

### Return type

[**Media**](Media.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **upload_media**
> Media upload_media(opts)

Upload a new piece of media



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::MediaApi.new

opts = { 
  file: File.new('/path/to/file.txt'), # File | 
  org_id: 'org_id_example' # String | org identifier, if this media belongs to an org
}

begin
  #Upload a new piece of media
  result = api_instance.upload_media(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling MediaApi->upload_media: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**|  | [optional] 
 **org_id** | **String**| org identifier, if this media belongs to an org | [optional] 

### Return type

[**Media**](Media.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json



