# SwaggerClient::PartialPerson

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | unique id | [optional] 
**org_id** | **String** | parent org id | [optional] 
**user_id** | **String** | user id, if this person corresponds with a user | [optional] 
**name** | [**Name**](Name.md) | full name of person | [optional] 
**contacts** | [**Array&lt;Contact&gt;**](Contact.md) | contacts (emails, phones, external ids) | [optional] 
**address** | [**Address**](Address.md) | home address | [optional] 
**remote_work_address** | [**Address**](Address.md) | current work address, if working remotely somewhere other than home address or work location | [optional] 
**birth_date** | **String** | birthdate | [optional] 
**start_date** | **String** | start date of most recent hire | [optional] 
**end_date** | **String** | end date of most recent hire | [optional] 
**image_path** | **String** | path to full-sized profile image in storage | [optional] 
**name_audio_path** | **String** | path to pronunciation of the person&#39;s name | [optional] 
**gender** | **String** | self-reported gender | [optional] 
**ethnicity** | **String** | self-reported ethnicity | [optional] 
**fields** | **Hash&lt;String, Object&gt;** | fields containing custom data | [optional] 
**sensitive_fields** | **Object** | personal sensitivity preferences around specific fields | [optional] 
**sort** | **String** | sort order | [optional] 
**create_id** | **String** | created by user id | [optional] 
**create_at** | **String** | created timestamp | [optional] 
**update_id** | **String** | last updated by user id | [optional] 
**update_at** | **String** | last updated timestamp | [optional] 


