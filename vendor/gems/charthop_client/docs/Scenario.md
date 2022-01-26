# SwaggerClient::Scenario

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | globally unique id | 
**org_id** | **String** | parent organization id | 
**name** | **String** | scenario name | 
**description** | **String** | scenario description | [optional] 
**start_date** | **String** | date that this scenario diverges from primary | 
**status** | **String** | status of scenario | 
**share_access** | [**Array&lt;ShareAccess&gt;**](ShareAccess.md) | users who are specifically granted permission to this scenario | 
**cost** | [**CostImpact**](CostImpact.md) | summary of cost impact on scenario | [optional] 
**impact** | [**ScenarioImpact**](ScenarioImpact.md) | preferred impact summary to display in the top bar | [optional] 
**goals** | [**Array&lt;GoalImpact&gt;**](GoalImpact.md) | summary of impact on scenario goals | [optional] 
**change_count** | **Integer** | number of changes contained in scenario | [optional] 
**change_counts** | **Hash&lt;String, Integer&gt;** | number of changes of each type contained in scenario | [optional] 
**approval_count** | **Integer** | number of approved changes in scenario | 
**create_id** | **String** | created by user id | 
**create_at** | **String** | created timestamp | 
**update_id** | **String** | last updated by user id | 
**update_at** | **String** | last updated timestamp | 
**delete_id** | **String** | deleted by user id | [optional] 
**delete_at** | **String** | deleted timestamp | [optional] 
**merge_id** | **String** | merged by user id | [optional] 
**merge_at** | **String** | merged timestamp | [optional] 
**calc_start_at** | **String** | most recent summary calculation started at timestamp | [optional] 
**calc_end_at** | **String** | most recent summary calculation ended at timestamp | [optional] 
**calc_goal_at** | **String** | most recent goal calculation ended at timestamp | [optional] 
**change_at** | **String** | timestamp of most recent changes made to scenario | [optional] 
**change_id** | **String** | user who made the most recent change to scenario | [optional] 
**type** | **String** | Type of scenario to be created (either &#39;general&#39; or &#39;comp&#39; | [optional] 
**start_date_fixed** | **String** | whether or not the start date should stay fixed in time, or update to today&#39;s date as time passes | [optional] 
**query** | **String** | Query for selecting which people/jobs are initially included in the scenario (only applies to comp scenarios) | [optional] 
**percent_increase** | **Float** | Percentage to increase base compensation (only applies to comp scenarios) | [optional] 
**base_increase_per_reviewee** | **Float** | The total amount to increase base compensation per employee (only applies to comp scenarios, we store the per employee value to compensate for people who may leave in the middle of the review) | [optional] 
**valid_job_id_set** | **Array&lt;String&gt;** | This scenario changes are restricted to the following jobIds | [optional] 
**merge_approval** | **String** | Requirement for this scenario to merge | [optional] 
**goal_id** | **String** | The optional goal id of this scenario | [optional] 
**target_budget_amount** | **Float** | Target budget for this scenario in primary currency | [optional] 
**budget_pools** | [**Hash&lt;String, BudgetPool&gt;**](BudgetPool.md) | Budget pools associated with this scenario | [optional] 


