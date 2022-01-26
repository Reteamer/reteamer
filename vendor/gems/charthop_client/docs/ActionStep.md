# SwaggerClient::ActionStep

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of action to run | 
**form_id** | **String** | If the action is FORM, the id of the form to fill out | [optional] 
**target** | **String** | If the action is MESSAGE, the target to send the message to. If the action is FORM, the person who should have the form filled out on | [optional] 
**assign_todo** | **String** | If the action is FORM, the user who should fill out the form (default is, same as target) | [optional] 
**message** | **String** | The message that will be sent -- supports CQLT templates | [optional] 
**sensitive** | **BOOLEAN** | whether to run with access to sensitive events or not - if this is left blank, will default to the sensitive setting of the Action | [optional] 
**http_url** | **String** | If the action is HTTP, the url that will receive the HTTP request | [optional] 
**http_method** | **String** | If the action is HTTP, the method used by the HTTP request (defaults to POST) | [optional] 
**http_headers** | **Hash&lt;String, String&gt;** | If the action is HTTP, the headers to add to the HTTP request | [optional] 
**http_content** | **Object** | If the action is HTTP, the payload contained in the HTTP request | [optional] 


