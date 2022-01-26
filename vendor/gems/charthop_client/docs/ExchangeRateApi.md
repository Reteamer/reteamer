# SwaggerClient::ExchangeRateApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_exchange_rates**](ExchangeRateApi.md#get_exchange_rates) | **GET** /v1/org/{orgId}/exchange-rate/{date} | Return the exchange rates on a particular date
[**set_exchange_rates**](ExchangeRateApi.md#set_exchange_rates) | **PATCH** /v1/org/{orgId}/exchange-rate/{date} | Update the USD-based exchange rates for a particular date. Must be the first of a month.


# **get_exchange_rates**
> ExchangeRate get_exchange_rates(org_id, date)

Return the exchange rates on a particular date



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ExchangeRateApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

date = Date.parse('2013-10-20') # Date | Date to use


begin
  #Return the exchange rates on a particular date
  result = api_instance.get_exchange_rates(org_id, date)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ExchangeRateApi->get_exchange_rates: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **date** | **Date**| Date to use | 

### Return type

[**ExchangeRate**](ExchangeRate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **set_exchange_rates**
> set_exchange_rates(org_id, date, opts)

Update the USD-based exchange rates for a particular date. Must be the first of a month.



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ExchangeRateApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

date = Date.parse('2013-10-20') # Date | Date to use

opts = { 
  body: SwaggerClient::UpdateExchangeRate.new # UpdateExchangeRate | 
}

begin
  #Update the USD-based exchange rates for a particular date. Must be the first of a month.
  api_instance.set_exchange_rates(org_id, date, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ExchangeRateApi->set_exchange_rates: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **date** | **Date**| Date to use | 
 **body** | [**UpdateExchangeRate**](UpdateExchangeRate.md)|  | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



