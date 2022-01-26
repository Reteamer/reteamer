# SwaggerClient::Content

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | globally unique id | 
**org_id** | **String** | parent organization id | 
**label** | **String** | human-readable name of content | 
**blocks** | [**Array&lt;Block&gt;**](Block.md) | ordered list of blocks contained by content | 
**status** | **String** | status of the content | 
**sensitive** | **String** | sensitivity level of the content | 
**filter** | **String** | filter condition for whether the content appears or not | [optional] 
**sort** | **Integer** | sort order | 
**create_id** | **String** | created by user id | [optional] 
**create_at** | **String** | created timestamp | [optional] 
**update_id** | **String** | last updated by user id | [optional] 
**update_at** | **String** | last updated timestamp | [optional] 
**delete_id** | **String** | deleted by user id | [optional] 
**delete_at** | **String** | deleted timestamp | [optional] 


