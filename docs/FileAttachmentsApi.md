# ChronoSheetsApi.FileAttachmentsApi

All URIs are relative to *https://www.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fileAttachmentsGetMyFileAttachments**](FileAttachmentsApi.md#fileAttachmentsGetMyFileAttachments) | **GET** /api/FileAttachments/GetMyFileAttachments | Get my file attachments.  Get files you&#39;ve attached to timesheets.


<a name="fileAttachmentsGetMyFileAttachments"></a>
# **fileAttachmentsGetMyFileAttachments**
> CSApiResponseForPaginatedListTimesheetFileAttachment fileAttachmentsGetMyFileAttachments(startDate, endDate, skip, take, xChronosheetsAuth)

Get my file attachments.  Get files you&#39;ve attached to timesheets.

### Example
```javascript
var ChronoSheetsApi = require('ChronoSheetsAPI');

var apiInstance = new ChronoSheetsApi.FileAttachmentsApi();

var startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The Start date of the date range.  File attachments after this date will be obtained.

var endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The End date of the date range.  File attachments before this date will be obtained.

var skip = 56; // Number | Skip this many File attachments

var take = 56; // Number | Take this many File attachments

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fileAttachmentsGetMyFileAttachments(startDate, endDate, skip, take, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **Date**| The Start date of the date range.  File attachments after this date will be obtained. | 
 **endDate** | **Date**| The End date of the date range.  File attachments before this date will be obtained. | 
 **skip** | **Number**| Skip this many File attachments | 
 **take** | **Number**| Take this many File attachments | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseForPaginatedListTimesheetFileAttachment**](CSApiResponseForPaginatedListTimesheetFileAttachment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

