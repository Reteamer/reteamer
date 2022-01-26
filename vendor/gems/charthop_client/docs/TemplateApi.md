# SwaggerClient::TemplateApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_template**](TemplateApi.md#create_template) | **POST** /v1/org/{orgId}/template | Create a template
[**delete_template**](TemplateApi.md#delete_template) | **DELETE** /v1/org/{orgId}/template/{templateId} | Delete a template
[**find_templates**](TemplateApi.md#find_templates) | **GET** /v1/org/{orgId}/template | Return all templates in the organization paginated
[**generate_templates**](TemplateApi.md#generate_templates) | **POST** /v1/org/{orgId}/template/{templateId}/generate | Automatically generate PDFs of the templates, and distribute emails to managers and people to download
[**get_template**](TemplateApi.md#get_template) | **GET** /v1/org/{orgId}/template/{templateId} | Return a particular template by id
[**preview_template**](TemplateApi.md#preview_template) | **POST** /v1/org/{orgId}/template/{templateId}/preview | Preview template content without saving it
[**render_template**](TemplateApi.md#render_template) | **POST** /v1/org/{orgId}/template/{templateId}/render | Render a template by evaluating it against an existing job
[**update_template**](TemplateApi.md#update_template) | **PATCH** /v1/org/{orgId}/template/{templateId} | Update an existing template


# **create_template**
> Template create_template(org_id, opts)

Create a template



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::TemplateApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  body: SwaggerClient::CreateTemplate.new # CreateTemplate | Template data to create
}

begin
  #Create a template
  result = api_instance.create_template(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling TemplateApi->create_template: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **body** | [**CreateTemplate**](CreateTemplate.md)| Template data to create | [optional] 

### Return type

[**Template**](Template.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **delete_template**
> delete_template(org_id, template_id)

Delete a template



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::TemplateApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

template_id = 'template_id_example' # String | Template id


begin
  #Delete a template
  api_instance.delete_template(org_id, template_id)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling TemplateApi->delete_template: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **template_id** | **String**| Template id | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **find_templates**
> ResultsTemplate find_templates(org_id, opts)

Return all templates in the organization paginated



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::TemplateApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  type: 'type_example', # String | Type of template to filter by
  from: 'from_example', # String | Template id to start paginating from
  limit: 56 # Integer | Number of results to return
}

begin
  #Return all templates in the organization paginated
  result = api_instance.find_templates(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling TemplateApi->find_templates: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **type** | **String**| Type of template to filter by | [optional] 
 **from** | **String**| Template id to start paginating from | [optional] 
 **limit** | **Integer**| Number of results to return | [optional] 

### Return type

[**ResultsTemplate**](ResultsTemplate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **generate_templates**
> Process generate_templates(org_id, template_id, opts)

Automatically generate PDFs of the templates, and distribute emails to managers and people to download



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::TemplateApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

template_id = 'template_id_example' # String | Template id

opts = { 
  body: SwaggerClient::GenerateTemplateRequest.new # GenerateTemplateRequest | 
}

begin
  #Automatically generate PDFs of the templates, and distribute emails to managers and people to download
  result = api_instance.generate_templates(org_id, template_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling TemplateApi->generate_templates: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **template_id** | **String**| Template id | 
 **body** | [**GenerateTemplateRequest**](GenerateTemplateRequest.md)|  | [optional] 

### Return type

[**Process**](Process.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_template**
> Template get_template(org_id, template_id)

Return a particular template by id



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::TemplateApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

template_id = 'template_id_example' # String | Template id


begin
  #Return a particular template by id
  result = api_instance.get_template(org_id, template_id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling TemplateApi->get_template: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **template_id** | **String**| Template id | 

### Return type

[**Template**](Template.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **preview_template**
> TemplateRenderResponse preview_template(org_id, opts)

Preview template content without saving it



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::TemplateApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  job_id: 'job_id_example', # String | Job id
  scenario_id: 'scenario_id_example', # String | Scenario id to query
  date: Date.parse('2013-10-20'), # Date | Date
  format: 'TEXT', # String | Format
  body: SwaggerClient::TemplatePreviewRequest.new # TemplatePreviewRequest | 
}

begin
  #Preview template content without saving it
  result = api_instance.preview_template(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling TemplateApi->preview_template: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **job_id** | **String**| Job id | [optional] 
 **scenario_id** | **String**| Scenario id to query | [optional] 
 **date** | **Date**| Date | [optional] 
 **format** | **String**| Format | [optional] [default to TEXT]
 **body** | [**TemplatePreviewRequest**](TemplatePreviewRequest.md)|  | [optional] 

### Return type

[**TemplateRenderResponse**](TemplateRenderResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **render_template**
> TemplateRenderResponse render_template(org_id, template_id, opts)

Render a template by evaluating it against an existing job



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::TemplateApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

template_id = 'template_id_example' # String | Template id

opts = { 
  job_id: 'job_id_example', # String | Job id
  scenario_id: 'scenario_id_example', # String | Scenario id to query
  date: Date.parse('2013-10-20'), # Date | Date
  format: 'TEXT' # String | Format
}

begin
  #Render a template by evaluating it against an existing job
  result = api_instance.render_template(org_id, template_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling TemplateApi->render_template: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **template_id** | **String**| Template id | 
 **job_id** | **String**| Job id | [optional] 
 **scenario_id** | **String**| Scenario id to query | [optional] 
 **date** | **Date**| Date | [optional] 
 **format** | **String**| Format | [optional] [default to TEXT]

### Return type

[**TemplateRenderResponse**](TemplateRenderResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **update_template**
> update_template(org_id, template_id, opts)

Update an existing template



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::TemplateApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

template_id = 'template_id_example' # String | Template id

opts = { 
  body: SwaggerClient::UpdateTemplate.new # UpdateTemplate | Template data to update
}

begin
  #Update an existing template
  api_instance.update_template(org_id, template_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling TemplateApi->update_template: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **template_id** | **String**| Template id | 
 **body** | [**UpdateTemplate**](UpdateTemplate.md)| Template data to update | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



