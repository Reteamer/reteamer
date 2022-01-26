# SwaggerClient::OnboardStep

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | unique id | 
**name** | **String** | unique string that briefly describes the onboard step | 
**label** | **String** | customer facing identifier | 
**description** | **String** | customer facing description | 
**docs_url** | **String** | url for charthop docs that describe how to accomplish this step | 
**action_url** | **String** | url for charthop page that where this step can be completed | 
**action_text** | **String** | text that shows up on the &#39;action button&#39; of the card for this step | 
**picture_file_name** | **String** | file name of the picture for the step (does not include path) | 
**sort** | **Integer** | numerical position for which the step appears in relationship to other onboard steps | 
**event_type** | **String** | event type (in the format of &lt;COLLECTION NAME&gt;.&lt;CHANGE TYPE&gt;) that triggers the completion of this onboard step | 


