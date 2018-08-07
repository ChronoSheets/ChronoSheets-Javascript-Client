# ChronoSheetsApi.AggregateClientProjectsApi

All URIs are relative to *https://www.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**aggregateClientProjectsGetAggregateClientProjects**](AggregateClientProjectsApi.md#aggregateClientProjectsGetAggregateClientProjects) | **GET** /api/AggregateClientProjects/GetAggregateClientProjects | Get client and project information, aggregated.    Requires the &#39;SubmitTimesheets&#39; or &#39;ManageClientsAndProjects&#39; permissions.


<a name="aggregateClientProjectsGetAggregateClientProjects"></a>
# **aggregateClientProjectsGetAggregateClientProjects**
> CSApiResponseListAggregateClient aggregateClientProjectsGetAggregateClientProjects(xChronosheetsAuth)

Get client and project information, aggregated.    Requires the &#39;SubmitTimesheets&#39; or &#39;ManageClientsAndProjects&#39; permissions.

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.AggregateClientProjectsApi();

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.aggregateClientProjectsGetAggregateClientProjects(xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseListAggregateClient**](CSApiResponseListAggregateClient.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

