# SwaggerClient::Action

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | globally unique id | 
**org_id** | **String** | parent organization id | 
**event** | **String** | event pattern to match on, such as change.create.* | [optional] 
**cron_schedule** | **String** | cron schedule to run on, in crontab format | [optional] 
**filter** | **String** | only run when matching a particular filter | [optional] 
**steps** | [**Array&lt;ActionStep&gt;**](ActionStep.md) | list of steps to run when matching the event, schedule, and filter | 
**description** | **String** | description of the action | [optional] 
**tags** | **Array&lt;String&gt;** | tags to organize the purpose of the action | [optional] 
**status** | **String** | status of the action | 
**run_user_id** | **String** | the user to run the action as - normally the same as the user who created the action | 
**sensitive** | **BOOLEAN** | whether to run with access to sensitive events or not | 
**create_id** | **String** | created by user id | [optional] 
**create_at** | **String** | created timestamp | [optional] 
**update_id** | **String** | last updated by user id | [optional] 
**update_at** | **String** | last updated timestamp | [optional] 
**delete_id** | **String** | deleted by user id | [optional] 
**delete_at** | **String** | deleted timestamp | [optional] 


