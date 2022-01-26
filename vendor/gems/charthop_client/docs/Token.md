# SwaggerClient::Token

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | id of token | 
**user_id** | **String** | id of user | 
**view_user_id** | **String** | id of user viewed as | [optional] 
**view_access** | [**OrgAccess**](OrgAccess.md) | view-as access | [optional] 
**app_proxy_scopes** | [**Array&lt;OrgAppScope&gt;**](OrgAppScope.md) | proxy app for org with given scope | [optional] 
**scopes** | **Array&lt;String&gt;** | allowed scopes | 
**allowed_ips** | **Array&lt;String&gt;** | allowlist of IPs or IP ranges that are allowed to use this token | [optional] 
**create_at** | **String** | created timestamp | 
**expire_at** | **String** | expire timestamp | 
**active_at** | **String** | last active timestamp | [optional] 
**data** | **Object** | Additional data that we want to carry on this token. Example, we&#39;re storing WebAuthn request here | [optional] 
**type** | **String** | type of token to indicate the type of token we&#39;re storing | [optional] 


