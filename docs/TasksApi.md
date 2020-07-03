# ChronoSheetsApi.TasksApi

All URIs are relative to *https://api.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tasksCreateTask**](TasksApi.md#tasksCreateTask) | **POST** /Tasks/CreateTask | Create a task.    Requires the &#39;ManageJobsAndTask&#39; permission.
[**tasksDeleteTask**](TasksApi.md#tasksDeleteTask) | **DELETE** /Tasks/DeleteTask | Delete a task.    Requires the &#39;ManageJobsAndTask&#39; permission.
[**tasksGetTaskById**](TasksApi.md#tasksGetTaskById) | **GET** /Tasks/GetTaskById | Get a particular task by Id.   Requires the &#39;SubmitTimesheets&#39; or &#39;ManageJobsAndTask&#39; permissions.
[**tasksGetTasks**](TasksApi.md#tasksGetTasks) | **GET** /Tasks/GetTasks | Get tasks in your organisation.   Requires the &#39;SubmitTimesheets&#39; or &#39;ManageJobsAndTask&#39; permissions.
[**tasksGetTasksForJob**](TasksApi.md#tasksGetTasksForJob) | **GET** /Tasks/GetTasksForJob | Get a collection of tasks for a particular Job, specified by JobId.    Requires the &#39;SubmitTimesheets&#39; or &#39;ManageJobsAndTask&#39; permissions.
[**tasksUpdateTask**](TasksApi.md#tasksUpdateTask) | **PUT** /Tasks/UpdateTask | Update a task.    Requires the &#39;ManageJobsAndTask&#39; permission.



## tasksCreateTask

> ApiResponseInt32 tasksCreateTask(xChronosheetsAuth, request)

Create a task.    Requires the &#39;ManageJobsAndTask&#39; permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.TasksApi();
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
let request = new ChronoSheetsApi.InsertTaskRequest(); // InsertTaskRequest | An Insert Task Request object containing values for the new Task to create
apiInstance.tasksCreateTask(xChronosheetsAuth, request, (error, data, response) => {
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
 **request** | [**InsertTaskRequest**](InsertTaskRequest.md)| An Insert Task Request object containing values for the new Task to create | 

### Return type

[**ApiResponseInt32**](ApiResponseInt32.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## tasksDeleteTask

> ApiResponseBoolean tasksDeleteTask(taskId, xChronosheetsAuth)

Delete a task.    Requires the &#39;ManageJobsAndTask&#39; permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.TasksApi();
let taskId = 56; // Number | The ID of the Task you want to delete
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
apiInstance.tasksDeleteTask(taskId, xChronosheetsAuth, (error, data, response) => {
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
 **taskId** | **Number**| The ID of the Task you want to delete | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**ApiResponseBoolean**](ApiResponseBoolean.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## tasksGetTaskById

> ApiResponseTimesheetTask tasksGetTaskById(taskId, xChronosheetsAuth)

Get a particular task by Id.   Requires the &#39;SubmitTimesheets&#39; or &#39;ManageJobsAndTask&#39; permissions.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.TasksApi();
let taskId = 56; // Number | The ID of the TimesheetTask you want to get
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
apiInstance.tasksGetTaskById(taskId, xChronosheetsAuth, (error, data, response) => {
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
 **taskId** | **Number**| The ID of the TimesheetTask you want to get | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**ApiResponseTimesheetTask**](ApiResponseTimesheetTask.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## tasksGetTasks

> ApiResponseListTimesheetTask tasksGetTasks(xChronosheetsAuth)

Get tasks in your organisation.   Requires the &#39;SubmitTimesheets&#39; or &#39;ManageJobsAndTask&#39; permissions.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.TasksApi();
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
apiInstance.tasksGetTasks(xChronosheetsAuth, (error, data, response) => {
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

[**ApiResponseListTimesheetTask**](ApiResponseListTimesheetTask.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## tasksGetTasksForJob

> ApiResponseListTimesheetTask tasksGetTasksForJob(jobId, xChronosheetsAuth)

Get a collection of tasks for a particular Job, specified by JobId.    Requires the &#39;SubmitTimesheets&#39; or &#39;ManageJobsAndTask&#39; permissions.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.TasksApi();
let jobId = 56; // Number | The ID of the job
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
apiInstance.tasksGetTasksForJob(jobId, xChronosheetsAuth, (error, data, response) => {
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
 **jobId** | **Number**| The ID of the job | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**ApiResponseListTimesheetTask**](ApiResponseListTimesheetTask.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## tasksUpdateTask

> ApiResponseBoolean tasksUpdateTask(xChronosheetsAuth, request)

Update a task.    Requires the &#39;ManageJobsAndTask&#39; permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.TasksApi();
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
let request = new ChronoSheetsApi.UpdateTaskRequest(); // UpdateTaskRequest | An Update Task Request object containing updated fields.  Make sure to specify the Task Id in the request object so that ChronoSheets knows which Task to update
apiInstance.tasksUpdateTask(xChronosheetsAuth, request, (error, data, response) => {
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
 **request** | [**UpdateTaskRequest**](UpdateTaskRequest.md)| An Update Task Request object containing updated fields.  Make sure to specify the Task Id in the request object so that ChronoSheets knows which Task to update | 

### Return type

[**ApiResponseBoolean**](ApiResponseBoolean.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

