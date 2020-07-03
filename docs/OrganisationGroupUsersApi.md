# ChronoSheetsApi.OrganisationGroupUsersApi

All URIs are relative to *https://api.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**organisationGroupUsersGetOrganisationGroupUsers**](OrganisationGroupUsersApi.md#organisationGroupUsersGetOrganisationGroupUsers) | **GET** /OrganisationGroupUsers/GetOrganisationGroupUsers | Get a collection of organisation group users that belong to an organisation group.    Requires the &#39;ManageOrganisationGroups&#39; or &#39;ManageOrganisationUsers&#39; permissions.
[**organisationGroupUsersUpdateOrganisationGroupUsers**](OrganisationGroupUsersApi.md#organisationGroupUsersUpdateOrganisationGroupUsers) | **PUT** /OrganisationGroupUsers/UpdateOrganisationGroupUsers | Set the users who belong to an organisation group.    Requires the &#39;ManageOrganisationGroups&#39; permissions.



## organisationGroupUsersGetOrganisationGroupUsers

> ApiResponseListUserForManagement organisationGroupUsersGetOrganisationGroupUsers(orgGroupId, xChronosheetsAuth)

Get a collection of organisation group users that belong to an organisation group.    Requires the &#39;ManageOrganisationGroups&#39; or &#39;ManageOrganisationUsers&#39; permissions.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.OrganisationGroupUsersApi();
let orgGroupId = 56; // Number | An OrganisationGroup Id
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
apiInstance.organisationGroupUsersGetOrganisationGroupUsers(orgGroupId, xChronosheetsAuth, (error, data, response) => {
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
 **orgGroupId** | **Number**| An OrganisationGroup Id | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**ApiResponseListUserForManagement**](ApiResponseListUserForManagement.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## organisationGroupUsersUpdateOrganisationGroupUsers

> ApiResponseBoolean organisationGroupUsersUpdateOrganisationGroupUsers(xChronosheetsAuth, request)

Set the users who belong to an organisation group.    Requires the &#39;ManageOrganisationGroups&#39; permissions.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.OrganisationGroupUsersApi();
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
let request = new ChronoSheetsApi.SetOrganisationGroupUsersRequest(); // SetOrganisationGroupUsersRequest | A request object specifying which users belong to an organisation group.  Make sure to specify the OrganisationGroup Id in the request object so that ChronoSheets knows which OrganisationGroup to update. CsvUserIds is a comma separated list of User Ids, e.g. 1,2,3,4
apiInstance.organisationGroupUsersUpdateOrganisationGroupUsers(xChronosheetsAuth, request, (error, data, response) => {
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
 **request** | [**SetOrganisationGroupUsersRequest**](SetOrganisationGroupUsersRequest.md)| A request object specifying which users belong to an organisation group.  Make sure to specify the OrganisationGroup Id in the request object so that ChronoSheets knows which OrganisationGroup to update. CsvUserIds is a comma separated list of User Ids, e.g. 1,2,3,4 | 

### Return type

[**ApiResponseBoolean**](ApiResponseBoolean.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

