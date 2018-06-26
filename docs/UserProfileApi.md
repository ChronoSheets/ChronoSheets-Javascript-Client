# ChronoSheetsApi.UserProfileApi

All URIs are relative to *https://www.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userProfileDoLogin**](UserProfileApi.md#userProfileDoLogin) | **POST** /api/UserProfile/DoLogin | 
[**userProfileDoLogout**](UserProfileApi.md#userProfileDoLogout) | **DELETE** /api/UserProfile/DoLogout | 
[**userProfileGetMyProfile**](UserProfileApi.md#userProfileGetMyProfile) | **GET** /api/UserProfile/GetMyProfile | 
[**userProfileKeepSessionAlive**](UserProfileApi.md#userProfileKeepSessionAlive) | **GET** /api/UserProfile/KeepSessionAlive | 
[**userProfileUpdateMyProfile**](UserProfileApi.md#userProfileUpdateMyProfile) | **POST** /api/UserProfile/UpdateMyProfile | 


<a name="userProfileDoLogin"></a>
# **userProfileDoLogin**
> CSApiResponseDoLoginResponse userProfileDoLogin(request)



### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.UserProfileApi();

var request = new ChronoSheetsApi.CSDoLoginRequest(); // CSDoLoginRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userProfileDoLogin(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CSDoLoginRequest**](CSDoLoginRequest.md)|  | 

### Return type

[**CSApiResponseDoLoginResponse**](CSApiResponseDoLoginResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="userProfileDoLogout"></a>
# **userProfileDoLogout**
> CSApiResponseBoolean userProfileDoLogout(xChronosheetsAuth)



### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.UserProfileApi();

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userProfileDoLogout(xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseBoolean**](CSApiResponseBoolean.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="userProfileGetMyProfile"></a>
# **userProfileGetMyProfile**
> CSApiResponseUserProfile userProfileGetMyProfile(xChronosheetsAuth)



### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.UserProfileApi();

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userProfileGetMyProfile(xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseUserProfile**](CSApiResponseUserProfile.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="userProfileKeepSessionAlive"></a>
# **userProfileKeepSessionAlive**
> CSApiResponseBoolean userProfileKeepSessionAlive(xChronosheetsAuth)



### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.UserProfileApi();

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userProfileKeepSessionAlive(xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseBoolean**](CSApiResponseBoolean.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="userProfileUpdateMyProfile"></a>
# **userProfileUpdateMyProfile**
> CSApiResponseSignupResponse userProfileUpdateMyProfile(request, xChronosheetsAuth)



### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.UserProfileApi();

var request = new ChronoSheetsApi.CSUpdateMyProfileRequest(); // CSUpdateMyProfileRequest | 

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userProfileUpdateMyProfile(request, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CSUpdateMyProfileRequest**](CSUpdateMyProfileRequest.md)|  | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseSignupResponse**](CSApiResponseSignupResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

