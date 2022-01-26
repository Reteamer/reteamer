# SwaggerClient::FileEntity

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | globally unique id of file | 
**org_id** | **String** | parent org id | [optional] 
**entity_id** | **String** | entity id that the file is attached to | [optional] 
**entity_type** | **String** | entity type (should only be PERSON or USER) | [optional] 
**field** | **String** | field name that the file uses, if the file is tied to a field | [optional] 
**sensitive** | **String** | level of sensitivity of the file, if the file is not tied to a field | [optional] 
**filename** | **String** | customer facing filename of file | 
**original_filename** | **String** | original filename of file | 
**type** | **String** | mime type of file | 
**ext** | **String** | extension of file | 
**bytes** | **Integer** | size of file in bytes | 
**create_id** | **String** | created by user id | [optional] 
**create_at** | **String** | created timestamp | [optional] 
**delete_id** | **String** | deleted by user id | [optional] 
**delete_at** | **String** | deleted timestamp | [optional] 


