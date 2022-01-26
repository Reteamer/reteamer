# SwaggerClient::CreateAction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | **String** | event pattern to match on, such as change.create.* | [optional] 
**cron_schedule** | **String** | cron schedule to run on, in crontab format | [optional] 
**filter** | **String** | only run when matching a particular filter | [optional] 
**steps** | [**Array&lt;ActionStep&gt;**](ActionStep.md) | list of steps to run when matching the event, schedule, and filter | 
**description** | **String** | description of the action | [optional] 
**tags** | **Array&lt;String&gt;** | tags to organize the purpose of the action | [optional] 
**status** | **String** | status of the action | [optional] 
**sensitive** | **BOOLEAN** | whether to run with access to sensitive events or not | 


