# ChronoSheetsApi.TripsApi

All URIs are relative to *https://api.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tripsCreateTrip**](TripsApi.md#tripsCreateTrip) | **POST** /Trips/CreateTrip | Create a new trip.  Important: create a timesheet record before calling this, passing in the new timesheet record id as a reference.    Requires the &#39;SubmitTimesheets&#39; permission.
[**tripsGetMyTripById**](TripsApi.md#tripsGetMyTripById) | **GET** /Trips/GetMyTripById | Get trip by Id.    Requires the &#39;ViewMyTrips&#39; permission.
[**tripsGetMyTrips**](TripsApi.md#tripsGetMyTrips) | **GET** /Trips/GetMyTrips | Get my trips.  Get the GPS trips you&#39;ve recorded and submitted.    Requires the &#39;ViewMyTrips&#39; permission.



## tripsCreateTrip

> ApiResponseInt32 tripsCreateTrip(xChronosheetsAuth, request)

Create a new trip.  Important: create a timesheet record before calling this, passing in the new timesheet record id as a reference.    Requires the &#39;SubmitTimesheets&#39; permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.TripsApi();
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
let request = new ChronoSheetsApi.CreateTripRequest(); // CreateTripRequest | A Create Trip Request object containing values for the new Trip to create
apiInstance.tripsCreateTrip(xChronosheetsAuth, request, (error, data, response) => {
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
 **request** | [**CreateTripRequest**](CreateTripRequest.md)| A Create Trip Request object containing values for the new Trip to create | 

### Return type

[**ApiResponseInt32**](ApiResponseInt32.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## tripsGetMyTripById

> ApiResponseTrip tripsGetMyTripById(tripId, xChronosheetsAuth)

Get trip by Id.    Requires the &#39;ViewMyTrips&#39; permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.TripsApi();
let tripId = 56; // Number | The ID of the Trip you want to get
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
apiInstance.tripsGetMyTripById(tripId, xChronosheetsAuth, (error, data, response) => {
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
 **tripId** | **Number**| The ID of the Trip you want to get | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**ApiResponseTrip**](ApiResponseTrip.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## tripsGetMyTrips

> ApiResponseForPaginatedListTrip tripsGetMyTrips(startDate, endDate, xChronosheetsAuth, opts)

Get my trips.  Get the GPS trips you&#39;ve recorded and submitted.    Requires the &#39;ViewMyTrips&#39; permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.TripsApi();
let startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The Start date of the date range.  Trips after this date will be obtained.
let endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The End date of the date range.  Trips before this date will be obtained.
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
let opts = {
  'skip': 56, // Number | Skip this many Trips
  'take': 56, // Number | Take this many Trips
  'vehicleId': 56 // Number | Filter by a particular Vehicle (get trips made with a particular vehicle), specified by VehicleId
};
apiInstance.tripsGetMyTrips(startDate, endDate, xChronosheetsAuth, opts, (error, data, response) => {
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
 **startDate** | **Date**| The Start date of the date range.  Trips after this date will be obtained. | 
 **endDate** | **Date**| The End date of the date range.  Trips before this date will be obtained. | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 
 **skip** | **Number**| Skip this many Trips | [optional] 
 **take** | **Number**| Take this many Trips | [optional] 
 **vehicleId** | **Number**| Filter by a particular Vehicle (get trips made with a particular vehicle), specified by VehicleId | [optional] 

### Return type

[**ApiResponseForPaginatedListTrip**](ApiResponseForPaginatedListTrip.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

