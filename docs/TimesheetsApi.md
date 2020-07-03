# ChronoSheetsApi.TimesheetsApi

All URIs are relative to *https://api.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**timesheetsCreateSingleTimesheet**](TimesheetsApi.md#timesheetsCreateSingleTimesheet) | **POST** /Timesheets/CreateSingleTimesheet | Inserts a single timesheet record.    Requires the &#39;SubmitTimesheets&#39; permission.
[**timesheetsDeleteTimesheet**](TimesheetsApi.md#timesheetsDeleteTimesheet) | **DELETE** /Timesheets/DeleteTimesheet | Delete a timesheet.    Requires the &#39;SubmitTimesheets&#39; permission.
[**timesheetsGetTimesheets**](TimesheetsApi.md#timesheetsGetTimesheets) | **GET** /Timesheets/GetTimesheets | Get timesheets between start and end dates.  Note: the date range cannot exceed 24 hours.  This method is generally used to get timesheets for a particular day.    Requires the &#39;SubmitTimesheets&#39; permission.
[**timesheetsUpdateTimesheets**](TimesheetsApi.md#timesheetsUpdateTimesheets) | **PUT** /Timesheets/UpdateTimesheets | Batch update timesheets.    Requires the &#39;SubmitTimesheets&#39; permission.



## timesheetsCreateSingleTimesheet

> ApiResponseInt32 timesheetsCreateSingleTimesheet(xChronosheetsAuth, request)

Inserts a single timesheet record.    Requires the &#39;SubmitTimesheets&#39; permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.TimesheetsApi();
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
let request = new ChronoSheetsApi.Timesheet(); // Timesheet | A Timesheet Request object containing values for the new Timesheet to create
apiInstance.timesheetsCreateSingleTimesheet(xChronosheetsAuth, request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 
 **request** | [**Timesheet**](Timesheet.md)| A Timesheet Request object containing values for the new Timesheet to create | 

### Return type

[**ApiResponseInt32**](ApiResponseInt32.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## timesheetsDeleteTimesheet

> ApiResponseBoolean timesheetsDeleteTimesheet(timesheetId, xChronosheetsAuth)

Delete a timesheet.    Requires the &#39;SubmitTimesheets&#39; permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.TimesheetsApi();
let timesheetId = 56; // Number | The ID of the Timesheet you want to delete
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
apiInstance.timesheetsDeleteTimesheet(timesheetId, xChronosheetsAuth, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timesheetId** | **Number**| The ID of the Timesheet you want to delete | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**ApiResponseBoolean**](ApiResponseBoolean.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## timesheetsGetTimesheets

> ApiResponseListTimesheet timesheetsGetTimesheets(startDate, endDate, xChronosheetsAuth)

Get timesheets between start and end dates.  Note: the date range cannot exceed 24 hours.  This method is generally used to get timesheets for a particular day.    Requires the &#39;SubmitTimesheets&#39; permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.TimesheetsApi();
let startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The start date of the date range
let endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The end date of the date range
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
apiInstance.timesheetsGetTimesheets(startDate, endDate, xChronosheetsAuth, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **Date**| The start date of the date range | 
 **endDate** | **Date**| The end date of the date range | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**ApiResponseListTimesheet**](ApiResponseListTimesheet.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## timesheetsUpdateTimesheets

> ApiResponseListInt32 timesheetsUpdateTimesheets(xChronosheetsAuth, request)

Batch update timesheets.    Requires the &#39;SubmitTimesheets&#39; permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.TimesheetsApi();
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
let request = new ChronoSheetsApi.BatchUpdateTimesheetRequest(); // BatchUpdateTimesheetRequest | A BatchUpdateTimesheet Request object containing values for the new Timesheets to create or update.  If the timesheet Id is specified, then an update will be performed, else the timesheet record will be created.
apiInstance.timesheetsUpdateTimesheets(xChronosheetsAuth, request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 
 **request** | [**BatchUpdateTimesheetRequest**](BatchUpdateTimesheetRequest.md)| A BatchUpdateTimesheet Request object containing values for the new Timesheets to create or update.  If the timesheet Id is specified, then an update will be performed, else the timesheet record will be created. | 

### Return type

[**ApiResponseListInt32**](ApiResponseListInt32.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

