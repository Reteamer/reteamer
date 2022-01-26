# SwaggerClient::ImportApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**import_data_csv**](ImportApi.md#import_data_csv) | **POST** /v1/org/{orgId}/import/csv/data | Import data from CSV file
[**import_data_csv_with_file_path**](ImportApi.md#import_data_csv_with_file_path) | **POST** /v1/org/{orgId}/import/csv/filepath | Import data from CSV file
[**import_history_csv**](ImportApi.md#import_history_csv) | **POST** /v1/org/{orgId}/import/csv/history | Import history data from CSV file


# **import_data_csv**
> Process import_data_csv(org_id, opts)

Import data from CSV file



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ImportApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  file: File.new('/path/to/file.txt'), # File | 
  scenario_id: 'scenario_id_example', # String | scenario id to import into
  skip_errors: true, # BOOLEAN | whether to skip erroneous rows, or reject the entire upload if any are invalid (default)
  upsert: true, # BOOLEAN | whether to create persons/jobs that are not matched
  create_groups: true, # BOOLEAN | whether to create groups that are not matched
  disable_sync_hire_date: true, # BOOLEAN | whether to disable adjusting dates of hires in cases where the start dates differ
  update_types: 'update_types_example', # String | types of updates to apply (default all: title,comp,group,relationship,data,other)
  notify_user_ids: 'notify_user_ids_example', # String | comma-separated list of user ids who should be notified when the import is complete
  notify_app_name: 'notify_app_name_example', # String | name of the app that should be listed in the notify
  delta_upload: true, # BOOLEAN | run a delta sync?
  validate_delta_upload: true, # BOOLEAN | run a delta sync in validation mode?
  default_change_date: Date.parse('2013-10-20'), # Date | date of the changes - if not presented on the csv file
  disable_overwrite_person: true, # BOOLEAN | disable overwriting changes to persons' data -- only update data if the person field is null
  import_dry_run: true, # BOOLEAN | import dry run
  import_after_dry_run: true, # BOOLEAN | whether to automatically import if dry run succeeds
  parent_process_id: 'parent_process_id_example', # String | process id of parent process
  import_source: 'import_source_example' # String | self identified source caller into this method
}

begin
  #Import data from CSV file
  result = api_instance.import_data_csv(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ImportApi->import_data_csv: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **file** | **File**|  | [optional] 
 **scenario_id** | **String**| scenario id to import into | [optional] 
 **skip_errors** | **BOOLEAN**| whether to skip erroneous rows, or reject the entire upload if any are invalid (default) | [optional] 
 **upsert** | **BOOLEAN**| whether to create persons/jobs that are not matched | [optional] 
 **create_groups** | **BOOLEAN**| whether to create groups that are not matched | [optional] 
 **disable_sync_hire_date** | **BOOLEAN**| whether to disable adjusting dates of hires in cases where the start dates differ | [optional] 
 **update_types** | **String**| types of updates to apply (default all: title,comp,group,relationship,data,other) | [optional] 
 **notify_user_ids** | **String**| comma-separated list of user ids who should be notified when the import is complete | [optional] 
 **notify_app_name** | **String**| name of the app that should be listed in the notify | [optional] 
 **delta_upload** | **BOOLEAN**| run a delta sync? | [optional] 
 **validate_delta_upload** | **BOOLEAN**| run a delta sync in validation mode? | [optional] 
 **default_change_date** | **Date**| date of the changes - if not presented on the csv file | [optional] 
 **disable_overwrite_person** | **BOOLEAN**| disable overwriting changes to persons&#39; data -- only update data if the person field is null | [optional] 
 **import_dry_run** | **BOOLEAN**| import dry run | [optional] 
 **import_after_dry_run** | **BOOLEAN**| whether to automatically import if dry run succeeds | [optional] 
 **parent_process_id** | **String**| process id of parent process | [optional] 
 **import_source** | **String**| self identified source caller into this method | [optional] 

### Return type

[**Process**](Process.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json



# **import_data_csv_with_file_path**
> Process import_data_csv_with_file_path(org_id, opts)

Import data from CSV file



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ImportApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  file_path: 'file_path_example', # String | filePath
  scenario_id: 'scenario_id_example', # String | scenario id to import into
  skip_errors: true, # BOOLEAN | whether to skip erroneous rows, or reject the entire upload if any are invalid (default)
  upsert: true, # BOOLEAN | whether to create persons/jobs that are not matched
  create_groups: true, # BOOLEAN | whether to create groups that are not matched
  disable_sync_hire_date: true, # BOOLEAN | whether to disable adjusting dates of hires in cases where the start dates differ
  update_types: 'update_types_example', # String | types of updates to apply (default all: title,comp,group,relationship,data,other)
  notify_user_ids: 'notify_user_ids_example', # String | comma-separated list of user ids who should be notified when the import is complete
  notify_app_name: 'notify_app_name_example', # String | name of the app that should be listed in the notify
  delta_upload: true, # BOOLEAN | run a delta sync?
  validate_delta_upload: true, # BOOLEAN | run a delta sync in validation mode?
  default_change_date: Date.parse('2013-10-20'), # Date | date of the changes - if not presented on the csv file
  disable_overwrite_person: true, # BOOLEAN | disable overwriting changes to persons' data -- only update data if the person field is null
  import_dry_run: true, # BOOLEAN | import dry run
  import_after_dry_run: true, # BOOLEAN | whether to automatically import if dry run succeeds
  parent_process_id: 'parent_process_id_example', # String | process id of parent process
  import_source: 'import_source_example' # String | self identified source caller into this method
}

begin
  #Import data from CSV file
  result = api_instance.import_data_csv_with_file_path(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ImportApi->import_data_csv_with_file_path: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **file_path** | **String**| filePath | [optional] 
 **scenario_id** | **String**| scenario id to import into | [optional] 
 **skip_errors** | **BOOLEAN**| whether to skip erroneous rows, or reject the entire upload if any are invalid (default) | [optional] 
 **upsert** | **BOOLEAN**| whether to create persons/jobs that are not matched | [optional] 
 **create_groups** | **BOOLEAN**| whether to create groups that are not matched | [optional] 
 **disable_sync_hire_date** | **BOOLEAN**| whether to disable adjusting dates of hires in cases where the start dates differ | [optional] 
 **update_types** | **String**| types of updates to apply (default all: title,comp,group,relationship,data,other) | [optional] 
 **notify_user_ids** | **String**| comma-separated list of user ids who should be notified when the import is complete | [optional] 
 **notify_app_name** | **String**| name of the app that should be listed in the notify | [optional] 
 **delta_upload** | **BOOLEAN**| run a delta sync? | [optional] 
 **validate_delta_upload** | **BOOLEAN**| run a delta sync in validation mode? | [optional] 
 **default_change_date** | **Date**| date of the changes - if not presented on the csv file | [optional] 
 **disable_overwrite_person** | **BOOLEAN**| disable overwriting changes to persons&#39; data -- only update data if the person field is null | [optional] 
 **import_dry_run** | **BOOLEAN**| import dry run | [optional] 
 **import_after_dry_run** | **BOOLEAN**| whether to automatically import if dry run succeeds | [optional] 
 **parent_process_id** | **String**| process id of parent process | [optional] 
 **import_source** | **String**| self identified source caller into this method | [optional] 

### Return type

[**Process**](Process.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **import_history_csv**
> Process import_history_csv(org_id, opts)

Import history data from CSV file



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ImportApi.new

org_id = 'org_id_example' # String | Org identifier (either id or slug)

opts = { 
  file: File.new('/path/to/file.txt'), # File | 
  scenario_id: 'scenario_id_example', # String | scenario id to import into
  skip_errors: true, # BOOLEAN | whether to skip erroneous rows, or reject the entire upload if any are invalid (default)
  create_groups: true, # BOOLEAN | whether to create groups that are not matched
  notify_user_ids: 'notify_user_ids_example', # String | comma-separated list of user ids who should be notified when the import is complete
  notify_app_name: 'notify_app_name_example' # String | name of the app that should be listed in the notify
}

begin
  #Import history data from CSV file
  result = api_instance.import_history_csv(org_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ImportApi->import_history_csv: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **String**| Org identifier (either id or slug) | 
 **file** | **File**|  | [optional] 
 **scenario_id** | **String**| scenario id to import into | [optional] 
 **skip_errors** | **BOOLEAN**| whether to skip erroneous rows, or reject the entire upload if any are invalid (default) | [optional] 
 **create_groups** | **BOOLEAN**| whether to create groups that are not matched | [optional] 
 **notify_user_ids** | **String**| comma-separated list of user ids who should be notified when the import is complete | [optional] 
 **notify_app_name** | **String**| name of the app that should be listed in the notify | [optional] 

### Return type

[**Process**](Process.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json



