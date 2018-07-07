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
    define(['ChronoSheetsClient/ApiClient', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseBoolean', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseInt32', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListOrganisationGroup', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseOrganisationGroup', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSInsertOrganisationGroupRequest', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSSaveOrganisationGroupRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../ChronoSheetsClientLibModel/CSApiResponseBoolean'), require('../ChronoSheetsClientLibModel/CSApiResponseInt32'), require('../ChronoSheetsClientLibModel/CSApiResponseListOrganisationGroup'), require('../ChronoSheetsClientLibModel/CSApiResponseOrganisationGroup'), require('../ChronoSheetsClientLibModel/CSInsertOrganisationGroupRequest'), require('../ChronoSheetsClientLibModel/CSSaveOrganisationGroupRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.ChronoSheetsApi) {
      root.ChronoSheetsApi = {};
    }
    root.ChronoSheetsApi.OrganisationGroupsApi = factory(root.ChronoSheetsApi.ApiClient, root.ChronoSheetsApi.CSApiResponseBoolean, root.ChronoSheetsApi.CSApiResponseInt32, root.ChronoSheetsApi.CSApiResponseListOrganisationGroup, root.ChronoSheetsApi.CSApiResponseOrganisationGroup, root.ChronoSheetsApi.CSInsertOrganisationGroupRequest, root.ChronoSheetsApi.CSSaveOrganisationGroupRequest);
  }
}(this, function(ApiClient, CSApiResponseBoolean, CSApiResponseInt32, CSApiResponseListOrganisationGroup, CSApiResponseOrganisationGroup, CSInsertOrganisationGroupRequest, CSSaveOrganisationGroupRequest) {
  'use strict';

  /**
   * OrganisationGroups service.
   * @module ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi
   * @version v1
   */

  /**
   * Constructs a new OrganisationGroupsApi. 
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi
   * @class
   * @param {module:ChronoSheetsClient/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ChronoSheetsClient/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the organisationGroupsCreateOrganisationGroup operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi~organisationGroupsCreateOrganisationGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseInt32} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an organisation group.    Requires the &#39;ManageOrganisationGroups&#39; permissions.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSInsertOrganisationGroupRequest} request An Insert OrganisationGroup Request object containing values for the new OrganisationGroup to create
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi~organisationGroupsCreateOrganisationGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseInt32}
     */
    this.organisationGroupsCreateOrganisationGroup = function(request, xChronosheetsAuth, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling organisationGroupsCreateOrganisationGroup");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling organisationGroupsCreateOrganisationGroup");
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
        '/api/OrganisationGroups/CreateOrganisationGroup', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the organisationGroupsGetOrganisationGroup operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi~organisationGroupsGetOrganisationGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseOrganisationGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a particular organisation group.    Requires the &#39;ManageOrganisationGroups&#39;, &#39;ManageJobsAndTask&#39;, &#39;ManageClientsAndProjects&#39; or &#39;ManageOrganisationUsers&#39; permissions.
     * @param {Number} organisationGroupId The ID of the OrganisationGroup you want to get
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi~organisationGroupsGetOrganisationGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseOrganisationGroup}
     */
    this.organisationGroupsGetOrganisationGroup = function(organisationGroupId, xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'organisationGroupId' is set
      if (organisationGroupId === undefined || organisationGroupId === null) {
        throw new Error("Missing the required parameter 'organisationGroupId' when calling organisationGroupsGetOrganisationGroup");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling organisationGroupsGetOrganisationGroup");
      }


      var pathParams = {
      };
      var queryParams = {
        'OrganisationGroupId': organisationGroupId,
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
      var returnType = CSApiResponseOrganisationGroup;

      return this.apiClient.callApi(
        '/api/OrganisationGroups/GetOrganisationGroup', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the organisationGroupsGetOrganisationGroups operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi~organisationGroupsGetOrganisationGroupsCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListOrganisationGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a collection of organisation groups that are under your organisation.    Requires the &#39;ManageOrganisationGroups&#39;, &#39;ManageJobsAndTask&#39;, &#39;ManageClientsAndProjects&#39; or &#39;ManageOrganisationUsers&#39; permissions.
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi~organisationGroupsGetOrganisationGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListOrganisationGroup}
     */
    this.organisationGroupsGetOrganisationGroups = function(xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling organisationGroupsGetOrganisationGroups");
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
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'multipart/form-data'];
      var returnType = CSApiResponseListOrganisationGroup;

      return this.apiClient.callApi(
        '/api/OrganisationGroups/GetOrganisationGroups', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the organisationGroupsGetOrganisationGroupsForJob operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi~organisationGroupsGetOrganisationGroupsForJobCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListOrganisationGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get org groups for a particular job.    Requires the &#39;ManageOrganisationGroups&#39;, &#39;ManageJobsAndTask&#39;, &#39;ManageClientsAndProjects&#39; or &#39;ManageOrganisationUsers&#39; permissions.
     * @param {Number} jobId The ID of the job
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi~organisationGroupsGetOrganisationGroupsForJobCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListOrganisationGroup}
     */
    this.organisationGroupsGetOrganisationGroupsForJob = function(jobId, xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling organisationGroupsGetOrganisationGroupsForJob");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling organisationGroupsGetOrganisationGroupsForJob");
      }


      var pathParams = {
      };
      var queryParams = {
        'JobId': jobId,
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
      var returnType = CSApiResponseListOrganisationGroup;

      return this.apiClient.callApi(
        '/api/OrganisationGroups/GetOrganisationGroupsForJob', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the organisationGroupsGetOrganisationGroupsForVehicle operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi~organisationGroupsGetOrganisationGroupsForVehicleCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListOrganisationGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get org groups for a particular vehicle.    Requires the &#39;ManageOrganisationGroups&#39;, &#39;ManageFleet&#39; or &#39;ManageOrganisationUsers&#39; permissions.
     * @param {Number} vehicleId The ID of the vehicle
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi~organisationGroupsGetOrganisationGroupsForVehicleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListOrganisationGroup}
     */
    this.organisationGroupsGetOrganisationGroupsForVehicle = function(vehicleId, xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'vehicleId' is set
      if (vehicleId === undefined || vehicleId === null) {
        throw new Error("Missing the required parameter 'vehicleId' when calling organisationGroupsGetOrganisationGroupsForVehicle");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling organisationGroupsGetOrganisationGroupsForVehicle");
      }


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = CSApiResponseListOrganisationGroup;

      return this.apiClient.callApi(
        '/api/OrganisationGroups/GetOrganisationGroupsForVehicle', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the organisationGroupsUpdateOrganisationGroup operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi~organisationGroupsUpdateOrganisationGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseBoolean} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an organisation group.    Requires the &#39;ManageOrganisationGroups&#39; permissions.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSSaveOrganisationGroupRequest} request A Save OrganisationGroup Request object containing updated fields.  Make sure to specify the OrganisationGroup Id in the request object so that ChronoSheets knows which OrganisationGroup to update
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi~organisationGroupsUpdateOrganisationGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseBoolean}
     */
    this.organisationGroupsUpdateOrganisationGroup = function(request, xChronosheetsAuth, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling organisationGroupsUpdateOrganisationGroup");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling organisationGroupsUpdateOrganisationGroup");
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
        '/api/OrganisationGroups/UpdateOrganisationGroup', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
