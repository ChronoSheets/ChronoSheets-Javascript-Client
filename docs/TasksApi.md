# ChronoSheetsApi.TasksApi

All URIs are relative to *https://www.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tasksCreateTask**](TasksApi.md#tasksCreateTask) | **PUT** /api/Tasks/CreateTask | Create a task
[**tasksDeleteTask**](TasksApi.md#tasksDeleteTask) | **DELETE** /api/Tasks/DeleteTask | Delete a task
[**tasksGetTaskById**](TasksApi.md#tasksGetTaskById) | **GET** /api/Tasks/GetTaskById | Get a particular task by id
[**tasksGetTasks**](TasksApi.md#tasksGetTasks) | **GET** /api/Tasks/GetTasks | Get tasks in your organisation
[**tasksGetTasksForJob**](TasksApi.md#tasksGetTasksForJob) | **GET** /api/Tasks/GetTasksForJob | Get tasks for a particular job
[**tasksUpdateTask**](TasksApi.md#tasksUpdateTask) | **POST** /api/Tasks/UpdateTask | Update a task


<a name="tasksCreateTask"></a>
# **tasksCreateTask**
> CSApiResponseInt32 tasksCreateTask(request, xChronosheetsAuth)

Create a task

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.TasksApi();

var request = new ChronoSheetsApi.CSInsertTaskRequest(); // CSInsertTaskRequest | 

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tasksCreateTask(request, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CSInsertTaskRequest**](CSInsertTaskRequest.md)|  | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseInt32**](CSApiResponseInt32.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="tasksDeleteTask"></a>
# **tasksDeleteTask**
> CSApiResponseBoolean tasksDeleteTask(taskId, xChronosheetsAuth)

Delete a task

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.TasksApi();

var taskId = 56; // Number | 

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tasksDeleteTask(taskId, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **Number**|  | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseBoolean**](CSApiResponseBoolean.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="tasksGetTaskById"></a>
# **tasksGetTaskById**
> CSApiResponseTimesheetTask tasksGetTaskById(taskId, xChronosheetsAuth)

Get a particular task by id

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.TasksApi();

var taskId = 56; // Number | 

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tasksGetTaskById(taskId, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **Number**|  | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseTimesheetTask**](CSApiResponseTimesheetTask.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="tasksGetTasks"></a>
# **tasksGetTasks**
> CSApiResponseListTimesheetTask tasksGetTasks(xChronosheetsAuth)

Get tasks in your organisation

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.TasksApi();

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tasksGetTasks(xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseListTimesheetTask**](CSApiResponseListTimesheetTask.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="tasksGetTasksForJob"></a>
# **tasksGetTasksForJob**
> CSApiResponseListTimesheetTask tasksGetTasksForJob(jobId, xChronosheetsAuth)

Get tasks for a particular job

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.TasksApi();

var jobId = 56; // Number | The ID of the job

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tasksGetTasksForJob(jobId, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **Number**| The ID of the job | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseListTimesheetTask**](CSApiResponseListTimesheetTask.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="tasksUpdateTask"></a>
# **tasksUpdateTask**
> CSApiResponseBoolean tasksUpdateTask(request, xChronosheetsAuth)

Update a task

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.TasksApi();

var request = new ChronoSheetsApi.CSUpdateTaskRequest(); // CSUpdateTaskRequest | 

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tasksUpdateTask(request, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CSUpdateTaskRequest**](CSUpdateTaskRequest.md)|  | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseBoolean**](CSApiResponseBoolean.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

