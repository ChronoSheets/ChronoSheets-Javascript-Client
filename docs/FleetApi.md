# ChronoSheetsApi.FleetApi

All URIs are relative to *https://api.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fleetCreateVehicle**](FleetApi.md#fleetCreateVehicle) | **POST** /Fleet/CreateVehicle | Create a vehicle.    Requires the &#39;ManageFleet&#39; permission.
[**fleetDeleteVehicle**](FleetApi.md#fleetDeleteVehicle) | **DELETE** /Fleet/DeleteVehicle | Delete a vehicle from the fleet.  Requires the &#39;ManageFleet&#39; permission.
[**fleetGetVehicleById**](FleetApi.md#fleetGetVehicleById) | **GET** /Fleet/GetVehicleById | Get a particular vehicle.  Does not require any special permission.
[**fleetGetVehicles**](FleetApi.md#fleetGetVehicles) | **GET** /Fleet/GetVehicles | Get a collection of vehicles that are under your organisation.    Does not require any special permission.
[**fleetUpdateVehicle**](FleetApi.md#fleetUpdateVehicle) | **PUT** /Fleet/UpdateVehicle | Update a vehicle.    Requires the &#39;ManageFleet&#39; permission.



## fleetCreateVehicle

> ApiResponseInt32 fleetCreateVehicle(xChronosheetsAuth, request)

Create a vehicle.    Requires the &#39;ManageFleet&#39; permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.FleetApi();
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
let request = new ChronoSheetsApi.InsertVehicleRequest(); // InsertVehicleRequest | An Insert Vehicle Request object containing values for the new Vehicle to create
apiInstance.fleetCreateVehicle(xChronosheetsAuth, request, (error, data, response) => {
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
 **request** | [**InsertVehicleRequest**](InsertVehicleRequest.md)| An Insert Vehicle Request object containing values for the new Vehicle to create | 

### Return type

[**ApiResponseInt32**](ApiResponseInt32.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## fleetDeleteVehicle

> ApiResponseBoolean fleetDeleteVehicle(vehicleId, xChronosheetsAuth)

Delete a vehicle from the fleet.  Requires the &#39;ManageFleet&#39; permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.FleetApi();
let vehicleId = 56; // Number | The unique ID of the vehicle you wish to delete
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
apiInstance.fleetDeleteVehicle(vehicleId, xChronosheetsAuth, (error, data, response) => {
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
 **vehicleId** | **Number**| The unique ID of the vehicle you wish to delete | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**ApiResponseBoolean**](ApiResponseBoolean.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## fleetGetVehicleById

> ApiResponseFleetVehicle fleetGetVehicleById(vehicleId, xChronosheetsAuth)

Get a particular vehicle.  Does not require any special permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.FleetApi();
let vehicleId = 56; // Number | The ID of the Vehicle you want to get
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
apiInstance.fleetGetVehicleById(vehicleId, xChronosheetsAuth, (error, data, response) => {
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
 **vehicleId** | **Number**| The ID of the Vehicle you want to get | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**ApiResponseFleetVehicle**](ApiResponseFleetVehicle.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## fleetGetVehicles

> ApiResponseListFleetVehicle fleetGetVehicles(xChronosheetsAuth, opts)

Get a collection of vehicles that are under your organisation.    Does not require any special permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.FleetApi();
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
let opts = {
  'includeDeleted': true // Boolean | Whether or not to include deleted vehicles
};
apiInstance.fleetGetVehicles(xChronosheetsAuth, opts, (error, data, response) => {
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
 **includeDeleted** | **Boolean**| Whether or not to include deleted vehicles | [optional] 

### Return type

[**ApiResponseListFleetVehicle**](ApiResponseListFleetVehicle.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## fleetUpdateVehicle

> ApiResponseBoolean fleetUpdateVehicle(xChronosheetsAuth, request)

Update a vehicle.    Requires the &#39;ManageFleet&#39; permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.FleetApi();
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
let request = new ChronoSheetsApi.SaveVehicleRequest(); // SaveVehicleRequest | A Save Vehicle Request object containing updated fields.  Make sure to specify the Vehicle Id in the request object so that ChronoSheets knows which Vehicle to update
apiInstance.fleetUpdateVehicle(xChronosheetsAuth, request, (error, data, response) => {
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
 **request** | [**SaveVehicleRequest**](SaveVehicleRequest.md)| A Save Vehicle Request object containing updated fields.  Make sure to specify the Vehicle Id in the request object so that ChronoSheets knows which Vehicle to update | 

### Return type

[**ApiResponseBoolean**](ApiResponseBoolean.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

