# ChronoSheetsApi.FileAttachmentsApi

All URIs are relative to *https://api.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fileAttachmentsDeleteTimesheetFileAttachment**](FileAttachmentsApi.md#fileAttachmentsDeleteTimesheetFileAttachment) | **DELETE** /FileAttachments/DeleteTimesheetFileAttachment | Delete a particular timesheet file attachment  Requires the 'SubmitTimesheets' permission.
[**fileAttachmentsGetFileAttachmentById**](FileAttachmentsApi.md#fileAttachmentsGetFileAttachmentById) | **GET** /FileAttachments/GetFileAttachmentById | Get a particular file attachment by ID.  User must own the file attachment for access.
[**fileAttachmentsGetMyFileAttachments**](FileAttachmentsApi.md#fileAttachmentsGetMyFileAttachments) | **GET** /FileAttachments/GetMyFileAttachments | Get my file attachments.  Get files you've attached to timesheets.


<a name="fileAttachmentsDeleteTimesheetFileAttachment"></a>
# **fileAttachmentsDeleteTimesheetFileAttachment**
> CSApiResponseBoolean fileAttachmentsDeleteTimesheetFileAttachment(fileAttachmentId, xChronosheetsAuth)

Delete a particular timesheet file attachment  Requires the 'SubmitTimesheets' permission.

### Example
```javascript
var ChronoSheetsApi = require('ChronoSheetsAPI');

var apiInstance = new ChronoSheetsApi.FileAttachmentsApi();

var fileAttachmentId = 56; // Number | The Id of the file attachment to delete

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fileAttachmentsDeleteTimesheetFileAttachment(fileAttachmentId, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileAttachmentId** | **Number**| The Id of the file attachment to delete | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseBoolean**](CSApiResponseBoolean.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="fileAttachmentsGetFileAttachmentById"></a>
# **fileAttachmentsGetFileAttachmentById**
> CSApiResponseTimesheetFileAttachment fileAttachmentsGetFileAttachmentById(fileAttachmentId, xChronosheetsAuth)

Get a particular file attachment by ID.  User must own the file attachment for access.

### Example
```javascript
var ChronoSheetsApi = require('ChronoSheetsAPI');

var apiInstance = new ChronoSheetsApi.FileAttachmentsApi();

var fileAttachmentId = 56; // Number | The ID of the file attachment

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fileAttachmentsGetFileAttachmentById(fileAttachmentId, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileAttachmentId** | **Number**| The ID of the file attachment | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseTimesheetFileAttachment**](CSApiResponseTimesheetFileAttachment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="fileAttachmentsGetMyFileAttachments"></a>
# **fileAttachmentsGetMyFileAttachments**
> CSApiResponseForPaginatedListTimesheetFileAttachment fileAttachmentsGetMyFileAttachments(startDate, endDate, xChronosheetsAuth, opts)

Get my file attachments.  Get files you've attached to timesheets.

### Example
```javascript
var ChronoSheetsApi = require('ChronoSheetsAPI');

var apiInstance = new ChronoSheetsApi.FileAttachmentsApi();

var startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The Start date of the date range.  File attachments after this date will be obtained.

var endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The End date of the date range.  File attachments before this date will be obtained.

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token

var opts = { 
  'skip': 56, // Number | Skip this many File attachments
  'take': 56 // Number | Take this many File attachments
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fileAttachmentsGetMyFileAttachments(startDate, endDate, xChronosheetsAuth, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **Date**| The Start date of the date range.  File attachments after this date will be obtained. | 
 **endDate** | **Date**| The End date of the date range.  File attachments before this date will be obtained. | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 
 **skip** | **Number**| Skip this many File attachments | [optional] 
 **take** | **Number**| Take this many File attachments | [optional] 

### Return type

[**CSApiResponseForPaginatedListTimesheetFileAttachment**](CSApiResponseForPaginatedListTimesheetFileAttachment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

