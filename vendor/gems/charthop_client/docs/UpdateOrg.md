# SwaggerClient::UpdateOrg

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_id** | **String** | customer for billing processing | [optional] 
**name** | **String** | name of organization | [optional] 
**slug** | **String** | unique slug of organization | [optional] 
**type** | **String** | type of organization | [optional] 
**industry** | **String** | industry | [optional] 
**est_employees** | **Integer** | approximate number of employees | [optional] 
**est_revenue** | **Integer** | approximate amount of revenue | [optional] 
**founded_year** | **Integer** | year of founding | [optional] 
**address** | [**Address**](Address.md) | street address | [optional] 
**phone** | **String** | company phone number in E.164 format | [optional] 
**email** | **String** | primary contact email | [optional] 
**url** | **String** | website URL | [optional] 
**domains** | [**Array&lt;OrgDomain&gt;**](OrgDomain.md) | domains used by this org | [optional] 
**status** | **String** | current status of organization | [optional] 
**image_path** | **String** | path to full-sized profile image in storage | [optional] 
**currencies** | **Array&lt;String&gt;** | types of currencies in use, with the first currency the primary currency | [optional] 
**stock** | **String** | stock symbol | [optional] 
**timezone** | **String** | timezone in use | [optional] 
**app_time** | **String** | approximate time of day for daily app syncs to run (defaults to 9am Eastern time) | [optional] 
**zone** | **Integer** | infrastructure zone | [optional] 
**fiscal_start** | **Integer** | number of months into the calendar year that the fiscal year starts (1 &#x3D; February, 2 &#x3D; March) | [optional] 
**start_date** | **String** | start date of history | [optional] 
**sensitive_fields** | **Object** | map of sensitive field defaults | [optional] 
**options** | **Object** | org-public options | [optional] 
**internal_options** | **Object** | internal (ChartHop controlled) options | [optional] 
**onboard_steps** | [**Array&lt;OnboardStepResult&gt;**](OnboardStepResult.md) | list of onboard steps that this Org has completed (or skipped) | [optional] 
**onboarding** | **BOOLEAN** | current onboarding status of an organization, allowing clearing of org | [optional] 
**self_serve_importing** | **BOOLEAN** | completion status of initial import for orgs signed up via self serve | [optional] 


