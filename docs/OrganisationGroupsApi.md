# ChronoSheetsApi.OrganisationGroupsApi

All URIs are relative to *https://api.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**organisationGroupsCreateOrganisationGroup**](OrganisationGroupsApi.md#organisationGroupsCreateOrganisationGroup) | **POST** /OrganisationGroups/CreateOrganisationGroup | Create an organisation group.    Requires the &#39;ManageOrganisationGroups&#39; permissions.
[**organisationGroupsDeleteOrganisationGroup**](OrganisationGroupsApi.md#organisationGroupsDeleteOrganisationGroup) | **DELETE** /OrganisationGroups/DeleteOrganisationGroup | 
[**organisationGroupsGetOrganisationGroup**](OrganisationGroupsApi.md#organisationGroupsGetOrganisationGroup) | **GET** /OrganisationGroups/GetOrganisationGroup | Get a particular organisation group.    Requires the &#39;ManageOrganisationGroups&#39;, &#39;ManageJobsAndTask&#39;, &#39;ManageClientsAndProjects&#39; or &#39;ManageOrganisationUsers&#39; permissions.
[**organisationGroupsGetOrganisationGroups**](OrganisationGroupsApi.md#organisationGroupsGetOrganisationGroups) | **GET** /OrganisationGroups/GetOrganisationGroups | Get a collection of organisation groups that are under your organisation.    Requires the &#39;ManageOrganisationGroups&#39;, &#39;ManageJobsAndTask&#39;, &#39;ManageClientsAndProjects&#39; or &#39;ManageOrganisationUsers&#39; permissions.
[**organisationGroupsGetOrganisationGroupsForJob**](OrganisationGroupsApi.md#organisationGroupsGetOrganisationGroupsForJob) | **GET** /OrganisationGroups/GetOrganisationGroupsForJob | Get org groups for a particular job.    Requires the &#39;ManageOrganisationGroups&#39;, &#39;ManageJobsAndTask&#39;, &#39;ManageClientsAndProjects&#39; or &#39;ManageOrganisationUsers&#39; permissions.
[**organisationGroupsGetOrganisationGroupsForVehicle**](OrganisationGroupsApi.md#organisationGroupsGetOrganisationGroupsForVehicle) | **GET** /OrganisationGroups/GetOrganisationGroupsForVehicle | Get org groups for a particular vehicle.    Requires the &#39;ManageOrganisationGroups&#39;, &#39;ManageFleet&#39; or &#39;ManageOrganisationUsers&#39; permissions.
[**organisationGroupsUpdateOrganisationGroup**](OrganisationGroupsApi.md#organisationGroupsUpdateOrganisationGroup) | **PUT** /OrganisationGroups/UpdateOrganisationGroup | Update an organisation group.    Requires the &#39;ManageOrganisationGroups&#39; permissions.



## organisationGroupsCreateOrganisationGroup

> ApiResponseInt32 organisationGroupsCreateOrganisationGroup(xChronosheetsAuth, request)

Create an organisation group.    Requires the &#39;ManageOrganisationGroups&#39; permissions.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.OrganisationGroupsApi();
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
let request = new ChronoSheetsApi.InsertOrganisationGroupRequest(); // InsertOrganisationGroupRequest | An Insert OrganisationGroup Request object containing values for the new OrganisationGroup to create
apiInstance.organisationGroupsCreateOrganisationGroup(xChronosheetsAuth, request, (error, data, response) => {
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
 **request** | [**InsertOrganisationGroupRequest**](InsertOrganisationGroupRequest.md)| An Insert OrganisationGroup Request object containing values for the new OrganisationGroup to create | 

### Return type

[**ApiResponseInt32**](ApiResponseInt32.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## organisationGroupsDeleteOrganisationGroup

> ApiResponseBoolean organisationGroupsDeleteOrganisationGroup(organisationGroupId, xChronosheetsAuth)



### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.OrganisationGroupsApi();
let organisationGroupId = 56; // Number | 
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
apiInstance.organisationGroupsDeleteOrganisationGroup(organisationGroupId, xChronosheetsAuth, (error, data, response) => {
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
 **organisationGroupId** | **Number**|  | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**ApiResponseBoolean**](ApiResponseBoolean.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## organisationGroupsGetOrganisationGroup

> ApiResponseOrganisationGroup organisationGroupsGetOrganisationGroup(organisationGroupId, xChronosheetsAuth)

Get a particular organisation group.    Requires the &#39;ManageOrganisationGroups&#39;, &#39;ManageJobsAndTask&#39;, &#39;ManageClientsAndProjects&#39; or &#39;ManageOrganisationUsers&#39; permissions.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.OrganisationGroupsApi();
let organisationGroupId = 56; // Number | The ID of the OrganisationGroup you want to get
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
apiInstance.organisationGroupsGetOrganisationGroup(organisationGroupId, xChronosheetsAuth, (error, data, response) => {
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
 **organisationGroupId** | **Number**| The ID of the OrganisationGroup you want to get | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**ApiResponseOrganisationGroup**](ApiResponseOrganisationGroup.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## organisationGroupsGetOrganisationGroups

> ApiResponseListOrganisationGroup organisationGroupsGetOrganisationGroups(xChronosheetsAuth)

Get a collection of organisation groups that are under your organisation.    Requires the &#39;ManageOrganisationGroups&#39;, &#39;ManageJobsAndTask&#39;, &#39;ManageClientsAndProjects&#39; or &#39;ManageOrganisationUsers&#39; permissions.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.OrganisationGroupsApi();
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
apiInstance.organisationGroupsGetOrganisationGroups(xChronosheetsAuth, (error, data, response) => {
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

[**ApiResponseListOrganisationGroup**](ApiResponseListOrganisationGroup.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## organisationGroupsGetOrganisationGroupsForJob

> ApiResponseListOrganisationGroup organisationGroupsGetOrganisationGroupsForJob(jobId, xChronosheetsAuth)

Get org groups for a particular job.    Requires the &#39;ManageOrganisationGroups&#39;, &#39;ManageJobsAndTask&#39;, &#39;ManageClientsAndProjects&#39; or &#39;ManageOrganisationUsers&#39; permissions.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.OrganisationGroupsApi();
let jobId = 56; // Number | The ID of the job
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
apiInstance.organisationGroupsGetOrganisationGroupsForJob(jobId, xChronosheetsAuth, (error, data, response) => {
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

[**ApiResponseListOrganisationGroup**](ApiResponseListOrganisationGroup.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## organisationGroupsGetOrganisationGroupsForVehicle

> ApiResponseListOrganisationGroup organisationGroupsGetOrganisationGroupsForVehicle(vehicleId, xChronosheetsAuth)

Get org groups for a particular vehicle.    Requires the &#39;ManageOrganisationGroups&#39;, &#39;ManageFleet&#39; or &#39;ManageOrganisationUsers&#39; permissions.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.OrganisationGroupsApi();
let vehicleId = 56; // Number | The ID of the vehicle
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
apiInstance.organisationGroupsGetOrganisationGroupsForVehicle(vehicleId, xChronosheetsAuth, (error, data, response) => {
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
 **vehicleId** | **Number**| The ID of the vehicle | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**ApiResponseListOrganisationGroup**](ApiResponseListOrganisationGroup.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## organisationGroupsUpdateOrganisationGroup

> ApiResponseBoolean organisationGroupsUpdateOrganisationGroup(xChronosheetsAuth, request)

Update an organisation group.    Requires the &#39;ManageOrganisationGroups&#39; permissions.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.OrganisationGroupsApi();
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
let request = new ChronoSheetsApi.SaveOrganisationGroupRequest(); // SaveOrganisationGroupRequest | A Save OrganisationGroup Request object containing updated fields.  Make sure to specify the OrganisationGroup Id in the request object so that ChronoSheets knows which OrganisationGroup to update
apiInstance.organisationGroupsUpdateOrganisationGroup(xChronosheetsAuth, request, (error, data, response) => {
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
 **request** | [**SaveOrganisationGroupRequest**](SaveOrganisationGroupRequest.md)| A Save OrganisationGroup Request object containing updated fields.  Make sure to specify the OrganisationGroup Id in the request object so that ChronoSheets knows which OrganisationGroup to update | 

### Return type

[**ApiResponseBoolean**](ApiResponseBoolean.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

