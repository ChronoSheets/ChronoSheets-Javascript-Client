# ChronoSheetsApi.ReportsApi

All URIs are relative to *https://www.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reportsGetAllChartsDataAdmin**](ReportsApi.md#reportsGetAllChartsDataAdmin) | **GET** /api/Reports/GetAllChartsDataAdmin | Get Consolidated Admin Reports Data (Jobs, Tasks, Clients and Projects)
[**reportsGetAllChartsDataUser**](ReportsApi.md#reportsGetAllChartsDataUser) | **GET** /api/Reports/GetAllChartsDataUser | Get Consolidated User Reports Data (Jobs and Tasks)
[**reportsGetOrgTripById**](ReportsApi.md#reportsGetOrgTripById) | **GET** /api/Reports/GetOrgTripById | Get trip by Id, for reporting purposes
[**reportsGetOrganisationTimesheetFileAttachments**](ReportsApi.md#reportsGetOrganisationTimesheetFileAttachments) | **GET** /api/Reports/GetOrganisationTimesheetFileAttachments | Reports on Organisation timesheet file attachments
[**reportsGetOrganisationTrips**](ReportsApi.md#reportsGetOrganisationTrips) | **GET** /api/Reports/GetOrganisationTrips | Reports on Organisation trips (GPS tracking from whole organisation)
[**reportsGetRawDataAdmin**](ReportsApi.md#reportsGetRawDataAdmin) | **GET** /api/Reports/GetRawDataAdmin | Get Timesheets Raw Data
[**reportsProjectCostingsAdmin**](ReportsApi.md#reportsProjectCostingsAdmin) | **GET** /api/Reports/ProjectCostingsAdmin | Gets project cost estimations VS actual cost for date range and users
[**reportsUserJobsOverTime**](ReportsApi.md#reportsUserJobsOverTime) | **GET** /api/Reports/UserJobsOverTime | Timeseries jobs data for the logged in user


<a name="reportsGetAllChartsDataAdmin"></a>
# **reportsGetAllChartsDataAdmin**
> CSApiResponseCombinedReportsData reportsGetAllChartsDataAdmin(startDate, endDate, userIds, xChronosheetsAuth)

Get Consolidated Admin Reports Data (Jobs, Tasks, Clients and Projects)

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.ReportsApi();

var startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | 

var endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | 

var userIds = "userIds_example"; // String | 

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportsGetAllChartsDataAdmin(startDate, endDate, userIds, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **Date**|  | 
 **endDate** | **Date**|  | 
 **userIds** | **String**|  | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseCombinedReportsData**](CSApiResponseCombinedReportsData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="reportsGetAllChartsDataUser"></a>
# **reportsGetAllChartsDataUser**
> CSApiResponseCombinedReportsData reportsGetAllChartsDataUser(startDate, endDate, xChronosheetsAuth)

Get Consolidated User Reports Data (Jobs and Tasks)

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.ReportsApi();

var startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | 

var endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | 

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportsGetAllChartsDataUser(startDate, endDate, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **Date**|  | 
 **endDate** | **Date**|  | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseCombinedReportsData**](CSApiResponseCombinedReportsData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="reportsGetOrgTripById"></a>
# **reportsGetOrgTripById**
> CSApiResponseTrip reportsGetOrgTripById(tripId, xChronosheetsAuth)

Get trip by Id, for reporting purposes

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.ReportsApi();

var tripId = 56; // Number | The ID of the trip

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportsGetOrgTripById(tripId, xChronosheetsAuth, callback);
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

<a name="reportsGetOrganisationTimesheetFileAttachments"></a>
# **reportsGetOrganisationTimesheetFileAttachments**
> CSApiResponseForPaginatedListOrgReportTimesheetFileAttachment reportsGetOrganisationTimesheetFileAttachments(startDate, endDate, skip, take, userIds, xChronosheetsAuth)

Reports on Organisation timesheet file attachments

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.ReportsApi();

var startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | 

var endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | 

var skip = 56; // Number | 

var take = 56; // Number | 

var userIds = "userIds_example"; // String | 

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportsGetOrganisationTimesheetFileAttachments(startDate, endDate, skip, take, userIds, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **Date**|  | 
 **endDate** | **Date**|  | 
 **skip** | **Number**|  | 
 **take** | **Number**|  | 
 **userIds** | **String**|  | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseForPaginatedListOrgReportTimesheetFileAttachment**](CSApiResponseForPaginatedListOrgReportTimesheetFileAttachment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="reportsGetOrganisationTrips"></a>
# **reportsGetOrganisationTrips**
> CSApiResponseForPaginatedListOrgReportTrip reportsGetOrganisationTrips(startDate, endDate, skip, take, userIds, xChronosheetsAuth)

Reports on Organisation trips (GPS tracking from whole organisation)

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.ReportsApi();

var startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | 

var endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | 

var skip = 56; // Number | 

var take = 56; // Number | 

var userIds = "userIds_example"; // String | 

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportsGetOrganisationTrips(startDate, endDate, skip, take, userIds, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **Date**|  | 
 **endDate** | **Date**|  | 
 **skip** | **Number**|  | 
 **take** | **Number**|  | 
 **userIds** | **String**|  | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseForPaginatedListOrgReportTrip**](CSApiResponseForPaginatedListOrgReportTrip.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="reportsGetRawDataAdmin"></a>
# **reportsGetRawDataAdmin**
> CSApiResponseForPaginatedListRawReportItem reportsGetRawDataAdmin(startDate, endDate, userIds, sort, order, skip, take, xChronosheetsAuth)

Get Timesheets Raw Data

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.ReportsApi();

var startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | 

var endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | 

var userIds = "userIds_example"; // String | 

var sort = "sort_example"; // String | 

var order = "order_example"; // String | 

var skip = 56; // Number | 

var take = 56; // Number | 

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportsGetRawDataAdmin(startDate, endDate, userIds, sort, order, skip, take, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **Date**|  | 
 **endDate** | **Date**|  | 
 **userIds** | **String**|  | 
 **sort** | **String**|  | 
 **order** | **String**|  | 
 **skip** | **Number**|  | 
 **take** | **Number**|  | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseForPaginatedListRawReportItem**](CSApiResponseForPaginatedListRawReportItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="reportsProjectCostingsAdmin"></a>
# **reportsProjectCostingsAdmin**
> CSApiResponseListProjectCostingReportItem reportsProjectCostingsAdmin(startDate, endDate, userIds, xChronosheetsAuth)

Gets project cost estimations VS actual cost for date range and users

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.ReportsApi();

var startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | 

var endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | 

var userIds = "userIds_example"; // String | 

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportsProjectCostingsAdmin(startDate, endDate, userIds, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **Date**|  | 
 **endDate** | **Date**|  | 
 **userIds** | **String**|  | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseListProjectCostingReportItem**](CSApiResponseListProjectCostingReportItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="reportsUserJobsOverTime"></a>
# **reportsUserJobsOverTime**
> CSApiResponseListJobSeriesReportItem reportsUserJobsOverTime(startDate, endDate, xChronosheetsAuth)

Timeseries jobs data for the logged in user

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.ReportsApi();

var startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | 

var endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | 

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportsUserJobsOverTime(startDate, endDate, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **Date**|  | 
 **endDate** | **Date**|  | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseListJobSeriesReportItem**](CSApiResponseListJobSeriesReportItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

