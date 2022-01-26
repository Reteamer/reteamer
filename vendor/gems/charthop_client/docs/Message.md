# SwaggerClient::Message

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | globally unique id | 
**org_id** | **String** | parent organization id | 
**type** | **String** | type of message | 
**notification_type** | **String** | type of notification (SUCCESS, ERR, ANNOUNCEMENT etc.) | 
**user_id** | **String** | user who receives the message | 
**content** | **String** | message content | [optional] 
**title** | **String** | message title | [optional] 
**message_url** | **String** | link to message content (if applicable) | [optional] 
**key** | **String** | key of message if applicable (e.g. product-tour, import-complete-{id}) | [optional] 
**read_at** | **String** | read timestamp | [optional] 
**seen_at** | **String** | seen timestamp | [optional] 
**create_id** | **String** | created by user id | [optional] 
**create_at** | **String** | created timestamp | 


