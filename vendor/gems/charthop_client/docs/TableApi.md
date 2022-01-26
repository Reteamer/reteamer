# SwaggerClient::TableApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_table**](TableApi.md#create_table) | **POST** /v1/org/{orgId}/table | Create a table
[**delete_table**](TableApi.md#delete_table) | **DELETE** /v1/org/{orgId}/table/{tableId} | Delete a table
[**export_csv**](TableApi.md#export_csv) | **POST** /v1/org/{orgId}/table/{tableId}/export | Export table data to CSV file
[**find_tables**](TableApi.md#find_tables) | **GET** /v1/org/{orgId}/table | Return all tables in the organization paginated
[**get_all_rows**](TableApi.md#get_all_rows) | **GET** /v1/org/{orgId}/table/{tableId}/data | Retrieve all rows from the table
[**get_row**](TableApi.md#get_row) | **GET** /v1/org/{orgId}/table/{tableId}/data/{keyColumn}/{keyValue} | Retrieve a particular row
[**get_table**](TableApi.md#get_table) | **GET** /v1/org/{orgId}/table/{tableId} | Return a particular table by id or name
[**import_csv**](TableApi.md#import_csv) | **POST** /v1/org/{orgId}/table/{tableId}/import | Import data from CSV file
[**update_row**](TableApi.md#update_row) | **PATCH** /v1/org/{orgId}/table/{tableId}/data/{keyColumn}/{keyValue} | Update an existing row
[**update_table**](TableApi.md#update_table) | **PATCH** /v1/org/{orgId}/table/{tableId} | Update an existing table
[**upsert_row**](TableApi.md#upsert_row) | **POST** /v1/org/{orgId}/table/{tableId}/data | Upsert row data


# **create_table**
> Table create_table(org_id, opts)

Create a table



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::TableApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  body: SwaggerClient::CreateTable.new # CreateTable | Table data to create
}

begin
  #Create a table
  result = api_instance.create_table(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling TableApi->create_table: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **body** | [**CreateTable**](CreateTable.md)| Table data to create | [optional] 

### Return type

[**Table**](Table.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **delete_table**
> delete_table(org_id, table_id)

Delete a table



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::TableApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

table_id = 'table_id_example' # String | Table id


begin
  #Delete a table
  api_instance.delete_table(org_id, table_id)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling TableApi->delete_table: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **table_id** | **String**| Table id | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **export_csv**
> Process export_csv(org_id, table_id, opts)

Export table data to CSV file



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::TableApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

table_id = 'table_id_example' # String | Table id or unique name to update

opts = { 
  body: nil # Object | export options
}

begin
  #Export table data to CSV file
  result = api_instance.export_csv(org_id, table_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling TableApi->export_csv: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **table_id** | **String**| Table id or unique name to update | 
 **body** | **Object**| export options | [optional] 

### Return type

[**Process**](Process.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **find_tables**
> ResultsTable find_tables(org_id, opts)

Return all tables in the organization paginated



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::TableApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  from: 'from_example', # String | Table id to start paginating from
  limit: 56 # Integer | Number of results to return
}

begin
  #Return all tables in the organization paginated
  result = api_instance.find_tables(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling TableApi->find_tables: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **from** | **String**| Table id to start paginating from | [optional] 
 **limit** | **Integer**| Number of results to return | [optional] 

### Return type

[**ResultsTable**](ResultsTable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_all_rows**
> ResultsData get_all_rows(org_id, table_id, opts)

Retrieve all rows from the table



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::TableApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

table_id = 'table_id_example' # String | Table id or unique name to retrieve

opts = { 
  date: Date.parse('2013-10-20'), # Date | Date to search as of
  columns: 'columns_example', # String | Columns to retrieve, comma-separated (defaults to all columns)
  format: 'format_example' # String | Data format to use; default is json, can also use json-extended, json-readable, or csv
}

begin
  #Retrieve all rows from the table
  result = api_instance.get_all_rows(org_id, table_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling TableApi->get_all_rows: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **table_id** | **String**| Table id or unique name to retrieve | 
 **date** | **Date**| Date to search as of | [optional] 
 **columns** | **String**| Columns to retrieve, comma-separated (defaults to all columns) | [optional] 
 **format** | **String**| Data format to use; default is json, can also use json-extended, json-readable, or csv | [optional] 

### Return type

[**ResultsData**](ResultsData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_row**
> ResultsData get_row(org_id, table_id, key_column, key_value, opts)

Retrieve a particular row



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::TableApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

table_id = 'table_id_example' # String | Table id or unique name to retrieve

key_column = 'key_column_example' # String | Column name to look up the row by (for example: id)

key_value = 'key_value_example' # String | Value of the column

opts = { 
  date: Date.parse('2013-10-20'), # Date | Date to search as of
  columns: 'columns_example', # String | Columns to retrieve, comma-separated (defaults to all columns)
  format: 'format_example' # String | Data format to use; default is json, can also use json-extended, json-readable, or csv
}

begin
  #Retrieve a particular row
  result = api_instance.get_row(org_id, table_id, key_column, key_value, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling TableApi->get_row: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **table_id** | **String**| Table id or unique name to retrieve | 
 **key_column** | **String**| Column name to look up the row by (for example: id) | 
 **key_value** | **String**| Value of the column | 
 **date** | **Date**| Date to search as of | [optional] 
 **columns** | **String**| Columns to retrieve, comma-separated (defaults to all columns) | [optional] 
 **format** | **String**| Data format to use; default is json, can also use json-extended, json-readable, or csv | [optional] 

### Return type

[**ResultsData**](ResultsData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_table**
> Table get_table(org_id, table_id)

Return a particular table by id or name



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::TableApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

table_id = 'table_id_example' # String | Table id or name


begin
  #Return a particular table by id or name
  result = api_instance.get_table(org_id, table_id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling TableApi->get_table: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **table_id** | **String**| Table id or name | 

### Return type

[**Table**](Table.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **import_csv**
> Process import_csv(org_id, table_id, opts)

Import data from CSV file



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::TableApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

table_id = 'table_id_example' # String | Table id or unique name to update

opts = { 
  file: File.new('/path/to/file.txt'), # File | 
  date: Date.parse('2013-10-20') # Date | Date to update as of
}

begin
  #Import data from CSV file
  result = api_instance.import_csv(org_id, table_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling TableApi->import_csv: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **table_id** | **String**| Table id or unique name to update | 
 **file** | **File**|  | [optional] 
 **date** | **Date**| Date to update as of | [optional] 

### Return type

[**Process**](Process.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json



# **update_row**
> ResultsData update_row(org_id, table_id, key_column, key_value, opts)

Update an existing row



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::TableApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

table_id = 'table_id_example' # String | Table id or unique name to update

key_column = 'key_column_example' # String | Column name to look up the row by (for example: id)

key_value = 'key_value_example' # String | Value of the key column

opts = { 
  date: Date.parse('2013-10-20'), # Date | Date to update as of
  body: nil # Object | 
}

begin
  #Update an existing row
  result = api_instance.update_row(org_id, table_id, key_column, key_value, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling TableApi->update_row: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **table_id** | **String**| Table id or unique name to update | 
 **key_column** | **String**| Column name to look up the row by (for example: id) | 
 **key_value** | **String**| Value of the key column | 
 **date** | **Date**| Date to update as of | [optional] 
 **body** | **Object**|  | [optional] 

### Return type

[**ResultsData**](ResultsData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **update_table**
> update_table(org_id, table_id, opts)

Update an existing table



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::TableApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

table_id = 'table_id_example' # String | Table id or name

opts = { 
  body: SwaggerClient::UpdateTable.new # UpdateTable | Table data to update
}

begin
  #Update an existing table
  api_instance.update_table(org_id, table_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling TableApi->update_table: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **table_id** | **String**| Table id or name | 
 **body** | [**UpdateTable**](UpdateTable.md)| Table data to update | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **upsert_row**
> ResultsData upsert_row(org_id, table_id, opts)

Upsert row data



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::TableApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

table_id = 'table_id_example' # String | Table id or unique name to update

opts = { 
  date: Date.parse('2013-10-20'), # Date | Date to update as of
  body: nil # Object | 
}

begin
  #Upsert row data
  result = api_instance.upsert_row(org_id, table_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling TableApi->upsert_row: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **table_id** | **String**| Table id or unique name to update | 
 **date** | **Date**| Date to update as of | [optional] 
 **body** | **Object**|  | [optional] 

### Return type

[**ResultsData**](ResultsData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



