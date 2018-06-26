# ChronoSheetsApi.JobCodesApi

All URIs are relative to *https://www.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**jobCodesCreateJobCode**](JobCodesApi.md#jobCodesCreateJobCode) | **PUT** /api/JobCodes/CreateJobCode | Create a job code
[**jobCodesDeleteJobCode**](JobCodesApi.md#jobCodesDeleteJobCode) | **DELETE** /api/JobCodes/DeleteJobCode | Delete a job code
[**jobCodesGetJobCodeById**](JobCodesApi.md#jobCodesGetJobCodeById) | **GET** /api/JobCodes/GetJobCodeById | Get a particular job code by job code id
[**jobCodesGetJobCodes**](JobCodesApi.md#jobCodesGetJobCodes) | **GET** /api/JobCodes/GetJobCodes | Get job codes for your organisation
[**jobCodesUpdateJobCode**](JobCodesApi.md#jobCodesUpdateJobCode) | **POST** /api/JobCodes/UpdateJobCode | Update a job code


<a name="jobCodesCreateJobCode"></a>
# **jobCodesCreateJobCode**
> CSApiResponseInt32 jobCodesCreateJobCode(request, xChronosheetsAuth)

Create a job code

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.JobCodesApi();

var request = new ChronoSheetsApi.CSInsertJobCodeRequest(); // CSInsertJobCodeRequest | 

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
 **request** | [**CSInsertJobCodeRequest**](CSInsertJobCodeRequest.md)|  | 
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

Delete a job code

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.JobCodesApi();

var jobCodeId = 56; // Number | The ID of the job code your want to delete

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
 **jobCodeId** | **Number**| The ID of the job code your want to delete | 
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

Get a particular job code by job code id

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.JobCodesApi();

var jobCodeId = 56; // Number | 

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
 **jobCodeId** | **Number**|  | 
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

Get job codes for your organisation

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

Update a job code

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.JobCodesApi();

var request = new ChronoSheetsApi.CSUpdateJobCodeRequest(); // CSUpdateJobCodeRequest | 

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
 **request** | [**CSUpdateJobCodeRequest**](CSUpdateJobCodeRequest.md)|  | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseBoolean**](CSApiResponseBoolean.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

