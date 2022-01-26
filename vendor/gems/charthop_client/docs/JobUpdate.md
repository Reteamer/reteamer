# SwaggerClient::JobUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**add_relationships** | [**Array&lt;JobRelationship&gt;**](JobRelationship.md) | relationships to add | [optional] 
**remove_relationships** | [**Array&lt;JobRelationship&gt;**](JobRelationship.md) | relationships to remove | [optional] 
**add_group_ids** | **Array&lt;String&gt;** | groups to add | [optional] 
**remove_group_ids** | **Array&lt;String&gt;** | groups to remove | [optional] 
**set_group_ids** | **Hash&lt;String, String&gt;** | groups to set | [optional] 
**grant** | [**StockGrant**](StockGrant.md) | stock grant to add | [optional] 
**time_off** | [**TimeOff**](TimeOff.md) | time off to add | [optional] 
**title** | **String** | new title | [optional] 
**comp** | [**Comp**](Comp.md) | new compensation level | [optional] 
**placement** | **String** | new placement | [optional] 
**employment** | **String** | new employment status | [optional] 
**sensitive** | **String** | new view sensitivity | [optional] 
**start_date** | **Date** | new expected start date | [optional] 
**backfill_person_id** | **Object** | set who this job is backfilling | [optional] 
**fields** | **Hash&lt;String, Object&gt;** | custom fields values to set | [optional] 


