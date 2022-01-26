# SwaggerClient::UpdateTable

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | name of table | [optional] 
**label** | **String** | human readable label for the table | [optional] 
**columns** | [**Array&lt;TableColumn&gt;**](TableColumn.md) | columns that are used in this table | [optional] 
**effective_dated** | **BOOLEAN** | whether or not the table is time tracked with effective dates (allows time travel or not). If false, then the values set in the table will be the same across all dates. | [optional] 
**share_access** | [**Array&lt;ShareAccess&gt;**](ShareAccess.md) | users who are specifically granted permission to this table | [optional] 


