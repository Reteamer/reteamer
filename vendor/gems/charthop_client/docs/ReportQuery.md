# SwaggerClient::ReportQuery

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**series** | [**Array&lt;ReportSeriesQuery&gt;**](ReportSeriesQuery.md) | series to evaluate | 
**filters** | [**Array&lt;ReportFilter&gt;**](ReportFilter.md) | filters to crosstab all results by | [optional] 
**start_date** | **String** | start date, in either relative (-7d) or exact (YYYY-MM-DD) format | [optional] 
**end_date** | **String** | end date, in either relative (-7d) or exact (YYYY-MM-DD) format; if not present, defaults to today | [optional] 
**interval** | **String** | interval, if the query is a timeseries; if no interval, query is crosstabbed | [optional] 
**interval_dates** | **Array&lt;Date&gt;** | interval dates, if a specific set of irregular dates are being queried in a timeseries | [optional] 
**options** | **Object** | options, including format, scenarioId, projectHires | 


