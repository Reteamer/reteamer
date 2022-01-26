# SwaggerClient::JobApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulk_update1**](JobApi.md#bulk_update1) | **POST** /v2/org/{orgId}/job/bulkupdate | Perform a bulk update on a number of jobs
[**count_jobs**](JobApi.md#count_jobs) | **GET** /v2/org/{orgId}/job/count | Count jobs or people in the organization
[**create_job**](JobApi.md#create_job) | **POST** /v2/org/{orgId}/job | Create a job
[**delete_job**](JobApi.md#delete_job) | **DELETE** /v2/org/{orgId}/job/{jobId} | Delete a job
[**find_jobs**](JobApi.md#find_jobs) | **GET** /v2/org/{orgId}/job | Find jobs in the organization
[**find_jobs_graph**](JobApi.md#find_jobs_graph) | **GET** /v2/org/{orgId}/job/graph | Retrieve jobs from a region of the job graph
[**get_job**](JobApi.md#get_job) | **GET** /v2/org/{orgId}/job/{jobId} | Return a particular job by id
[**update_job**](JobApi.md#update_job) | **PATCH** /v2/org/{orgId}/job/{jobId} | Update a job


# **bulk_update1**
> Process bulk_update1(org_id, opts)

Perform a bulk update on a number of jobs



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::JobApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  body: SwaggerClient::BulkJobUpdateRequest.new # BulkJobUpdateRequest | Bulk update data
}

begin
  #Perform a bulk update on a number of jobs
  result = api_instance.bulk_update1(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling JobApi->bulk_update1: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **body** | [**BulkJobUpdateRequest**](BulkJobUpdateRequest.md)| Bulk update data | [optional] 

### Return type

[**Process**](Process.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **count_jobs**
> OrgCount count_jobs(org_id, opts)

Count jobs or people in the organization



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::JobApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  scenario_id: 'scenario_id_example', # String | Scenario id to query
  date: Date.parse('2013-10-20'), # Date | Date to search as of
  q: 'q_example' # String | Search query
}

begin
  #Count jobs or people in the organization
  result = api_instance.count_jobs(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling JobApi->count_jobs: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **scenario_id** | **String**| Scenario id to query | [optional] 
 **date** | **Date**| Date to search as of | [optional] 
 **q** | **String**| Search query | [optional] 

### Return type

[**OrgCount**](OrgCount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **create_job**
> Object create_job(org_id, opts)

Create a job



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::JobApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  scenario_id: 'scenario_id_example', # String | Scenario id to create the job in
  date: Date.parse('2013-10-20'), # Date | Effective date of job creation
  body: nil # Object | 
}

begin
  #Create a job
  result = api_instance.create_job(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling JobApi->create_job: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **scenario_id** | **String**| Scenario id to create the job in | [optional] 
 **date** | **Date**| Effective date of job creation | [optional] 
 **body** | **Object**|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **delete_job**
> delete_job(org_id, job_id, opts)

Delete a job



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::JobApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

job_id = 'job_id_example' # String | Job id

opts = { 
  scenario_id: 'scenario_id_example', # String | Scenario id to update the job in
  date: Date.parse('2013-10-20') # Date | Effective date of job update
}

begin
  #Delete a job
  api_instance.delete_job(org_id, job_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling JobApi->delete_job: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **job_id** | **String**| Job id | 
 **scenario_id** | **String**| Scenario id to update the job in | [optional] 
 **date** | **Date**| Effective date of job update | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **find_jobs**
> ResultsData find_jobs(org_id, opts)

Find jobs in the organization



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::JobApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  scenario_id: 'scenario_id_example', # String | Scenario id to query
  date: Date.parse('2013-10-20'), # Date | Date to search as of
  q: 'q_example', # String | Search query
  from: 'from_example', # String | Job id to start paginating from
  limit: 56, # Integer | Number of results to return
  fields: 'fields_example', # String | Fields to retrieve, comma-separated
  format: 'format_example' # String | Data format to use; default is json, can also use json-extended or json-readable
}

begin
  #Find jobs in the organization
  result = api_instance.find_jobs(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling JobApi->find_jobs: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **scenario_id** | **String**| Scenario id to query | [optional] 
 **date** | **Date**| Date to search as of | [optional] 
 **q** | **String**| Search query | [optional] 
 **from** | **String**| Job id to start paginating from | [optional] 
 **limit** | **Integer**| Number of results to return | [optional] 
 **fields** | **String**| Fields to retrieve, comma-separated | [optional] 
 **format** | **String**| Data format to use; default is json, can also use json-extended or json-readable | [optional] 

### Return type

[**ResultsData**](ResultsData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **find_jobs_graph**
> ResultsData find_jobs_graph(org_id, opts)

Retrieve jobs from a region of the job graph



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::JobApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  start: 'start_example', # String | Job id to use as the starting point for the search
  depth: 56, # Integer | Number of levels down to search
  approx_limit: 56, # Integer | Number of results to return, approximately
  scenario_id: 'scenario_id_example', # String | Scenario id to query
  q: 'q_example', # String | Query string to filter by
  date: Date.parse('2013-10-20'), # Date | Date to search as of
  fields: 'fields_example', # String | Fields to retrieve, comma-separated
  format: 'format_example' # String | Data format to use; default is json, can also use json-extended or json-readable
}

begin
  #Retrieve jobs from a region of the job graph
  result = api_instance.find_jobs_graph(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling JobApi->find_jobs_graph: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **start** | **String**| Job id to use as the starting point for the search | [optional] 
 **depth** | **Integer**| Number of levels down to search | [optional] 
 **approx_limit** | **Integer**| Number of results to return, approximately | [optional] 
 **scenario_id** | **String**| Scenario id to query | [optional] 
 **q** | **String**| Query string to filter by | [optional] 
 **date** | **Date**| Date to search as of | [optional] 
 **fields** | **String**| Fields to retrieve, comma-separated | [optional] 
 **format** | **String**| Data format to use; default is json, can also use json-extended or json-readable | [optional] 

### Return type

[**ResultsData**](ResultsData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_job**
> Object get_job(org_id, job_id, opts)

Return a particular job by id



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::JobApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

job_id = 'job_id_example' # String | Job id

opts = { 
  scenario_id: 'scenario_id_example', # String | Scenario id to query
  date: Date.parse('2013-10-20'), # Date | Date
  fields: 'fields_example', # String | Fields to retrieve, comma-separated
  format: 'format_example' # String | Data format to use; default is json, can also use json-extended or json-readable
}

begin
  #Return a particular job by id
  result = api_instance.get_job(org_id, job_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling JobApi->get_job: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **job_id** | **String**| Job id | 
 **scenario_id** | **String**| Scenario id to query | [optional] 
 **date** | **Date**| Date | [optional] 
 **fields** | **String**| Fields to retrieve, comma-separated | [optional] 
 **format** | **String**| Data format to use; default is json, can also use json-extended or json-readable | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **update_job**
> update_job(org_id, job_id, opts)

Update a job



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::JobApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

job_id = 'job_id_example' # String | Job id

opts = { 
  scenario_id: 'scenario_id_example', # String | Scenario id to update the job in
  date: Date.parse('2013-10-20'), # Date | Effective date of job update
  body: nil # Object | 
}

begin
  #Update a job
  api_instance.update_job(org_id, job_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling JobApi->update_job: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **job_id** | **String**| Job id | 
 **scenario_id** | **String**| Scenario id to update the job in | [optional] 
 **date** | **Date**| Effective date of job update | [optional] 
 **body** | **Object**|  | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



