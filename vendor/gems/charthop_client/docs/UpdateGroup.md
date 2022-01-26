# SwaggerClient::UpdateGroup

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | unique name of group | [optional] 
**slug** | **String** | unique slug of group | [optional] 
**code** | **String** | external code identifier of the group | [optional] 
**aliases** | **Array&lt;String&gt;** | aliases for group | [optional] 
**lead_job_ids** | **Array&lt;String&gt;** | a list of group leaders, or null if the leader of the group should be automatically derived from the org chart | [optional] 
**fields** | **Object** | group fields (currently only description) | [optional] 
**address** | [**Address**](Address.md) | address of the group, for LOCATION type only | [optional] 
**level** | **Integer** | level of the group, for BAND type only | [optional] 
**func** | **String** | Job function category of the group, for DEPARTMENT type only | [optional] 
**location_type** | **String** | Type of the location, for LOCATION type only | [optional] 
**parent_group_id** | **String** | parent group id | [optional] 
**timezone** | **String** | timezone of the group, for LOCATION type only | [optional] 
**comp_min** | [**Comp**](Comp.md) | compensation range minimums | [optional] 
**comp_max** | [**Comp**](Comp.md) | compensation range maximums | [optional] 
**image_path** | **String** | path to profile image | [optional] 
**color** | **String** | color of group | [optional] 


