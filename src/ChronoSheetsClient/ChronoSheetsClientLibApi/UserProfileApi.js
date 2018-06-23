/**
 * ChronoSheets API
 * An API for integrating into ChronoSheets timesheets
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
    define(['ChronoSheetsClient/ApiClient', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseBoolean', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseDoLoginResponse', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseSignupResponse', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseUserProfile', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiDoLoginRequest', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiUpdateMyProfileRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../ChronoSheetsClientLibModel/CsApiApiResponseBoolean'), require('../ChronoSheetsClientLibModel/CsApiApiResponseDoLoginResponse'), require('../ChronoSheetsClientLibModel/CsApiApiResponseSignupResponse'), require('../ChronoSheetsClientLibModel/CsApiApiResponseUserProfile'), require('../ChronoSheetsClientLibModel/CsApiDoLoginRequest'), require('../ChronoSheetsClientLibModel/CsApiUpdateMyProfileRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.ChronoSheetsApi) {
      root.ChronoSheetsApi = {};
    }
    root.ChronoSheetsApi.UserProfileApi = factory(root.ChronoSheetsApi.ApiClient, root.ChronoSheetsApi.CsApiApiResponseBoolean, root.ChronoSheetsApi.CsApiApiResponseDoLoginResponse, root.ChronoSheetsApi.CsApiApiResponseSignupResponse, root.ChronoSheetsApi.CsApiApiResponseUserProfile, root.ChronoSheetsApi.CsApiDoLoginRequest, root.ChronoSheetsApi.CsApiUpdateMyProfileRequest);
  }
}(this, function(ApiClient, CsApiApiResponseBoolean, CsApiApiResponseDoLoginResponse, CsApiApiResponseSignupResponse, CsApiApiResponseUserProfile, CsApiDoLoginRequest, CsApiUpdateMyProfileRequest) {
  'use strict';

  /**
   * UserProfile service.
   * @module ChronoSheetsClient/ChronoSheetsClientLibApi/UserProfileApi
   * @version v1
   */

  /**
   * Constructs a new UserProfileApi. 
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibApi/UserProfileApi
   * @class
   * @param {module:ChronoSheetsClient/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ChronoSheetsClient/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the userProfileDoLogin operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/UserProfileApi~userProfileDoLoginCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseDoLoginResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiDoLoginRequest} request 
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/UserProfileApi~userProfileDoLoginCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseDoLoginResponse}
     */
    this.userProfileDoLogin = function(request, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling userProfileDoLogin");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'multipart/form-data'];
      var returnType = CsApiApiResponseDoLoginResponse;

      return this.apiClient.callApi(
        '/api/UserProfile/DoLogin', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userProfileDoLogout operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/UserProfileApi~userProfileDoLogoutCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseBoolean} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/UserProfileApi~userProfileDoLogoutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseBoolean}
     */
    this.userProfileDoLogout = function(xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling userProfileDoLogout");
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
      var returnType = CsApiApiResponseBoolean;

      return this.apiClient.callApi(
        '/api/UserProfile/DoLogout', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userProfileGetMyProfile operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/UserProfileApi~userProfileGetMyProfileCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseUserProfile} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/UserProfileApi~userProfileGetMyProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseUserProfile}
     */
    this.userProfileGetMyProfile = function(xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling userProfileGetMyProfile");
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
      var returnType = CsApiApiResponseUserProfile;

      return this.apiClient.callApi(
        '/api/UserProfile/GetMyProfile', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userProfileKeepSessionAlive operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/UserProfileApi~userProfileKeepSessionAliveCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseBoolean} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/UserProfileApi~userProfileKeepSessionAliveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseBoolean}
     */
    this.userProfileKeepSessionAlive = function(xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling userProfileKeepSessionAlive");
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
      var returnType = CsApiApiResponseBoolean;

      return this.apiClient.callApi(
        '/api/UserProfile/KeepSessionAlive', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userProfileUpdateMyProfile operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/UserProfileApi~userProfileUpdateMyProfileCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseSignupResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiUpdateMyProfileRequest} request 
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/UserProfileApi~userProfileUpdateMyProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseSignupResponse}
     */
    this.userProfileUpdateMyProfile = function(request, xChronosheetsAuth, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling userProfileUpdateMyProfile");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling userProfileUpdateMyProfile");
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
      var returnType = CsApiApiResponseSignupResponse;

      return this.apiClient.callApi(
        '/api/UserProfile/UpdateMyProfile', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
