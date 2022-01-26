# SwaggerClient::UpdateProcess

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | current status of process | [optional] 
**file_path** | **String** | data file path | [optional] 
**message** | **String** | status or error message | [optional] 
**progress** | **Float** | percent progress so far | [optional] 
**internal_error** | **String** | internal-only error message | [optional] 
**results** | **Hash&lt;String, Object&gt;** | results summary for the process | [optional] 
**log_data_list** | [**Array&lt;LogData&gt;**](LogData.md) | list of log data that occurred during running of this process | [optional] 
**state** | **Object** | process-specific state data | [optional] 
**app_id** | **String** | app id of the process | [optional] 


