# SwaggerClient::Report

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | globally unique id | 
**org_id** | **String** | parent organization id | 
**label** | **String** | report label | 
**description** | **String** | report description | [optional] 
**filter** | **String** | filter automatically applied to every chart in this report | [optional] 
**share** | **String** | sharing settings of report | 
**sensitive** | **String** | sensitivity level of report | 
**share_access** | [**Array&lt;ShareAccess&gt;**](ShareAccess.md) | users who are specifically granted permission to view or edit this report | 
**create_id** | **String** | created by user id | 
**create_at** | **String** | created timestamp | 
**update_id** | **String** | last updated by user id | 
**update_at** | **String** | last updated timestamp | 
**delete_id** | **String** | deleted by user id | [optional] 
**delete_at** | **String** | deleted timestamp | [optional] 


