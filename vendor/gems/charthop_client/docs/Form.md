# SwaggerClient::Form

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | globally unique id | 
**org_id** | **String** | parent organization id | 
**label** | **String** | human-readable full name of form | 
**description** | **String** | description of form | [optional] 
**fields** | [**Array&lt;FormField&gt;**](FormField.md) | ordered list of fields being collected in this form | 
**blocks** | [**Array&lt;FormBlock&gt;**](FormBlock.md) | ordered list of blocks being collected in this form | [optional] 
**status** | **String** | status of the form | 
**type** | **String** | type of the form | [optional] 
**sensitive** | **String** | view sensitivity of the form - only people with view access to the form can collect the data | 
**approval** | **String** | approval needed, if any approval is required | [optional] 
**author_sensitive** | **String** | view sensitivity for the author author of this form - the level of view access required to view the createId and updateId fields | [optional] 
**options** | **Object** | options, such as notification settings | 
**create_id** | **String** | created by user id | [optional] 
**create_at** | **String** | created timestamp | [optional] 
**update_id** | **String** | last updated by user id | [optional] 
**update_at** | **String** | last updated timestamp | [optional] 
**delete_id** | **String** | deleted by user id | [optional] 
**delete_at** | **String** | deleted timestamp | [optional] 


