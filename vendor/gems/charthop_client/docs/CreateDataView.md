# SwaggerClient::CreateDataView

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | data view name | 
**columns** | **String** | comma delimited list of columns | [optional] 
**type** | **String** | type of data view | [optional] 
**column_widths** | **Hash&lt;String, Float&gt;** | map of column names to widths in pixels | [optional] 
**date** | **String** | date of view, in either relative (-7d) or exact (YYYY-MM-DD) format; if not present, defaults to today | [optional] 
**filter** | **String** | filter query | [optional] 
**sort** | **String** | comma delimited list of columns by which to sort | [optional] 
**group_by** | **String** | column to group duplicates by | [optional] 
**share_access** | [**Array&lt;ShareAccess&gt;**](ShareAccess.md) | users who are specifically granted permission to view or edit this data view | [optional] 
**sensitive** | **String** | sensitivity level of data view | [optional] 


