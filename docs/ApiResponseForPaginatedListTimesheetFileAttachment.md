# ChronoSheetsApi.ApiResponseForPaginatedListTimesheetFileAttachment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalSetCount** | **Number** | The count of total records that are being paginated | [optional] 
**data** | [**[TimesheetFileAttachment]**](TimesheetFileAttachment.md) | The main Data of the response | [optional] 
**status** | **String** | The API response status. Indicates if the request was successful, failed or was unauthorised. | [optional] 
**message** | **String** | A message to accompany the response status.  If the Status is failed, this message will hint why it failed and what you need to do. | [optional] 



## Enum: StatusEnum


* `Succeeded` (value: `"Succeeded"`)

* `FatalException` (value: `"FatalException"`)

* `GeneralError` (value: `"GeneralError"`)

* `ValidationError` (value: `"ValidationError"`)

* `UnAuthorized` (value: `"UnAuthorized"`)

* `SessionExpired` (value: `"SessionExpired"`)




