# TheChronoSheetsApi.CSInsertJobCodeRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | A short code for the Job.  This is referred to as a Job Code | [optional] 
**projectId** | **Number** | The linked Project.  Time spent with this JobCode is on this Project | [optional] 
**clientId** | **Number** | The linked Client.  Time spent with this JobCode is for this Client | [optional] 
**linkedTaskIds** | **[Number]** | A list of Task Ids.  This are the Tasks that become available to the employee when they select this JobCode | [optional] 
**linkedOrgGroupIds** | **[Number]** | Optionally restrict access to the JobCode by specifying which Organisation Groups can use it | [optional] 


