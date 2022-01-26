# SwaggerClient::StockGrant

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | unique identifier of grant | 
**stock** | **String** | ticker symbol of this stock | 
**date** | **Date** | date of grant | 
**vest_date** | **Date** | vesting start date of grant | [optional] 
**expire_date** | **Date** | expiration date of grant | [optional] 
**shares** | **Float** | number of shares granted | 
**price** | **Float** | per share strike price | 
**type** | **String** | type of grant | 
**vest** | **String** | vesting schedule | 
**original_price** | **Float** | original per share value of stock (grant price at time of issue) | [optional] 
**current_price** | **Float** | current per share value of stock | [optional] 
**vested_shares** | **Float** | current number of shares vested | [optional] 
**vested_shares_next_year** | **Float** | number of shares vested one year from today | [optional] 
**vested_shares_by_date** | **Hash&lt;String, Float&gt;** | number of shares vested, by future date | [optional] 
**vest_end_date** | **Date** | vesting end date | [optional] 
**cancel_date** | **Date** | cancellation date | [optional] 


