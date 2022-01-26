# SwaggerClient::AppConfig

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | globally unique id | [optional] 
**app_id** | **String** | app id | 
**user_id** | **String** | user id, if this person corresponds with a user | [optional] 
**org_id** | **String** | org id, if this app config corresponds with an org | [optional] 
**field_mappers** | [**Array&lt;FieldMapper&gt;**](FieldMapper.md) | list of default field mappers | [optional] 
**custom_field_mappers** | [**Array&lt;FieldMapper&gt;**](FieldMapper.md) | list of custom field mappers by a user | [optional] 
**disabled_field_mappers** | **Array&lt;String&gt;** | list of disabled field mappers by a user | [optional] 
**template_matchers** | **Array&lt;Hash&lt;String, String&gt;&gt;** | template field matchers defined by a user | [optional] 
**create_id** | **String** | created by user id | 
**create_at** | **String** | created timestamp | 
**update_id** | **String** | last updated by user id | 
**update_at** | **String** | last updated timestamp | 
**options** | **Object** | app specific options | [optional] 


