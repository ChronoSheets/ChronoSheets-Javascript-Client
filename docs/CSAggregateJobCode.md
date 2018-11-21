# ChronoSheetsApi.CSAggregateJobCode

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availableTasks** | [**[CSAggregateJobTask]**](CSAggregateJobTask.md) | The list of available tasks under this job code | [optional] 
**permittedEmployees** | **[Number]** | The list of employee IDs that are permitted to record timesheets with this job code (empty means everyone) | [optional] 
**id** | **Number** | The ID of the job code (not the code itself) | [optional] 
**code** | **String** | The job code itself | [optional] 
**client** | **String** | The name of the client | [optional] 
**clientId** | **Number** | The ID of the client | [optional] 
**project** | **String** | The name of the project | [optional] 
**projectId** | **Number** | The ID of the project | [optional] 
**organisationId** | **Number** | Your organisation ID | [optional] 
**isDeleted** | **Boolean** | A flag indicating whether or not the job code has been marked as deleted | [optional] 


