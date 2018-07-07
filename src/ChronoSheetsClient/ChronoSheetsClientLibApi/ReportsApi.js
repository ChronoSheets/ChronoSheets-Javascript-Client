/**
 * ChronoSheets API
 * ChronoSheets is a flexible timesheet solution for small to medium businesses, it is free for small teams of up to 5 and there are iOS and Android apps available.  Use the ChronoSheets API to create your own custom integrations.
 *
 * OpenAPI spec version: v1
 * Contact: lachlan@chronosheets.com
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
    define(['ChronoSheetsClient/ApiClient', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseCombinedReportsData', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseForPaginatedListOrgReportTimesheetFileAttachment', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseForPaginatedListOrgReportTrip', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseForPaginatedListRawReportItem', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListJobSeriesReportItem', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListProjectCostingReportItem', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseTrip'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../ChronoSheetsClientLibModel/CSApiResponseCombinedReportsData'), require('../ChronoSheetsClientLibModel/CSApiResponseForPaginatedListOrgReportTimesheetFileAttachment'), require('../ChronoSheetsClientLibModel/CSApiResponseForPaginatedListOrgReportTrip'), require('../ChronoSheetsClientLibModel/CSApiResponseForPaginatedListRawReportItem'), require('../ChronoSheetsClientLibModel/CSApiResponseListJobSeriesReportItem'), require('../ChronoSheetsClientLibModel/CSApiResponseListProjectCostingReportItem'), require('../ChronoSheetsClientLibModel/CSApiResponseTrip'));
  } else {
    // Browser globals (root is window)
    if (!root.ChronoSheetsApi) {
      root.ChronoSheetsApi = {};
    }
    root.ChronoSheetsApi.ReportsApi = factory(root.ChronoSheetsApi.ApiClient, root.ChronoSheetsApi.CSApiResponseCombinedReportsData, root.ChronoSheetsApi.CSApiResponseForPaginatedListOrgReportTimesheetFileAttachment, root.ChronoSheetsApi.CSApiResponseForPaginatedListOrgReportTrip, root.ChronoSheetsApi.CSApiResponseForPaginatedListRawReportItem, root.ChronoSheetsApi.CSApiResponseListJobSeriesReportItem, root.ChronoSheetsApi.CSApiResponseListProjectCostingReportItem, root.ChronoSheetsApi.CSApiResponseTrip);
  }
}(this, function(ApiClient, CSApiResponseCombinedReportsData, CSApiResponseForPaginatedListOrgReportTimesheetFileAttachment, CSApiResponseForPaginatedListOrgReportTrip, CSApiResponseForPaginatedListRawReportItem, CSApiResponseListJobSeriesReportItem, CSApiResponseListProjectCostingReportItem, CSApiResponseTrip) {
  'use strict';

  /**
   * Reports service.
   * @module ChronoSheetsClient/ChronoSheetsClientLibApi/ReportsApi
   * @version v1
   */

  /**
   * Constructs a new ReportsApi. 
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibApi/ReportsApi
   * @class
   * @param {module:ChronoSheetsClient/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ChronoSheetsClient/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the reportsGetAllChartsDataAdmin operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/ReportsApi~reportsGetAllChartsDataAdminCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseCombinedReportsData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Consolidated Admin Reports Data (Jobs, Tasks, Clients and Projects).  These are the organisation wide reports, with data from potentially all employees.    Requires the &#39;ReportAdmin&#39; permission.
     * @param {Date} startDate The start date for the date range.  Report data in the response is after this date
     * @param {Date} endDate The end date for the date range.  Report data in the response is before this date
     * @param {String} userIds A comma-separated list of user Ids, if you want to filter the report data to particular users.  If you want all, send a blank string.
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/ReportsApi~reportsGetAllChartsDataAdminCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseCombinedReportsData}
     */
    this.reportsGetAllChartsDataAdmin = function(startDate, endDate, userIds, xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling reportsGetAllChartsDataAdmin");
      }

      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling reportsGetAllChartsDataAdmin");
      }

      // verify the required parameter 'userIds' is set
      if (userIds === undefined || userIds === null) {
        throw new Error("Missing the required parameter 'userIds' when calling reportsGetAllChartsDataAdmin");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling reportsGetAllChartsDataAdmin");
      }


      var pathParams = {
      };
      var queryParams = {
        'StartDate': startDate,
        'EndDate': endDate,
        'UserIds': userIds,
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
      var returnType = CSApiResponseCombinedReportsData;

      return this.apiClient.callApi(
        '/api/Reports/GetAllChartsDataAdmin', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the reportsGetAllChartsDataUser operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/ReportsApi~reportsGetAllChartsDataUserCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseCombinedReportsData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Consolidated User Reports Data (Jobs, Tasks, Clients and Projects).  These are the user&#39;s own reports.    Requires the &#39;ViewOwnReports&#39; permission.
     * @param {Date} startDate The start date for the date range.  Report data in the response is after this date
     * @param {Date} endDate The end date for the date range.  Report data in the response is before this date
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/ReportsApi~reportsGetAllChartsDataUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseCombinedReportsData}
     */
    this.reportsGetAllChartsDataUser = function(startDate, endDate, xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling reportsGetAllChartsDataUser");
      }

      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling reportsGetAllChartsDataUser");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling reportsGetAllChartsDataUser");
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
      var returnType = CSApiResponseCombinedReportsData;

      return this.apiClient.callApi(
        '/api/Reports/GetAllChartsDataUser', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the reportsGetOrgTripById operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/ReportsApi~reportsGetOrgTripByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseTrip} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get trip by Id, for reporting purposes.    Requires the &#39;ReportAdmin&#39; permission.
     * @param {Number} tripId The ID of the Trip you want to get
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/ReportsApi~reportsGetOrgTripByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseTrip}
     */
    this.reportsGetOrgTripById = function(tripId, xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'tripId' is set
      if (tripId === undefined || tripId === null) {
        throw new Error("Missing the required parameter 'tripId' when calling reportsGetOrgTripById");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling reportsGetOrgTripById");
      }


      var pathParams = {
      };
      var queryParams = {
        'TripId': tripId,
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
      var returnType = CSApiResponseTrip;

      return this.apiClient.callApi(
        '/api/Reports/GetOrgTripById', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the reportsGetOrganisationTimesheetFileAttachments operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/ReportsApi~reportsGetOrganisationTimesheetFileAttachmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseForPaginatedListOrgReportTimesheetFileAttachment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reports on Organisation timesheet file attachments (files uploaded and attached to timesheet records.    Requires the &#39;ReportAdmin&#39; permission.
     * @param {Date} startDate The start date for the date range.  Report data in the response is after this date
     * @param {Date} endDate The end date for the date range.  Report data in the response is before this date
     * @param {Number} skip Skip this many items
     * @param {Number} take Take this many items
     * @param {String} userIds A comma-separated list of user Ids, if you want to filter the report data to particular users.  If you want all, send a blank string.
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/ReportsApi~reportsGetOrganisationTimesheetFileAttachmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseForPaginatedListOrgReportTimesheetFileAttachment}
     */
    this.reportsGetOrganisationTimesheetFileAttachments = function(startDate, endDate, skip, take, userIds, xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling reportsGetOrganisationTimesheetFileAttachments");
      }

      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling reportsGetOrganisationTimesheetFileAttachments");
      }

      // verify the required parameter 'skip' is set
      if (skip === undefined || skip === null) {
        throw new Error("Missing the required parameter 'skip' when calling reportsGetOrganisationTimesheetFileAttachments");
      }

      // verify the required parameter 'take' is set
      if (take === undefined || take === null) {
        throw new Error("Missing the required parameter 'take' when calling reportsGetOrganisationTimesheetFileAttachments");
      }

      // verify the required parameter 'userIds' is set
      if (userIds === undefined || userIds === null) {
        throw new Error("Missing the required parameter 'userIds' when calling reportsGetOrganisationTimesheetFileAttachments");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling reportsGetOrganisationTimesheetFileAttachments");
      }


      var pathParams = {
      };
      var queryParams = {
        'StartDate': startDate,
        'EndDate': endDate,
        'Skip': skip,
        'Take': take,
        'UserIds': userIds,
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
      var returnType = CSApiResponseForPaginatedListOrgReportTimesheetFileAttachment;

      return this.apiClient.callApi(
        '/api/Reports/GetOrganisationTimesheetFileAttachments', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the reportsGetOrganisationTrips operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/ReportsApi~reportsGetOrganisationTripsCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseForPaginatedListOrgReportTrip} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reports on Organisation trips (GPS tracking from whole organisation).    Requires the &#39;ReportAdmin&#39; permission.
     * @param {Date} startDate The start date for the date range.  Report data in the response is after this date
     * @param {Date} endDate The end date for the date range.  Report data in the response is before this date
     * @param {Number} skip Skip this many items
     * @param {Number} take Take this many items
     * @param {String} userIds A comma-separated list of user Ids, if you want to filter the report data to particular users.  If you want all, send a blank string.
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/ReportsApi~reportsGetOrganisationTripsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseForPaginatedListOrgReportTrip}
     */
    this.reportsGetOrganisationTrips = function(startDate, endDate, skip, take, userIds, xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling reportsGetOrganisationTrips");
      }

      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling reportsGetOrganisationTrips");
      }

      // verify the required parameter 'skip' is set
      if (skip === undefined || skip === null) {
        throw new Error("Missing the required parameter 'skip' when calling reportsGetOrganisationTrips");
      }

      // verify the required parameter 'take' is set
      if (take === undefined || take === null) {
        throw new Error("Missing the required parameter 'take' when calling reportsGetOrganisationTrips");
      }

      // verify the required parameter 'userIds' is set
      if (userIds === undefined || userIds === null) {
        throw new Error("Missing the required parameter 'userIds' when calling reportsGetOrganisationTrips");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling reportsGetOrganisationTrips");
      }


      var pathParams = {
      };
      var queryParams = {
        'StartDate': startDate,
        'EndDate': endDate,
        'Skip': skip,
        'Take': take,
        'UserIds': userIds,
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
      var returnType = CSApiResponseForPaginatedListOrgReportTrip;

      return this.apiClient.callApi(
        '/api/Reports/GetOrganisationTrips', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the reportsGetRawDataAdmin operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/ReportsApi~reportsGetRawDataAdminCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseForPaginatedListRawReportItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Timesheets Raw Data.  This data details each timesheet record.  These are the organisation wide timesheet records, with data from potentially all employees.    Requires the &#39;ReportAdmin&#39; permission.
     * @param {Date} startDate The start date for the date range.  Report data in the response is after this date
     * @param {Date} endDate The end date for the date range.  Report data in the response is before this date
     * @param {String} userIds A comma-separated list of user Ids, if you want to filter the report data to particular users.  If you want all, send a blank string.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/String} sort Decide which column to sort on
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/String} order Decide which direction to sort the column
     * @param {Number} skip Skip this many rows
     * @param {Number} take Take this many rows
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/ReportsApi~reportsGetRawDataAdminCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseForPaginatedListRawReportItem}
     */
    this.reportsGetRawDataAdmin = function(startDate, endDate, userIds, sort, order, skip, take, xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling reportsGetRawDataAdmin");
      }

      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling reportsGetRawDataAdmin");
      }

      // verify the required parameter 'userIds' is set
      if (userIds === undefined || userIds === null) {
        throw new Error("Missing the required parameter 'userIds' when calling reportsGetRawDataAdmin");
      }

      // verify the required parameter 'sort' is set
      if (sort === undefined || sort === null) {
        throw new Error("Missing the required parameter 'sort' when calling reportsGetRawDataAdmin");
      }

      // verify the required parameter 'order' is set
      if (order === undefined || order === null) {
        throw new Error("Missing the required parameter 'order' when calling reportsGetRawDataAdmin");
      }

      // verify the required parameter 'skip' is set
      if (skip === undefined || skip === null) {
        throw new Error("Missing the required parameter 'skip' when calling reportsGetRawDataAdmin");
      }

      // verify the required parameter 'take' is set
      if (take === undefined || take === null) {
        throw new Error("Missing the required parameter 'take' when calling reportsGetRawDataAdmin");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling reportsGetRawDataAdmin");
      }


      var pathParams = {
      };
      var queryParams = {
        'StartDate': startDate,
        'EndDate': endDate,
        'UserIds': userIds,
        'Sort': sort,
        'Order': order,
        'Skip': skip,
        'Take': take,
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
      var returnType = CSApiResponseForPaginatedListRawReportItem;

      return this.apiClient.callApi(
        '/api/Reports/GetRawDataAdmin', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the reportsProjectCostingsAdmin operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/ReportsApi~reportsProjectCostingsAdminCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListProjectCostingReportItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets project cost estimations VS actual cost for date range and users.    Requires the &#39;ReportAdmin&#39; permission.
     * @param {Date} startDate The start date for the date range.  Report data in the response is after this date
     * @param {Date} endDate The end date for the date range.  Report data in the response is before this date
     * @param {String} userIds A comma-separated list of user Ids, if you want to filter the report data to particular users.  If you want all, send a blank string.
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/ReportsApi~reportsProjectCostingsAdminCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListProjectCostingReportItem}
     */
    this.reportsProjectCostingsAdmin = function(startDate, endDate, userIds, xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling reportsProjectCostingsAdmin");
      }

      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling reportsProjectCostingsAdmin");
      }

      // verify the required parameter 'userIds' is set
      if (userIds === undefined || userIds === null) {
        throw new Error("Missing the required parameter 'userIds' when calling reportsProjectCostingsAdmin");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling reportsProjectCostingsAdmin");
      }


      var pathParams = {
      };
      var queryParams = {
        'StartDate': startDate,
        'EndDate': endDate,
        'UserIds': userIds,
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
      var returnType = CSApiResponseListProjectCostingReportItem;

      return this.apiClient.callApi(
        '/api/Reports/ProjectCostingsAdmin', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the reportsUserJobsOverTime operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/ReportsApi~reportsUserJobsOverTimeCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListJobSeriesReportItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Timeseries jobs data for the logged in user.    Requires the &#39;ViewOwnReports&#39; or &#39;SubmitTimesheets&#39;.
     * @param {Date} startDate The start date for the date range.  Report data in the response is after this date
     * @param {Date} endDate The end date for the date range.  Report data in the response is before this date
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/ReportsApi~reportsUserJobsOverTimeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListJobSeriesReportItem}
     */
    this.reportsUserJobsOverTime = function(startDate, endDate, xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling reportsUserJobsOverTime");
      }

      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling reportsUserJobsOverTime");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling reportsUserJobsOverTime");
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
      var returnType = CSApiResponseListJobSeriesReportItem;

      return this.apiClient.callApi(
        '/api/Reports/UserJobsOverTime', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
