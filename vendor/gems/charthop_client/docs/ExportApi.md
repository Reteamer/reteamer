# SwaggerClient::ExportApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**export_csv_changes**](ExportApi.md#export_csv_changes) | **POST** /v1/org/{orgId}/export/csv/change | Export a changelog to CSV format
[**export_csv_fields**](ExportApi.md#export_csv_fields) | **POST** /v1/org/{orgId}/export/csv/fields | Export a CSV of custom fields
[**export_csv_scenario**](ExportApi.md#export_csv_scenario) | **POST** /v1/org/{orgId}/export/csv/scenario/{scenarioId} | Export a CSV changelog of a scenario
[**export_csv_snapshot**](ExportApi.md#export_csv_snapshot) | **POST** /v1/org/{orgId}/export/csv/snapshot | Export a snapshot of a current roster to CSV format
[**export_files**](ExportApi.md#export_files) | **POST** /v1/org/{orgId}/export/zip/file | Export a zipfile of files downloaded from some field
[**export_goal_scenario_users**](ExportApi.md#export_goal_scenario_users) | **POST** /v1/org/{orgId}/export/csv/goal/{goalId}/scenarios/users | Export users within goal scenarios in CSV format
[**export_org_to_powerpoint**](ExportApi.md#export_org_to_powerpoint) | **POST** /v1/org/{orgId}/export/powerpoint/org | Export org chart to Powerpoint
[**export_pdf_reviews**](ExportApi.md#export_pdf_reviews) | **POST** /v1/org/{orgId}/export/pdf/review/{goalId} | Export reviews in PDF format
[**export_report_to_powerpoint**](ExportApi.md#export_report_to_powerpoint) | **POST** /v1/org/{orgId}/export/powerpoint/report/{reportId} | Export report to Powerpoint
[**export_to_csv_todos**](ExportApi.md#export_to_csv_todos) | **POST** /v1/org/{orgId}/export/csv/todo/{reviewId} | Export todos for a review to CSV format
[**export_to_csv_users**](ExportApi.md#export_to_csv_users) | **POST** /v1/org/{orgId}/export/csv/users | Export users for a review to CSV format


# **export_csv_changes**
> Process export_csv_changes(org_id, opts)

Export a changelog to CSV format



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ExportApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  body: nil # Object | export options
}

begin
  #Export a changelog to CSV format
  result = api_instance.export_csv_changes(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ExportApi->export_csv_changes: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **body** | **Object**| export options | [optional] 

### Return type

[**Process**](Process.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **export_csv_fields**
> Process export_csv_fields(org_id)

Export a CSV of custom fields



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ExportApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)


begin
  #Export a CSV of custom fields
  result = api_instance.export_csv_fields(org_id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ExportApi->export_csv_fields: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 

### Return type

[**Process**](Process.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **export_csv_scenario**
> Process export_csv_scenario(org_id, scenario_id, opts)

Export a CSV changelog of a scenario



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ExportApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

scenario_id = 'scenario_id_example' # String | Scenario id

opts = { 
  body: nil # Object | export options
}

begin
  #Export a CSV changelog of a scenario
  result = api_instance.export_csv_scenario(org_id, scenario_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ExportApi->export_csv_scenario: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **scenario_id** | **String**| Scenario id | 
 **body** | **Object**| export options | [optional] 

### Return type

[**Process**](Process.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **export_csv_snapshot**
> Process export_csv_snapshot(org_id, opts)

Export a snapshot of a current roster to CSV format



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ExportApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  body: nil # Object | export options
}

begin
  #Export a snapshot of a current roster to CSV format
  result = api_instance.export_csv_snapshot(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ExportApi->export_csv_snapshot: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **body** | **Object**| export options | [optional] 

### Return type

[**Process**](Process.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **export_files**
> Process export_files(org_id, opts)

Export a zipfile of files downloaded from some field



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ExportApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  field: 'field_example', # String | Field
  date: Date.parse('2013-10-20'), # Date | Date
  scenario_id: 'scenario_id_example', # String | Scenario id to query
  q: 'q_example', # String | Query for jobs or people to match against
  size: 'size_example' # String | Size of images to export, if image file (250x250, 50x50, defaults to original)
}

begin
  #Export a zipfile of files downloaded from some field
  result = api_instance.export_files(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ExportApi->export_files: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **field** | **String**| Field | [optional] 
 **date** | **Date**| Date | [optional] 
 **scenario_id** | **String**| Scenario id to query | [optional] 
 **q** | **String**| Query for jobs or people to match against | [optional] 
 **size** | **String**| Size of images to export, if image file (250x250, 50x50, defaults to original) | [optional] 

### Return type

[**Process**](Process.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **export_goal_scenario_users**
> Process export_goal_scenario_users(org_id, goal_id, opts)

Export users within goal scenarios in CSV format



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ExportApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

goal_id = 'goal_id_example' # String | goal id

opts = { 
  body: nil # Object | export options
}

begin
  #Export users within goal scenarios in CSV format
  result = api_instance.export_goal_scenario_users(org_id, goal_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ExportApi->export_goal_scenario_users: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **goal_id** | **String**| goal id | 
 **body** | **Object**| export options | [optional] 

### Return type

[**Process**](Process.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **export_org_to_powerpoint**
> Process export_org_to_powerpoint(org_id, opts)

Export org chart to Powerpoint



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ExportApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  date: Date.parse('2016-12-25'), # Date | date to export the data from
  body: nil # Object | export options
}

begin
  #Export org chart to Powerpoint
  result = api_instance.export_org_to_powerpoint(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ExportApi->export_org_to_powerpoint: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **date** | **Date**| date to export the data from | [optional] 
 **body** | **Object**| export options | [optional] 

### Return type

[**Process**](Process.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **export_pdf_reviews**
> Process export_pdf_reviews(org_id, goal_id, opts)

Export reviews in PDF format



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ExportApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

goal_id = 'goal_id_example' # String | goal id

opts = { 
  body: nil # Object | export options
}

begin
  #Export reviews in PDF format
  result = api_instance.export_pdf_reviews(org_id, goal_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ExportApi->export_pdf_reviews: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **goal_id** | **String**| goal id | 
 **body** | **Object**| export options | [optional] 

### Return type

[**Process**](Process.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **export_report_to_powerpoint**
> Process export_report_to_powerpoint(org_id, report_id, opts)

Export report to Powerpoint



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ExportApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

report_id = 'report_id_example' # String | report id

opts = { 
  body: nil # Object | export options
}

begin
  #Export report to Powerpoint
  result = api_instance.export_report_to_powerpoint(org_id, report_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ExportApi->export_report_to_powerpoint: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **report_id** | **String**| report id | 
 **body** | **Object**| export options | [optional] 

### Return type

[**Process**](Process.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **export_to_csv_todos**
> Process export_to_csv_todos(org_id, review_id, opts)

Export todos for a review to CSV format



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ExportApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

review_id = 'review_id_example' # String | review id

opts = { 
  body: nil # Object | export options
}

begin
  #Export todos for a review to CSV format
  result = api_instance.export_to_csv_todos(org_id, review_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ExportApi->export_to_csv_todos: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **review_id** | **String**| review id | 
 **body** | **Object**| export options | [optional] 

### Return type

[**Process**](Process.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **export_to_csv_users**
> Process export_to_csv_users(org_id, opts)

Export users for a review to CSV format



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ExportApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  body: nil # Object | export options
}

begin
  #Export users for a review to CSV format
  result = api_instance.export_to_csv_users(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ExportApi->export_to_csv_users: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **body** | **Object**| export options | [optional] 

### Return type

[**Process**](Process.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



