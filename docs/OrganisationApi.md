# JavascriptApiClientForChronoSheets.OrganisationApi

All URIs are relative to *https://www.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**organisationGetOrganisation**](OrganisationApi.md#organisationGetOrganisation) | **GET** /api/Organisation/GetOrganisation | Get your organisation.    Requires &#39;OrganisationAdmin&#39; permission.
[**organisationUpdateOrganisation**](OrganisationApi.md#organisationUpdateOrganisation) | **PUT** /api/Organisation/UpdateOrganisation | Update an organisation.    Requires &#39;OrganisationAdmin&#39; permission.


<a name="organisationGetOrganisation"></a>
# **organisationGetOrganisation**
> CSApiResponseOrganisation organisationGetOrganisation(xChronosheetsAuth)

Get your organisation.    Requires &#39;OrganisationAdmin&#39; permission.

### Example
```javascript
var JavascriptApiClientForChronoSheets = require('Javascript API Client for ChronoSheets');

var apiInstance = new JavascriptApiClientForChronoSheets.OrganisationApi();

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.organisationGetOrganisation(xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseOrganisation**](CSApiResponseOrganisation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="organisationUpdateOrganisation"></a>
# **organisationUpdateOrganisation**
> CSApiResponseUpdateOrganisationResponse organisationUpdateOrganisation(request, xChronosheetsAuth)

Update an organisation.    Requires &#39;OrganisationAdmin&#39; permission.

### Example
```javascript
var JavascriptApiClientForChronoSheets = require('Javascript API Client for ChronoSheets');

var apiInstance = new JavascriptApiClientForChronoSheets.OrganisationApi();

var request = new JavascriptApiClientForChronoSheets.CSUpdateOrganisationRequest(); // CSUpdateOrganisationRequest | An Update Organsation Request object containing updated fields.  Make sure to specify the Organsation Id in the request object so that ChronoSheets knows which Organsation to update

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.organisationUpdateOrganisation(request, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CSUpdateOrganisationRequest**](CSUpdateOrganisationRequest.md)| An Update Organsation Request object containing updated fields.  Make sure to specify the Organsation Id in the request object so that ChronoSheets knows which Organsation to update | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseUpdateOrganisationResponse**](CSApiResponseUpdateOrganisationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

