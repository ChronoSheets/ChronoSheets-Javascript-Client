# ChronoSheetsApi.TimesheetsApi

All URIs are relative to *https://www.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**timesheetsCreateSingleTimesheet**](TimesheetsApi.md#timesheetsCreateSingleTimesheet) | **PUT** /api/Timesheets/CreateSingleTimesheet | Inserts a single timesheet record
[**timesheetsDeleteTimesheet**](TimesheetsApi.md#timesheetsDeleteTimesheet) | **DELETE** /api/Timesheets/DeleteTimesheet | Delete a timesheet
[**timesheetsGetTimesheets**](TimesheetsApi.md#timesheetsGetTimesheets) | **GET** /api/Timesheets/GetTimesheets | Get timesheets between start and end dates
[**timesheetsUpdateTimesheets**](TimesheetsApi.md#timesheetsUpdateTimesheets) | **POST** /api/Timesheets/UpdateTimesheets | Batch update timesheets


<a name="timesheetsCreateSingleTimesheet"></a>
# **timesheetsCreateSingleTimesheet**
> CsApiApiResponseInt32 timesheetsCreateSingleTimesheet(request, xChronosheetsAuth)

Inserts a single timesheet record

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.TimesheetsApi();

var request = new ChronoSheetsApi.CsApiTimesheet(); // CsApiTimesheet | The timesheet request object

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.timesheetsCreateSingleTimesheet(request, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CsApiTimesheet**](CsApiTimesheet.md)| The timesheet request object | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CsApiApiResponseInt32**](CsApiApiResponseInt32.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="timesheetsDeleteTimesheet"></a>
# **timesheetsDeleteTimesheet**
> CsApiApiResponseBoolean timesheetsDeleteTimesheet(timesheetId, xChronosheetsAuth)

Delete a timesheet

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.TimesheetsApi();

var timesheetId = 56; // Number | The ID of the timesheet to delete

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.timesheetsDeleteTimesheet(timesheetId, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timesheetId** | **Number**| The ID of the timesheet to delete | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CsApiApiResponseBoolean**](CsApiApiResponseBoolean.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="timesheetsGetTimesheets"></a>
# **timesheetsGetTimesheets**
> CsApiApiResponseListTimesheet timesheetsGetTimesheets(startDate, endDate, xChronosheetsAuth)

Get timesheets between start and end dates

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.TimesheetsApi();

var startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The start date of the date range

var endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The end date of the date range

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.timesheetsGetTimesheets(startDate, endDate, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **Date**| The start date of the date range | 
 **endDate** | **Date**| The end date of the date range | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CsApiApiResponseListTimesheet**](CsApiApiResponseListTimesheet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="timesheetsUpdateTimesheets"></a>
# **timesheetsUpdateTimesheets**
> CsApiApiResponseListInt32 timesheetsUpdateTimesheets(request, xChronosheetsAuth)

Batch update timesheets

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.TimesheetsApi();

var request = new ChronoSheetsApi.CsApiBatchUpdateTimesheetRequest(); // CsApiBatchUpdateTimesheetRequest | The batch update timesheets request

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.timesheetsUpdateTimesheets(request, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CsApiBatchUpdateTimesheetRequest**](CsApiBatchUpdateTimesheetRequest.md)| The batch update timesheets request | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CsApiApiResponseListInt32**](CsApiApiResponseListInt32.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

