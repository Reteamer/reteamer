# SwaggerClient::UpdateScenario

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | scenario name | [optional] 
**description** | **String** | scenario description | [optional] 
**start_date** | **String** | date that this scenario diverges from primary | [optional] 
**status** | **String** | status of scenario | [optional] 
**share_access** | [**Array&lt;ShareAccess&gt;**](ShareAccess.md) | users who are specifically granted permission to this scenario | [optional] 
**impact** | [**ScenarioImpact**](ScenarioImpact.md) | preferred impact summary to display in the top bar | [optional] 
**start_date_fixed** | **String** | whether or not the start date should stay fixed in time, or update to today&#39;s date as time passes | [optional] 
**percent_increase** | **Float** | Percentage to increase base compensation (only applies to comp scenarios) | [optional] 
**valid_job_id_set** | **Array&lt;String&gt;** | This scenario changes are restricted to the following jobIds | [optional] 
**budget_pools** | [**Hash&lt;String, BudgetPool&gt;**](BudgetPool.md) | Budget pools associated with this scenario | [optional] 


