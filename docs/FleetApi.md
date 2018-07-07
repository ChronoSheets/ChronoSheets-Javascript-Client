# TheChronoSheetsApi.FleetApi

All URIs are relative to *https://www.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fleetCreateVehicle**](FleetApi.md#fleetCreateVehicle) | **PUT** /api/Fleet/CreateVehicle | Create a vehicle.    Requires the &#39;ManageFleet&#39; permission.
[**fleetGetVehicleById**](FleetApi.md#fleetGetVehicleById) | **GET** /api/Fleet/GetVehicleById | Get a particular vehicle.  Does not require any special permission.
[**fleetGetVehicles**](FleetApi.md#fleetGetVehicles) | **GET** /api/Fleet/GetVehicles | Get a collection of vehicles that are under your organisation.    Does not require any special permission.
[**fleetUpdateVehicle**](FleetApi.md#fleetUpdateVehicle) | **POST** /api/Fleet/UpdateVehicle | Update a vehicle.    Requires the &#39;ManageFleet&#39; permission.


<a name="fleetCreateVehicle"></a>
# **fleetCreateVehicle**
> CSApiResponseInt32 fleetCreateVehicle(request, xChronosheetsAuth)

Create a vehicle.    Requires the &#39;ManageFleet&#39; permission.

### Example
```javascript
var TheChronoSheetsApi = require('the_chrono_sheets_api');

var apiInstance = new TheChronoSheetsApi.FleetApi();

var request = new TheChronoSheetsApi.CSInsertVehicleRequest(); // CSInsertVehicleRequest | An Insert Vehicle Request object containing values for the new Vehicle to create

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fleetCreateVehicle(request, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CSInsertVehicleRequest**](CSInsertVehicleRequest.md)| An Insert Vehicle Request object containing values for the new Vehicle to create | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseInt32**](CSApiResponseInt32.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="fleetGetVehicleById"></a>
# **fleetGetVehicleById**
> CSApiResponseFleetVehicle fleetGetVehicleById(vehicleId, xChronosheetsAuth)

Get a particular vehicle.  Does not require any special permission.

### Example
```javascript
var TheChronoSheetsApi = require('the_chrono_sheets_api');

var apiInstance = new TheChronoSheetsApi.FleetApi();

var vehicleId = 56; // Number | The ID of the Vehicle you want to get

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fleetGetVehicleById(vehicleId, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vehicleId** | **Number**| The ID of the Vehicle you want to get | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseFleetVehicle**](CSApiResponseFleetVehicle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="fleetGetVehicles"></a>
# **fleetGetVehicles**
> CSApiResponseListFleetVehicle fleetGetVehicles(includeDeleted, xChronosheetsAuth)

Get a collection of vehicles that are under your organisation.    Does not require any special permission.

### Example
```javascript
var TheChronoSheetsApi = require('the_chrono_sheets_api');

var apiInstance = new TheChronoSheetsApi.FleetApi();

var includeDeleted = true; // Boolean | Whether or not to include deleted vehicles

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fleetGetVehicles(includeDeleted, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **includeDeleted** | **Boolean**| Whether or not to include deleted vehicles | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseListFleetVehicle**](CSApiResponseListFleetVehicle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="fleetUpdateVehicle"></a>
# **fleetUpdateVehicle**
> CSApiResponseBoolean fleetUpdateVehicle(request, xChronosheetsAuth)

Update a vehicle.    Requires the &#39;ManageFleet&#39; permission.

### Example
```javascript
var TheChronoSheetsApi = require('the_chrono_sheets_api');

var apiInstance = new TheChronoSheetsApi.FleetApi();

var request = new TheChronoSheetsApi.CSSaveVehicleRequest(); // CSSaveVehicleRequest | A Save Vehicle Request object containing updated fields.  Make sure to specify the Vehicle Id in the request object so that ChronoSheets knows which Vehicle to update

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fleetUpdateVehicle(request, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CSSaveVehicleRequest**](CSSaveVehicleRequest.md)| A Save Vehicle Request object containing updated fields.  Make sure to specify the Vehicle Id in the request object so that ChronoSheets knows which Vehicle to update | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseBoolean**](CSApiResponseBoolean.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

