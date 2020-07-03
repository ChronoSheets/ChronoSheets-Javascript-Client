# ChronoSheetsApi.FileAttachmentsApi

All URIs are relative to *https://api.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fileAttachmentsDeleteTimesheetFileAttachment**](FileAttachmentsApi.md#fileAttachmentsDeleteTimesheetFileAttachment) | **DELETE** /FileAttachments/DeleteTimesheetFileAttachment | Delete a particular timesheet file attachment  Requires the &#39;SubmitTimesheets&#39; permission.
[**fileAttachmentsGetFileAttachmentById**](FileAttachmentsApi.md#fileAttachmentsGetFileAttachmentById) | **GET** /FileAttachments/GetFileAttachmentById | Get a particular file attachment by ID.  User must own the file attachment for access.
[**fileAttachmentsGetMyFileAttachments**](FileAttachmentsApi.md#fileAttachmentsGetMyFileAttachments) | **GET** /FileAttachments/GetMyFileAttachments | Get my file attachments.  Get files you&#39;ve attached to timesheets.



## fileAttachmentsDeleteTimesheetFileAttachment

> ApiResponseBoolean fileAttachmentsDeleteTimesheetFileAttachment(fileAttachmentId, xChronosheetsAuth)

Delete a particular timesheet file attachment  Requires the &#39;SubmitTimesheets&#39; permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.FileAttachmentsApi();
let fileAttachmentId = 56; // Number | The Id of the file attachment to delete
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
apiInstance.fileAttachmentsDeleteTimesheetFileAttachment(fileAttachmentId, xChronosheetsAuth, (error, data, response) => {
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
 **fileAttachmentId** | **Number**| The Id of the file attachment to delete | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**ApiResponseBoolean**](ApiResponseBoolean.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## fileAttachmentsGetFileAttachmentById

> ApiResponseTimesheetFileAttachment fileAttachmentsGetFileAttachmentById(fileAttachmentId, xChronosheetsAuth)

Get a particular file attachment by ID.  User must own the file attachment for access.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.FileAttachmentsApi();
let fileAttachmentId = 56; // Number | The ID of the file attachment
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
apiInstance.fileAttachmentsGetFileAttachmentById(fileAttachmentId, xChronosheetsAuth, (error, data, response) => {
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
 **fileAttachmentId** | **Number**| The ID of the file attachment | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**ApiResponseTimesheetFileAttachment**](ApiResponseTimesheetFileAttachment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## fileAttachmentsGetMyFileAttachments

> ApiResponseForPaginatedListTimesheetFileAttachment fileAttachmentsGetMyFileAttachments(startDate, endDate, xChronosheetsAuth, opts)

Get my file attachments.  Get files you&#39;ve attached to timesheets.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.FileAttachmentsApi();
let startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The Start date of the date range.  File attachments after this date will be obtained.
let endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The End date of the date range.  File attachments before this date will be obtained.
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
let opts = {
  'skip': 56, // Number | Skip this many File attachments
  'take': 56 // Number | Take this many File attachments
};
apiInstance.fileAttachmentsGetMyFileAttachments(startDate, endDate, xChronosheetsAuth, opts, (error, data, response) => {
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
 **startDate** | **Date**| The Start date of the date range.  File attachments after this date will be obtained. | 
 **endDate** | **Date**| The End date of the date range.  File attachments before this date will be obtained. | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 
 **skip** | **Number**| Skip this many File attachments | [optional] 
 **take** | **Number**| Take this many File attachments | [optional] 

### Return type

[**ApiResponseForPaginatedListTimesheetFileAttachment**](ApiResponseForPaginatedListTimesheetFileAttachment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

