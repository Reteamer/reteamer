# SwaggerClient::UpdateForm

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **String** | human-readable full name of form | [optional] 
**description** | **String** | description of form | [optional] 
**fields** | [**Array&lt;FormField&gt;**](FormField.md) | ordered list of fields being collected in this form | [optional] 
**blocks** | [**Array&lt;FormBlock&gt;**](FormBlock.md) | ordered list of blocks being collected in this form | [optional] 
**status** | **String** | status of the form | [optional] 
**type** | **String** | type of the form | [optional] 
**sensitive** | **String** | view sensitivity of the form - only people with view access to the form can collect the data | [optional] 
**approval** | **String** | approval needed, if any approval is required | [optional] 
**author_sensitive** | **String** | view sensitivity for the author author of this form - the level of view access required to view the createId and updateId fields | [optional] 
**options** | **Object** | options, such as notification settings | [optional] 


