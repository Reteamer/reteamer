# SwaggerClient::StripeApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**find_stripe_plans**](StripeApi.md#find_stripe_plans) | **GET** /v1/stripe/plan | Return all billing plans directly from Stripe (staff only)
[**find_stripe_products**](StripeApi.md#find_stripe_products) | **GET** /v1/stripe/product | Return all products directly from Stripe (staff only)
[**get_setup_intent**](StripeApi.md#get_setup_intent) | **POST** /v1/stripe/setup-intent | Creates a Stripe setupIntent object and returns the secret for that object
[**get_stripe_product**](StripeApi.md#get_stripe_product) | **GET** /v1/stripe/product/{productId} | Return a particular product by its Stripe id
[**process_stripe_webhook**](StripeApi.md#process_stripe_webhook) | **POST** /v1/stripe/webhook | Process webhook events from Stripe


# **find_stripe_plans**
> ResultsPlan find_stripe_plans

Return all billing plans directly from Stripe (staff only)



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::StripeApi.new

begin
  #Return all billing plans directly from Stripe (staff only)
  result = api_instance.find_stripe_plans
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling StripeApi->find_stripe_plans: #{e}"
end
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ResultsPlan**](ResultsPlan.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **find_stripe_products**
> ResultsStripeProduct find_stripe_products

Return all products directly from Stripe (staff only)



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::StripeApi.new

begin
  #Return all products directly from Stripe (staff only)
  result = api_instance.find_stripe_products
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling StripeApi->find_stripe_products: #{e}"
end
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ResultsStripeProduct**](ResultsStripeProduct.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_setup_intent**
> SetupIntent get_setup_intent

Creates a Stripe setupIntent object and returns the secret for that object



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::StripeApi.new

begin
  #Creates a Stripe setupIntent object and returns the secret for that object
  result = api_instance.get_setup_intent
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling StripeApi->get_setup_intent: #{e}"
end
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SetupIntent**](SetupIntent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_stripe_product**
> StripeProduct get_stripe_product(opts)

Return a particular product by its Stripe id



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::StripeApi.new

opts = { 
  product_id: 'product_id_example' # String | Stripe product id
}

begin
  #Return a particular product by its Stripe id
  result = api_instance.get_stripe_product(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling StripeApi->get_stripe_product: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **String**| Stripe product id | [optional] 

### Return type

[**StripeProduct**](StripeProduct.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **process_stripe_webhook**
> process_stripe_webhook(opts)

Process webhook events from Stripe



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::StripeApi.new

opts = { 
  stripe_signature: 'stripe_signature_example', # String | 
  body: 'body_example' # String | 
}

begin
  #Process webhook events from Stripe
  api_instance.process_stripe_webhook(opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling StripeApi->process_stripe_webhook: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stripe_signature** | **String**|  | [optional] 
 **body** | **String**|  | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



