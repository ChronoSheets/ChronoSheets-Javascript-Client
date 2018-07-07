/**
 * ChronoSheets API
 * <div style='font-size: 14px!important;font-family: Open Sans,sans-serif!important;color: #3b4151!important;'><p>      ChronoSheets is a flexible timesheet solution for small to medium businesses, it is free for small teams of up to 5 and there are iOS and Android apps available.  Use the ChronoSheets API to create your own custom integrations.  Before starting, sign up for a ChronoSheets account at <a target='_BLANK' href='http://tsheets.xyz/signup'>http://tsheets.xyz/signup</a>.  </p></div><div id='cs-extra-info'></div>
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ChronoSheetsClient/ApiClient', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseBoolean', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseInt32', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListInt32', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListTimesheet', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSBatchUpdateTimesheetRequest', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSTimesheet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../ChronoSheetsClientLibModel/CSApiResponseBoolean'), require('../ChronoSheetsClientLibModel/CSApiResponseInt32'), require('../ChronoSheetsClientLibModel/CSApiResponseListInt32'), require('../ChronoSheetsClientLibModel/CSApiResponseListTimesheet'), require('../ChronoSheetsClientLibModel/CSBatchUpdateTimesheetRequest'), require('../ChronoSheetsClientLibModel/CSTimesheet'));
  } else {
    // Browser globals (root is window)
    if (!root.ChronoSheetsApi) {
      root.ChronoSheetsApi = {};
    }
    root.ChronoSheetsApi.TimesheetsApi = factory(root.ChronoSheetsApi.ApiClient, root.ChronoSheetsApi.CSApiResponseBoolean, root.ChronoSheetsApi.CSApiResponseInt32, root.ChronoSheetsApi.CSApiResponseListInt32, root.ChronoSheetsApi.CSApiResponseListTimesheet, root.ChronoSheetsApi.CSBatchUpdateTimesheetRequest, root.ChronoSheetsApi.CSTimesheet);
  }
}(this, function(ApiClient, CSApiResponseBoolean, CSApiResponseInt32, CSApiResponseListInt32, CSApiResponseListTimesheet, CSBatchUpdateTimesheetRequest, CSTimesheet) {
  'use strict';

  /**
   * Timesheets service.
   * @module ChronoSheetsClient/ChronoSheetsClientLibApi/TimesheetsApi
   * @version v1
   */

  /**
   * Constructs a new TimesheetsApi. 
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibApi/TimesheetsApi
   * @class
   * @param {module:ChronoSheetsClient/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ChronoSheetsClient/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the timesheetsCreateSingleTimesheet operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/TimesheetsApi~timesheetsCreateSingleTimesheetCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseInt32} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Inserts a single timesheet record.    Requires the &#39;SubmitTimesheets&#39; permission.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSTimesheet} request A Timesheet Request object containing values for the new Timesheet to create
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/TimesheetsApi~timesheetsCreateSingleTimesheetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseInt32}
     */
    this.timesheetsCreateSingleTimesheet = function(request, xChronosheetsAuth, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling timesheetsCreateSingleTimesheet");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling timesheetsCreateSingleTimesheet");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'x-chronosheets-auth': xChronosheetsAuth
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'multipart/form-data'];
      var returnType = CSApiResponseInt32;

      return this.apiClient.callApi(
        '/api/Timesheets/CreateSingleTimesheet', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the timesheetsDeleteTimesheet operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/TimesheetsApi~timesheetsDeleteTimesheetCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseBoolean} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a timesheet.    Requires the &#39;SubmitTimesheets&#39; permission.
     * @param {Number} timesheetId The ID of the Timesheet you want to delete
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/TimesheetsApi~timesheetsDeleteTimesheetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseBoolean}
     */
    this.timesheetsDeleteTimesheet = function(timesheetId, xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'timesheetId' is set
      if (timesheetId === undefined || timesheetId === null) {
        throw new Error("Missing the required parameter 'timesheetId' when calling timesheetsDeleteTimesheet");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling timesheetsDeleteTimesheet");
      }


      var pathParams = {
      };
      var queryParams = {
        'TimesheetId': timesheetId,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'x-chronosheets-auth': xChronosheetsAuth
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'multipart/form-data'];
      var returnType = CSApiResponseBoolean;

      return this.apiClient.callApi(
        '/api/Timesheets/DeleteTimesheet', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the timesheetsGetTimesheets operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/TimesheetsApi~timesheetsGetTimesheetsCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListTimesheet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get timesheets between start and end dates.  Note: the date range cannot exceed 24 hours.  This method is generally used to get timesheets for a particular day.    Requires the &#39;SubmitTimesheets&#39; permission.
     * @param {Date} startDate The start date of the date range
     * @param {Date} endDate The end date of the date range
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/TimesheetsApi~timesheetsGetTimesheetsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListTimesheet}
     */
    this.timesheetsGetTimesheets = function(startDate, endDate, xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling timesheetsGetTimesheets");
      }

      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling timesheetsGetTimesheets");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling timesheetsGetTimesheets");
      }


      var pathParams = {
      };
      var queryParams = {
        'StartDate': startDate,
        'EndDate': endDate,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'x-chronosheets-auth': xChronosheetsAuth
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'multipart/form-data'];
      var returnType = CSApiResponseListTimesheet;

      return this.apiClient.callApi(
        '/api/Timesheets/GetTimesheets', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the timesheetsUpdateTimesheets operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/TimesheetsApi~timesheetsUpdateTimesheetsCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListInt32} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Batch update timesheets.    Requires the &#39;SubmitTimesheets&#39; permission.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSBatchUpdateTimesheetRequest} request A BatchUpdateTimesheet Request object containing values for the new Timesheets to create
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/TimesheetsApi~timesheetsUpdateTimesheetsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListInt32}
     */
    this.timesheetsUpdateTimesheets = function(request, xChronosheetsAuth, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling timesheetsUpdateTimesheets");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling timesheetsUpdateTimesheets");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'x-chronosheets-auth': xChronosheetsAuth
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'multipart/form-data'];
      var returnType = CSApiResponseListInt32;

      return this.apiClient.callApi(
        '/api/Timesheets/UpdateTimesheets', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
