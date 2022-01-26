# SwaggerClient::PartialJob

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_id** | **String** | globally unique job id | [optional] 
**org_id** | **String** | parent organization id | [optional] 
**snapshot_id** | **String** | snapshot that this job belongs to | [optional] 
**title** | **String** | job title | [optional] 
**comp** | [**Comp**](Comp.md) | compensation | [optional] 
**sensitive** | **String** | view sensitive of the job while open | [optional] 
**relationships** | [**Array&lt;JobRelationship&gt;**](JobRelationship.md) | relationship to other jobs | [optional] 
**group_ids** | **Array&lt;String&gt;** | groups that this job is a member of | [optional] 
**placement** | **String** | guidance on placement | [optional] 
**employment** | **String** | employment status | [optional] 
**state** | **String** | current state - whether the job is open, filled, or has someone departed or hired | [optional] 
**fields** | **Hash&lt;String, Object&gt;** | fields containing custom data | [optional] 
**field_dates** | **Hash&lt;String, Date&gt;** | dates of the field data | [optional] 
**fields_proposed** | **Hash&lt;String, Object&gt;** | proposed values for fields | [optional] 
**create_date** | **Date** | job creation date | [optional] 
**start_date** | **Date** | for empty jobs, expected start date - for filled jobs, confirmed start date | [optional] 
**person_start_date** | **Date** | if personId is present, the first day of that person | [optional] 
**person_end_date** | **Date** | if personId is present and the person is departing, the last day of that person | [optional] 
**person_id** | **String** | the person holding this job -- either currently in the job, or upcoming announced hire | [optional] 
**person** | [**PartialPerson**](PartialPerson.md) | placeholder for automatic expansion of person currently holding this job | [optional] 
**backfill_person_id** | **String** | the person who most recently held the job, who this represents a backfill for | [optional] 
**backfill_by_job_id** | **String** | another job which is planned to be a backfill for this job | [optional] 
**upcoming** | [**Array&lt;UpcomingChange&gt;**](UpcomingChange.md) | if a HIRE, MOVE, or DEPART are upcoming, the details on those changes - should only include id, type, date, announceDate, personId | [optional] 
**scenario_id** | **String** | scenario that the job was created in (null if job is on primary timeline) | [optional] 
**scenario_changed_id** | **String** | scenario that the job was changed in (null if job is on primary timeline) | [optional] 


