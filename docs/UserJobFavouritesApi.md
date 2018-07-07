# ChronoSheetsApi.UserJobFavouritesApi

All URIs are relative to *https://www.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userJobFavouritesCreateJobFavourite**](UserJobFavouritesApi.md#userJobFavouritesCreateJobFavourite) | **PUT** /api/UserJobFavourites/CreateJobFavourite | Create a job favourite.    Requires the &#39;SubmitTimesheets&#39; permission.
[**userJobFavouritesDeleteJobFavourite**](UserJobFavouritesApi.md#userJobFavouritesDeleteJobFavourite) | **DELETE** /api/UserJobFavourites/DeleteJobFavourite | Delete a job favourite.    Requires the &#39;SubmitTimesheets&#39; permission.
[**userJobFavouritesGetJobFavourites**](UserJobFavouritesApi.md#userJobFavouritesGetJobFavourites) | **GET** /api/UserJobFavourites/GetJobFavourites | Get your job favourites.    Requires the &#39;SubmitTimesheets&#39; permission.


<a name="userJobFavouritesCreateJobFavourite"></a>
# **userJobFavouritesCreateJobFavourite**
> CSApiResponseInt32 userJobFavouritesCreateJobFavourite(request, xChronosheetsAuth)

Create a job favourite.    Requires the &#39;SubmitTimesheets&#39; permission.

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.UserJobFavouritesApi();

var request = new ChronoSheetsApi.CSInsertUserJobFavouriteRequest(); // CSInsertUserJobFavouriteRequest | An Insert UserJobFavourite Request object containing values for the new UserJobFavourite to create

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userJobFavouritesCreateJobFavourite(request, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CSInsertUserJobFavouriteRequest**](CSInsertUserJobFavouriteRequest.md)| An Insert UserJobFavourite Request object containing values for the new UserJobFavourite to create | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseInt32**](CSApiResponseInt32.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="userJobFavouritesDeleteJobFavourite"></a>
# **userJobFavouritesDeleteJobFavourite**
> CSApiResponseBoolean userJobFavouritesDeleteJobFavourite(jobId, xChronosheetsAuth)

Delete a job favourite.    Requires the &#39;SubmitTimesheets&#39; permission.

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.UserJobFavouritesApi();

var jobId = 56; // Number | The ID of the Job for the Job Favourite you want to delete.

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userJobFavouritesDeleteJobFavourite(jobId, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **Number**| The ID of the Job for the Job Favourite you want to delete. | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseBoolean**](CSApiResponseBoolean.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="userJobFavouritesGetJobFavourites"></a>
# **userJobFavouritesGetJobFavourites**
> CSApiResponseListUserJobFavourite userJobFavouritesGetJobFavourites(xChronosheetsAuth)

Get your job favourites.    Requires the &#39;SubmitTimesheets&#39; permission.

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.UserJobFavouritesApi();

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userJobFavouritesGetJobFavourites(xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseListUserJobFavourite**](CSApiResponseListUserJobFavourite.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

