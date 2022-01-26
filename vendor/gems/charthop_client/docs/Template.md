# SwaggerClient::Template

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | globally unique id | 
**org_id** | **String** | parent organization id | 
**name** | **String** | template name, must be unique to organization | 
**description** | **String** | description of template | [optional] 
**content** | **String** | template content | 
**stylesheet** | **String** | template inline stylesheet | [optional] 
**format** | **String** | template content format - must be MARKDOWN | 
**type** | **String** | type of template | 
**tags** | **Array&lt;String&gt;** | tags to organize the purpose of the template | 
**filename** | **String** | document filename CQL | [optional] 
**create_id** | **String** | created by user id | 
**create_at** | **String** | created timestamp | 
**update_id** | **String** | last updated by user id | 
**update_at** | **String** | last updated timestamp | 
**delete_id** | **String** | deleted by user id | [optional] 
**delete_at** | **String** | deleted timestamp | [optional] 


