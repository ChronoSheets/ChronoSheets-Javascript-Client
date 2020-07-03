# ChronoSheetsApi.TranscriptsApi

All URIs are relative to *https://api.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**transcriptsGetMyTranscript**](TranscriptsApi.md#transcriptsGetMyTranscript) | **GET** /Transcripts/GetMyTranscript | Get an audio to text transcript for a particular audio file attachment
[**transcriptsGetMyTranscripts**](TranscriptsApi.md#transcriptsGetMyTranscripts) | **GET** /Transcripts/GetMyTranscripts | Get my file transcripts.  Get audio to text transcripts that you&#39;ve created.



## transcriptsGetMyTranscript

> ApiResponseTranscription transcriptsGetMyTranscript(fileAttachmentId, xChronosheetsAuth)

Get an audio to text transcript for a particular audio file attachment

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.TranscriptsApi();
let fileAttachmentId = 56; // Number | The ID of the file attachment that has a transcript.  It should be an audio file attachment.
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
apiInstance.transcriptsGetMyTranscript(fileAttachmentId, xChronosheetsAuth, (error, data, response) => {
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
 **fileAttachmentId** | **Number**| The ID of the file attachment that has a transcript.  It should be an audio file attachment. | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**ApiResponseTranscription**](ApiResponseTranscription.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## transcriptsGetMyTranscripts

> ApiResponseForPaginatedListOrgReportTranscript transcriptsGetMyTranscripts(startDate, endDate, xChronosheetsAuth, opts)

Get my file transcripts.  Get audio to text transcripts that you&#39;ve created.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.TranscriptsApi();
let startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The Start date of the date range.  Transcripts after this date will be obtained.
let endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The End date of the date range.  Transcripts before this date will be obtained.
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
let opts = {
  'skip': 56, // Number | Skip this many transcripts
  'take': 56, // Number | Take this many transcripts
  'keyword': "keyword_example" // String | Search the text content of the transcript keywords
};
apiInstance.transcriptsGetMyTranscripts(startDate, endDate, xChronosheetsAuth, opts, (error, data, response) => {
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
 **startDate** | **Date**| The Start date of the date range.  Transcripts after this date will be obtained. | 
 **endDate** | **Date**| The End date of the date range.  Transcripts before this date will be obtained. | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 
 **skip** | **Number**| Skip this many transcripts | [optional] 
 **take** | **Number**| Take this many transcripts | [optional] 
 **keyword** | **String**| Search the text content of the transcript keywords | [optional] 

### Return type

[**ApiResponseForPaginatedListOrgReportTranscript**](ApiResponseForPaginatedListOrgReportTranscript.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

