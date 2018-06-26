# ChronoSheetsApi.TripsApi

All URIs are relative to *https://www.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tripsCreateTrip**](TripsApi.md#tripsCreateTrip) | **POST** /api/Trips/CreateTrip | Create a new trip.  Important: create a timesheet record before calling this, passing in the new timesheet record id as a reference.
[**tripsGetMyTripById**](TripsApi.md#tripsGetMyTripById) | **GET** /api/Trips/GetMyTripById | Get trip by Id
[**tripsGetMyTrips**](TripsApi.md#tripsGetMyTrips) | **GET** /api/Trips/GetMyTrips | Get my trips


<a name="tripsCreateTrip"></a>
# **tripsCreateTrip**
> CSApiResponseInt32 tripsCreateTrip(request, xChronosheetsAuth)

Create a new trip.  Important: create a timesheet record before calling this, passing in the new timesheet record id as a reference.

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.TripsApi();

var request = new ChronoSheetsApi.CSCreateTripRequest(); // CSCreateTripRequest | The create trip request

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
 **request** | [**CSCreateTripRequest**](CSCreateTripRequest.md)| The create trip request | 
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

Get trip by Id

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.TripsApi();

var tripId = 56; // Number | The ID of the trip

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
 **tripId** | **Number**| The ID of the trip | 
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
> CSApiResponseForPaginatedListTrip tripsGetMyTrips(startDate, endDate, skip, take, vehicleId, xChronosheetsAuth)

Get my trips

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.TripsApi();

var startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | 

var endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | 

var skip = 56; // Number | 

var take = 56; // Number | 

var vehicleId = 56; // Number | 

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tripsGetMyTrips(startDate, endDate, skip, take, vehicleId, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **Date**|  | 
 **endDate** | **Date**|  | 
 **skip** | **Number**|  | 
 **take** | **Number**|  | 
 **vehicleId** | **Number**|  | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseForPaginatedListTrip**](CSApiResponseForPaginatedListTrip.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

