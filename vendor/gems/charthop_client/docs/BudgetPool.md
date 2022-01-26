# SwaggerClient::BudgetPool

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | the type of budget pool | 
**label** | **String** | label of budget pool | 
**basis_type** | **String** | basis type | 
**fixed_amount** | **Object** | budget amount when basis type is FIXED | [optional] 
**percent_increase** | **Float** | percentage of original when basis type is PERCENTAGE | [optional] 
**custom_basis_expr** | **String** | custom expression to determine budget basis amount when basis type is CUSTOM | [optional] 
**custom_cost_expr** | **String** | optional custom expression to determine custom amount for cost | [optional] 
**custom_calc_expr** | **String** | optional custom expression to determine final calculated amount | [optional] 


