# ChronoSheetsApi.UsualHoursApi

All URIs are relative to *https://api.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usualHoursGetUsualHours**](UsualHoursApi.md#usualHoursGetUsualHours) | **GET** /UsualHours/GetUsualHours | Get usual hours (rostered hours) for an employee.  Requires the &#39;ManageOrganisationUsers&#39; permission.
[**usualHoursSetUsualHours**](UsualHoursApi.md#usualHoursSetUsualHours) | **PUT** /UsualHours/SetUsualHours | Set usual hours (rostered hours) for an employee.  Requires the &#39;ManageOrganisationUsers&#39; permission.



## usualHoursGetUsualHours

> ApiResponseListUsualHoursDay usualHoursGetUsualHours(userId, xChronosheetsAuth)

Get usual hours (rostered hours) for an employee.  Requires the &#39;ManageOrganisationUsers&#39; permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.UsualHoursApi();
let userId = 56; // Number | The ID of the User for which you want to get UsualHours for
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
apiInstance.usualHoursGetUsualHours(userId, xChronosheetsAuth, (error, data, response) => {
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
 **userId** | **Number**| The ID of the User for which you want to get UsualHours for | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**ApiResponseListUsualHoursDay**](ApiResponseListUsualHoursDay.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## usualHoursSetUsualHours

> ApiResponseBoolean usualHoursSetUsualHours(xChronosheetsAuth, request)

Set usual hours (rostered hours) for an employee.  Requires the &#39;ManageOrganisationUsers&#39; permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.UsualHoursApi();
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
let request = new ChronoSheetsApi.SetUsualHoursRequest(); // SetUsualHoursRequest | A Set UsualHours Request object containing updated data.  Make sure to specify the Day types in the request object so that ChronoSheets knows which Days to update
apiInstance.usualHoursSetUsualHours(xChronosheetsAuth, request, (error, data, response) => {
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
 **request** | [**SetUsualHoursRequest**](SetUsualHoursRequest.md)| A Set UsualHours Request object containing updated data.  Make sure to specify the Day types in the request object so that ChronoSheets knows which Days to update | 

### Return type

[**ApiResponseBoolean**](ApiResponseBoolean.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

