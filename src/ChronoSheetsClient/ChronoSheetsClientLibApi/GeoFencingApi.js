/**
 * ChronoSheets API
 * <div style='font-size: 14px!important;font-family: Open Sans,sans-serif!important;color: #3b4151!important;'><p>      ChronoSheets is a flexible timesheet solution for small to medium businesses, it is free for small teams of up to 3 and there are iOS and Android apps available.  Use the ChronoSheets API to create your own custom integrations.  Before starting, sign up for a ChronoSheets account at <a target='_BLANK' href='http://tsheets.xyz/signup'>http://tsheets.xyz/signup</a>.  </p></div><div id='cs-extra-info'></div>
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ApiResponseForPaginatedListExtendedGeofence from '../ChronoSheetsClientLibModel/ApiResponseForPaginatedListExtendedGeofence';
import ApiResponseGeofence from '../ChronoSheetsClientLibModel/ApiResponseGeofence';
import ApiResponseInt32 from '../ChronoSheetsClientLibModel/ApiResponseInt32';
import CreateGeoFenceRequest from '../ChronoSheetsClientLibModel/CreateGeoFenceRequest';
import UpdateGeoFenceRequest from '../ChronoSheetsClientLibModel/UpdateGeoFenceRequest';

/**
* GeoFencing service.
* @module ChronoSheetsClient/ChronoSheetsClientLibApi/GeoFencingApi
* @version 1.0.0
*/
export default class GeoFencingApi {

    /**
    * Constructs a new GeoFencingApi. 
    * @alias module:ChronoSheetsClient/ChronoSheetsClientLibApi/GeoFencingApi
    * @class
    * @param {module:ChronoSheetsClient/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ChronoSheetsClient/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the geoFencingCreateGeofence operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/GeoFencingApi~geoFencingCreateGeofenceCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/ApiResponseInt32} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a geofencing with rules to be used for clock on/off automation.  Requires the 'ManageGeofencing' permission.
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CreateGeoFenceRequest} request 
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/GeoFencingApi~geoFencingCreateGeofenceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/ApiResponseInt32}
     */
    geoFencingCreateGeofence(xChronosheetsAuth, request, callback) {
      let postBody = request;
      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling geoFencingCreateGeofence");
      }
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling geoFencingCreateGeofence");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'x-chronosheets-auth': xChronosheetsAuth
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'multipart/form-data'];
      let returnType = ApiResponseInt32;
      return this.apiClient.callApi(
        '/GeoFencing/CreateGeofence', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the geoFencingDeleteGeofence operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/GeoFencingApi~geoFencingDeleteGeofenceCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/ApiResponseGeofence} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a geofence.  Requires the 'ManageGeofencing' permission.
     * @param {Number} geofenceId Specify the geofence you want to delete with the geofence ID.
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/GeoFencingApi~geoFencingDeleteGeofenceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/ApiResponseGeofence}
     */
    geoFencingDeleteGeofence(geofenceId, xChronosheetsAuth, callback) {
      let postBody = null;
      // verify the required parameter 'geofenceId' is set
      if (geofenceId === undefined || geofenceId === null) {
        throw new Error("Missing the required parameter 'geofenceId' when calling geoFencingDeleteGeofence");
      }
      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling geoFencingDeleteGeofence");
      }

      let pathParams = {
      };
      let queryParams = {
        'GeofenceId': geofenceId
      };
      let headerParams = {
        'x-chronosheets-auth': xChronosheetsAuth
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'multipart/form-data'];
      let returnType = ApiResponseGeofence;
      return this.apiClient.callApi(
        '/GeoFencing/DeleteGeofence', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the geoFencingGetGeofenceById operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/GeoFencingApi~geoFencingGetGeofenceByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/ApiResponseGeofence} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a geofence by ID  Requires the 'SubmitTimesheets' permission.
     * @param {Number} geofenceId The ID of the geofence you want to obtain
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/GeoFencingApi~geoFencingGetGeofenceByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/ApiResponseGeofence}
     */
    geoFencingGetGeofenceById(geofenceId, xChronosheetsAuth, callback) {
      let postBody = null;
      // verify the required parameter 'geofenceId' is set
      if (geofenceId === undefined || geofenceId === null) {
        throw new Error("Missing the required parameter 'geofenceId' when calling geoFencingGetGeofenceById");
      }
      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling geoFencingGetGeofenceById");
      }

      let pathParams = {
      };
      let queryParams = {
        'GeofenceId': geofenceId
      };
      let headerParams = {
        'x-chronosheets-auth': xChronosheetsAuth
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'multipart/form-data'];
      let returnType = ApiResponseGeofence;
      return this.apiClient.callApi(
        '/GeoFencing/GetGeofenceById', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the geoFencingGetGeofences operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/GeoFencingApi~geoFencingGetGeofencesCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/ApiResponseForPaginatedListExtendedGeofence} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get geofences belonging to your organisation  Requires the 'SubmitTimesheets' permission.
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Number of records to skip
     * @param {Number} opts.take Number of records to take
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/GeoFencingApi~geoFencingGetGeofencesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/ApiResponseForPaginatedListExtendedGeofence}
     */
    geoFencingGetGeofences(xChronosheetsAuth, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling geoFencingGetGeofences");
      }

      let pathParams = {
      };
      let queryParams = {
        'Skip': opts['skip'],
        'Take': opts['take']
      };
      let headerParams = {
        'x-chronosheets-auth': xChronosheetsAuth
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'multipart/form-data'];
      let returnType = ApiResponseForPaginatedListExtendedGeofence;
      return this.apiClient.callApi(
        '/GeoFencing/GetGeofences', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the geoFencingUpdateGeofence operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/GeoFencingApi~geoFencingUpdateGeofenceCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/ApiResponseInt32} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a geofencing with rules to be used for clock on/off automation.  Requires the 'ManageGeofencing' permission.
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/UpdateGeoFenceRequest} request 
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/GeoFencingApi~geoFencingUpdateGeofenceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/ApiResponseInt32}
     */
    geoFencingUpdateGeofence(xChronosheetsAuth, request, callback) {
      let postBody = request;
      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling geoFencingUpdateGeofence");
      }
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling geoFencingUpdateGeofence");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'x-chronosheets-auth': xChronosheetsAuth
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'multipart/form-data'];
      let returnType = ApiResponseInt32;
      return this.apiClient.callApi(
        '/GeoFencing/UpdateGeofence', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
