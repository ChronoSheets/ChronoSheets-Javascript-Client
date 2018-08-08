# ChronoSheetsApi.ReportsApi

All URIs are relative to *https://www.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reportsGetAllChartsDataAdmin**](ReportsApi.md#reportsGetAllChartsDataAdmin) | **GET** /api/Reports/GetAllChartsDataAdmin | Get Consolidated Admin Reports Data (Jobs, Tasks, Clients and Projects).  These are the organisation wide reports, with data from potentially all employees.    Requires the &#39;ReportAdmin&#39; permission.
[**reportsGetAllChartsDataUser**](ReportsApi.md#reportsGetAllChartsDataUser) | **GET** /api/Reports/GetAllChartsDataUser | Get Consolidated User Reports Data (Jobs, Tasks, Clients and Projects).  These are the user&#39;s own reports.    Requires the &#39;ViewOwnReports&#39; permission.
[**reportsGetFleetSummaryAdmin**](ReportsApi.md#reportsGetFleetSummaryAdmin) | **GET** /api/Reports/GetFleetSummaryAdmin | Gets a summary report, which includes total distance travelled and total running costs, for vehicles within your organisation  Requires the &#39;ReportAdmin&#39; permission.
[**reportsGetOrgTripById**](ReportsApi.md#reportsGetOrgTripById) | **GET** /api/Reports/GetOrgTripById | Get trip by Id, for reporting purposes.    Requires the &#39;ReportAdmin&#39; permission.
[**reportsGetOrganisationTimesheetFileAttachments**](ReportsApi.md#reportsGetOrganisationTimesheetFileAttachments) | **GET** /api/Reports/GetOrganisationTimesheetFileAttachments | Reports on Organisation timesheet file attachments (files uploaded and attached to timesheet records)  Requires the &#39;ReportAdmin&#39; permission.
[**reportsGetOrganisationTranscripts**](ReportsApi.md#reportsGetOrganisationTranscripts) | **GET** /api/Reports/GetOrganisationTranscripts | Reports on Organisation transcripts (When an audio file is attached, it will be automatically transcribed, these are the transcriptions)    Requires the &#39;ReportAdmin&#39; permission.
[**reportsGetOrganisationTrips**](ReportsApi.md#reportsGetOrganisationTrips) | **GET** /api/Reports/GetOrganisationTrips | Reports on Organisation trips (GPS tracking from whole organisation).    Requires the &#39;ReportAdmin&#39; permission.
[**reportsGetRawDataAdmin**](ReportsApi.md#reportsGetRawDataAdmin) | **GET** /api/Reports/GetRawDataAdmin | Get Timesheets Raw Data.  This data details each timesheet record.  These are the organisation wide timesheet records, with data from potentially all employees.    Requires the &#39;ReportAdmin&#39; permission.
[**reportsProjectCostingsAdmin**](ReportsApi.md#reportsProjectCostingsAdmin) | **GET** /api/Reports/ProjectCostingsAdmin | Gets project cost estimations VS actual cost for date range and users.    Requires the &#39;ReportAdmin&#39; permission.
[**reportsUserJobsOverTime**](ReportsApi.md#reportsUserJobsOverTime) | **GET** /api/Reports/UserJobsOverTime | Timeseries jobs data for the logged in user.    Requires the &#39;ViewOwnReports&#39; or &#39;SubmitTimesheets&#39;.


<a name="reportsGetAllChartsDataAdmin"></a>
# **reportsGetAllChartsDataAdmin**
> CSApiResponseCombinedReportsData reportsGetAllChartsDataAdmin(startDate, endDate, userIds, xChronosheetsAuth)

Get Consolidated Admin Reports Data (Jobs, Tasks, Clients and Projects).  These are the organisation wide reports, with data from potentially all employees.    Requires the &#39;ReportAdmin&#39; permission.

### Example
```javascript
var ChronoSheetsApi = require('ChronoSheetsAPI');

var apiInstance = new ChronoSheetsApi.ReportsApi();

var startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The start date for the date range.  Report data in the response is after this date

var endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The end date for the date range.  Report data in the response is before this date

var userIds = "userIds_example"; // String | A comma-separated list of user Ids, if you want to filter the report data to particular users.  If you want all, send a blank string.

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
 **startDate** | **Date**| The start date for the date range.  Report data in the response is after this date | 
 **endDate** | **Date**| The end date for the date range.  Report data in the response is before this date | 
 **userIds** | **String**| A comma-separated list of user Ids, if you want to filter the report data to particular users.  If you want all, send a blank string. | 
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

Get Consolidated User Reports Data (Jobs, Tasks, Clients and Projects).  These are the user&#39;s own reports.    Requires the &#39;ViewOwnReports&#39; permission.

### Example
```javascript
var ChronoSheetsApi = require('ChronoSheetsAPI');

var apiInstance = new ChronoSheetsApi.ReportsApi();

var startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The start date for the date range.  Report data in the response is after this date

var endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The end date for the date range.  Report data in the response is before this date

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
 **startDate** | **Date**| The start date for the date range.  Report data in the response is after this date | 
 **endDate** | **Date**| The end date for the date range.  Report data in the response is before this date | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseCombinedReportsData**](CSApiResponseCombinedReportsData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="reportsGetFleetSummaryAdmin"></a>
# **reportsGetFleetSummaryAdmin**
> CSApiResponseListFleetSummaryReportItem reportsGetFleetSummaryAdmin(startDate, endDate, userIds, xChronosheetsAuth)

Gets a summary report, which includes total distance travelled and total running costs, for vehicles within your organisation  Requires the &#39;ReportAdmin&#39; permission.

### Example
```javascript
var ChronoSheetsApi = require('ChronoSheetsAPI');

var apiInstance = new ChronoSheetsApi.ReportsApi();

var startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The start date for the date range.  Report data in the response is after this date

var endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The end date for the date range.  Report data in the response is before this date

var userIds = "userIds_example"; // String | A comma-separated list of user Ids, if you want to filter the report data to particular users.  If you want all, send a blank string.

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportsGetFleetSummaryAdmin(startDate, endDate, userIds, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **Date**| The start date for the date range.  Report data in the response is after this date | 
 **endDate** | **Date**| The end date for the date range.  Report data in the response is before this date | 
 **userIds** | **String**| A comma-separated list of user Ids, if you want to filter the report data to particular users.  If you want all, send a blank string. | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseListFleetSummaryReportItem**](CSApiResponseListFleetSummaryReportItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="reportsGetOrgTripById"></a>
# **reportsGetOrgTripById**
> CSApiResponseTrip reportsGetOrgTripById(tripId, xChronosheetsAuth)

Get trip by Id, for reporting purposes.    Requires the &#39;ReportAdmin&#39; permission.

### Example
```javascript
var ChronoSheetsApi = require('ChronoSheetsAPI');

var apiInstance = new ChronoSheetsApi.ReportsApi();

var tripId = 56; // Number | The ID of the Trip you want to get

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
 **tripId** | **Number**| The ID of the Trip you want to get | 
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

Reports on Organisation timesheet file attachments (files uploaded and attached to timesheet records)  Requires the &#39;ReportAdmin&#39; permission.

### Example
```javascript
var ChronoSheetsApi = require('ChronoSheetsAPI');

var apiInstance = new ChronoSheetsApi.ReportsApi();

var startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The start date for the date range.  Report data in the response is after this date

var endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The end date for the date range.  Report data in the response is before this date

var skip = 56; // Number | Skip this many items

var take = 56; // Number | Take this many items

var userIds = "userIds_example"; // String | A comma-separated list of user Ids, if you want to filter the report data to particular users.  If you want all, send a blank string.

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
 **startDate** | **Date**| The start date for the date range.  Report data in the response is after this date | 
 **endDate** | **Date**| The end date for the date range.  Report data in the response is before this date | 
 **skip** | **Number**| Skip this many items | 
 **take** | **Number**| Take this many items | 
 **userIds** | **String**| A comma-separated list of user Ids, if you want to filter the report data to particular users.  If you want all, send a blank string. | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseForPaginatedListOrgReportTimesheetFileAttachment**](CSApiResponseForPaginatedListOrgReportTimesheetFileAttachment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="reportsGetOrganisationTranscripts"></a>
# **reportsGetOrganisationTranscripts**
> CSApiResponseForPaginatedListOrgReportTranscript reportsGetOrganisationTranscripts(startDate, endDate, skip, take, userIds, keywords, xChronosheetsAuth)

Reports on Organisation transcripts (When an audio file is attached, it will be automatically transcribed, these are the transcriptions)    Requires the &#39;ReportAdmin&#39; permission.

### Example
```javascript
var ChronoSheetsApi = require('ChronoSheetsAPI');

var apiInstance = new ChronoSheetsApi.ReportsApi();

var startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The start date for the date range.  Report data in the response is after this date

var endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The end date for the date range.  Report data in the response is before this date

var skip = 56; // Number | Skip this many items

var take = 56; // Number | Take this many items

var userIds = "userIds_example"; // String | A comma-separated list of user Ids, if you want to filter the report data to particular users.  If you want all, send a blank string.

var keywords = "keywords_example"; // String | Search the transcripts by keyword(s)

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportsGetOrganisationTranscripts(startDate, endDate, skip, take, userIds, keywords, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **Date**| The start date for the date range.  Report data in the response is after this date | 
 **endDate** | **Date**| The end date for the date range.  Report data in the response is before this date | 
 **skip** | **Number**| Skip this many items | 
 **take** | **Number**| Take this many items | 
 **userIds** | **String**| A comma-separated list of user Ids, if you want to filter the report data to particular users.  If you want all, send a blank string. | 
 **keywords** | **String**| Search the transcripts by keyword(s) | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseForPaginatedListOrgReportTranscript**](CSApiResponseForPaginatedListOrgReportTranscript.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="reportsGetOrganisationTrips"></a>
# **reportsGetOrganisationTrips**
> CSApiResponseForPaginatedListOrgReportTrip reportsGetOrganisationTrips(startDate, endDate, skip, take, userIds, xChronosheetsAuth)

Reports on Organisation trips (GPS tracking from whole organisation).    Requires the &#39;ReportAdmin&#39; permission.

### Example
```javascript
var ChronoSheetsApi = require('ChronoSheetsAPI');

var apiInstance = new ChronoSheetsApi.ReportsApi();

var startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The start date for the date range.  Report data in the response is after this date

var endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The end date for the date range.  Report data in the response is before this date

var skip = 56; // Number | Skip this many items

var take = 56; // Number | Take this many items

var userIds = "userIds_example"; // String | A comma-separated list of user Ids, if you want to filter the report data to particular users.  If you want all, send a blank string.

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
 **startDate** | **Date**| The start date for the date range.  Report data in the response is after this date | 
 **endDate** | **Date**| The end date for the date range.  Report data in the response is before this date | 
 **skip** | **Number**| Skip this many items | 
 **take** | **Number**| Take this many items | 
 **userIds** | **String**| A comma-separated list of user Ids, if you want to filter the report data to particular users.  If you want all, send a blank string. | 
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

Get Timesheets Raw Data.  This data details each timesheet record.  These are the organisation wide timesheet records, with data from potentially all employees.    Requires the &#39;ReportAdmin&#39; permission.

### Example
```javascript
var ChronoSheetsApi = require('ChronoSheetsAPI');

var apiInstance = new ChronoSheetsApi.ReportsApi();

var startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The start date for the date range.  Report data in the response is after this date

var endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The end date for the date range.  Report data in the response is before this date

var userIds = "userIds_example"; // String | A comma-separated list of user Ids, if you want to filter the report data to particular users.  If you want all, send a blank string.

var sort = "sort_example"; // String | Decide which column to sort on

var order = "order_example"; // String | Decide which direction to sort the column

var skip = 56; // Number | Skip this many rows

var take = 56; // Number | Take this many rows

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
 **startDate** | **Date**| The start date for the date range.  Report data in the response is after this date | 
 **endDate** | **Date**| The end date for the date range.  Report data in the response is before this date | 
 **userIds** | **String**| A comma-separated list of user Ids, if you want to filter the report data to particular users.  If you want all, send a blank string. | 
 **sort** | **String**| Decide which column to sort on | 
 **order** | **String**| Decide which direction to sort the column | 
 **skip** | **Number**| Skip this many rows | 
 **take** | **Number**| Take this many rows | 
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

Gets project cost estimations VS actual cost for date range and users.    Requires the &#39;ReportAdmin&#39; permission.

### Example
```javascript
var ChronoSheetsApi = require('ChronoSheetsAPI');

var apiInstance = new ChronoSheetsApi.ReportsApi();

var startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The start date for the date range.  Report data in the response is after this date

var endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The end date for the date range.  Report data in the response is before this date

var userIds = "userIds_example"; // String | A comma-separated list of user Ids, if you want to filter the report data to particular users.  If you want all, send a blank string.

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
 **startDate** | **Date**| The start date for the date range.  Report data in the response is after this date | 
 **endDate** | **Date**| The end date for the date range.  Report data in the response is before this date | 
 **userIds** | **String**| A comma-separated list of user Ids, if you want to filter the report data to particular users.  If you want all, send a blank string. | 
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

Timeseries jobs data for the logged in user.    Requires the &#39;ViewOwnReports&#39; or &#39;SubmitTimesheets&#39;.

### Example
```javascript
var ChronoSheetsApi = require('ChronoSheetsAPI');

var apiInstance = new ChronoSheetsApi.ReportsApi();

var startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The start date for the date range.  Report data in the response is after this date

var endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The end date for the date range.  Report data in the response is before this date

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
 **startDate** | **Date**| The start date for the date range.  Report data in the response is after this date | 
 **endDate** | **Date**| The end date for the date range.  Report data in the response is before this date | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseListJobSeriesReportItem**](CSApiResponseListJobSeriesReportItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

