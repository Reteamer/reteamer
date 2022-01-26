# SwaggerClient::ProcessApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**complete_with_file_export**](ProcessApi.md#complete_with_file_export) | **POST** /v1/process/{processId}/file | Upload a file to be attached to a process, and mark the process as complete
[**create**](ProcessApi.md#create) | **POST** /v1/process/self-serve | Creates a new process in the pending state
[**create_process**](ProcessApi.md#create_process) | **POST** /v1/process | Creates a new process in the pending state
[**find_processes**](ProcessApi.md#find_processes) | **GET** /v1/process | Retrieve a number of previously run processes
[**get_app_process_status**](ProcessApi.md#get_app_process_status) | **GET** /v1/process/{orgId}/{appUserId} | Get last success sync and last sync for given appUserId
[**get_process**](ProcessApi.md#get_process) | **GET** /v1/process/{processId} | Check the status of a particular process
[**get_process_file**](ProcessApi.md#get_process_file) | **GET** /v1/process/{processId}/file | Download the file associated with a particular process
[**get_process_log_file**](ProcessApi.md#get_process_log_file) | **GET** /v1/process/{processId}/log | Download the newline-delimited JSON log associated with a particular process
[**update_process**](ProcessApi.md#update_process) | **PATCH** /v1/process/{processId} | Update the status of a process, marking its progress or setting status to DONE or ERROR
[**update_stateful_process**](ProcessApi.md#update_stateful_process) | **PUT** /v1/process/{processId}/state | Update process state


# **complete_with_file_export**
> complete_with_file_export(process_id, opts)

Upload a file to be attached to a process, and mark the process as complete



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ProcessApi.new

process_id = 'process_id_example' # String | process id

opts = { 
  file: File.new('/path/to/file.txt') # File | 
}

begin
  #Upload a file to be attached to a process, and mark the process as complete
  api_instance.complete_with_file_export(process_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ProcessApi->complete_with_file_export: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_id** | **String**| process id | 
 **file** | **File**|  | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json



# **create**
> create(opts)

Creates a new process in the pending state



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ProcessApi.new

opts = { 
  file: File.new('/path/to/file.txt'), # File | 
  org_id: 'org_id_example', # String | Org identifier (either id or slug)
  type: 'type_example', # String | Process type
  max_rows: 56, # Integer | Max rows allowed in an imported spreadsheet file
  min_columns: 56, # Integer | Min columns required in an imported spreadsheet file
  source: 'source_example' # String | Import source (e.g. SELF_SERVE)
}

begin
  #Creates a new process in the pending state
  api_instance.create(opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ProcessApi->create: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**|  | [optional] 
 **org_id** | **String**| Org identifier (either id or slug) | [optional] 
 **type** | **String**| Process type | [optional] 
 **max_rows** | **Integer**| Max rows allowed in an imported spreadsheet file | [optional] 
 **min_columns** | **Integer**| Min columns required in an imported spreadsheet file | [optional] 
 **source** | **String**| Import source (e.g. SELF_SERVE) | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json



# **create_process**
> Process create_process(opts)

Creates a new process in the pending state



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ProcessApi.new

opts = { 
  body: SwaggerClient::CreateProcess.new # CreateProcess | Process data to create
}

begin
  #Creates a new process in the pending state
  result = api_instance.create_process(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ProcessApi->create_process: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateProcess**](CreateProcess.md)| Process data to create | [optional] 

### Return type

[**Process**](Process.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **find_processes**
> ResultsProcess find_processes(opts)

Retrieve a number of previously run processes



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ProcessApi.new

opts = { 
  org_id: 'org_id_example', # String | Org identifier (either id or slug)
  is_app_process: true, # BOOLEAN | Boolean if an app process
  from: 'from_example', # String | from id
  limit: 56, # Integer | limit
  parent_process_id: 'parent_process_id_example', # String | Parent process ID to search for children
  type: 'type_example', # String | Type to filter by. Accepted values: ['auto', 'manual']
  completed_at_start: 789, # Integer | completed at start
  completed_at_end: 789, # Integer | completed at end
  statuses: 'statuses_example', # String | Statuses to filter by, comma-separated. Accepted values: ['DONE', 'ERROR', 'PENDING', 'RUNNING', 'DONE_WITH_ERRORS']
  is_parent_process: true, # BOOLEAN | Boolean if a parent process
  is_payroll_app_process: true # BOOLEAN | Boolean if a payroll app process
}

begin
  #Retrieve a number of previously run processes
  result = api_instance.find_processes(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ProcessApi->find_processes: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | [optional] 
 **is_app_process** | **BOOLEAN**| Boolean if an app process | [optional] 
 **from** | **String**| from id | [optional] 
 **limit** | **Integer**| limit | [optional] 
 **parent_process_id** | **String**| Parent process ID to search for children | [optional] 
 **type** | **String**| Type to filter by. Accepted values: [&#39;auto&#39;, &#39;manual&#39;] | [optional] 
 **completed_at_start** | **Integer**| completed at start | [optional] 
 **completed_at_end** | **Integer**| completed at end | [optional] 
 **statuses** | **String**| Statuses to filter by, comma-separated. Accepted values: [&#39;DONE&#39;, &#39;ERROR&#39;, &#39;PENDING&#39;, &#39;RUNNING&#39;, &#39;DONE_WITH_ERRORS&#39;] | [optional] 
 **is_parent_process** | **BOOLEAN**| Boolean if a parent process | [optional] 
 **is_payroll_app_process** | **BOOLEAN**| Boolean if a payroll app process | [optional] 

### Return type

[**ResultsProcess**](ResultsProcess.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_app_process_status**
> get_app_process_status(org_id, app_user_id)

Get last success sync and last sync for given appUserId



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ProcessApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

app_user_id = 'app_user_id_example' # String | app user id


begin
  #Get last success sync and last sync for given appUserId
  api_instance.get_app_process_status(org_id, app_user_id)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ProcessApi->get_app_process_status: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **app_user_id** | **String**| app user id | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_process**
> Process get_process(process_id, opts)

Check the status of a particular process



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ProcessApi.new

process_id = 'process_id_example' # String | process id

opts = { 
  show_state: true # BOOLEAN | showState
}

begin
  #Check the status of a particular process
  result = api_instance.get_process(process_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ProcessApi->get_process: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_id** | **String**| process id | 
 **show_state** | **BOOLEAN**| showState | [optional] 

### Return type

[**Process**](Process.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_process_file**
> get_process_file(process_id)

Download the file associated with a particular process



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ProcessApi.new

process_id = 'process_id_example' # String | process id


begin
  #Download the file associated with a particular process
  api_instance.get_process_file(process_id)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ProcessApi->get_process_file: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_id** | **String**| process id | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_process_log_file**
> get_process_log_file(process_id)

Download the newline-delimited JSON log associated with a particular process



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ProcessApi.new

process_id = 'process_id_example' # String | process id


begin
  #Download the newline-delimited JSON log associated with a particular process
  api_instance.get_process_log_file(process_id)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ProcessApi->get_process_log_file: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_id** | **String**| process id | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **update_process**
> update_process(process_id, opts)

Update the status of a process, marking its progress or setting status to DONE or ERROR



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ProcessApi.new

process_id = 'process_id_example' # String | process id

opts = { 
  body: SwaggerClient::UpdateProcess.new # UpdateProcess | 
}

begin
  #Update the status of a process, marking its progress or setting status to DONE or ERROR
  api_instance.update_process(process_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ProcessApi->update_process: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_id** | **String**| process id | 
 **body** | [**UpdateProcess**](UpdateProcess.md)|  | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **update_stateful_process**
> update_stateful_process(process_id, opts)

Update process state



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ProcessApi.new

process_id = 'process_id_example' # String | process id

opts = { 
  body: nil # Object | state
}

begin
  #Update process state
  api_instance.update_stateful_process(process_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ProcessApi->update_stateful_process: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_id** | **String**| process id | 
 **body** | **Object**| state | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



