# ChronoSheetsApi.ProjectsApi

All URIs are relative to *https://api.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**projectsCreateProject**](ProjectsApi.md#projectsCreateProject) | **POST** /Projects/CreateProject | Create a project.    Requires the &#39;ManageClientsAndProjects&#39; permission.
[**projectsGetProjectById**](ProjectsApi.md#projectsGetProjectById) | **GET** /Projects/GetProjectById | Get a project by its Id.    Requires the &#39;ManageClientsAndProjects&#39; or &#39;ManageJobsAndTask&#39; permissions.
[**projectsGetProjectsForClient**](ProjectsApi.md#projectsGetProjectsForClient) | **GET** /Projects/GetProjectsForClient | Get projects for a particular client.    Requires the &#39;ManageClientsAndProjects&#39; or &#39;ManageJobsAndTask&#39; permissions.
[**projectsUpdateProject**](ProjectsApi.md#projectsUpdateProject) | **PUT** /Projects/UpdateProject | Update a project.    Requires the &#39;ManageClientsAndProjects&#39; permission.



## projectsCreateProject

> ApiResponseInt32 projectsCreateProject(xChronosheetsAuth, request)

Create a project.    Requires the &#39;ManageClientsAndProjects&#39; permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.ProjectsApi();
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
let request = new ChronoSheetsApi.InsertProjectRequest(); // InsertProjectRequest | An Insert Project Request object containing values for the new Project to create.  Make sure to specify a correct Client Id - this will be used to attach the new project under that client.
apiInstance.projectsCreateProject(xChronosheetsAuth, request, (error, data, response) => {
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
 **request** | [**InsertProjectRequest**](InsertProjectRequest.md)| An Insert Project Request object containing values for the new Project to create.  Make sure to specify a correct Client Id - this will be used to attach the new project under that client. | 

### Return type

[**ApiResponseInt32**](ApiResponseInt32.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## projectsGetProjectById

> ApiResponseProject projectsGetProjectById(projectId, xChronosheetsAuth)

Get a project by its Id.    Requires the &#39;ManageClientsAndProjects&#39; or &#39;ManageJobsAndTask&#39; permissions.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.ProjectsApi();
let projectId = 56; // Number | The ID of the Project you want to get
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
apiInstance.projectsGetProjectById(projectId, xChronosheetsAuth, (error, data, response) => {
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
 **projectId** | **Number**| The ID of the Project you want to get | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**ApiResponseProject**](ApiResponseProject.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## projectsGetProjectsForClient

> ApiResponseListProject projectsGetProjectsForClient(clientId, xChronosheetsAuth)

Get projects for a particular client.    Requires the &#39;ManageClientsAndProjects&#39; or &#39;ManageJobsAndTask&#39; permissions.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.ProjectsApi();
let clientId = 56; // Number | The ID of the client
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
apiInstance.projectsGetProjectsForClient(clientId, xChronosheetsAuth, (error, data, response) => {
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
 **clientId** | **Number**| The ID of the client | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**ApiResponseListProject**](ApiResponseListProject.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## projectsUpdateProject

> ApiResponseBoolean projectsUpdateProject(xChronosheetsAuth, request)

Update a project.    Requires the &#39;ManageClientsAndProjects&#39; permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.ProjectsApi();
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
let request = new ChronoSheetsApi.UpdateProjectRequest(); // UpdateProjectRequest | An Update Project Request object containing updated fields.  Make sure to specify the Project Id in the request object so that ChronoSheets knows which Project to update
apiInstance.projectsUpdateProject(xChronosheetsAuth, request, (error, data, response) => {
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
 **request** | [**UpdateProjectRequest**](UpdateProjectRequest.md)| An Update Project Request object containing updated fields.  Make sure to specify the Project Id in the request object so that ChronoSheets knows which Project to update | 

### Return type

[**ApiResponseBoolean**](ApiResponseBoolean.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

