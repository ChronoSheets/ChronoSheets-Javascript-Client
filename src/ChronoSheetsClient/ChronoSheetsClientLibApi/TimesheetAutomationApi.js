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
import ApiResponseForPaginatedListTimesheetAutomationWithOrgAndGeofence from '../ChronoSheetsClientLibModel/ApiResponseForPaginatedListTimesheetAutomationWithOrgAndGeofence';
import ApiResponseInt32 from '../ChronoSheetsClientLibModel/ApiResponseInt32';
import CreateAutomationStepRequest from '../ChronoSheetsClientLibModel/CreateAutomationStepRequest';

/**
* TimesheetAutomation service.
* @module ChronoSheetsClient/ChronoSheetsClientLibApi/TimesheetAutomationApi
* @version 1.0.0
*/
export default class TimesheetAutomationApi {

    /**
    * Constructs a new TimesheetAutomationApi. 
    * @alias module:ChronoSheetsClient/ChronoSheetsClientLibApi/TimesheetAutomationApi
    * @class
    * @param {module:ChronoSheetsClient/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ChronoSheetsClient/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the timesheetAutomationCreateAutomationStep operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/TimesheetAutomationApi~timesheetAutomationCreateAutomationStepCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/ApiResponseInt32} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates an automation step.  Timesheet automation is determined by looking at steps taken by the user.  Create a step to log some automation action, such as entering a geofence or tapping on an NFC badge.  Requires the 'SubmitTimesheets' permission.
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CreateAutomationStepRequest} request 
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/TimesheetAutomationApi~timesheetAutomationCreateAutomationStepCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/ApiResponseInt32}
     */
    timesheetAutomationCreateAutomationStep(xChronosheetsAuth, request, callback) {
      let postBody = request;
      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling timesheetAutomationCreateAutomationStep");
      }
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling timesheetAutomationCreateAutomationStep");
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
        '/TimesheetAutomation/CreateAutomationStep', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the timesheetAutomationGetTimesheetAutomationAuditTrail operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/TimesheetAutomationApi~timesheetAutomationGetTimesheetAutomationAuditTrailCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/ApiResponseForPaginatedListTimesheetAutomationWithOrgAndGeofence} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve the timesheet automation / alerts for geofences activities or NFC tap on/off.  Requires the 'ManageGeofencing' permission.
     * @param {Number} geofenceId The ID of the Geofence
     * @param {Number} nfcId 
     * @param {Number} userId 
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/String} sort 
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/String} order 
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Skip this many records
     * @param {Number} opts.take Take this many records
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/TimesheetAutomationApi~timesheetAutomationGetTimesheetAutomationAuditTrailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/ApiResponseForPaginatedListTimesheetAutomationWithOrgAndGeofence}
     */
    timesheetAutomationGetTimesheetAutomationAuditTrail(geofenceId, nfcId, userId, sort, order, xChronosheetsAuth, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'geofenceId' is set
      if (geofenceId === undefined || geofenceId === null) {
        throw new Error("Missing the required parameter 'geofenceId' when calling timesheetAutomationGetTimesheetAutomationAuditTrail");
      }
      // verify the required parameter 'nfcId' is set
      if (nfcId === undefined || nfcId === null) {
        throw new Error("Missing the required parameter 'nfcId' when calling timesheetAutomationGetTimesheetAutomationAuditTrail");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling timesheetAutomationGetTimesheetAutomationAuditTrail");
      }
      // verify the required parameter 'sort' is set
      if (sort === undefined || sort === null) {
        throw new Error("Missing the required parameter 'sort' when calling timesheetAutomationGetTimesheetAutomationAuditTrail");
      }
      // verify the required parameter 'order' is set
      if (order === undefined || order === null) {
        throw new Error("Missing the required parameter 'order' when calling timesheetAutomationGetTimesheetAutomationAuditTrail");
      }
      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling timesheetAutomationGetTimesheetAutomationAuditTrail");
      }

      let pathParams = {
      };
      let queryParams = {
        'GeofenceId': geofenceId,
        'NfcId': nfcId,
        'UserId': userId,
        'Sort': sort,
        'Order': order,
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
      let returnType = ApiResponseForPaginatedListTimesheetAutomationWithOrgAndGeofence;
      return this.apiClient.callApi(
        '/TimesheetAutomation/GetTimesheetAutomationAuditTrail', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
