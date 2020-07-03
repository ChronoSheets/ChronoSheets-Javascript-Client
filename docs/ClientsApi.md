# ChronoSheetsApi.ClientsApi

All URIs are relative to *https://api.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientsCreateClient**](ClientsApi.md#clientsCreateClient) | **POST** /Clients/CreateClient | Create a client.    Requires the &#39;ManageClientsAndProjects&#39; permission.
[**clientsGetClient**](ClientsApi.md#clientsGetClient) | **GET** /Clients/GetClient | Get a particular client.    Requires the &#39;ManageClientsAndProjects&#39; or &#39;ManageJobsAndTask&#39; permissions.
[**clientsGetClients**](ClientsApi.md#clientsGetClients) | **GET** /Clients/GetClients | Get a collection of clients that are under your organisation.    Requires the &#39;ManageClientsAndProjects&#39; or &#39;ManageJobsAndTask&#39; permissions.
[**clientsUpdateClient**](ClientsApi.md#clientsUpdateClient) | **PUT** /Clients/UpdateClient | Update a client.    Requires the &#39;ManageClientsAndProjects&#39; permission.



## clientsCreateClient

> ApiResponseInt32 clientsCreateClient(xChronosheetsAuth, request)

Create a client.    Requires the &#39;ManageClientsAndProjects&#39; permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.ClientsApi();
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
let request = new ChronoSheetsApi.InsertClientRequest(); // InsertClientRequest | An Insert Client Request object containing values for the new Client to create
apiInstance.clientsCreateClient(xChronosheetsAuth, request, (error, data, response) => {
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
 **request** | [**InsertClientRequest**](InsertClientRequest.md)| An Insert Client Request object containing values for the new Client to create | 

### Return type

[**ApiResponseInt32**](ApiResponseInt32.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## clientsGetClient

> ApiResponseClient clientsGetClient(clientId, xChronosheetsAuth)

Get a particular client.    Requires the &#39;ManageClientsAndProjects&#39; or &#39;ManageJobsAndTask&#39; permissions.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.ClientsApi();
let clientId = 56; // Number | The ID of the Client you want to get
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
apiInstance.clientsGetClient(clientId, xChronosheetsAuth, (error, data, response) => {
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
 **clientId** | **Number**| The ID of the Client you want to get | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**ApiResponseClient**](ApiResponseClient.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## clientsGetClients

> ApiResponseListClient clientsGetClients(xChronosheetsAuth)

Get a collection of clients that are under your organisation.    Requires the &#39;ManageClientsAndProjects&#39; or &#39;ManageJobsAndTask&#39; permissions.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.ClientsApi();
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
apiInstance.clientsGetClients(xChronosheetsAuth, (error, data, response) => {
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

[**ApiResponseListClient**](ApiResponseListClient.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data


## clientsUpdateClient

> ApiResponseBoolean clientsUpdateClient(xChronosheetsAuth, request)

Update a client.    Requires the &#39;ManageClientsAndProjects&#39; permission.

### Example

```javascript
import ChronoSheetsApi from 'ChronoSheetsAPI';

let apiInstance = new ChronoSheetsApi.ClientsApi();
let xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token
let request = new ChronoSheetsApi.SaveClientRequest(); // SaveClientRequest | A Save Client Request object containing updated fields.  Make sure to specify the Client Id in the request object so that ChronoSheets knows which Client to update
apiInstance.clientsUpdateClient(xChronosheetsAuth, request, (error, data, response) => {
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
 **request** | [**SaveClientRequest**](SaveClientRequest.md)| A Save Client Request object containing updated fields.  Make sure to specify the Client Id in the request object so that ChronoSheets knows which Client to update | 

### Return type

[**ApiResponseBoolean**](ApiResponseBoolean.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

