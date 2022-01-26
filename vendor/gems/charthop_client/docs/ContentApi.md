# SwaggerClient::ContentApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_content**](ContentApi.md#create_content) | **POST** /v1/org/{orgId}/content | Create a content
[**delete_content**](ContentApi.md#delete_content) | **DELETE** /v1/org/{orgId}/content/{contentId} | Delete a content
[**find_content_for_job**](ContentApi.md#find_content_for_job) | **GET** /v1/org/{orgId}/content/job/{jobId} | Return all content applicable to a particular job
[**find_content_for_person**](ContentApi.md#find_content_for_person) | **GET** /v1/org/{orgId}/content/person/{personId} | Return all content applicable to a particular person
[**find_contents**](ContentApi.md#find_contents) | **GET** /v1/org/{orgId}/content | Return all contents in the organization paginated
[**get_content**](ContentApi.md#get_content) | **GET** /v1/org/{orgId}/content/{contentId} | Return a particular content by id
[**update_content**](ContentApi.md#update_content) | **PATCH** /v1/org/{orgId}/content/{contentId} | Update an existing content


# **create_content**
> Content create_content(org_id, opts)

Create a content



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ContentApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  body: SwaggerClient::CreateContent.new # CreateContent | Content data to create
}

begin
  #Create a content
  result = api_instance.create_content(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ContentApi->create_content: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **body** | [**CreateContent**](CreateContent.md)| Content data to create | [optional] 

### Return type

[**Content**](Content.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **delete_content**
> delete_content(org_id, content_id)

Delete a content



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ContentApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

content_id = 'content_id_example' # String | Content id


begin
  #Delete a content
  api_instance.delete_content(org_id, content_id)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ContentApi->delete_content: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **content_id** | **String**| Content id | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **find_content_for_job**
> ResultsContent find_content_for_job(org_id, job_id, opts)

Return all content applicable to a particular job



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ContentApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

job_id = 'job_id_example' # String | Job id

opts = { 
  date: Date.parse('2013-10-20') # Date | Date
}

begin
  #Return all content applicable to a particular job
  result = api_instance.find_content_for_job(org_id, job_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ContentApi->find_content_for_job: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **job_id** | **String**| Job id | 
 **date** | **Date**| Date | [optional] 

### Return type

[**ResultsContent**](ResultsContent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **find_content_for_person**
> ResultsContent find_content_for_person(org_id, person_id, opts)

Return all content applicable to a particular person



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ContentApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

person_id = 'person_id_example' # String | Person id

opts = { 
  date: Date.parse('2013-10-20') # Date | Date
}

begin
  #Return all content applicable to a particular person
  result = api_instance.find_content_for_person(org_id, person_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ContentApi->find_content_for_person: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **person_id** | **String**| Person id | 
 **date** | **Date**| Date | [optional] 

### Return type

[**ResultsContent**](ResultsContent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **find_contents**
> ResultsContent find_contents(org_id, opts)

Return all contents in the organization paginated



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ContentApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  status: 'status_example', # String | Status to filter by
  from: 'from_example', # String | Content id to start paginating from
  limit: 56 # Integer | Number of results to return
}

begin
  #Return all contents in the organization paginated
  result = api_instance.find_contents(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ContentApi->find_contents: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **status** | **String**| Status to filter by | [optional] 
 **from** | **String**| Content id to start paginating from | [optional] 
 **limit** | **Integer**| Number of results to return | [optional] 

### Return type

[**ResultsContent**](ResultsContent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_content**
> Content get_content(org_id, content_id)

Return a particular content by id



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ContentApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

content_id = 'content_id_example' # String | Content id


begin
  #Return a particular content by id
  result = api_instance.get_content(org_id, content_id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ContentApi->get_content: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **content_id** | **String**| Content id | 

### Return type

[**Content**](Content.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **update_content**
> update_content(org_id, content_id, opts)

Update an existing content



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ContentApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

content_id = 'content_id_example' # String | Content id

opts = { 
  body: SwaggerClient::UpdateContent.new # UpdateContent | Content data to update
}

begin
  #Update an existing content
  api_instance.update_content(org_id, content_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ContentApi->update_content: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **content_id** | **String**| Content id | 
 **body** | [**UpdateContent**](UpdateContent.md)| Content data to update | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



