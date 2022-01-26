# SwaggerClient::CreateField

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**org_id** | **String** | parent organization id (empty if global) | [optional] 
**name** | **String** | short field name | 
**label** | **String** | human-readable full name of field | 
**description** | **String** | description of field | [optional] 
**question** | **String** | human-readable question associated with field | [optional] 
**readonly** | **BOOLEAN** | disallow any updates to this Field (except for field.question string) | [optional] 
**in_use** | **BOOLEAN** | disallow any updates to this Field (except for field.question string) | [optional] 
**expr** | **String** | calculated expression | [optional] 
**type** | **String** | type of field | 
**values** | [**Array&lt;EnumValue&gt;**](EnumValue.md) | possible values (enum type only) | [optional] 
**default_value** | **Object** | default value if field is not set | [optional] 
**options** | **Object** | validation options | [optional] 
**entity_type** | **String** | entity type of field | 
**sensitive** | **String** | sensitivity level of data | 
**hide_expr** | **BOOLEAN** | hide expression-derived values from non-sensitive users | [optional] 
**expire_days** | **Integer** | number of days after which the data becomes invalid | [optional] 
**status** | **String** | the status of the field | [optional] 


