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
    define(['ChronoSheetsClient/ApiClient', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseBoolean', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListUserForManagement', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSSetOrganisationGroupUsersRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../ChronoSheetsClientLibModel/CSApiResponseBoolean'), require('../ChronoSheetsClientLibModel/CSApiResponseListUserForManagement'), require('../ChronoSheetsClientLibModel/CSSetOrganisationGroupUsersRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.ChronoSheetsApi) {
      root.ChronoSheetsApi = {};
    }
    root.ChronoSheetsApi.OrganisationGroupUsersApi = factory(root.ChronoSheetsApi.ApiClient, root.ChronoSheetsApi.CSApiResponseBoolean, root.ChronoSheetsApi.CSApiResponseListUserForManagement, root.ChronoSheetsApi.CSSetOrganisationGroupUsersRequest);
  }
}(this, function(ApiClient, CSApiResponseBoolean, CSApiResponseListUserForManagement, CSSetOrganisationGroupUsersRequest) {
  'use strict';

  /**
   * OrganisationGroupUsers service.
   * @module ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupUsersApi
   * @version v1
   */

  /**
   * Constructs a new OrganisationGroupUsersApi. 
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupUsersApi
   * @class
   * @param {module:ChronoSheetsClient/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ChronoSheetsClient/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the organisationGroupUsersGetOrganisationGroupUsers operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupUsersApi~organisationGroupUsersGetOrganisationGroupUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListUserForManagement} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a collection of organisation group users that belong to an organisation group.    Requires the &#39;ManageOrganisationGroups&#39; or &#39;ManageOrganisationUsers&#39; permissions.
     * @param {Number} orgGroupId An OrganisatioGroup Id
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupUsersApi~organisationGroupUsersGetOrganisationGroupUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListUserForManagement}
     */
    this.organisationGroupUsersGetOrganisationGroupUsers = function(orgGroupId, xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'orgGroupId' is set
      if (orgGroupId === undefined || orgGroupId === null) {
        throw new Error("Missing the required parameter 'orgGroupId' when calling organisationGroupUsersGetOrganisationGroupUsers");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling organisationGroupUsersGetOrganisationGroupUsers");
      }


      var pathParams = {
      };
      var queryParams = {
        'orgGroupId': orgGroupId,
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
      var returnType = CSApiResponseListUserForManagement;

      return this.apiClient.callApi(
        '/api/OrganisationGroupUsers/GetOrganisationGroupUsers', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the organisationGroupUsersUpdateOrganisationGroupUsers operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupUsersApi~organisationGroupUsersUpdateOrganisationGroupUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseBoolean} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set the users who belong to an organisation group.    Requires the &#39;ManageOrganisationGroups&#39; permissions.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSSetOrganisationGroupUsersRequest} request A request object specifying which users belong to an organisation group.  Make sure to specify the OrganisationGroup Id in the request object so that ChronoSheets knows which OrganisationGroup to update
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupUsersApi~organisationGroupUsersUpdateOrganisationGroupUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseBoolean}
     */
    this.organisationGroupUsersUpdateOrganisationGroupUsers = function(request, xChronosheetsAuth, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling organisationGroupUsersUpdateOrganisationGroupUsers");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling organisationGroupUsersUpdateOrganisationGroupUsers");
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
        '/api/OrganisationGroupUsers/UpdateOrganisationGroupUsers', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
