# SwaggerClient::ReportApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_report**](ReportApi.md#create_report) | **POST** /v1/org/{orgId}/report | Create a report
[**delete_report**](ReportApi.md#delete_report) | **DELETE** /v1/org/{orgId}/report/{reportId} | Delete a report
[**export_chart_csv**](ReportApi.md#export_chart_csv) | **POST** /v1/org/{orgId}/report/{reportId}/chart/{chartId}/export/csv | Export a particular chart in a report
[**find_reports**](ReportApi.md#find_reports) | **GET** /v1/org/{orgId}/report | Return all reports in the organization paginated
[**get_all_report_results**](ReportApi.md#get_all_report_results) | **GET** /v1/org/{orgId}/report/{reportId}/query | Query all the charts in a report
[**get_report**](ReportApi.md#get_report) | **GET** /v1/org/{orgId}/report/{reportId} | Return a particular report by id
[**get_report_from_query**](ReportApi.md#get_report_from_query) | **POST** /v1/org/{orgId}/report/query | Return timeseries data from arbitrary queries
[**update_report**](ReportApi.md#update_report) | **PATCH** /v1/org/{orgId}/report/{reportId} | Update an existing report


# **create_report**
> Report create_report(org_id, opts)

Create a report



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ReportApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  body: SwaggerClient::CreateReport.new # CreateReport | Report data to create
}

begin
  #Create a report
  result = api_instance.create_report(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ReportApi->create_report: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **body** | [**CreateReport**](CreateReport.md)| Report data to create | [optional] 

### Return type

[**Report**](Report.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **delete_report**
> delete_report(org_id, report_id)

Delete a report



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ReportApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

report_id = 'report_id_example' # String | Report id


begin
  #Delete a report
  api_instance.delete_report(org_id, report_id)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ReportApi->delete_report: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **report_id** | **String**| Report id | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **export_chart_csv**
> Process export_chart_csv(org_id, report_id, chart_id, opts)

Export a particular chart in a report



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ReportApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

report_id = 'report_id_example' # String | Report id

chart_id = 'chart_id_example' # String | Chart id

opts = { 
  start_date: 'start_date_example', # String | Start date, inclusive
  end_date: 'end_date_example', # String | End date, exclusive
  interval: 'interval_example', # String | Interval
  scenario_id: 'scenario_id_example', # String | Scenario id
  project_hires: true # BOOLEAN | Project future hires
}

begin
  #Export a particular chart in a report
  result = api_instance.export_chart_csv(org_id, report_id, chart_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ReportApi->export_chart_csv: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **report_id** | **String**| Report id | 
 **chart_id** | **String**| Chart id | 
 **start_date** | **String**| Start date, inclusive | [optional] 
 **end_date** | **String**| End date, exclusive | [optional] 
 **interval** | **String**| Interval | [optional] 
 **scenario_id** | **String**| Scenario id | [optional] 
 **project_hires** | **BOOLEAN**| Project future hires | [optional] 

### Return type

[**Process**](Process.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **find_reports**
> ResultsReport find_reports(org_id, opts)

Return all reports in the organization paginated



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ReportApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  from: 'from_example', # String | Report id to start paginating from
  limit: 56 # Integer | Number of results to return
}

begin
  #Return all reports in the organization paginated
  result = api_instance.find_reports(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ReportApi->find_reports: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **from** | **String**| Report id to start paginating from | [optional] 
 **limit** | **Integer**| Number of results to return | [optional] 

### Return type

[**ResultsReport**](ResultsReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_all_report_results**
> ReportResult get_all_report_results(org_id, report_id, opts)

Query all the charts in a report



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ReportApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

report_id = 'report_id_example' # String | Report id

opts = { 
  start_date: 'start_date_example', # String | Start date, inclusive
  end_date: 'end_date_example', # String | End date, exclusive
  interval: 'interval_example', # String | Interval
  scenario_id: 'scenario_id_example', # String | Scenario id
  project_hires: true, # BOOLEAN | Project future hires
  filter: 'filter_example' # String | Filter to apply to all results
}

begin
  #Query all the charts in a report
  result = api_instance.get_all_report_results(org_id, report_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ReportApi->get_all_report_results: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **report_id** | **String**| Report id | 
 **start_date** | **String**| Start date, inclusive | [optional] 
 **end_date** | **String**| End date, exclusive | [optional] 
 **interval** | **String**| Interval | [optional] 
 **scenario_id** | **String**| Scenario id | [optional] 
 **project_hires** | **BOOLEAN**| Project future hires | [optional] 
 **filter** | **String**| Filter to apply to all results | [optional] 

### Return type

[**ReportResult**](ReportResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_report**
> Report get_report(org_id, report_id)

Return a particular report by id



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ReportApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

report_id = 'report_id_example' # String | Report id


begin
  #Return a particular report by id
  result = api_instance.get_report(org_id, report_id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ReportApi->get_report: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **report_id** | **String**| Report id | 

### Return type

[**Report**](Report.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_report_from_query**
> ReportResult get_report_from_query(org_id, opts)

Return timeseries data from arbitrary queries



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ReportApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  body: SwaggerClient::ReportQuery.new # ReportQuery | 
}

begin
  #Return timeseries data from arbitrary queries
  result = api_instance.get_report_from_query(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ReportApi->get_report_from_query: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **body** | [**ReportQuery**](ReportQuery.md)|  | [optional] 

### Return type

[**ReportResult**](ReportResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **update_report**
> update_report(org_id, report_id, opts)

Update an existing report



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ReportApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

report_id = 'report_id_example' # String | Report id

opts = { 
  body: SwaggerClient::UpdateReport.new # UpdateReport | Report data to update
}

begin
  #Update an existing report
  api_instance.update_report(org_id, report_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ReportApi->update_report: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **report_id** | **String**| Report id | 
 **body** | [**UpdateReport**](UpdateReport.md)| Report data to update | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



