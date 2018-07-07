# ChronoSheetsApi.ProjectsApi

All URIs are relative to *https://www.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**projectsCreateProject**](ProjectsApi.md#projectsCreateProject) | **PUT** /api/Projects/CreateProject | Create a project.    Requires the &#39;ManageClientsAndProjects&#39; permission.
[**projectsGetProjectById**](ProjectsApi.md#projectsGetProjectById) | **GET** /api/Projects/GetProjectById | Get a project by its Id.    Requires the &#39;ManageClientsAndProjects&#39; or &#39;ManageJobsAndTask&#39; permissions.
[**projectsGetProjectsForClient**](ProjectsApi.md#projectsGetProjectsForClient) | **GET** /api/Projects/GetProjectsForClient | Get projects for a particular client.    Requires the &#39;ManageClientsAndProjects&#39; or &#39;ManageJobsAndTask&#39; permissions.
[**projectsUpdateProject**](ProjectsApi.md#projectsUpdateProject) | **POST** /api/Projects/UpdateProject | Update a project.    Requires the &#39;ManageClientsAndProjects&#39; permission.


<a name="projectsCreateProject"></a>
# **projectsCreateProject**
> CSApiResponseInt32 projectsCreateProject(request, xChronosheetsAuth)

Create a project.    Requires the &#39;ManageClientsAndProjects&#39; permission.

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.ProjectsApi();

var request = new ChronoSheetsApi.CSInsertProjectRequest(); // CSInsertProjectRequest | An Insert Project Request object containing values for the new Project to create

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.projectsCreateProject(request, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CSInsertProjectRequest**](CSInsertProjectRequest.md)| An Insert Project Request object containing values for the new Project to create | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseInt32**](CSApiResponseInt32.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="projectsGetProjectById"></a>
# **projectsGetProjectById**
> CSApiResponseProject projectsGetProjectById(projectId, xChronosheetsAuth)

Get a project by its Id.    Requires the &#39;ManageClientsAndProjects&#39; or &#39;ManageJobsAndTask&#39; permissions.

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.ProjectsApi();

var projectId = 56; // Number | The ID of the Project you want to get

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.projectsGetProjectById(projectId, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **Number**| The ID of the Project you want to get | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseProject**](CSApiResponseProject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="projectsGetProjectsForClient"></a>
# **projectsGetProjectsForClient**
> CSApiResponseListProject projectsGetProjectsForClient(clientId, xChronosheetsAuth)

Get projects for a particular client.    Requires the &#39;ManageClientsAndProjects&#39; or &#39;ManageJobsAndTask&#39; permissions.

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.ProjectsApi();

var clientId = 56; // Number | The ID of the client

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.projectsGetProjectsForClient(clientId, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| The ID of the client | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseListProject**](CSApiResponseListProject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="projectsUpdateProject"></a>
# **projectsUpdateProject**
> CSApiResponseBoolean projectsUpdateProject(request, xChronosheetsAuth)

Update a project.    Requires the &#39;ManageClientsAndProjects&#39; permission.

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.ProjectsApi();

var request = new ChronoSheetsApi.CSUpdateProjectRequest(); // CSUpdateProjectRequest | An Update Project Request object containing updated fields.  Make sure to specify the Project Id in the request object so that ChronoSheets knows which Project to update

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.projectsUpdateProject(request, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CSUpdateProjectRequest**](CSUpdateProjectRequest.md)| An Update Project Request object containing updated fields.  Make sure to specify the Project Id in the request object so that ChronoSheets knows which Project to update | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseBoolean**](CSApiResponseBoolean.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

