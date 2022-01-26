# SwaggerClient::Event

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | globally unique id | 
**user_id** | **String** | user id who caused the event | 
**org_id** | **String** | parent organization id | [optional] 
**type** | **String** | type of event | 
**entity_type** | **String** | type of target entity | 
**entity_id** | **String** | id of target entity | 
**table_id** | **String** | id of table, if entity is a table row | [optional] 
**subtype** | **String** | subtype of entity | [optional] 
**payload** | **Object** | event-specific payload containing information about the change that took place | [optional] 
**at** | **Integer** | timestamp of event | 


