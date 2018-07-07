# ChronoSheetsApi.JobCodesApi

All URIs are relative to *https://www.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**jobCodesCreateJobCode**](JobCodesApi.md#jobCodesCreateJobCode) | **PUT** /api/JobCodes/CreateJobCode | Create a job code.    Requires the &#39;ManageJobsAndTask&#39; permission.
[**jobCodesDeleteJobCode**](JobCodesApi.md#jobCodesDeleteJobCode) | **DELETE** /api/JobCodes/DeleteJobCode | Delete a job code.    Requires the &#39;ManageJobsAndTask&#39; permission.
[**jobCodesGetJobCodeById**](JobCodesApi.md#jobCodesGetJobCodeById) | **GET** /api/JobCodes/GetJobCodeById | Get a particular job code by job code id.    Requires &#39;SubmitTimesheets&#39; or &#39;ManageJobsAndTasks&#39; permissions.
[**jobCodesGetJobCodes**](JobCodesApi.md#jobCodesGetJobCodes) | **GET** /api/JobCodes/GetJobCodes | Get job codes for your organisation.    Requires &#39;SubmitTimesheets&#39; or &#39;ManageJobsAndTasks&#39; permissions.
[**jobCodesUpdateJobCode**](JobCodesApi.md#jobCodesUpdateJobCode) | **POST** /api/JobCodes/UpdateJobCode | Update a job code.    Requires the &#39;ManageJobsAndTask&#39; permission.


<a name="jobCodesCreateJobCode"></a>
# **jobCodesCreateJobCode**
> CSApiResponseInt32 jobCodesCreateJobCode(request, xChronosheetsAuth)

Create a job code.    Requires the &#39;ManageJobsAndTask&#39; permission.

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.JobCodesApi();

var request = new ChronoSheetsApi.CSInsertJobCodeRequest(); // CSInsertJobCodeRequest | An Insert JobCode Request object containing values for the new JobCode to create

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.jobCodesCreateJobCode(request, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CSInsertJobCodeRequest**](CSInsertJobCodeRequest.md)| An Insert JobCode Request object containing values for the new JobCode to create | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseInt32**](CSApiResponseInt32.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="jobCodesDeleteJobCode"></a>
# **jobCodesDeleteJobCode**
> CSApiResponseBoolean jobCodesDeleteJobCode(jobCodeId, xChronosheetsAuth)

Delete a job code.    Requires the &#39;ManageJobsAndTask&#39; permission.

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.JobCodesApi();

var jobCodeId = 56; // Number | The ID of the job code you want to delete

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.jobCodesDeleteJobCode(jobCodeId, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobCodeId** | **Number**| The ID of the job code you want to delete | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseBoolean**](CSApiResponseBoolean.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="jobCodesGetJobCodeById"></a>
# **jobCodesGetJobCodeById**
> CSApiResponseJobCode jobCodesGetJobCodeById(jobCodeId, xChronosheetsAuth)

Get a particular job code by job code id.    Requires &#39;SubmitTimesheets&#39; or &#39;ManageJobsAndTasks&#39; permissions.

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.JobCodesApi();

var jobCodeId = 56; // Number | The ID of the JobCode you want to get

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.jobCodesGetJobCodeById(jobCodeId, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobCodeId** | **Number**| The ID of the JobCode you want to get | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseJobCode**](CSApiResponseJobCode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="jobCodesGetJobCodes"></a>
# **jobCodesGetJobCodes**
> CSApiResponseListJobCode jobCodesGetJobCodes(xChronosheetsAuth)

Get job codes for your organisation.    Requires &#39;SubmitTimesheets&#39; or &#39;ManageJobsAndTasks&#39; permissions.

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.JobCodesApi();

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.jobCodesGetJobCodes(xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseListJobCode**](CSApiResponseListJobCode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="jobCodesUpdateJobCode"></a>
# **jobCodesUpdateJobCode**
> CSApiResponseBoolean jobCodesUpdateJobCode(request, xChronosheetsAuth)

Update a job code.    Requires the &#39;ManageJobsAndTask&#39; permission.

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.JobCodesApi();

var request = new ChronoSheetsApi.CSUpdateJobCodeRequest(); // CSUpdateJobCodeRequest | A Update JobCode Request object containing updated fields.  Make sure to specify the JobCode Id in the request object so that ChronoSheets knows which JobCode to update

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.jobCodesUpdateJobCode(request, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CSUpdateJobCodeRequest**](CSUpdateJobCodeRequest.md)| A Update JobCode Request object containing updated fields.  Make sure to specify the JobCode Id in the request object so that ChronoSheets knows which JobCode to update | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseBoolean**](CSApiResponseBoolean.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

