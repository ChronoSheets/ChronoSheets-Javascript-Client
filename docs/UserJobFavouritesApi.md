# ChronoSheetsApi.UserJobFavouritesApi

All URIs are relative to *https://api.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userJobFavouritesCreateJobFavourite**](UserJobFavouritesApi.md#userJobFavouritesCreateJobFavourite) | **POST** /UserJobFavourites/CreateJobFavourite | Create a job favourite.    Requires the &#39;SubmitTimesheets&#39; permission.
[**userJobFavouritesDeleteJobFavourite**](UserJobFavouritesApi.md#userJobFavouritesDeleteJobFavourite) | **DELETE** /UserJobFavourites/DeleteJobFavourite | Delete a job favourite.    Requires the &#39;SubmitTimesheets&#39; permission.
[**userJobFavouritesGetJobFavourites**](UserJobFavouritesApi.md#userJobFavouritesGetJobFavourites) | **GET** /UserJobFavourites/GetJobFavourites | Get your job favourites.    Requires the &#39;SubmitTimesheets&#39; permission.



## userJobFavouritesCreateJobFavourite

> ApiResponseInt32 userJobFavouritesCreateJobFavourite(xChronosheetsAuth, request)

Create a job favourite.    Requires the &#39;SubmitTimesheets&#39; permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.UserJobFavouritesApi();
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
let request = new ChronoSheetsApi.InsertUserJobFavouriteRequest(); // InsertUserJobFavouriteRequest | An Insert UserJobFavourite Request object containing values for the new UserJobFavourite to create
apiInstance.userJobFavouritesCreateJobFavourite(xChronosheetsAuth, request, (error, data, response) => {
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
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 
 **request** | [**InsertUserJobFavouriteRequest**](InsertUserJobFavouriteRequest.md)| An Insert UserJobFavourite Request object containing values for the new UserJobFavourite to create | 

### Return type

[**ApiResponseInt32**](ApiResponseInt32.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## userJobFavouritesDeleteJobFavourite

> ApiResponseBoolean userJobFavouritesDeleteJobFavourite(jobId, xChronosheetsAuth)

Delete a job favourite.    Requires the &#39;SubmitTimesheets&#39; permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.UserJobFavouritesApi();
let jobId = 56; // Number | The ID of the Job for the Job Favourite you want to delete.
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
apiInstance.userJobFavouritesDeleteJobFavourite(jobId, xChronosheetsAuth, (error, data, response) => {
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
 **jobId** | **Number**| The ID of the Job for the Job Favourite you want to delete. | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**ApiResponseBoolean**](ApiResponseBoolean.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## userJobFavouritesGetJobFavourites

> ApiResponseListUserJobFavourite userJobFavouritesGetJobFavourites(xChronosheetsAuth)

Get your job favourites.    Requires the &#39;SubmitTimesheets&#39; permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.UserJobFavouritesApi();
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
apiInstance.userJobFavouritesGetJobFavourites(xChronosheetsAuth, (error, data, response) => {
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
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**ApiResponseListUserJobFavourite**](ApiResponseListUserJobFavourite.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

