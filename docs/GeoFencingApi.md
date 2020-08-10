# ChronoSheetsApi.GeoFencingApi

All URIs are relative to *https://api.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**geoFencingCreateGeofence**](GeoFencingApi.md#geoFencingCreateGeofence) | **POST** /GeoFencing/CreateGeofence | Create a geofencing with rules to be used for clock on/off automation.  Requires the &#39;ManageGeofencing&#39; permission.
[**geoFencingDeleteGeofence**](GeoFencingApi.md#geoFencingDeleteGeofence) | **DELETE** /GeoFencing/DeleteGeofence | Deletes a geofence.  Requires the &#39;ManageGeofencing&#39; permission.
[**geoFencingGetGeofenceById**](GeoFencingApi.md#geoFencingGetGeofenceById) | **GET** /GeoFencing/GetGeofenceById | Get a geofence by ID  Requires the &#39;SubmitTimesheets&#39; permission.
[**geoFencingGetGeofences**](GeoFencingApi.md#geoFencingGetGeofences) | **GET** /GeoFencing/GetGeofences | Get geofences belonging to your organisation  Requires the &#39;SubmitTimesheets&#39; permission.
[**geoFencingGetGeofencesBasicInfo**](GeoFencingApi.md#geoFencingGetGeofencesBasicInfo) | **GET** /GeoFencing/GetGeofencesBasicInfo | Gets a list of all geofences in your organisation, including just the name and ID.
[**geoFencingUpdateGeofence**](GeoFencingApi.md#geoFencingUpdateGeofence) | **PUT** /GeoFencing/UpdateGeofence | Updates a geofencing with rules to be used for clock on/off automation.  Requires the &#39;ManageGeofencing&#39; permission.



## geoFencingCreateGeofence

> ApiResponseInt32 geoFencingCreateGeofence(xChronosheetsAuth, request)

Create a geofencing with rules to be used for clock on/off automation.  Requires the &#39;ManageGeofencing&#39; permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.GeoFencingApi();
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
let request = new ChronoSheetsApi.CreateGeoFenceRequest(); // CreateGeoFenceRequest | 
apiInstance.geoFencingCreateGeofence(xChronosheetsAuth, request, (error, data, response) => {
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
 **request** | [**CreateGeoFenceRequest**](CreateGeoFenceRequest.md)|  | 

### Return type

[**ApiResponseInt32**](ApiResponseInt32.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## geoFencingDeleteGeofence

> ApiResponseGeofence geoFencingDeleteGeofence(geofenceId, xChronosheetsAuth)

Deletes a geofence.  Requires the &#39;ManageGeofencing&#39; permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.GeoFencingApi();
let geofenceId = 56; // Number | Specify the geofence you want to delete with the geofence ID.
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
apiInstance.geoFencingDeleteGeofence(geofenceId, xChronosheetsAuth, (error, data, response) => {
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
 **geofenceId** | **Number**| Specify the geofence you want to delete with the geofence ID. | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**ApiResponseGeofence**](ApiResponseGeofence.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## geoFencingGetGeofenceById

> ApiResponseGeofence geoFencingGetGeofenceById(geofenceId, xChronosheetsAuth)

Get a geofence by ID  Requires the &#39;SubmitTimesheets&#39; permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.GeoFencingApi();
let geofenceId = 56; // Number | The ID of the geofence you want to obtain
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
apiInstance.geoFencingGetGeofenceById(geofenceId, xChronosheetsAuth, (error, data, response) => {
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
 **geofenceId** | **Number**| The ID of the geofence you want to obtain | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**ApiResponseGeofence**](ApiResponseGeofence.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## geoFencingGetGeofences

> ApiResponseForPaginatedListExtendedGeofence geoFencingGetGeofences(xChronosheetsAuth, opts)

Get geofences belonging to your organisation  Requires the &#39;SubmitTimesheets&#39; permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.GeoFencingApi();
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
let opts = {
  'skip': 56, // Number | Number of records to skip
  'take': 56 // Number | Number of records to take
};
apiInstance.geoFencingGetGeofences(xChronosheetsAuth, opts, (error, data, response) => {
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
 **skip** | **Number**| Number of records to skip | [optional] 
 **take** | **Number**| Number of records to take | [optional] 

### Return type

[**ApiResponseForPaginatedListExtendedGeofence**](ApiResponseForPaginatedListExtendedGeofence.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## geoFencingGetGeofencesBasicInfo

> ApiResponseForPaginatedListBasicGeofence geoFencingGetGeofencesBasicInfo(xChronosheetsAuth)

Gets a list of all geofences in your organisation, including just the name and ID.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.GeoFencingApi();
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
apiInstance.geoFencingGetGeofencesBasicInfo(xChronosheetsAuth, (error, data, response) => {
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

[**ApiResponseForPaginatedListBasicGeofence**](ApiResponseForPaginatedListBasicGeofence.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## geoFencingUpdateGeofence

> ApiResponseInt32 geoFencingUpdateGeofence(xChronosheetsAuth, request)

Updates a geofencing with rules to be used for clock on/off automation.  Requires the &#39;ManageGeofencing&#39; permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.GeoFencingApi();
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
let request = new ChronoSheetsApi.UpdateGeoFenceRequest(); // UpdateGeoFenceRequest | 
apiInstance.geoFencingUpdateGeofence(xChronosheetsAuth, request, (error, data, response) => {
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
 **request** | [**UpdateGeoFenceRequest**](UpdateGeoFenceRequest.md)|  | 

### Return type

[**ApiResponseInt32**](ApiResponseInt32.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

