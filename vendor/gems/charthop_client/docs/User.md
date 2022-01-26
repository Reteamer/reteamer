# SwaggerClient::User

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | globally unique id | 
**app_id** | **String** | if the user is an app user, the id of the app | [optional] 
**name** | [**Name**](Name.md) | full name of user | 
**email** | **String** | email address of user | [optional] 
**password** | **String** | password of user (encrypted) | [optional] 
**orgs** | [**Array&lt;OrgAccess&gt;**](OrgAccess.md) | list of member orgs with permission levels | [optional] 
**image_path** | **String** | path to full-sized profile image in storage | [optional] 
**status** | **String** | current status of user | [optional] 
**type** | **String** | type of user | [optional] 
**options** | **Object** | for apps, options (specific options are specific to the particular app); for users, user-set preferences | [optional] 
**secrets** | **Object** | write-only secrets; the content of these secrets are not retrievable via the external-facing API | [optional] 
**active_at** | **String** | last activity timestamp | [optional] 
**login_at** | **String** | last login timestamp | [optional] 
**login_fail_count** | **Integer** | number of consecutive failed logins | [optional] 
**title** | **String** | job title, if available | [optional] 
**remote_ip** | **String** | last IP address used | [optional] 
**create_id** | **String** | created by user id | [optional] 
**create_at** | **String** | created timestamp | [optional] 
**update_id** | **String** | last updated by user id | [optional] 
**update_at** | **String** | last updated timestamp | [optional] 
**verify_at** | **String** | email verified timestamp, if the email has been verified | [optional] 
**mfas** | [**Array&lt;WebRegisteredCredential&gt;**](WebRegisteredCredential.md) | list of registered 2FA registered credentials | [optional] 


