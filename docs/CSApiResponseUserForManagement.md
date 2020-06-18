# ChronoSheetsApi.CSApiResponseUserForManagement

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CSUserForManagement**](CSUserForManagement.md) | The main Data of the response | [optional] 
**status** | **String** | The API response status. Indicates if the request was successful, failed or was unauthorised. | [optional] 
**message** | **String** | A message to accompany the response status.  If the Status is failed, this message will hint why it failed and what you need to do. | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `succeeded` (value: `"Succeeded"`)

* `fatalException` (value: `"FatalException"`)

* `generalError` (value: `"GeneralError"`)

* `validationError` (value: `"ValidationError"`)

* `unAuthorized` (value: `"UnAuthorized"`)

* `sessionExpired` (value: `"SessionExpired"`)




