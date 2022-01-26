# SwaggerClient::Todo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | globally unique id | 
**org_id** | **String** | parent organization id | 
**user_id** | **String** | user who is responsible for the todo | 
**goal_id** | **String** | parent goal id that this todo belongs to | [optional] 
**type** | **String** | type of todo | 
**entity_id** | **String** | the primary entity being referenced by the todo - for example for a FORM_SUBMIT, this will be the form | 
**target_id** | **String** | the optional target entity being referenced by the todo - for example for a FORM_SUBMIT, this will be the person | [optional] 
**status** | **String** | status of this todo - PENDING or DONE | 
**done_at** | **String** | timestamp that the todo was done, if it was done | [optional] 
**create_id** | **String** | created by user id | [optional] 
**create_at** | **String** | created timestamp | [optional] 
**message** | **String** | The message attached to this todo | [optional] 
**share_access** | [**Array&lt;ShareAccess&gt;**](ShareAccess.md) | users who are specifically granted permission to view or edit this Todo | [optional] 
**path** | **String** | the optional path of this todo (only applies to Type &#x3D;&#x3D; ORG_IMPORT) | [optional] 
**update_id** | **String** | last updated by user id | [optional] 
**update_at** | **String** | last updated timestamp | [optional] 
**delete_id** | **String** | deleted by user id | [optional] 
**delete_at** | **String** | deleted timestamp | [optional] 


