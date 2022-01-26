# SwaggerClient::ReportChartApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_chart**](ReportChartApi.md#create_chart) | **POST** /v1/org/{orgId}/report/{reportId}/chart | Create a new chart in a report
[**delete_chart**](ReportChartApi.md#delete_chart) | **DELETE** /v1/org/{orgId}/report/chart/{chartId} | Delete a chart from a report
[**export_chart_data**](ReportChartApi.md#export_chart_data) | **GET** /v1/org/{orgId}/report/{reportId}/chart/{chartId}/data | Export a particular chart&#39;s data
[**find_charts**](ReportChartApi.md#find_charts) | **GET** /v1/org/{orgId}/report/{reportId}/chart | Return all of the charts for a particular report
[**get_chart**](ReportChartApi.md#get_chart) | **GET** /v1/org/{orgId}/report/chart/{chartId} | Return a particular report chart by id
[**update_chart**](ReportChartApi.md#update_chart) | **PATCH** /v1/org/{orgId}/report/chart/{chartId} | Update an existing report chart


# **create_chart**
> ReportChart create_chart(org_id, report_id, opts)

Create a new chart in a report



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ReportChartApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

report_id = 'report_id_example' # String | Report id

opts = { 
  body: SwaggerClient::CreateReportChart.new # CreateReportChart | Report chart data to create
}

begin
  #Create a new chart in a report
  result = api_instance.create_chart(org_id, report_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ReportChartApi->create_chart: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **report_id** | **String**| Report id | 
 **body** | [**CreateReportChart**](CreateReportChart.md)| Report chart data to create | [optional] 

### Return type

[**ReportChart**](ReportChart.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **delete_chart**
> delete_chart(org_id, chart_id)

Delete a chart from a report



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ReportChartApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

chart_id = 'chart_id_example' # String | Chart id


begin
  #Delete a chart from a report
  api_instance.delete_chart(org_id, chart_id)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ReportChartApi->delete_chart: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **chart_id** | **String**| Chart id | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **export_chart_data**
> export_chart_data(org_id, report_id, chart_id, opts)

Export a particular chart's data



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ReportChartApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

report_id = 'report_id_example' # String | Report id

chart_id = 'chart_id_example' # String | Chart id

opts = { 
  start_date: 'start_date_example', # String | Start date, inclusive
  end_date: 'end_date_example', # String | End date, exclusive
  interval: 'interval_example', # String | Interval
  scenario_id: 'scenario_id_example', # String | Scenario id
  project_hires: true, # BOOLEAN | Project future hires
  format: 'format_example' # String | Data format to use; default is json, can also use html
}

begin
  #Export a particular chart's data
  api_instance.export_chart_data(org_id, report_id, chart_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ReportChartApi->export_chart_data: #{e}"
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
 **format** | **String**| Data format to use; default is json, can also use html | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **find_charts**
> ResultsReportChart find_charts(org_id, report_id)

Return all of the charts for a particular report



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ReportChartApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

report_id = 'report_id_example' # String | Report id


begin
  #Return all of the charts for a particular report
  result = api_instance.find_charts(org_id, report_id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ReportChartApi->find_charts: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **report_id** | **String**| Report id | 

### Return type

[**ResultsReportChart**](ResultsReportChart.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_chart**
> ReportChart get_chart(org_id, chart_id)

Return a particular report chart by id



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ReportChartApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

chart_id = 'chart_id_example' # String | Chart id


begin
  #Return a particular report chart by id
  result = api_instance.get_chart(org_id, chart_id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ReportChartApi->get_chart: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **chart_id** | **String**| Chart id | 

### Return type

[**ReportChart**](ReportChart.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **update_chart**
> update_chart(org_id, chart_id, opts)

Update an existing report chart



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ReportChartApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

chart_id = 'chart_id_example' # String | Chart id

opts = { 
  body: SwaggerClient::UpdateReportChart.new # UpdateReportChart | Chart data to update
}

begin
  #Update an existing report chart
  api_instance.update_chart(org_id, chart_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ReportChartApi->update_chart: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **chart_id** | **String**| Chart id | 
 **body** | [**UpdateReportChart**](UpdateReportChart.md)| Chart data to update | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



