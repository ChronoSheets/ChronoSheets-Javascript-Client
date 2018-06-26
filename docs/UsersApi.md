# ChronoSheetsApi.UsersApi

All URIs are relative to *https://www.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersCreateTimesheetUser**](UsersApi.md#usersCreateTimesheetUser) | **PUT** /api/Users/CreateTimesheetUser | Create a user in your organisation
[**usersGetTimesheetUser**](UsersApi.md#usersGetTimesheetUser) | **GET** /api/Users/GetTimesheetUser | Get a particular user in your organisation
[**usersGetTimesheetUsers**](UsersApi.md#usersGetTimesheetUsers) | **GET** /api/Users/GetTimesheetUsers | Get users for your organisation
[**usersUpdateTimesheetUser**](UsersApi.md#usersUpdateTimesheetUser) | **POST** /api/Users/UpdateTimesheetUser | Update a user


<a name="usersCreateTimesheetUser"></a>
# **usersCreateTimesheetUser**
> CSApiResponseInsertUserResponse usersCreateTimesheetUser(request, xChronosheetsAuth)

Create a user in your organisation

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.UsersApi();

var request = new ChronoSheetsApi.CSInsertUserRequest(); // CSInsertUserRequest | 

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersCreateTimesheetUser(request, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CSInsertUserRequest**](CSInsertUserRequest.md)|  | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseInsertUserResponse**](CSApiResponseInsertUserResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="usersGetTimesheetUser"></a>
# **usersGetTimesheetUser**
> CSApiResponseUserForManagement usersGetTimesheetUser(userId, xChronosheetsAuth)

Get a particular user in your organisation

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.UsersApi();

var userId = 56; // Number | 

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersGetTimesheetUser(userId, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**|  | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseUserForManagement**](CSApiResponseUserForManagement.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="usersGetTimesheetUsers"></a>
# **usersGetTimesheetUsers**
> CSApiResponseListUserForManagement usersGetTimesheetUsers(xChronosheetsAuth)

Get users for your organisation

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.UsersApi();

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersGetTimesheetUsers(xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseListUserForManagement**](CSApiResponseListUserForManagement.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="usersUpdateTimesheetUser"></a>
# **usersUpdateTimesheetUser**
> CSApiResponseUpdateUserResponse usersUpdateTimesheetUser(request, xChronosheetsAuth)

Update a user

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.UsersApi();

var request = new ChronoSheetsApi.CSUpdateUserRequest(); // CSUpdateUserRequest | 

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersUpdateTimesheetUser(request, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CSUpdateUserRequest**](CSUpdateUserRequest.md)|  | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseUpdateUserResponse**](CSApiResponseUpdateUserResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

