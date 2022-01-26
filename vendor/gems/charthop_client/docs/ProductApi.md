# SwaggerClient::ProductApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_product**](ProductApi.md#create_product) | **POST** /v1/product | Create a new product
[**find_products**](ProductApi.md#find_products) | **GET** /v1/product | Return all products
[**get_product**](ProductApi.md#get_product) | **GET** /v1/product/{productId} | Return a particular product by id
[**update_product**](ProductApi.md#update_product) | **PATCH** /v1/product/{productId} | Update an existing product


# **create_product**
> Product create_product(opts)

Create a new product



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ProductApi.new

opts = { 
  body: SwaggerClient::CreateProduct.new # CreateProduct | Product data to create
}

begin
  #Create a new product
  result = api_instance.create_product(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ProductApi->create_product: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateProduct**](CreateProduct.md)| Product data to create | [optional] 

### Return type

[**Product**](Product.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **find_products**
> ResultsProduct find_products

Return all products



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ProductApi.new

begin
  #Return all products
  result = api_instance.find_products
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ProductApi->find_products: #{e}"
end
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ResultsProduct**](ResultsProduct.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_product**
> Product get_product(product_id)

Return a particular product by id



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ProductApi.new

product_id = 'product_id_example' # String | Product id


begin
  #Return a particular product by id
  result = api_instance.get_product(product_id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ProductApi->get_product: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **String**| Product id | 

### Return type

[**Product**](Product.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **update_product**
> update_product(product_id, opts)

Update an existing product



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ProductApi.new

product_id = 'product_id_example' # String | Product id

opts = { 
  body: SwaggerClient::UpdateProduct.new # UpdateProduct | Product data to update
}

begin
  #Update an existing product
  api_instance.update_product(product_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ProductApi->update_product: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **String**| Product id | 
 **body** | [**UpdateProduct**](UpdateProduct.md)| Product data to update | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



