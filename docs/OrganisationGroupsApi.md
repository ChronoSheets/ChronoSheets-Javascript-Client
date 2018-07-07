# TheChronoSheetsApi.OrganisationGroupsApi

All URIs are relative to *https://www.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**organisationGroupsCreateOrganisationGroup**](OrganisationGroupsApi.md#organisationGroupsCreateOrganisationGroup) | **PUT** /api/OrganisationGroups/CreateOrganisationGroup | Create an organisation group.    Requires the &#39;ManageOrganisationGroups&#39; permissions.
[**organisationGroupsGetOrganisationGroup**](OrganisationGroupsApi.md#organisationGroupsGetOrganisationGroup) | **GET** /api/OrganisationGroups/GetOrganisationGroup | Get a particular organisation group.    Requires the &#39;ManageOrganisationGroups&#39;, &#39;ManageJobsAndTask&#39;, &#39;ManageClientsAndProjects&#39; or &#39;ManageOrganisationUsers&#39; permissions.
[**organisationGroupsGetOrganisationGroups**](OrganisationGroupsApi.md#organisationGroupsGetOrganisationGroups) | **GET** /api/OrganisationGroups/GetOrganisationGroups | Get a collection of organisation groups that are under your organisation.    Requires the &#39;ManageOrganisationGroups&#39;, &#39;ManageJobsAndTask&#39;, &#39;ManageClientsAndProjects&#39; or &#39;ManageOrganisationUsers&#39; permissions.
[**organisationGroupsGetOrganisationGroupsForJob**](OrganisationGroupsApi.md#organisationGroupsGetOrganisationGroupsForJob) | **GET** /api/OrganisationGroups/GetOrganisationGroupsForJob | Get org groups for a particular job.    Requires the &#39;ManageOrganisationGroups&#39;, &#39;ManageJobsAndTask&#39;, &#39;ManageClientsAndProjects&#39; or &#39;ManageOrganisationUsers&#39; permissions.
[**organisationGroupsGetOrganisationGroupsForVehicle**](OrganisationGroupsApi.md#organisationGroupsGetOrganisationGroupsForVehicle) | **GET** /api/OrganisationGroups/GetOrganisationGroupsForVehicle | Get org groups for a particular vehicle.    Requires the &#39;ManageOrganisationGroups&#39;, &#39;ManageFleet&#39; or &#39;ManageOrganisationUsers&#39; permissions.
[**organisationGroupsUpdateOrganisationGroup**](OrganisationGroupsApi.md#organisationGroupsUpdateOrganisationGroup) | **POST** /api/OrganisationGroups/UpdateOrganisationGroup | Update an organisation group.    Requires the &#39;ManageOrganisationGroups&#39; permissions.


<a name="organisationGroupsCreateOrganisationGroup"></a>
# **organisationGroupsCreateOrganisationGroup**
> CSApiResponseInt32 organisationGroupsCreateOrganisationGroup(request, xChronosheetsAuth)

Create an organisation group.    Requires the &#39;ManageOrganisationGroups&#39; permissions.

### Example
```javascript
var TheChronoSheetsApi = require('the_chrono_sheets_api');

var apiInstance = new TheChronoSheetsApi.OrganisationGroupsApi();

var request = new TheChronoSheetsApi.CSInsertOrganisationGroupRequest(); // CSInsertOrganisationGroupRequest | An Insert OrganisationGroup Request object containing values for the new OrganisationGroup to create

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.organisationGroupsCreateOrganisationGroup(request, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CSInsertOrganisationGroupRequest**](CSInsertOrganisationGroupRequest.md)| An Insert OrganisationGroup Request object containing values for the new OrganisationGroup to create | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseInt32**](CSApiResponseInt32.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="organisationGroupsGetOrganisationGroup"></a>
# **organisationGroupsGetOrganisationGroup**
> CSApiResponseOrganisationGroup organisationGroupsGetOrganisationGroup(organisationGroupId, xChronosheetsAuth)

Get a particular organisation group.    Requires the &#39;ManageOrganisationGroups&#39;, &#39;ManageJobsAndTask&#39;, &#39;ManageClientsAndProjects&#39; or &#39;ManageOrganisationUsers&#39; permissions.

### Example
```javascript
var TheChronoSheetsApi = require('the_chrono_sheets_api');

var apiInstance = new TheChronoSheetsApi.OrganisationGroupsApi();

var organisationGroupId = 56; // Number | The ID of the OrganisationGroup you want to get

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.organisationGroupsGetOrganisationGroup(organisationGroupId, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organisationGroupId** | **Number**| The ID of the OrganisationGroup you want to get | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseOrganisationGroup**](CSApiResponseOrganisationGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="organisationGroupsGetOrganisationGroups"></a>
# **organisationGroupsGetOrganisationGroups**
> CSApiResponseListOrganisationGroup organisationGroupsGetOrganisationGroups(xChronosheetsAuth)

Get a collection of organisation groups that are under your organisation.    Requires the &#39;ManageOrganisationGroups&#39;, &#39;ManageJobsAndTask&#39;, &#39;ManageClientsAndProjects&#39; or &#39;ManageOrganisationUsers&#39; permissions.

### Example
```javascript
var TheChronoSheetsApi = require('the_chrono_sheets_api');

var apiInstance = new TheChronoSheetsApi.OrganisationGroupsApi();

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.organisationGroupsGetOrganisationGroups(xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseListOrganisationGroup**](CSApiResponseListOrganisationGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="organisationGroupsGetOrganisationGroupsForJob"></a>
# **organisationGroupsGetOrganisationGroupsForJob**
> CSApiResponseListOrganisationGroup organisationGroupsGetOrganisationGroupsForJob(jobId, xChronosheetsAuth)

Get org groups for a particular job.    Requires the &#39;ManageOrganisationGroups&#39;, &#39;ManageJobsAndTask&#39;, &#39;ManageClientsAndProjects&#39; or &#39;ManageOrganisationUsers&#39; permissions.

### Example
```javascript
var TheChronoSheetsApi = require('the_chrono_sheets_api');

var apiInstance = new TheChronoSheetsApi.OrganisationGroupsApi();

var jobId = 56; // Number | The ID of the job

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.organisationGroupsGetOrganisationGroupsForJob(jobId, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **Number**| The ID of the job | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseListOrganisationGroup**](CSApiResponseListOrganisationGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="organisationGroupsGetOrganisationGroupsForVehicle"></a>
# **organisationGroupsGetOrganisationGroupsForVehicle**
> CSApiResponseListOrganisationGroup organisationGroupsGetOrganisationGroupsForVehicle(vehicleId, xChronosheetsAuth)

Get org groups for a particular vehicle.    Requires the &#39;ManageOrganisationGroups&#39;, &#39;ManageFleet&#39; or &#39;ManageOrganisationUsers&#39; permissions.

### Example
```javascript
var TheChronoSheetsApi = require('the_chrono_sheets_api');

var apiInstance = new TheChronoSheetsApi.OrganisationGroupsApi();

var vehicleId = 56; // Number | The ID of the vehicle

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.organisationGroupsGetOrganisationGroupsForVehicle(vehicleId, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vehicleId** | **Number**| The ID of the vehicle | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseListOrganisationGroup**](CSApiResponseListOrganisationGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="organisationGroupsUpdateOrganisationGroup"></a>
# **organisationGroupsUpdateOrganisationGroup**
> CSApiResponseBoolean organisationGroupsUpdateOrganisationGroup(request, xChronosheetsAuth)

Update an organisation group.    Requires the &#39;ManageOrganisationGroups&#39; permissions.

### Example
```javascript
var TheChronoSheetsApi = require('the_chrono_sheets_api');

var apiInstance = new TheChronoSheetsApi.OrganisationGroupsApi();

var request = new TheChronoSheetsApi.CSSaveOrganisationGroupRequest(); // CSSaveOrganisationGroupRequest | A Save OrganisationGroup Request object containing updated fields.  Make sure to specify the OrganisationGroup Id in the request object so that ChronoSheets knows which OrganisationGroup to update

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.organisationGroupsUpdateOrganisationGroup(request, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CSSaveOrganisationGroupRequest**](CSSaveOrganisationGroupRequest.md)| A Save OrganisationGroup Request object containing updated fields.  Make sure to specify the OrganisationGroup Id in the request object so that ChronoSheets knows which OrganisationGroup to update | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseBoolean**](CSApiResponseBoolean.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

