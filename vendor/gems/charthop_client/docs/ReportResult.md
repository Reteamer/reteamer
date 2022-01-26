# SwaggerClient::ReportResult

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | globally unique id | 
**org_id** | **String** | parent org id | 
**key** | **String** | identifying key for this report result | 
**start_date** | **Date** | date that the report result interval begins, inclusive | 
**end_date** | **Date** | date that the report result interval ends, exclusive | 
**options** | **Object** | date that the report result interval ends, exclusive | 
**queries** | [**Array&lt;ReportQuery&gt;**](ReportQuery.md) | list of queries that were requested | 
**results** | [**Array&lt;ReportQueryResult&gt;**](ReportQueryResult.md) | list of the results, one per query that was requested | 
**build_start_at** | **String** | start time of last build | [optional] 
**build_end_at** | **String** | end time of last build | [optional] 
**message** | **String** | status or error message | [optional] 
**progress** | **Float** | percent progress so far | [optional] 
**view_id** | **String** | view user id | 
**create_id** | **String** | created by user id | 
**create_at** | **String** | created timestamp | 
**status** | **String** | status of the report result | 


