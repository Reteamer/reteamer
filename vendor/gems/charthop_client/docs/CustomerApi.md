# SwaggerClient::CustomerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_customer**](CustomerApi.md#create_customer) | **POST** /v1/customer | Create a new customer
[**find_customers**](CustomerApi.md#find_customers) | **GET** /v1/customer | Return all visible customers, paginated by name
[**get_charthop_subscription**](CustomerApi.md#get_charthop_subscription) | **GET** /v1/customer/{customerId}/subscription | Returns information about the Charthop subscription for the given customer
[**get_customer**](CustomerApi.md#get_customer) | **GET** /v1/customer/{customerId} | Return a particular customer by id
[**get_customer_invoices**](CustomerApi.md#get_customer_invoices) | **GET** /v1/customer/{customerId}/invoices | Returns a list of all the invoices for the given customer
[**update_customer**](CustomerApi.md#update_customer) | **PATCH** /v1/customer/{customerId} | Update an existing customer
[**update_subscription**](CustomerApi.md#update_subscription) | **PATCH** /v1/customer/{customerId}/subscription | 


# **create_customer**
> Customer create_customer(opts)

Create a new customer



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CustomerApi.new

opts = { 
  body: SwaggerClient::CreateCustomer.new # CreateCustomer | Customer data to create
}

begin
  #Create a new customer
  result = api_instance.create_customer(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CustomerApi->create_customer: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateCustomer**](CreateCustomer.md)| Customer data to create | [optional] 

### Return type

[**Customer**](Customer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **find_customers**
> ResultsCustomer find_customers(opts)

Return all visible customers, paginated by name



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CustomerApi.new

opts = { 
  from: 'from_example', # String | Customer id to start from
  limit: 56, # Integer | Number of results to return
  status: 'status_example' # String | Customer.Status. (ACTIVE/INACTIVE/TRAIL)
}

begin
  #Return all visible customers, paginated by name
  result = api_instance.find_customers(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CustomerApi->find_customers: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **String**| Customer id to start from | [optional] 
 **limit** | **Integer**| Number of results to return | [optional] 
 **status** | **String**| Customer.Status. (ACTIVE/INACTIVE/TRAIL) | [optional] 

### Return type

[**ResultsCustomer**](ResultsCustomer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_charthop_subscription**
> Subscription get_charthop_subscription(customer_id)

Returns information about the Charthop subscription for the given customer



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CustomerApi.new

customer_id = 'customer_id_example' # String | Customer id


begin
  #Returns information about the Charthop subscription for the given customer
  result = api_instance.get_charthop_subscription(customer_id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CustomerApi->get_charthop_subscription: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **String**| Customer id | 

### Return type

[**Subscription**](Subscription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_customer**
> Customer get_customer(customer_id)

Return a particular customer by id



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CustomerApi.new

customer_id = 'customer_id_example' # String | Customer id


begin
  #Return a particular customer by id
  result = api_instance.get_customer(customer_id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CustomerApi->get_customer: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **String**| Customer id | 

### Return type

[**Customer**](Customer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_customer_invoices**
> InvoiceResponse get_customer_invoices(customer_id)

Returns a list of all the invoices for the given customer



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CustomerApi.new

customer_id = 'customer_id_example' # String | Customer id


begin
  #Returns a list of all the invoices for the given customer
  result = api_instance.get_customer_invoices(customer_id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CustomerApi->get_customer_invoices: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **String**| Customer id | 

### Return type

[**InvoiceResponse**](InvoiceResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **update_customer**
> update_customer(customer_id, opts)

Update an existing customer



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CustomerApi.new

customer_id = 'customer_id_example' # String | Customer id

opts = { 
  body: SwaggerClient::UpdateCustomer.new # UpdateCustomer | Customer data to update
}

begin
  #Update an existing customer
  api_instance.update_customer(customer_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CustomerApi->update_customer: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **String**| Customer id | 
 **body** | [**UpdateCustomer**](UpdateCustomer.md)| Customer data to update | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **update_subscription**
> update_subscription(customer_id, opts)



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CustomerApi.new

customer_id = 'customer_id_example' # String | Customer id

opts = { 
  body: SwaggerClient::UpdateSubscription.new # UpdateSubscription | Subscription data to update
}

begin
  api_instance.update_subscription(customer_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CustomerApi->update_subscription: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **String**| Customer id | 
 **body** | [**UpdateSubscription**](UpdateSubscription.md)| Subscription data to update | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



