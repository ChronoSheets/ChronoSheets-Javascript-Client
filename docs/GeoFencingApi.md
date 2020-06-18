# ChronoSheetsApi.GeoFencingApi

All URIs are relative to *https://www.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**geoFencingCreateGeofence**](GeoFencingApi.md#geoFencingCreateGeofence) | **POST** /api/GeoFencing/CreateGeofence | Create a geofencing with rules to be used for clock on/off automation.  Requires the 'ManageGeofencing' permission.
[**geoFencingDeleteGeofence**](GeoFencingApi.md#geoFencingDeleteGeofence) | **DELETE** /api/GeoFencing/DeleteGeofence | Deletes a geofence.  Requires the 'ManageGeofencing' permission.
[**geoFencingGetGeofenceById**](GeoFencingApi.md#geoFencingGetGeofenceById) | **GET** /api/GeoFencing/GetGeofenceById | Get a geofence by ID  Requires the 'SubmitTimesheets' permission.
[**geoFencingGetGeofences**](GeoFencingApi.md#geoFencingGetGeofences) | **GET** /api/GeoFencing/GetGeofences | Get geofences belonging to your organisation  Requires the 'SubmitTimesheets' permission.
[**geoFencingUpdateGeofence**](GeoFencingApi.md#geoFencingUpdateGeofence) | **PUT** /api/GeoFencing/UpdateGeofence | Updates a geofencing with rules to be used for clock on/off automation.  Requires the 'ManageGeofencing' permission.


<a name="geoFencingCreateGeofence"></a>
# **geoFencingCreateGeofence**
> CSApiResponseInt32 geoFencingCreateGeofence(request, xChronosheetsAuth)

Create a geofencing with rules to be used for clock on/off automation.  Requires the 'ManageGeofencing' permission.

### Example
```javascript
var ChronoSheetsApi = require('ChronoSheetsAPI');

var apiInstance = new ChronoSheetsApi.GeoFencingApi();

var request = new ChronoSheetsApi.CSCreateGeoFenceRequest(); // CSCreateGeoFenceRequest | 

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.geoFencingCreateGeofence(request, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CSCreateGeoFenceRequest**](CSCreateGeoFenceRequest.md)|  | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseInt32**](CSApiResponseInt32.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="geoFencingDeleteGeofence"></a>
# **geoFencingDeleteGeofence**
> CSApiResponseGeofence geoFencingDeleteGeofence(geofenceId, xChronosheetsAuth)

Deletes a geofence.  Requires the 'ManageGeofencing' permission.

### Example
```javascript
var ChronoSheetsApi = require('ChronoSheetsAPI');

var apiInstance = new ChronoSheetsApi.GeoFencingApi();

var geofenceId = 56; // Number | Specify the geofence you want to delete with the geofence ID.

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.geoFencingDeleteGeofence(geofenceId, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **geofenceId** | **Number**| Specify the geofence you want to delete with the geofence ID. | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseGeofence**](CSApiResponseGeofence.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="geoFencingGetGeofenceById"></a>
# **geoFencingGetGeofenceById**
> CSApiResponseGeofence geoFencingGetGeofenceById(geofenceId, xChronosheetsAuth)

Get a geofence by ID  Requires the 'SubmitTimesheets' permission.

### Example
```javascript
var ChronoSheetsApi = require('ChronoSheetsAPI');

var apiInstance = new ChronoSheetsApi.GeoFencingApi();

var geofenceId = 56; // Number | The ID of the geofence you want to obtain

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.geoFencingGetGeofenceById(geofenceId, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **geofenceId** | **Number**| The ID of the geofence you want to obtain | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseGeofence**](CSApiResponseGeofence.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="geoFencingGetGeofences"></a>
# **geoFencingGetGeofences**
> CSApiResponseForPaginatedListExtendedGeofence geoFencingGetGeofences(xChronosheetsAuth, opts)

Get geofences belonging to your organisation  Requires the 'SubmitTimesheets' permission.

### Example
```javascript
var ChronoSheetsApi = require('ChronoSheetsAPI');

var apiInstance = new ChronoSheetsApi.GeoFencingApi();

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token

var opts = { 
  'skip': 56, // Number | Number of records to skip
  'take': 56 // Number | Number of records to take
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.geoFencingGetGeofences(xChronosheetsAuth, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 
 **skip** | **Number**| Number of records to skip | [optional] 
 **take** | **Number**| Number of records to take | [optional] 

### Return type

[**CSApiResponseForPaginatedListExtendedGeofence**](CSApiResponseForPaginatedListExtendedGeofence.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="geoFencingUpdateGeofence"></a>
# **geoFencingUpdateGeofence**
> CSApiResponseInt32 geoFencingUpdateGeofence(request, xChronosheetsAuth)

Updates a geofencing with rules to be used for clock on/off automation.  Requires the 'ManageGeofencing' permission.

### Example
```javascript
var ChronoSheetsApi = require('ChronoSheetsAPI');

var apiInstance = new ChronoSheetsApi.GeoFencingApi();

var request = new ChronoSheetsApi.CSUpdateGeoFenceRequest(); // CSUpdateGeoFenceRequest | 

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.geoFencingUpdateGeofence(request, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CSUpdateGeoFenceRequest**](CSUpdateGeoFenceRequest.md)|  | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseInt32**](CSApiResponseInt32.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

