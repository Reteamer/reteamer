# SwaggerClient::CreateCustomer

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | name of customer | 
**email** | **String** | email address for billing purposes | 
**bill_address** | [**Address**](Address.md) | mailing address for billing purposes | [optional] 
**industry** | **String** | industry that customer is in | [optional] 
**status** | **String** | current status | [optional] 
**salesforce_account_id** | **String** | salesforce account id | 
**products** | [**Array&lt;ProductItem&gt;**](ProductItem.md) | products that this customer has purchased | [optional] 
**custom_plan_annual** | [**Money**](Money.md) | custom plan annual amount, if it is not being tracked on Stripe | [optional] 
**start_date** | **Date** | initial date of billing | 
**end_date** | **Date** | end of service date for churning customers -- on or after this date, service should be disabled | [optional] 
**next_invoice_date** | **Date** | date of next invoice | [optional] 
**arr** | **Float** | current ARR of the customer based on most recent invoice | [optional] 
**projected_arr** | **Float** | projected ARR of the customer for upcoming invoice, based on plan and headcount | [optional] 
**options** | **Object** | options, including fteOnly | [optional] 
**trial_start_date** | **Date** | date this customer begins their trial period | [optional] 
**trial_end_date** | **Date** | date this customer ends their trial period | [optional] 


