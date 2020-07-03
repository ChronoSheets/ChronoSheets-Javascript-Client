# ChronoSheetsApi.UsersApi

All URIs are relative to *https://api.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersCreateTimesheetUser**](UsersApi.md#usersCreateTimesheetUser) | **POST** /Users/CreateTimesheetUser | Create a user account in your organisation.  Requires the &#39;ManageOrganisationUsers&#39; permission.
[**usersGetTimesheetUser**](UsersApi.md#usersGetTimesheetUser) | **GET** /Users/GetTimesheetUser | Get a particular user in your organisation.  Requires the &#39;ManageOrganisationUsers&#39; or &#39;ManageOrganisationGroups&#39; permissions.
[**usersGetTimesheetUsers**](UsersApi.md#usersGetTimesheetUsers) | **GET** /Users/GetTimesheetUsers | Get users accounts in your organisation.  Requires the &#39;ManageOrganisationUsers&#39; or &#39;ManageOrganisationGroups&#39; permissions.
[**usersUpdateTimesheetUser**](UsersApi.md#usersUpdateTimesheetUser) | **PUT** /Users/UpdateTimesheetUser | Update a user account.  Requires the &#39;ManageOrganisationUsers&#39; permission.



## usersCreateTimesheetUser

> ApiResponseInsertUserResponse usersCreateTimesheetUser(xChronosheetsAuth, request)

Create a user account in your organisation.  Requires the &#39;ManageOrganisationUsers&#39; permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.UsersApi();
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
let request = new ChronoSheetsApi.InsertUserRequest(); // InsertUserRequest | An Insert User Request object containing values for the new User to create
apiInstance.usersCreateTimesheetUser(xChronosheetsAuth, request, (error, data, response) => {
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
 **request** | [**InsertUserRequest**](InsertUserRequest.md)| An Insert User Request object containing values for the new User to create | 

### Return type

[**ApiResponseInsertUserResponse**](ApiResponseInsertUserResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## usersGetTimesheetUser

> ApiResponseUserForManagement usersGetTimesheetUser(userId, xChronosheetsAuth)

Get a particular user in your organisation.  Requires the &#39;ManageOrganisationUsers&#39; or &#39;ManageOrganisationGroups&#39; permissions.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.UsersApi();
let userId = 56; // Number | The User ID of the UserForManagement you want to get
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
apiInstance.usersGetTimesheetUser(userId, xChronosheetsAuth, (error, data, response) => {
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
 **userId** | **Number**| The User ID of the UserForManagement you want to get | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**ApiResponseUserForManagement**](ApiResponseUserForManagement.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## usersGetTimesheetUsers

> ApiResponseListUserForManagement usersGetTimesheetUsers(xChronosheetsAuth)

Get users accounts in your organisation.  Requires the &#39;ManageOrganisationUsers&#39; or &#39;ManageOrganisationGroups&#39; permissions.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.UsersApi();
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
apiInstance.usersGetTimesheetUsers(xChronosheetsAuth, (error, data, response) => {
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

[**ApiResponseListUserForManagement**](ApiResponseListUserForManagement.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## usersUpdateTimesheetUser

> ApiResponseUpdateUserResponse usersUpdateTimesheetUser(xChronosheetsAuth, request)

Update a user account.  Requires the &#39;ManageOrganisationUsers&#39; permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.UsersApi();
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
let request = new ChronoSheetsApi.UpdateUserRequest(); // UpdateUserRequest | A Update User Request object containing updated fields.  Make sure to specify the User Id in the request object so that ChronoSheets knows which User to update
apiInstance.usersUpdateTimesheetUser(xChronosheetsAuth, request, (error, data, response) => {
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
 **request** | [**UpdateUserRequest**](UpdateUserRequest.md)| A Update User Request object containing updated fields.  Make sure to specify the User Id in the request object so that ChronoSheets knows which User to update | 

### Return type

[**ApiResponseUpdateUserResponse**](ApiResponseUpdateUserResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

