# SwaggerClient::UpdateUser

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **String** | if the user is an app user, the id of the app | [optional] 
**name** | [**Name**](Name.md) | full name of user | [optional] 
**email** | **String** | email address of user | [optional] 
**orgs** | [**Array&lt;OrgAccess&gt;**](OrgAccess.md) | list of member orgs with permission levels | [optional] 
**image_path** | **String** | path to full-sized profile image in storage | [optional] 
**status** | **String** | current status of user | [optional] 
**options** | **Object** | for apps, options (specific options are specific to the particular app); for users, user-set preferences | [optional] 
**secrets** | **Object** | write-only secrets; the content of these secrets are not retrievable via the external-facing API | [optional] 


