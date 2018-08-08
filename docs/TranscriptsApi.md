# JavascriptApiClientForChronoSheets.TranscriptsApi

All URIs are relative to *https://www.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**transcriptsGetMyTranscripts**](TranscriptsApi.md#transcriptsGetMyTranscripts) | **GET** /api/Transcripts/GetMyTranscripts | Get my file transcripts.  Get audio to text transcripts that you&#39;ve created.


<a name="transcriptsGetMyTranscripts"></a>
# **transcriptsGetMyTranscripts**
> CSApiResponseForPaginatedListOrgReportTranscript transcriptsGetMyTranscripts(startDate, endDate, skip, take, keyword, xChronosheetsAuth)

Get my file transcripts.  Get audio to text transcripts that you&#39;ve created.

### Example
```javascript
var JavascriptApiClientForChronoSheets = require('Javascript API Client for ChronoSheets');

var apiInstance = new JavascriptApiClientForChronoSheets.TranscriptsApi();

var startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The Start date of the date range.  Transcripts after this date will be obtained.

var endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The End date of the date range.  Transcripts before this date will be obtained.

var skip = 56; // Number | Skip this many transcripts

var take = 56; // Number | Take this many transcripts

var keyword = "keyword_example"; // String | Search the text content of the transcript keywords

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.transcriptsGetMyTranscripts(startDate, endDate, skip, take, keyword, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **Date**| The Start date of the date range.  Transcripts after this date will be obtained. | 
 **endDate** | **Date**| The End date of the date range.  Transcripts before this date will be obtained. | 
 **skip** | **Number**| Skip this many transcripts | 
 **take** | **Number**| Take this many transcripts | 
 **keyword** | **String**| Search the text content of the transcript keywords | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseForPaginatedListOrgReportTranscript**](CSApiResponseForPaginatedListOrgReportTranscript.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

