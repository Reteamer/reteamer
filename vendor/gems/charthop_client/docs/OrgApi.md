# SwaggerClient::OrgApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**change_org_head**](OrgApi.md#change_org_head) | **POST** /v1/org/{orgId}/change-head | Create a new org head in the history, by creating an empty job placeholder above the current head
[**consent_service_agreement**](OrgApi.md#consent_service_agreement) | **POST** /v1/org/{orgId}/agreement | Consent on Terms of Service agreement
[**create_org**](OrgApi.md#create_org) | **POST** /v1/org | Create a new org
[**find_orgs**](OrgApi.md#find_orgs) | **GET** /v1/org | Return all visible orgs, paginated by name
[**get_org**](OrgApi.md#get_org) | **GET** /v1/org/{orgId} | Return a particular org by id
[**get_org_by_slug**](OrgApi.md#get_org_by_slug) | **GET** /v1/org/slug/{slug} | Return a particular org by slug
[**get_org_by_slug_no_auth**](OrgApi.md#get_org_by_slug_no_auth) | **GET** /org/{slug} | Return validation for a org by slug
[**get_org_data**](OrgApi.md#get_org_data) | **GET** /v1/org/{orgId}/data | Return all data for a particular org, except for jobs &amp; people (this is used by the web app on initialization)
[**get_org_people_and_jobs**](OrgApi.md#get_org_people_and_jobs) | **GET** /v1/org/{orgId}/data-jobs-persons | Return people and job data for a particular org (this is used by the web app on initialization)
[**send_test_email**](OrgApi.md#send_test_email) | **POST** /v1/org/{orgId}/test-email | Send a test welcome email to oneself
[**update_org**](OrgApi.md#update_org) | **PATCH** /v1/org/{orgId} | Update an existing org


# **change_org_head**
> change_org_head(org_id)

Create a new org head in the history, by creating an empty job placeholder above the current head



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::OrgApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)


begin
  #Create a new org head in the history, by creating an empty job placeholder above the current head
  api_instance.change_org_head(org_id)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling OrgApi->change_org_head: #{e}"
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



# **consent_service_agreement**
> consent_service_agreement(org_id, opts)

Consent on Terms of Service agreement



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::OrgApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  body: SwaggerClient::AgreementRequest.new # AgreementRequest | 
}

begin
  #Consent on Terms of Service agreement
  api_instance.consent_service_agreement(org_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling OrgApi->consent_service_agreement: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **body** | [**AgreementRequest**](AgreementRequest.md)|  | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **create_org**
> create_org(opts)

Create a new org



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::OrgApi.new

opts = { 
  body: SwaggerClient::CreateOrg.new # CreateOrg | Org data to create
}

begin
  #Create a new org
  api_instance.create_org(opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling OrgApi->create_org: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateOrg**](CreateOrg.md)| Org data to create | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **find_orgs**
> ResultsOrg find_orgs(opts)

Return all visible orgs, paginated by name



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::OrgApi.new

opts = { 
  from: 'from_example', # String | Org id to start from
  q: 'q_example', # String | Search query
  limit: 56, # Integer | Number of results to return
  customer_id: 'customer_id_example', # String | Find orgs belonging to a particular customer id
  real_only: true, # BOOLEAN | Include only orgs where type is REAL?
  last_create_at: 789, # Integer | Only include orgs whose last createAt occurred after the date
  last_active_at: 789 # Integer | Only include orgs whose last activeAt occurred after the date
}

begin
  #Return all visible orgs, paginated by name
  result = api_instance.find_orgs(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling OrgApi->find_orgs: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **String**| Org id to start from | [optional] 
 **q** | **String**| Search query | [optional] 
 **limit** | **Integer**| Number of results to return | [optional] 
 **customer_id** | **String**| Find orgs belonging to a particular customer id | [optional] 
 **real_only** | **BOOLEAN**| Include only orgs where type is REAL? | [optional] 
 **last_create_at** | **Integer**| Only include orgs whose last createAt occurred after the date | [optional] 
 **last_active_at** | **Integer**| Only include orgs whose last activeAt occurred after the date | [optional] 

### Return type

[**ResultsOrg**](ResultsOrg.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_org**
> Org get_org(org_id)

Return a particular org by id



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::OrgApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)


begin
  #Return a particular org by id
  result = api_instance.get_org(org_id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling OrgApi->get_org: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 

### Return type

[**Org**](Org.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_org_by_slug**
> Org get_org_by_slug(slug)

Return a particular org by slug



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::OrgApi.new

slug = 'slug_example' # String | Org slug


begin
  #Return a particular org by slug
  result = api_instance.get_org_by_slug(slug)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling OrgApi->get_org_by_slug: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slug** | **String**| Org slug | 

### Return type

[**Org**](Org.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_org_by_slug_no_auth**
> get_org_by_slug_no_auth(slug)

Return validation for a org by slug



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::OrgApi.new

slug = 'slug_example' # String | Org slug


begin
  #Return validation for a org by slug
  api_instance.get_org_by_slug_no_auth(slug)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling OrgApi->get_org_by_slug_no_auth: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slug** | **String**| Org slug | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_org_data**
> OrgData get_org_data(org_id)

Return all data for a particular org, except for jobs & people (this is used by the web app on initialization)



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::OrgApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)


begin
  #Return all data for a particular org, except for jobs & people (this is used by the web app on initialization)
  result = api_instance.get_org_data(org_id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling OrgApi->get_org_data: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 

### Return type

[**OrgData**](OrgData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_org_people_and_jobs**
> OrgJobsPersonsResponse get_org_people_and_jobs(org_id)

Return people and job data for a particular org (this is used by the web app on initialization)



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::OrgApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)


begin
  #Return people and job data for a particular org (this is used by the web app on initialization)
  result = api_instance.get_org_people_and_jobs(org_id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling OrgApi->get_org_people_and_jobs: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 

### Return type

[**OrgJobsPersonsResponse**](OrgJobsPersonsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **send_test_email**
> send_test_email(org_id, opts)

Send a test welcome email to oneself



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::OrgApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  body: SwaggerClient::TestEmailRequest.new # TestEmailRequest | 
}

begin
  #Send a test welcome email to oneself
  api_instance.send_test_email(org_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling OrgApi->send_test_email: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **body** | [**TestEmailRequest**](TestEmailRequest.md)|  | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **update_org**
> update_org(org_id, opts)

Update an existing org



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::OrgApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  body: SwaggerClient::UpdateOrg.new # UpdateOrg | Org data to update
}

begin
  #Update an existing org
  api_instance.update_org(org_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling OrgApi->update_org: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **body** | [**UpdateOrg**](UpdateOrg.md)| Org data to update | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



