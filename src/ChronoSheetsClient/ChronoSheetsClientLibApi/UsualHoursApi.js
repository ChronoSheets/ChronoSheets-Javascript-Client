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
    define(['ChronoSheetsClient/ApiClient', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseBoolean', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListUsualHoursDay', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSSetUsualHoursRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../ChronoSheetsClientLibModel/CSApiResponseBoolean'), require('../ChronoSheetsClientLibModel/CSApiResponseListUsualHoursDay'), require('../ChronoSheetsClientLibModel/CSSetUsualHoursRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.ChronoSheetsApi) {
      root.ChronoSheetsApi = {};
    }
    root.ChronoSheetsApi.UsualHoursApi = factory(root.ChronoSheetsApi.ApiClient, root.ChronoSheetsApi.CSApiResponseBoolean, root.ChronoSheetsApi.CSApiResponseListUsualHoursDay, root.ChronoSheetsApi.CSSetUsualHoursRequest);
  }
}(this, function(ApiClient, CSApiResponseBoolean, CSApiResponseListUsualHoursDay, CSSetUsualHoursRequest) {
  'use strict';

  /**
   * UsualHours service.
   * @module ChronoSheetsClient/ChronoSheetsClientLibApi/UsualHoursApi
   * @version v1
   */

  /**
   * Constructs a new UsualHoursApi. 
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibApi/UsualHoursApi
   * @class
   * @param {module:ChronoSheetsClient/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ChronoSheetsClient/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the usualHoursGetUsualHours operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/UsualHoursApi~usualHoursGetUsualHoursCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListUsualHoursDay} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get usual hours (rostered hours) for an employee.  Requires the &#39;ManageOrganisationUsers&#39; or &#39;ManageOrganisationUsers&#39; permissions.
     * @param {Number} userId The ID of the User for which you want to get UsualHours for
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/UsualHoursApi~usualHoursGetUsualHoursCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListUsualHoursDay}
     */
    this.usualHoursGetUsualHours = function(userId, xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling usualHoursGetUsualHours");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling usualHoursGetUsualHours");
      }


      var pathParams = {
      };
      var queryParams = {
        'UserId': userId,
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
      var returnType = CSApiResponseListUsualHoursDay;

      return this.apiClient.callApi(
        '/api/UsualHours/GetUsualHours', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the usualHoursSetUsualHours operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/UsualHoursApi~usualHoursSetUsualHoursCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseBoolean} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set usual hours (rostered hours) for an employee.  Requires the &#39;ManageOrganisationUsers&#39; or &#39;ManageOrganisationUsers&#39; permissions.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSSetUsualHoursRequest} request A Set UsualHours Request object containing updated data.  Make sure to specify the Day types in the request object so that ChronoSheets knows which Days to update
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/UsualHoursApi~usualHoursSetUsualHoursCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseBoolean}
     */
    this.usualHoursSetUsualHours = function(request, xChronosheetsAuth, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling usualHoursSetUsualHours");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling usualHoursSetUsualHours");
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
      var returnType = CSApiResponseBoolean;

      return this.apiClient.callApi(
        '/api/UsualHours/SetUsualHours', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
