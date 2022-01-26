# SwaggerClient::App

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | globally unique id | 
**org_id** | **String** | organization id | 
**name** | **String** | short unique name | 
**redirect_uris** | **Array&lt;String&gt;** | list of acceptable Oauth2 redirect URIs, if Oauth2 is supported for this app | [optional] 
**allowed_ips** | **Array&lt;String&gt;** | allowlist of IPs or IP ranges that are allowed to make API calls on behalf of this app | [optional] 
**config_fields** | [**Array&lt;AppConfigField&gt;**](AppConfigField.md) | list of configuration fields | [optional] 
**title** | **String** | human-readable name of app | 
**summary** | **String** | short summary of app | 
**description** | **String** | full description of app, in Markdown | [optional] 
**setup_instructions** | **String** | setup instructions, in Markdown | [optional] 
**cron_order** | **Integer** | execution order of the cron (lower numbers execute earlier) | [optional] 
**cron_schedule** | **String** | cron schedule | [optional] 
**image_path** | **String** | path to avatar profile image, should be approximately square dimensions and show logo | [optional] 
**wordmark_image_path** | **String** | path to larger profile logo image containing brand wordmark, does not need to be square dimensions | [optional] 
**status** | **String** | current status of app | 
**min_access** | **String** | minimum access level requested by app | 
**event_notify_url** | **String** | URL that should be notified on events | [optional] 
**payload** | **Hash&lt;String, String&gt;** | custom payload to send in lieu of regular payload | [optional] 
**events** | **Array&lt;String&gt;** | set of events to notify on | [optional] 
**type** | **String** | APP, BUNDLE, or INTERNAL | [optional] 
**bundle** | [**Bundle**](Bundle.md) | for apps of type BUNDLE, the contents included in the bundle | [optional] 
**scopes** | **Array&lt;String&gt;** | access scopes that the app is requesting | [optional] 
**tags** | **Array&lt;String&gt;** | tags/categories the app belongs to | [optional] 
**create_id** | **String** | created by user id | [optional] 
**create_at** | **String** | created timestamp | [optional] 
**update_id** | **String** | last updated by user id | [optional] 
**update_at** | **String** | last updated timestamp | [optional] 
**delete_id** | **String** | deleted by user id | [optional] 
**delete_at** | **String** | deleted timestamp | [optional] 


