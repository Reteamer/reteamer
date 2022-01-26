# SwaggerClient::StockApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_stock_price**](StockApi.md#delete_stock_price) | **DELETE** /v1/stock/{id} | Delete a stock price
[**find_stock_prices**](StockApi.md#find_stock_prices) | **GET** /v1/stock | Return the history of stock prices
[**get_stock_price**](StockApi.md#get_stock_price) | **GET** /v1/stock/{symbol}/{date}/{type} | Get a stock price as of a particular date
[**upsert_stock**](StockApi.md#upsert_stock) | **PUT** /v1/stock/{symbol}/{date}/{type} | Upsert a stock price


# **delete_stock_price**
> delete_stock_price(id)

Delete a stock price



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::StockApi.new

id = 'id_example' # String | Stock entry id


begin
  #Delete a stock price
  api_instance.delete_stock_price(id)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling StockApi->delete_stock_price: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Stock entry id | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **find_stock_prices**
> ResultsStockPrice find_stock_prices(opts)

Return the history of stock prices



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::StockApi.new

opts = { 
  symbol: 'symbol_example', # String | Symbol to query
  type: 'type_example', # String | Types of valuations to retrieve
  from: Date.parse('2013-10-20'), # Date | Date to start from
  limit: 56 # Integer | Number of results to return
}

begin
  #Return the history of stock prices
  result = api_instance.find_stock_prices(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling StockApi->find_stock_prices: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Symbol to query | [optional] 
 **type** | **String**| Types of valuations to retrieve | [optional] 
 **from** | **Date**| Date to start from | [optional] 
 **limit** | **Integer**| Number of results to return | [optional] 

### Return type

[**ResultsStockPrice**](ResultsStockPrice.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_stock_price**
> StockPrice get_stock_price(symbol, date, type)

Get a stock price as of a particular date



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::StockApi.new

symbol = 'symbol_example' # String | Stock symbol

date = Date.parse('2013-10-20') # Date | Date to update information for

type = 'type_example' # String | Type of stock price to retrieve (for example 'public')


begin
  #Get a stock price as of a particular date
  result = api_instance.get_stock_price(symbol, date, type)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling StockApi->get_stock_price: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Stock symbol | 
 **date** | **Date**| Date to update information for | 
 **type** | **String**| Type of stock price to retrieve (for example &#39;public&#39;) | 

### Return type

[**StockPrice**](StockPrice.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **upsert_stock**
> StockPrice upsert_stock(symbol, date, type, opts)

Upsert a stock price



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::StockApi.new

symbol = 'symbol_example' # String | Stock symbol

date = Date.parse('2013-10-20') # Date | Date to update information for

type = 'type_example' # String | Type of stock price to upsert

opts = { 
  body: SwaggerClient::UpdateStockPrice.new # UpdateStockPrice | Stock price data to create
}

begin
  #Upsert a stock price
  result = api_instance.upsert_stock(symbol, date, type, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling StockApi->upsert_stock: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Stock symbol | 
 **date** | **Date**| Date to update information for | 
 **type** | **String**| Type of stock price to upsert | 
 **body** | [**UpdateStockPrice**](UpdateStockPrice.md)| Stock price data to create | [optional] 

### Return type

[**StockPrice**](StockPrice.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



