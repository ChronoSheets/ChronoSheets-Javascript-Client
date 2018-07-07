# TheChronoSheetsApi.UserPayRatesApi

All URIs are relative to *https://www.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userPayRatesCreatePayRate**](UserPayRatesApi.md#userPayRatesCreatePayRate) | **PUT** /api/UserPayRates/CreatePayRate | Create a new pay rate for a particular user, archiving the previous pay rate.    Requires the &#39;ManageOrganisationUsers&#39; permission.
[**userPayRatesGetPayRates**](UserPayRatesApi.md#userPayRatesGetPayRates) | **GET** /api/UserPayRates/GetPayRates | Get a collection of pay rates for a particular user, specified by user id.    Requires the &#39;ManageOrganisationUsers&#39; permission.


<a name="userPayRatesCreatePayRate"></a>
# **userPayRatesCreatePayRate**
> CSApiResponseInt32 userPayRatesCreatePayRate(request, xChronosheetsAuth)

Create a new pay rate for a particular user, archiving the previous pay rate.    Requires the &#39;ManageOrganisationUsers&#39; permission.

### Example
```javascript
var TheChronoSheetsApi = require('the_chrono_sheets_api');

var apiInstance = new TheChronoSheetsApi.UserPayRatesApi();

var request = new TheChronoSheetsApi.CSInsertUserHourlyRateRequest(); // CSInsertUserHourlyRateRequest | An Insert UserHourlyRate Request object containing values for the new UserHourlyRate to create

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userPayRatesCreatePayRate(request, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CSInsertUserHourlyRateRequest**](CSInsertUserHourlyRateRequest.md)| An Insert UserHourlyRate Request object containing values for the new UserHourlyRate to create | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseInt32**](CSApiResponseInt32.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="userPayRatesGetPayRates"></a>
# **userPayRatesGetPayRates**
> CSApiResponseListUserHourlyRate userPayRatesGetPayRates(userId, xChronosheetsAuth)

Get a collection of pay rates for a particular user, specified by user id.    Requires the &#39;ManageOrganisationUsers&#39; permission.

### Example
```javascript
var TheChronoSheetsApi = require('the_chrono_sheets_api');

var apiInstance = new TheChronoSheetsApi.UserPayRatesApi();

var userId = 56; // Number | The ID of the User for which you want to get UserHourlyRate objects

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userPayRatesGetPayRates(userId, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The ID of the User for which you want to get UserHourlyRate objects | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseListUserHourlyRate**](CSApiResponseListUserHourlyRate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

