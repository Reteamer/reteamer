# SwaggerClient::Table

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | globally unique id | 
**org_id** | **String** | parent org id | [optional] 
**name** | **String** | name of table | 
**label** | **String** | human readable label for the table | 
**columns** | [**Array&lt;TableColumn&gt;**](TableColumn.md) | columns that are used in this table | 
**effective_dated** | **BOOLEAN** | whether or not the table is time tracked with effective dates (allows time travel or not). If false, then the values set in the table will be the same across all dates. | 
**share_access** | [**Array&lt;ShareAccess&gt;**](ShareAccess.md) | users who are specifically granted permission to this table | 
**row_count** | **Integer** | number of rows in the table | 
**create_id** | **String** | created by user id | 
**create_at** | **String** | created timestamp | 
**update_id** | **String** | last updated by user id | 
**update_at** | **String** | last updated timestamp | 
**delete_id** | **String** | deleted by user id | [optional] 
**delete_at** | **String** | deleted timestamp | [optional] 


