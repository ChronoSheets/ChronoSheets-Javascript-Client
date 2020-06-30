# ChronoSheetsApi.TranscriptsApi

All URIs are relative to *https://api.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**transcriptsGetMyTranscript**](TranscriptsApi.md#transcriptsGetMyTranscript) | **GET** /Transcripts/GetMyTranscript | Get an audio to text transcript for a particular audio file attachment
[**transcriptsGetMyTranscripts**](TranscriptsApi.md#transcriptsGetMyTranscripts) | **GET** /Transcripts/GetMyTranscripts | Get my file transcripts.  Get audio to text transcripts that you've created.


<a name="transcriptsGetMyTranscript"></a>
# **transcriptsGetMyTranscript**
> CSApiResponseTranscription transcriptsGetMyTranscript(fileAttachmentId, xChronosheetsAuth)

Get an audio to text transcript for a particular audio file attachment

### Example
```javascript
var ChronoSheetsApi = require('ChronoSheetsAPI');

var apiInstance = new ChronoSheetsApi.TranscriptsApi();

var fileAttachmentId = 56; // Number | The ID of the file attachment that has a transcript.  It should be an audio file attachment.

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.transcriptsGetMyTranscript(fileAttachmentId, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileAttachmentId** | **Number**| The ID of the file attachment that has a transcript.  It should be an audio file attachment. | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseTranscription**](CSApiResponseTranscription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="transcriptsGetMyTranscripts"></a>
# **transcriptsGetMyTranscripts**
> CSApiResponseForPaginatedListOrgReportTranscript transcriptsGetMyTranscripts(startDate, endDate, xChronosheetsAuth, opts)

Get my file transcripts.  Get audio to text transcripts that you've created.

### Example
```javascript
var ChronoSheetsApi = require('ChronoSheetsAPI');

var apiInstance = new ChronoSheetsApi.TranscriptsApi();

var startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The Start date of the date range.  Transcripts after this date will be obtained.

var endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The End date of the date range.  Transcripts before this date will be obtained.

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token

var opts = { 
  'skip': 56, // Number | Skip this many transcripts
  'take': 56, // Number | Take this many transcripts
  'keyword': "keyword_example" // String | Search the text content of the transcript keywords
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.transcriptsGetMyTranscripts(startDate, endDate, xChronosheetsAuth, opts, callback);
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

[**CSApiResponseForPaginatedListOrgReportTranscript**](CSApiResponseForPaginatedListOrgReportTranscript.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

