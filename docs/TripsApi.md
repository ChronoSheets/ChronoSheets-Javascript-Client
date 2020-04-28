# ChronoSheetsApi.TripsApi

All URIs are relative to *https://www.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tripsCreateTrip**](TripsApi.md#tripsCreateTrip) | **POST** /api/Trips/CreateTrip | Create a new trip.  Important: create a timesheet record before calling this, passing in the new timesheet record id as a reference.    Requires the 'SubmitTimesheets' permission.
[**tripsGetMyTripById**](TripsApi.md#tripsGetMyTripById) | **GET** /api/Trips/GetMyTripById | Get trip by Id.    Requires the 'ViewMyTrips' permission.
[**tripsGetMyTrips**](TripsApi.md#tripsGetMyTrips) | **GET** /api/Trips/GetMyTrips | Get my trips.  Get the GPS trips you've recorded and submitted.    Requires the 'ViewMyTrips' permission.


<a name="tripsCreateTrip"></a>
# **tripsCreateTrip**
> CSApiResponseInt32 tripsCreateTrip(request, xChronosheetsAuth)

Create a new trip.  Important: create a timesheet record before calling this, passing in the new timesheet record id as a reference.    Requires the 'SubmitTimesheets' permission.

### Example
```javascript
var ChronoSheetsApi = require('ChronoSheetsAPI');

var apiInstance = new ChronoSheetsApi.TripsApi();

var request = new ChronoSheetsApi.CSCreateTripRequest(); // CSCreateTripRequest | A Create Trip Request object containing values for the new Trip to create

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tripsCreateTrip(request, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CSCreateTripRequest**](CSCreateTripRequest.md)| A Create Trip Request object containing values for the new Trip to create | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseInt32**](CSApiResponseInt32.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="tripsGetMyTripById"></a>
# **tripsGetMyTripById**
> CSApiResponseTrip tripsGetMyTripById(tripId, xChronosheetsAuth)

Get trip by Id.    Requires the 'ViewMyTrips' permission.

### Example
```javascript
var ChronoSheetsApi = require('ChronoSheetsAPI');

var apiInstance = new ChronoSheetsApi.TripsApi();

var tripId = 56; // Number | The ID of the Trip you want to get

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tripsGetMyTripById(tripId, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tripId** | **Number**| The ID of the Trip you want to get | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseTrip**](CSApiResponseTrip.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="tripsGetMyTrips"></a>
# **tripsGetMyTrips**
> CSApiResponseForPaginatedListTrip tripsGetMyTrips(startDate, endDate, xChronosheetsAuth, opts)

Get my trips.  Get the GPS trips you've recorded and submitted.    Requires the 'ViewMyTrips' permission.

### Example
```javascript
var ChronoSheetsApi = require('ChronoSheetsAPI');

var apiInstance = new ChronoSheetsApi.TripsApi();

var startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The Start date of the date range.  Trips after this date will be obtained.

var endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The End date of the date range.  Trips before this date will be obtained.

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token

var opts = { 
  'skip': 56, // Number | Skip this many Trips
  'take': 56, // Number | Take this many Trips
  'vehicleId': 56 // Number | Filter by a particular Vehicle (get trips made with a particular vehicle), specified by VehicleId
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tripsGetMyTrips(startDate, endDate, xChronosheetsAuth, opts, callback);
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

[**CSApiResponseForPaginatedListTrip**](CSApiResponseForPaginatedListTrip.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

