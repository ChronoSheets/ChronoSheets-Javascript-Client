# ChronoSheetsApi.OrganisationGroupUsersApi

All URIs are relative to *https://www.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**organisationGroupUsersGetOrganisationGroupUsers**](OrganisationGroupUsersApi.md#organisationGroupUsersGetOrganisationGroupUsers) | **GET** /api/OrganisationGroupUsers/GetOrganisationGroupUsers | Get a collection of organisation group users that belong to an organisation group.    Requires the &#39;ManageOrganisationGroups&#39; or &#39;ManageOrganisationUsers&#39; permissions.
[**organisationGroupUsersUpdateOrganisationGroupUsers**](OrganisationGroupUsersApi.md#organisationGroupUsersUpdateOrganisationGroupUsers) | **PUT** /api/OrganisationGroupUsers/UpdateOrganisationGroupUsers | Set the users who belong to an organisation group.    Requires the &#39;ManageOrganisationGroups&#39; permissions.


<a name="organisationGroupUsersGetOrganisationGroupUsers"></a>
# **organisationGroupUsersGetOrganisationGroupUsers**
> CSApiResponseListUserForManagement organisationGroupUsersGetOrganisationGroupUsers(orgGroupId, xChronosheetsAuth)

Get a collection of organisation group users that belong to an organisation group.    Requires the &#39;ManageOrganisationGroups&#39; or &#39;ManageOrganisationUsers&#39; permissions.

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.OrganisationGroupUsersApi();

var orgGroupId = 56; // Number | An OrganisatioGroup Id

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.organisationGroupUsersGetOrganisationGroupUsers(orgGroupId, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgGroupId** | **Number**| An OrganisatioGroup Id | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseListUserForManagement**](CSApiResponseListUserForManagement.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="organisationGroupUsersUpdateOrganisationGroupUsers"></a>
# **organisationGroupUsersUpdateOrganisationGroupUsers**
> CSApiResponseBoolean organisationGroupUsersUpdateOrganisationGroupUsers(request, xChronosheetsAuth)

Set the users who belong to an organisation group.    Requires the &#39;ManageOrganisationGroups&#39; permissions.

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.OrganisationGroupUsersApi();

var request = new ChronoSheetsApi.CSSetOrganisationGroupUsersRequest(); // CSSetOrganisationGroupUsersRequest | A request object specifying which users belong to an organisation group.  Make sure to specify the OrganisationGroup Id in the request object so that ChronoSheets knows which OrganisationGroup to update

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.organisationGroupUsersUpdateOrganisationGroupUsers(request, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CSSetOrganisationGroupUsersRequest**](CSSetOrganisationGroupUsersRequest.md)| A request object specifying which users belong to an organisation group.  Make sure to specify the OrganisationGroup Id in the request object so that ChronoSheets knows which OrganisationGroup to update | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseBoolean**](CSApiResponseBoolean.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

