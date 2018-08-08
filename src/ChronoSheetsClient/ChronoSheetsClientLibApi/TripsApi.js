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
    define(['ChronoSheetsClient/ApiClient', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseForPaginatedListTrip', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseInt32', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseTrip', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSCreateTripRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../ChronoSheetsClientLibModel/CSApiResponseForPaginatedListTrip'), require('../ChronoSheetsClientLibModel/CSApiResponseInt32'), require('../ChronoSheetsClientLibModel/CSApiResponseTrip'), require('../ChronoSheetsClientLibModel/CSCreateTripRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.ChronoSheetsApi) {
      root.ChronoSheetsApi = {};
    }
    root.ChronoSheetsApi.TripsApi = factory(root.ChronoSheetsApi.ApiClient, root.ChronoSheetsApi.CSApiResponseForPaginatedListTrip, root.ChronoSheetsApi.CSApiResponseInt32, root.ChronoSheetsApi.CSApiResponseTrip, root.ChronoSheetsApi.CSCreateTripRequest);
  }
}(this, function(ApiClient, CSApiResponseForPaginatedListTrip, CSApiResponseInt32, CSApiResponseTrip, CSCreateTripRequest) {
  'use strict';

  /**
   * Trips service.
   * @module ChronoSheetsClient/ChronoSheetsClientLibApi/TripsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new TripsApi. 
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibApi/TripsApi
   * @class
   * @param {module:ChronoSheetsClient/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ChronoSheetsClient/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the tripsCreateTrip operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/TripsApi~tripsCreateTripCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseInt32} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new trip.  Important: create a timesheet record before calling this, passing in the new timesheet record id as a reference.    Requires the &#39;SubmitTimesheets&#39; permission.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSCreateTripRequest} request A Create Trip Request object containing values for the new Trip to create
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/TripsApi~tripsCreateTripCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseInt32}
     */
    this.tripsCreateTrip = function(request, xChronosheetsAuth, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling tripsCreateTrip");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling tripsCreateTrip");
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
        '/api/Trips/CreateTrip', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the tripsGetMyTripById operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/TripsApi~tripsGetMyTripByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseTrip} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get trip by Id.    Requires the &#39;ViewMyTrips&#39; permission.
     * @param {Number} tripId The ID of the Trip you want to get
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/TripsApi~tripsGetMyTripByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseTrip}
     */
    this.tripsGetMyTripById = function(tripId, xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'tripId' is set
      if (tripId === undefined || tripId === null) {
        throw new Error("Missing the required parameter 'tripId' when calling tripsGetMyTripById");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling tripsGetMyTripById");
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
        '/api/Trips/GetMyTripById', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the tripsGetMyTrips operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/TripsApi~tripsGetMyTripsCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseForPaginatedListTrip} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get my trips.  Get the GPS trips you&#39;ve recorded and submitted.    Requires the &#39;ViewMyTrips&#39; permission.
     * @param {Date} startDate The Start date of the date range.  Trips after this date will be obtained.
     * @param {Date} endDate The End date of the date range.  Trips before this date will be obtained.
     * @param {Number} skip Skip this many Trips
     * @param {Number} take Take this many Trips
     * @param {Number} vehicleId Filter by a particular Vehicle (get trips made with a particular vehicle), specified by VehicleId
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/TripsApi~tripsGetMyTripsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseForPaginatedListTrip}
     */
    this.tripsGetMyTrips = function(startDate, endDate, skip, take, vehicleId, xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling tripsGetMyTrips");
      }

      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling tripsGetMyTrips");
      }

      // verify the required parameter 'skip' is set
      if (skip === undefined || skip === null) {
        throw new Error("Missing the required parameter 'skip' when calling tripsGetMyTrips");
      }

      // verify the required parameter 'take' is set
      if (take === undefined || take === null) {
        throw new Error("Missing the required parameter 'take' when calling tripsGetMyTrips");
      }

      // verify the required parameter 'vehicleId' is set
      if (vehicleId === undefined || vehicleId === null) {
        throw new Error("Missing the required parameter 'vehicleId' when calling tripsGetMyTrips");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling tripsGetMyTrips");
      }


      var pathParams = {
      };
      var queryParams = {
        'StartDate': startDate,
        'EndDate': endDate,
        'Skip': skip,
        'Take': take,
        'VehicleId': vehicleId,
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
      var returnType = CSApiResponseForPaginatedListTrip;

      return this.apiClient.callApi(
        '/api/Trips/GetMyTrips', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
