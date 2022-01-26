# SwaggerClient::Change

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | unique id | 
**job_id** | **String** | job id | 
**org_id** | **String** | parent organization id | 
**scenario_id** | **String** | scenario that this change belongs to | [optional] 
**merge_scenario_id** | **String** | scenario that this change was merged in from, if the change originally came from a scenario | [optional] 
**parent_change_id** | **String** | change that this change emanates from | [optional] 
**type** | **String** | type of change | 
**date** | **Date** | date of change | 
**sort** | **Integer** | sort order of change | [optional] 
**announce_date** | **Date** | for HIRE and DEPART changes, the announce date, if the announce date is different from the date of change | [optional] 
**status** | **String** | whether the change is active or not | 
**person_id** | **String** | the id of the person involved, or empty if no person attached to job | [optional] 
**other_job_id** | **String** | for MOVE changes, the id of the job moving from; for RELATE changes, the id of the other job | [optional] 
**other_person_id** | **String** | for MOVE changes, the id of the other person involved in the move | [optional] 
**depart_type** | **String** | for DEPART changes, the type of departure | [optional] 
**depart_regret** | **String** | for DEPART changes, whether the departure was regrettable | [optional] 
**promotion_type** | **String** | if it&#39;s a promotion or a demotion | [optional] 
**reason** | **String** | the reason for the change | [optional] 
**relate_type** | **String** | for RELATE changes, the type of the relationship | [optional] 
**refs** | **Array&lt;Object&gt;** | list of ids referenced in text field body, for indexing purposes only | [optional] 
**job** | [**PartialJob**](PartialJob.md) | for CREATE changes, the initial job data; for other changes, the title and groups at the time of change | [optional] 
**other_job** | [**PartialJob**](PartialJob.md) | if otherJobId present, contains title and person.startDate of the other job at the time of change | [optional] 
**form_id** | **String** | if this change was data submitted by a form, the id of that form | [optional] 
**goal_id** | **String** | if this change is associated with a goal, the id of that goal | [optional] 
**update** | [**JobUpdate**](JobUpdate.md) | for UPDATE changes, the data being updated | [optional] 
**upcoming** | [**UpcomingChange**](UpcomingChange.md) | for UPCOMING changes, the change ahead | [optional] 
**conflict** | **String** | for changes that have been struck due to a merge conflict, the description of the conflict | [optional] 
**note** | **String** | note on the change | [optional] 
**create_id** | **String** | created by user id | [optional] 
**merge_id** | **String** | merged by user id, if this change was merged | [optional] 
**create_at** | **String** | created timestamp | [optional] 
**update_at** | **String** | updated timestamp | [optional] 
**update_id** | **String** | updated by user id | [optional] 
**status_at** | **String** | timestamp of status change | [optional] 
**approval_at** | **String** | timestamp of approval | [optional] 
**approval_id** | **String** | approved by user id | [optional] 
**approval_note** | **String** | approval/rejection note | [optional] 
**approval** | **String** | if approval is required, who is allowed to approve | [optional] 
**author_sensitive** | **String** | view sensitivity for the author author of this form - the level of view access required to view the createId and updateId fields | [optional] 
**can_edit** | **BOOLEAN** | flag indicating whether authorized user can modify this change (will vary depending on user) | [optional] 


