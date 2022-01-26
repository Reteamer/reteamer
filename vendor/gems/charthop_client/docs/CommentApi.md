# SwaggerClient::CommentApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_comment**](CommentApi.md#create_comment) | **POST** /v1/org/{orgId}/comment | Post a comment
[**delete_comment**](CommentApi.md#delete_comment) | **DELETE** /v1/org/{orgId}/comment/{commentId} | Delete a comment
[**find_comments**](CommentApi.md#find_comments) | **GET** /v1/org/{orgId}/comment/entity/{entityId} | Return comments on a particular entity paginated
[**get_comment**](CommentApi.md#get_comment) | **GET** /v1/org/{orgId}/comment/{commentId} | Return a particular comment by id


# **create_comment**
> Comment create_comment(org_id, opts)

Post a comment



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CommentApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  body: SwaggerClient::CreateComment.new # CreateComment | Comment data to create
}

begin
  #Post a comment
  result = api_instance.create_comment(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CommentApi->create_comment: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **body** | [**CreateComment**](CreateComment.md)| Comment data to create | [optional] 

### Return type

[**Comment**](Comment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **delete_comment**
> delete_comment(org_id, comment_id)

Delete a comment



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CommentApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

comment_id = 'comment_id_example' # String | Comment id


begin
  #Delete a comment
  api_instance.delete_comment(org_id, comment_id)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CommentApi->delete_comment: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **comment_id** | **String**| Comment id | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **find_comments**
> ResultsComment find_comments(org_id, entity_id, opts)

Return comments on a particular entity paginated



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CommentApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

entity_id = 'entity_id_example' # String | Entity id

opts = { 
  from: 'from_example', # String | Comment id to start paginating from
  limit: 56 # Integer | Number of results to return
}

begin
  #Return comments on a particular entity paginated
  result = api_instance.find_comments(org_id, entity_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CommentApi->find_comments: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **entity_id** | **String**| Entity id | 
 **from** | **String**| Comment id to start paginating from | [optional] 
 **limit** | **Integer**| Number of results to return | [optional] 

### Return type

[**ResultsComment**](ResultsComment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_comment**
> Comment get_comment(org_id, comment_id)

Return a particular comment by id



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CommentApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

comment_id = 'comment_id_example' # String | Comment id


begin
  #Return a particular comment by id
  result = api_instance.get_comment(org_id, comment_id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CommentApi->get_comment: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **comment_id** | **String**| Comment id | 

### Return type

[**Comment**](Comment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



