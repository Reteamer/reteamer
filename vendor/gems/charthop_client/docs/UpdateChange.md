# SwaggerClient::UpdateChange

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | **Date** | date of change | [optional] 
**announce_date** | **Date** | for HIRE and DEPART changes, the announce date, if the announce date is different from the date of change | [optional] 
**status** | **String** | whether the change is active or not | [optional] 
**depart_type** | **String** | for DEPART changes, the type of departure | [optional] 
**depart_regret** | **String** | for DEPART changes, whether the departure is regrettable | [optional] 
**reason** | **String** | the reason of the change | [optional] 
**promotion_type** | **String** | if it&#39;s a promotion or a demotion | [optional] 
**job** | [**PartialJob**](PartialJob.md) | for CREATE changes, the initial job data; for other changes, the title and groups at the time of change | [optional] 
**update** | [**JobUpdate**](JobUpdate.md) | for UPDATE changes, the data being updated | [optional] 
**note** | **String** | note on the change | [optional] 
**approval_note** | **String** | approval/rejection note | [optional] 


