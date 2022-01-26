# SwaggerClient::ExchangeRate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | globally unique id | 
**org_id** | **String** | org id, if an org-specific exchange rate is in use | [optional] 
**date** | **Date** | date | 
**currency** | **String** | base currency | 
**rates** | **Hash&lt;String, Float&gt;** | exchange rates, per currency - the multiplier to convert the base currency into the foreign currency | 
**update_at** | **String** | updated timestamp | [optional] 


