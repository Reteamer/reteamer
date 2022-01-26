# SwaggerClient::Process

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | globally unique id | 
**org_id** | **String** | parent org id | 
**label** | **String** | human-readable label that identifies this process | 
**type** | **String** | process type | 
**status** | **String** | current status of process | 
**file_path** | **String** | data file path | [optional] 
**log_path** | **String** | data log path | [optional] 
**run_user_id** | **String** | user id who is running the process | 
**parent_process_id** | **String** | process id of parent process | [optional] 
**create_id** | **String** | created by user id (user who requested the process run) | 
**create_at** | **String** | created timestamp | 
**update_id** | **String** | last updated by user id | [optional] 
**update_at** | **String** | last updated timestamp | [optional] 
**start_at** | **String** | started at timestamp | [optional] 
**end_at** | **String** | ended at timestamp | [optional] 
**message** | **String** | status or error message | [optional] 
**progress** | **Float** | percent progress so far | [optional] 
**internal_error** | **String** | internal-only error message | [optional] 
**options** | **Object** | options passed to the process | 
**results** | **Hash&lt;String, Object&gt;** | results summary for the process | [optional] 
**log_data_list** | [**Array&lt;LogData&gt;**](LogData.md) | list of log data that occurred during running of this process | [optional] 
**state** | **Object** | process-specific state data | [optional] 
**app_id** | **String** | app id of the process | [optional] 


