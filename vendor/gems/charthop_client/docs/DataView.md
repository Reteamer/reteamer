# SwaggerClient::DataView

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | globally unique id | 
**org_id** | **String** | parent organization id | 
**name** | **String** | data view name | 
**slug** | **String** | slug for URL | 
**columns** | **String** | comma delimited list of columns | [optional] 
**type** | **String** | type of data view | [optional] 
**column_widths** | **Hash&lt;String, Float&gt;** | map of column names to widths in pixels | [optional] 
**date** | **String** | date of view, in either relative (-7d) or exact (YYYY-MM-DD) format; if not present, defaults to today | [optional] 
**filter** | **String** | filter query | [optional] 
**sort** | **String** | comma delimited list of columns by which to sort | [optional] 
**group_by** | **String** | column to group duplicates by | [optional] 
**share_access** | [**Array&lt;ShareAccess&gt;**](ShareAccess.md) | users who are specifically granted permission to view or edit this data view | [optional] 
**sensitive** | **String** | sensitivity level of data view | [optional] 
**create_id** | **String** | created by user id | [optional] 
**create_at** | **String** | created timestamp | [optional] 
**update_id** | **String** | last updated by user id | [optional] 
**update_at** | **String** | last updated timestamp | [optional] 
**delete_id** | **String** | deleted by user id | [optional] 
**delete_at** | **String** | deleted timestamp | [optional] 


