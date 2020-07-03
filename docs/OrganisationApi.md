# ChronoSheetsApi.OrganisationApi

All URIs are relative to *https://api.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**organisationGetOrganisation**](OrganisationApi.md#organisationGetOrganisation) | **GET** /Organisation/GetOrganisation | Get your organisation.    Requires &#39;OrganisationAdmin&#39; permission.
[**organisationUpdateOrganisation**](OrganisationApi.md#organisationUpdateOrganisation) | **PUT** /Organisation/UpdateOrganisation | Update an organisation.    Requires &#39;OrganisationAdmin&#39; permission.



## organisationGetOrganisation

> ApiResponseOrganisation organisationGetOrganisation(xChronosheetsAuth)

Get your organisation.    Requires &#39;OrganisationAdmin&#39; permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.OrganisationApi();
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
apiInstance.organisationGetOrganisation(xChronosheetsAuth, (error, data, response) => {
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

[**ApiResponseOrganisation**](ApiResponseOrganisation.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## organisationUpdateOrganisation

> ApiResponseUpdateOrganisationResponse organisationUpdateOrganisation(xChronosheetsAuth, request)

Update an organisation.    Requires &#39;OrganisationAdmin&#39; permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.OrganisationApi();
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
let request = new ChronoSheetsApi.UpdateOrganisationRequest(); // UpdateOrganisationRequest | An Update Organsation Request object containing updated fields.  Make sure to specify the Organsation Id in the request object so that ChronoSheets knows which Organsation to update
apiInstance.organisationUpdateOrganisation(xChronosheetsAuth, request, (error, data, response) => {
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
 **request** | [**UpdateOrganisationRequest**](UpdateOrganisationRequest.md)| An Update Organsation Request object containing updated fields.  Make sure to specify the Organsation Id in the request object so that ChronoSheets knows which Organsation to update | 

### Return type

[**ApiResponseUpdateOrganisationResponse**](ApiResponseUpdateOrganisationResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

