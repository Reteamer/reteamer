# SwaggerClient::Plan

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | unique Stripe identifier for this plan | 
**name** | **String** | human-readable nickname for this plan | 
**interval** | **String** | interval for billing on this plan | 
**interval_count** | **Integer** | number of intervals, for example 3 for quarterly billing | 
**tiers** | [**Array&lt;PlanTier&gt;**](PlanTier.md) | pricing tiers, per employee per interval | 
**stripe_product_id** | **String** | stripe product id that this plan belongs to | 


