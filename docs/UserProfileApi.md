# ChronoSheetsApi.UserProfileApi

All URIs are relative to *https://api.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userProfileDoLogin**](UserProfileApi.md#userProfileDoLogin) | **PUT** /UserProfile/DoLogin | Login to your ChronoSheets account and obtain an Auth Token which you can use for other ChronoSheets API methods.    Does not require any special permissions.
[**userProfileDoLogout**](UserProfileApi.md#userProfileDoLogout) | **DELETE** /UserProfile/DoLogout | Logout of your ChronoSheets account.  This method ends and deletes your active session.    Does not require any special permissions.
[**userProfileGetMyProfile**](UserProfileApi.md#userProfileGetMyProfile) | **GET** /UserProfile/GetMyProfile | Get your own profile.  Use this method to obtain detailed information about your ChronoSheets user profile.    Does not require any special permissions.
[**userProfileKeepSessionAlive**](UserProfileApi.md#userProfileKeepSessionAlive) | **GET** /UserProfile/KeepSessionAlive | Keep a session alive.  Use this method to keep a session active.  You could use this to &#39;ping&#39; ChronoSheets every &#39;x&#39; minutes to make sure your Auth Token will keep working.    Does not require any special permissions.
[**userProfileUpdateMyProfile**](UserProfileApi.md#userProfileUpdateMyProfile) | **PUT** /UserProfile/UpdateMyProfile | Update your own profile.  Use this method to update your profile information or update/change your password.    Does not require any special permissions.



## userProfileDoLogin

> ApiResponseDoLoginResponse userProfileDoLogin(request)

Login to your ChronoSheets account and obtain an Auth Token which you can use for other ChronoSheets API methods.    Does not require any special permissions.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.UserProfileApi();
let request = new ChronoSheetsApi.DoLoginRequest(); // DoLoginRequest | A request object containing your username/email and password.
apiInstance.userProfileDoLogin(request, (error, data, response) => {
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
 **request** | [**DoLoginRequest**](DoLoginRequest.md)| A request object containing your username/email and password. | 

### Return type

[**ApiResponseDoLoginResponse**](ApiResponseDoLoginResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## userProfileDoLogout

> ApiResponseBoolean userProfileDoLogout(xChronosheetsAuth)

Logout of your ChronoSheets account.  This method ends and deletes your active session.    Does not require any special permissions.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.UserProfileApi();
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
apiInstance.userProfileDoLogout(xChronosheetsAuth, (error, data, response) => {
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

[**ApiResponseBoolean**](ApiResponseBoolean.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## userProfileGetMyProfile

> ApiResponseUserProfile userProfileGetMyProfile(xChronosheetsAuth)

Get your own profile.  Use this method to obtain detailed information about your ChronoSheets user profile.    Does not require any special permissions.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.UserProfileApi();
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
apiInstance.userProfileGetMyProfile(xChronosheetsAuth, (error, data, response) => {
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

[**ApiResponseUserProfile**](ApiResponseUserProfile.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## userProfileKeepSessionAlive

> ApiResponseBoolean userProfileKeepSessionAlive(xChronosheetsAuth)

Keep a session alive.  Use this method to keep a session active.  You could use this to &#39;ping&#39; ChronoSheets every &#39;x&#39; minutes to make sure your Auth Token will keep working.    Does not require any special permissions.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.UserProfileApi();
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
apiInstance.userProfileKeepSessionAlive(xChronosheetsAuth, (error, data, response) => {
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

[**ApiResponseBoolean**](ApiResponseBoolean.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## userProfileUpdateMyProfile

> ApiResponseUpdateProfileResponse userProfileUpdateMyProfile(xChronosheetsAuth, request)

Update your own profile.  Use this method to update your profile information or update/change your password.    Does not require any special permissions.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.UserProfileApi();
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
let request = new ChronoSheetsApi.UpdateMyProfileRequest(); // UpdateMyProfileRequest | An Update MyProfile Request object containing updated fields.
apiInstance.userProfileUpdateMyProfile(xChronosheetsAuth, request, (error, data, response) => {
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
 **request** | [**UpdateMyProfileRequest**](UpdateMyProfileRequest.md)| An Update MyProfile Request object containing updated fields. | 

### Return type

[**ApiResponseUpdateProfileResponse**](ApiResponseUpdateProfileResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

