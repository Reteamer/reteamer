# SwaggerClient::UpdatePerson

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
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


