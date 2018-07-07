# TheChronoSheetsApi.UsualHoursApi

All URIs are relative to *https://www.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usualHoursGetUsualHours**](UsualHoursApi.md#usualHoursGetUsualHours) | **GET** /api/UsualHours/GetUsualHours | Get usual hours (rostered hours) for an employee.  Requires the &#39;ManageOrganisationUsers&#39; or &#39;ManageOrganisationUsers&#39; permissions.
[**usualHoursSetUsualHours**](UsualHoursApi.md#usualHoursSetUsualHours) | **POST** /api/UsualHours/SetUsualHours | Set usual hours (rostered hours) for an employee.  Requires the &#39;ManageOrganisationUsers&#39; or &#39;ManageOrganisationUsers&#39; permissions.


<a name="usualHoursGetUsualHours"></a>
# **usualHoursGetUsualHours**
> CSApiResponseListUsualHoursDay usualHoursGetUsualHours(userId, xChronosheetsAuth)

Get usual hours (rostered hours) for an employee.  Requires the &#39;ManageOrganisationUsers&#39; or &#39;ManageOrganisationUsers&#39; permissions.

### Example
```javascript
var TheChronoSheetsApi = require('the_chrono_sheets_api');

var apiInstance = new TheChronoSheetsApi.UsualHoursApi();

var userId = 56; // Number | The ID of the User for which you want to get UsualHours for

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usualHoursGetUsualHours(userId, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The ID of the User for which you want to get UsualHours for | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseListUsualHoursDay**](CSApiResponseListUsualHoursDay.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="usualHoursSetUsualHours"></a>
# **usualHoursSetUsualHours**
> CSApiResponseBoolean usualHoursSetUsualHours(request, xChronosheetsAuth)

Set usual hours (rostered hours) for an employee.  Requires the &#39;ManageOrganisationUsers&#39; or &#39;ManageOrganisationUsers&#39; permissions.

### Example
```javascript
var TheChronoSheetsApi = require('the_chrono_sheets_api');

var apiInstance = new TheChronoSheetsApi.UsualHoursApi();

var request = new TheChronoSheetsApi.CSSetUsualHoursRequest(); // CSSetUsualHoursRequest | A Set UsualHours Request object containing updated data.  Make sure to specify the Day types in the request object so that ChronoSheets knows which Days to update

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usualHoursSetUsualHours(request, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CSSetUsualHoursRequest**](CSSetUsualHoursRequest.md)| A Set UsualHours Request object containing updated data.  Make sure to specify the Day types in the request object so that ChronoSheets knows which Days to update | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseBoolean**](CSApiResponseBoolean.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

