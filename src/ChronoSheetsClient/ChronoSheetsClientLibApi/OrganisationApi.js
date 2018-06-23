/**
 * ChronoSheets API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
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
    define(['ChronoSheetsClient/ApiClient', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseOrganisation', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseUpdateOrganisationResponse', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiUpdateOrganisationRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../ChronoSheetsClientLibModel/CsApiApiResponseOrganisation'), require('../ChronoSheetsClientLibModel/CsApiApiResponseUpdateOrganisationResponse'), require('../ChronoSheetsClientLibModel/CsApiUpdateOrganisationRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.ChronoSheetsApi) {
      root.ChronoSheetsApi = {};
    }
    root.ChronoSheetsApi.OrganisationApi = factory(root.ChronoSheetsApi.ApiClient, root.ChronoSheetsApi.CsApiApiResponseOrganisation, root.ChronoSheetsApi.CsApiApiResponseUpdateOrganisationResponse, root.ChronoSheetsApi.CsApiUpdateOrganisationRequest);
  }
}(this, function(ApiClient, CsApiApiResponseOrganisation, CsApiApiResponseUpdateOrganisationResponse, CsApiUpdateOrganisationRequest) {
  'use strict';

  /**
   * Organisation service.
   * @module ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationApi
   * @version v1
   */

  /**
   * Constructs a new OrganisationApi. 
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationApi
   * @class
   * @param {module:ChronoSheetsClient/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ChronoSheetsClient/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the organisationGetOrganisation operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationApi~organisationGetOrganisationCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseOrganisation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get your organisation.  Requires &#39;OrganisationAdmin&#39; permission.
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationApi~organisationGetOrganisationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseOrganisation}
     */
    this.organisationGetOrganisation = function(xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling organisationGetOrganisation");
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
      var returnType = CsApiApiResponseOrganisation;

      return this.apiClient.callApi(
        '/api/Organisation/GetOrganisation', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the organisationUpdateOrganisation operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationApi~organisationUpdateOrganisationCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseUpdateOrganisationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an organisation.  Requires &#39;OrganisationAdmin&#39; permission.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiUpdateOrganisationRequest} request 
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationApi~organisationUpdateOrganisationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseUpdateOrganisationResponse}
     */
    this.organisationUpdateOrganisation = function(request, xChronosheetsAuth, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling organisationUpdateOrganisation");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling organisationUpdateOrganisation");
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
      var returnType = CsApiApiResponseUpdateOrganisationResponse;

      return this.apiClient.callApi(
        '/api/Organisation/UpdateOrganisation', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));