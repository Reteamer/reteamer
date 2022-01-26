# SwaggerClient::CreateGoal

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **String** | human-readable label of goal | 
**slug** | **String** | unique slug of goal | [optional] 
**type** | **String** | type of goal | 
**fields** | **Object** | goal fields (description) | [optional] 
**results** | [**Array&lt;GoalResult&gt;**](GoalResult.md) | goal results (defined outcome metrics) | [optional] 
**parent_goal_id** | **String** | parent goal id | [optional] 
**owner_job_id** | **String** | single job who owns this goal outcome | [optional] 
**shared_job_ids** | **Array&lt;String&gt;** | list of job ids who share responsibility for this goal outcome | [optional] 
**group_ids** | **Array&lt;String&gt;** | list of group ids who share responsibility for this goal outcome | [optional] 
**share_access** | [**Array&lt;ShareAccess&gt;**](ShareAccess.md) | users who have been granted access to this goal | [optional] 
**sensitive** | **String** | view sensitivity of this goal | [optional] 
**color** | **String** | color of goal | [optional] 
**start_date** | **Date** | Date this goal begins. In the context of REVIEW goals, the date the review cycle begins. | [optional] 
**end_date** | **Date** | Date this goal ends, or is completed. In the context of REVIEW goals, the date the review cycle ends. | [optional] 
**status** | **String** | status of this Goal - DRAFT, ACTIVE, DONE | [optional] 
**done_at** | **String** | timestamp when the status of this Goal was set to done | [optional] 
**todo_count** | **Integer** | number of todo&#39;s associated with this goal | [optional] 
**todo_done_count** | **Integer** | number of todo&#39;s associated with this goal that are done | [optional] 
**people_included_count** | **Integer** | number of people included in this goal | [optional] 
**query** | **String** | Query for which people/jobs can be included in the review. | [optional] 
**columns** | **Array&lt;String&gt;** | For COMP_REVIEW goals, the columns shown on attached scenarios by default. Listed by field name. | [optional] 
**locked_field_map** | **Hash&lt;String, String&gt;** | For the specified field name, use this expression to lock the fields | [optional] 
**budget_pools** | [**Hash&lt;String, BudgetPool&gt;**](BudgetPool.md) | Budget pools associated with this goal used as defaults. Can be overridden by individual scenarios. | [optional] 
**budget_pools_enabled** | **BOOLEAN** | Use smart budget pools (beta) | 
**goal_options** | [**GoalOptions**](GoalOptions.md) | Goal specific options | [optional] 


