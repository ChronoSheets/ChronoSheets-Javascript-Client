# ChronoSheetsApi.TimesheetAutomationApi

All URIs are relative to *https://api.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**timesheetAutomationCreateAutomationStep**](TimesheetAutomationApi.md#timesheetAutomationCreateAutomationStep) | **POST** /TimesheetAutomation/CreateAutomationStep | Creates an automation step.  Timesheet automation is determined by looking at steps taken by the user.  Create a step to log some automation action, such as entering a geofence or tapping on an NFC badge.  Requires the 'SubmitTimesheets' permission.
[**timesheetAutomationGetTimesheetAutomationAuditTrail**](TimesheetAutomationApi.md#timesheetAutomationGetTimesheetAutomationAuditTrail) | **GET** /TimesheetAutomation/GetTimesheetAutomationAuditTrail | Retrieve the timesheet automation / alerts for geofences activities or NFC tap on/off.  Requires the 'ManageGeofencing' permission.


<a name="timesheetAutomationCreateAutomationStep"></a>
# **timesheetAutomationCreateAutomationStep**
> CSApiResponseInt32 timesheetAutomationCreateAutomationStep(request, xChronosheetsAuth)

Creates an automation step.  Timesheet automation is determined by looking at steps taken by the user.  Create a step to log some automation action, such as entering a geofence or tapping on an NFC badge.  Requires the 'SubmitTimesheets' permission.

### Example
```javascript
var ChronoSheetsApi = require('ChronoSheetsAPI');

var apiInstance = new ChronoSheetsApi.TimesheetAutomationApi();

var request = new ChronoSheetsApi.CSCreateAutomationStepRequest(); // CSCreateAutomationStepRequest | 

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.timesheetAutomationCreateAutomationStep(request, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CSCreateAutomationStepRequest**](CSCreateAutomationStepRequest.md)|  | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseInt32**](CSApiResponseInt32.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="timesheetAutomationGetTimesheetAutomationAuditTrail"></a>
# **timesheetAutomationGetTimesheetAutomationAuditTrail**
> CSApiResponseForPaginatedListTimesheetAutomationWithOrgAndGeofence timesheetAutomationGetTimesheetAutomationAuditTrail(geofenceId, userId, sort, order, xChronosheetsAuth, opts)

Retrieve the timesheet automation / alerts for geofences activities or NFC tap on/off.  Requires the 'ManageGeofencing' permission.

### Example
```javascript
var ChronoSheetsApi = require('ChronoSheetsAPI');

var apiInstance = new ChronoSheetsApi.TimesheetAutomationApi();

var geofenceId = 56; // Number | The ID of the Geofence

var userId = 56; // Number | 

var sort = "sort_example"; // String | 

var order = "order_example"; // String | 

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token

var opts = { 
  'skip': 56, // Number | Skip this many records
  'take': 56 // Number | Take this many records
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.timesheetAutomationGetTimesheetAutomationAuditTrail(geofenceId, userId, sort, order, xChronosheetsAuth, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **geofenceId** | **Number**| The ID of the Geofence | 
 **userId** | **Number**|  | 
 **sort** | **String**|  | 
 **order** | **String**|  | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 
 **skip** | **Number**| Skip this many records | [optional] 
 **take** | **Number**| Take this many records | [optional] 

### Return type

[**CSApiResponseForPaginatedListTimesheetAutomationWithOrgAndGeofence**](CSApiResponseForPaginatedListTimesheetAutomationWithOrgAndGeofence.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

