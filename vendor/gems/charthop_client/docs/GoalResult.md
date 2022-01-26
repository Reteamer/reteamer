# SwaggerClient::GoalResult

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | unique id of goal result | [optional] 
**goal_id** | **String** | goal id | [optional] 
**label** | **String** | human readable label describing this result | [optional] 
**expr** | **String** | expression describing how to evaluate this result | 
**date** | **Date** | effective date of this result | 
**value** | **Float** | value of expression, as of the date | [optional] 
**value_scenario** | **Float** | value of expression, as of the date within a scenario (only used when returning scenario goals) | [optional] 
**max** | **Float** | max value for this result to be a success | [optional] 
**min** | **Float** | min value for this result to be a success | [optional] 


