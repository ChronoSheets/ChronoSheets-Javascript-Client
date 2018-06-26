# ChronoSheetsApi.ClientsApi

All URIs are relative to *https://www.chronosheets.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientsCreateClient**](ClientsApi.md#clientsCreateClient) | **PUT** /api/Clients/CreateClient | Create a client
[**clientsGetClient**](ClientsApi.md#clientsGetClient) | **GET** /api/Clients/GetClient | Get a particular client
[**clientsGetClients**](ClientsApi.md#clientsGetClients) | **GET** /api/Clients/GetClients | Get a collection of clients that are under your organisation
[**clientsUpdateClient**](ClientsApi.md#clientsUpdateClient) | **POST** /api/Clients/UpdateClient | Update a client


<a name="clientsCreateClient"></a>
# **clientsCreateClient**
> CSApiResponseInt32 clientsCreateClient(request, xChronosheetsAuth)

Create a client

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.ClientsApi();

var request = new ChronoSheetsApi.CSInsertClientRequest(); // CSInsertClientRequest | 

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.clientsCreateClient(request, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CSInsertClientRequest**](CSInsertClientRequest.md)|  | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseInt32**](CSApiResponseInt32.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="clientsGetClient"></a>
# **clientsGetClient**
> CSApiResponseClient clientsGetClient(clientId, xChronosheetsAuth)

Get a particular client

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.ClientsApi();

var clientId = 56; // Number | The ID of the client you want to get

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.clientsGetClient(clientId, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| The ID of the client you want to get | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseClient**](CSApiResponseClient.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="clientsGetClients"></a>
# **clientsGetClients**
> CSApiResponseListClient clientsGetClients(xChronosheetsAuth)

Get a collection of clients that are under your organisation

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.ClientsApi();

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.clientsGetClients(xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseListClient**](CSApiResponseListClient.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

<a name="clientsUpdateClient"></a>
# **clientsUpdateClient**
> CSApiResponseBoolean clientsUpdateClient(request, xChronosheetsAuth)

Update a client

### Example
```javascript
var ChronoSheetsApi = require('chrono_sheets_api');

var apiInstance = new ChronoSheetsApi.ClientsApi();

var request = new ChronoSheetsApi.CSSaveClientRequest(); // CSSaveClientRequest | 

var xChronosheetsAuth = "xChronosheetsAuth_example"; // String | The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.clientsUpdateClient(request, xChronosheetsAuth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CSSaveClientRequest**](CSSaveClientRequest.md)|  | 
 **xChronosheetsAuth** | **String**| The ChronoSheets Auth Token | 

### Return type

[**CSApiResponseBoolean**](CSApiResponseBoolean.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml, multipart/form-data

