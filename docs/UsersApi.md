# ChronoSheetsApi.UsersApi

All URIs are relative to *https://www.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersCreateTimesheetUser**](UsersApi.md#usersCreateTimesheetUser) | **POST** /api/Users/CreateTimesheetUser | Create a user account in your organisation.  Requires the &#39;ManageOrganisationUsers&#39; permission.
[**usersGetTimesheetUser**](UsersApi.md#usersGetTimesheetUser) | **GET** /api/Users/GetTimesheetUser | Get a particular user in your organisation.  Requires the &#39;ManageOrganisationUsers&#39; or &#39;ManageOrganisationGroups&#39; permissions.
[**usersGetTimesheetUsers**](UsersApi.md#usersGetTimesheetUsers) | **GET** /api/Users/GetTimesheetUsers | Get users accounts in your organisation.  Requires the &#39;ManageOrganisationUsers&#39; or &#39;ManageOrganisationGroups&#39; permissions.
[**usersUpdateTimesheetUser**](UsersApi.md#usersUpdateTimesheetUser) | **PUT** /api/Users/UpdateTimesheetUser | Update a user account.  Requires the &#39;ManageOrganisationUsers&#39; permission.


<a name="usersCreateTimesheetUser"></a>
# **usersCreateTimesheetUser**
> CSApiResponseInsertUserResponse usersCreateTimesheetUser(request, xChronosheetsAuth)

Create a user account in your organisation.  Requires the &#39;ManageOrganisationUsers&#39; permission.

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.UsersApi();

var request = new ChronoSheetsApi.CSInsertUserRequest(); // CSInsertUserRequest | An Insert User Request object containing values for the new User to create

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
 **request** | [**CSInsertUserRequest**](CSInsertUserRequest.md)| An Insert User Request object containing values for the new User to create | 
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

Get a particular user in your organisation.  Requires the &#39;ManageOrganisationUsers&#39; or &#39;ManageOrganisationGroups&#39; permissions.

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.UsersApi();

var userId = 56; // Number | The User ID of the UserForManagement you want to get

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
 **userId** | **Number**| The User ID of the UserForManagement you want to get | 
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

Get users accounts in your organisation.  Requires the &#39;ManageOrganisationUsers&#39; or &#39;ManageOrganisationGroups&#39; permissions.

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

Update a user account.  Requires the &#39;ManageOrganisationUsers&#39; permission.

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.UsersApi();

var request = new ChronoSheetsApi.CSUpdateUserRequest(); // CSUpdateUserRequest | A Update User Request object containing updated fields.  Make sure to specify the User Id in the request object so that ChronoSheets knows which User to update

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
 **request** | [**CSUpdateUserRequest**](CSUpdateUserRequest.md)| A Update User Request object containing updated fields.  Make sure to specify the User Id in the request object so that ChronoSheets knows which User to update | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseUpdateUserResponse**](CSApiResponseUpdateUserResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

