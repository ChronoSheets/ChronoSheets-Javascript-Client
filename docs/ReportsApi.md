# ChronoSheetsApi.ReportsApi

All URIs are relative to *https://api.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reportsGetAllChartsDataAdmin**](ReportsApi.md#reportsGetAllChartsDataAdmin) | **GET** /Reports/GetAllChartsDataAdmin | Get Consolidated Admin Reports Data (Jobs, Tasks, Clients and Projects).  These are the organisation wide reports, with data from potentially all employees.    Requires the &#39;ReportAdmin&#39; permission.
[**reportsGetAllChartsDataUser**](ReportsApi.md#reportsGetAllChartsDataUser) | **GET** /Reports/GetAllChartsDataUser | Get Consolidated User Reports Data (Jobs, Tasks, Clients and Projects).  These are the user&#39;s own reports.    Requires the &#39;ViewOwnReports&#39; permission.
[**reportsGetFleetSummaryAdmin**](ReportsApi.md#reportsGetFleetSummaryAdmin) | **GET** /Reports/GetFleetSummaryAdmin | Gets a summary report, which includes total distance travelled and total running costs, for vehicles within your organisation  Requires the &#39;ReportAdmin&#39; permission.
[**reportsGetOrgTripById**](ReportsApi.md#reportsGetOrgTripById) | **GET** /Reports/GetOrgTripById | Get trip by Id, for reporting purposes.    Requires the &#39;ReportAdmin&#39; permission.
[**reportsGetOrganisationTimesheetFileAttachments**](ReportsApi.md#reportsGetOrganisationTimesheetFileAttachments) | **GET** /Reports/GetOrganisationTimesheetFileAttachments | Reports on Organisation timesheet file attachments (files uploaded and attached to timesheet records)  Requires the &#39;ReportAdmin&#39; permission.
[**reportsGetOrganisationTranscripts**](ReportsApi.md#reportsGetOrganisationTranscripts) | **GET** /Reports/GetOrganisationTranscripts | Reports on Organisation transcripts (When an audio file is attached, it will be automatically transcribed, these are the transcriptions)    Requires the &#39;ReportAdmin&#39; permission.
[**reportsGetOrganisationTrips**](ReportsApi.md#reportsGetOrganisationTrips) | **GET** /Reports/GetOrganisationTrips | Reports on Organisation trips (GPS tracking from whole organisation).    Requires the &#39;ReportAdmin&#39; permission.
[**reportsGetRawDataAdmin**](ReportsApi.md#reportsGetRawDataAdmin) | **GET** /Reports/GetRawDataAdmin | Get Timesheets Raw Data.  This data details each timesheet record.  These are the organisation wide timesheet records, with data from potentially all employees.    Requires the &#39;ReportAdmin&#39; permission.
[**reportsProjectCostingsAdmin**](ReportsApi.md#reportsProjectCostingsAdmin) | **GET** /Reports/ProjectCostingsAdmin | Gets project cost estimations VS actual cost for date range and users.    Requires the &#39;ReportAdmin&#39; permission.
[**reportsUserJobsOverTime**](ReportsApi.md#reportsUserJobsOverTime) | **GET** /Reports/UserJobsOverTime | Timeseries jobs data for the logged in user.    Requires the &#39;ViewOwnReports&#39; or &#39;SubmitTimesheets&#39;.



## reportsGetAllChartsDataAdmin

> ApiResponseCombinedReportsData reportsGetAllChartsDataAdmin(startDate, endDate, xChronosheetsAuth, opts)

Get Consolidated Admin Reports Data (Jobs, Tasks, Clients and Projects).  These are the organisation wide reports, with data from potentially all employees.    Requires the &#39;ReportAdmin&#39; permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.ReportsApi();
let startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The start date for the date range.  Report data in the response is after this date
let endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The end date for the date range.  Report data in the response is before this date
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
let opts = {
  'userIds': "userIds_example", // String | A comma-separated list of user Ids, if you want to filter the report data to particular users.  If you want all, send a blank string.
  'forceOnlyThisChart': "forceOnlyThisChart_example" // String | A flag to indicate which report data you require.  Choose a particular set of data, or if you want all data use the 'NotForced' option.
};
apiInstance.reportsGetAllChartsDataAdmin(startDate, endDate, xChronosheetsAuth, opts, (error, data, response) => {
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
 **startDate** | **Date**| The start date for the date range.  Report data in the response is after this date | 
 **endDate** | **Date**| The end date for the date range.  Report data in the response is before this date | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 
 **userIds** | **String**| A comma-separated list of user Ids, if you want to filter the report data to particular users.  If you want all, send a blank string. | [optional] 
 **forceOnlyThisChart** | **String**| A flag to indicate which report data you require.  Choose a particular set of data, or if you want all data use the &#39;NotForced&#39; option. | [optional] 

### Return type

[**ApiResponseCombinedReportsData**](ApiResponseCombinedReportsData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## reportsGetAllChartsDataUser

> ApiResponseCombinedReportsData reportsGetAllChartsDataUser(startDate, endDate, xChronosheetsAuth)

Get Consolidated User Reports Data (Jobs, Tasks, Clients and Projects).  These are the user&#39;s own reports.    Requires the &#39;ViewOwnReports&#39; permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.ReportsApi();
let startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The start date for the date range.  Report data in the response is after this date
let endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The end date for the date range.  Report data in the response is before this date
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
apiInstance.reportsGetAllChartsDataUser(startDate, endDate, xChronosheetsAuth, (error, data, response) => {
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
 **startDate** | **Date**| The start date for the date range.  Report data in the response is after this date | 
 **endDate** | **Date**| The end date for the date range.  Report data in the response is before this date | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**ApiResponseCombinedReportsData**](ApiResponseCombinedReportsData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## reportsGetFleetSummaryAdmin

> ApiResponseListFleetSummaryReportItem reportsGetFleetSummaryAdmin(startDate, endDate, xChronosheetsAuth, opts)

Gets a summary report, which includes total distance travelled and total running costs, for vehicles within your organisation  Requires the &#39;ReportAdmin&#39; permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.ReportsApi();
let startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The start date for the date range.  Report data in the response is after this date
let endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The end date for the date range.  Report data in the response is before this date
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
let opts = {
  'userIds': "userIds_example" // String | A comma-separated list of user Ids, if you want to filter the report data to particular users.  If you want all, send a blank string.
};
apiInstance.reportsGetFleetSummaryAdmin(startDate, endDate, xChronosheetsAuth, opts, (error, data, response) => {
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
 **startDate** | **Date**| The start date for the date range.  Report data in the response is after this date | 
 **endDate** | **Date**| The end date for the date range.  Report data in the response is before this date | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 
 **userIds** | **String**| A comma-separated list of user Ids, if you want to filter the report data to particular users.  If you want all, send a blank string. | [optional] 

### Return type

[**ApiResponseListFleetSummaryReportItem**](ApiResponseListFleetSummaryReportItem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## reportsGetOrgTripById

> ApiResponseTrip reportsGetOrgTripById(tripId, xChronosheetsAuth)

Get trip by Id, for reporting purposes.    Requires the &#39;ReportAdmin&#39; permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.ReportsApi();
let tripId = 56; // Number | The ID of the Trip you want to get
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
apiInstance.reportsGetOrgTripById(tripId, xChronosheetsAuth, (error, data, response) => {
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


## reportsGetOrganisationTimesheetFileAttachments

> ApiResponseForPaginatedListOrgReportTimesheetFileAttachment reportsGetOrganisationTimesheetFileAttachments(startDate, endDate, xChronosheetsAuth, opts)

Reports on Organisation timesheet file attachments (files uploaded and attached to timesheet records)  Requires the &#39;ReportAdmin&#39; permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.ReportsApi();
let startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The start date for the date range.  Report data in the response is after this date
let endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The end date for the date range.  Report data in the response is before this date
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
let opts = {
  'skip': 56, // Number | Skip this many items
  'take': 56, // Number | Take this many items
  'userIds': "userIds_example" // String | A comma-separated list of user Ids, if you want to filter the report data to particular users.  If you want all, send a blank string.
};
apiInstance.reportsGetOrganisationTimesheetFileAttachments(startDate, endDate, xChronosheetsAuth, opts, (error, data, response) => {
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
 **startDate** | **Date**| The start date for the date range.  Report data in the response is after this date | 
 **endDate** | **Date**| The end date for the date range.  Report data in the response is before this date | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 
 **skip** | **Number**| Skip this many items | [optional] 
 **take** | **Number**| Take this many items | [optional] 
 **userIds** | **String**| A comma-separated list of user Ids, if you want to filter the report data to particular users.  If you want all, send a blank string. | [optional] 

### Return type

[**ApiResponseForPaginatedListOrgReportTimesheetFileAttachment**](ApiResponseForPaginatedListOrgReportTimesheetFileAttachment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## reportsGetOrganisationTranscripts

> ApiResponseForPaginatedListOrgReportTranscript reportsGetOrganisationTranscripts(startDate, endDate, xChronosheetsAuth, opts)

Reports on Organisation transcripts (When an audio file is attached, it will be automatically transcribed, these are the transcriptions)    Requires the &#39;ReportAdmin&#39; permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.ReportsApi();
let startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The start date for the date range.  Report data in the response is after this date
let endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The end date for the date range.  Report data in the response is before this date
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
let opts = {
  'skip': 56, // Number | Skip this many items
  'take': 56, // Number | Take this many items
  'userIds': "userIds_example", // String | A comma-separated list of user Ids, if you want to filter the report data to particular users.  If you want all, send a blank string.
  'keywords': "keywords_example" // String | Search the transcripts by keyword(s)
};
apiInstance.reportsGetOrganisationTranscripts(startDate, endDate, xChronosheetsAuth, opts, (error, data, response) => {
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
 **startDate** | **Date**| The start date for the date range.  Report data in the response is after this date | 
 **endDate** | **Date**| The end date for the date range.  Report data in the response is before this date | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 
 **skip** | **Number**| Skip this many items | [optional] 
 **take** | **Number**| Take this many items | [optional] 
 **userIds** | **String**| A comma-separated list of user Ids, if you want to filter the report data to particular users.  If you want all, send a blank string. | [optional] 
 **keywords** | **String**| Search the transcripts by keyword(s) | [optional] 

### Return type

[**ApiResponseForPaginatedListOrgReportTranscript**](ApiResponseForPaginatedListOrgReportTranscript.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## reportsGetOrganisationTrips

> ApiResponseForPaginatedListOrgReportTrip reportsGetOrganisationTrips(startDate, endDate, xChronosheetsAuth, opts)

Reports on Organisation trips (GPS tracking from whole organisation).    Requires the &#39;ReportAdmin&#39; permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.ReportsApi();
let startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The start date for the date range.  Report data in the response is after this date
let endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The end date for the date range.  Report data in the response is before this date
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
let opts = {
  'skip': 56, // Number | Skip this many items
  'take': 56, // Number | Take this many items
  'userIds': "userIds_example" // String | A comma-separated list of user Ids, if you want to filter the report data to particular users.  If you want all, send a blank string.
};
apiInstance.reportsGetOrganisationTrips(startDate, endDate, xChronosheetsAuth, opts, (error, data, response) => {
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
 **startDate** | **Date**| The start date for the date range.  Report data in the response is after this date | 
 **endDate** | **Date**| The end date for the date range.  Report data in the response is before this date | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 
 **skip** | **Number**| Skip this many items | [optional] 
 **take** | **Number**| Take this many items | [optional] 
 **userIds** | **String**| A comma-separated list of user Ids, if you want to filter the report data to particular users.  If you want all, send a blank string. | [optional] 

### Return type

[**ApiResponseForPaginatedListOrgReportTrip**](ApiResponseForPaginatedListOrgReportTrip.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## reportsGetRawDataAdmin

> ApiResponseForPaginatedListRawReportItem reportsGetRawDataAdmin(startDate, endDate, xChronosheetsAuth, opts)

Get Timesheets Raw Data.  This data details each timesheet record.  These are the organisation wide timesheet records, with data from potentially all employees.    Requires the &#39;ReportAdmin&#39; permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.ReportsApi();
let startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The start date for the date range.  Report data in the response is after this date
let endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The end date for the date range.  Report data in the response is before this date
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
let opts = {
  'userIds': "userIds_example", // String | A comma-separated list of user Ids, if you want to filter the report data to particular users.  If you want all, send a blank string.
  'sort': "sort_example", // String | Decide which column to sort on
  'order': "order_example", // String | Decide which direction to sort the column
  'skip': 56, // Number | Skip this many rows
  'take': 56 // Number | Take this many rows
};
apiInstance.reportsGetRawDataAdmin(startDate, endDate, xChronosheetsAuth, opts, (error, data, response) => {
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
 **startDate** | **Date**| The start date for the date range.  Report data in the response is after this date | 
 **endDate** | **Date**| The end date for the date range.  Report data in the response is before this date | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 
 **userIds** | **String**| A comma-separated list of user Ids, if you want to filter the report data to particular users.  If you want all, send a blank string. | [optional] 
 **sort** | **String**| Decide which column to sort on | [optional] 
 **order** | **String**| Decide which direction to sort the column | [optional] 
 **skip** | **Number**| Skip this many rows | [optional] 
 **take** | **Number**| Take this many rows | [optional] 

### Return type

[**ApiResponseForPaginatedListRawReportItem**](ApiResponseForPaginatedListRawReportItem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## reportsProjectCostingsAdmin

> ApiResponseListProjectCostingReportItem reportsProjectCostingsAdmin(startDate, endDate, xChronosheetsAuth, opts)

Gets project cost estimations VS actual cost for date range and users.    Requires the &#39;ReportAdmin&#39; permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.ReportsApi();
let startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The start date for the date range.  Report data in the response is after this date
let endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The end date for the date range.  Report data in the response is before this date
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
let opts = {
  'userIds': "userIds_example" // String | A comma-separated list of user Ids, if you want to filter the report data to particular users.  If you want all, send a blank string.
};
apiInstance.reportsProjectCostingsAdmin(startDate, endDate, xChronosheetsAuth, opts, (error, data, response) => {
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
 **startDate** | **Date**| The start date for the date range.  Report data in the response is after this date | 
 **endDate** | **Date**| The end date for the date range.  Report data in the response is before this date | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 
 **userIds** | **String**| A comma-separated list of user Ids, if you want to filter the report data to particular users.  If you want all, send a blank string. | [optional] 

### Return type

[**ApiResponseListProjectCostingReportItem**](ApiResponseListProjectCostingReportItem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## reportsUserJobsOverTime

> ApiResponseListJobSeriesReportItem reportsUserJobsOverTime(startDate, endDate, xChronosheetsAuth)

Timeseries jobs data for the logged in user.    Requires the &#39;ViewOwnReports&#39; or &#39;SubmitTimesheets&#39;.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.ReportsApi();
let startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The start date for the date range.  Report data in the response is after this date
let endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The end date for the date range.  Report data in the response is before this date
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
apiInstance.reportsUserJobsOverTime(startDate, endDate, xChronosheetsAuth, (error, data, response) => {
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
 **startDate** | **Date**| The start date for the date range.  Report data in the response is after this date | 
 **endDate** | **Date**| The end date for the date range.  Report data in the response is before this date | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**ApiResponseListJobSeriesReportItem**](ApiResponseListJobSeriesReportItem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

