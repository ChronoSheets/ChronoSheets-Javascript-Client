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
import ApiResponseBoolean from '../ChronoSheetsClientLibModel/ApiResponseBoolean';
import ApiResponseInt32 from '../ChronoSheetsClientLibModel/ApiResponseInt32';
import ApiResponseListOrganisationGroup from '../ChronoSheetsClientLibModel/ApiResponseListOrganisationGroup';
import ApiResponseOrganisationGroup from '../ChronoSheetsClientLibModel/ApiResponseOrganisationGroup';
import InsertOrganisationGroupRequest from '../ChronoSheetsClientLibModel/InsertOrganisationGroupRequest';
import SaveOrganisationGroupRequest from '../ChronoSheetsClientLibModel/SaveOrganisationGroupRequest';

/**
* OrganisationGroups service.
* @module ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi
* @version 1.0.0
*/
export default class OrganisationGroupsApi {

    /**
    * Constructs a new OrganisationGroupsApi. 
    * @alias module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi
    * @class
    * @param {module:ChronoSheetsClient/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ChronoSheetsClient/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the organisationGroupsCreateOrganisationGroup operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi~organisationGroupsCreateOrganisationGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/ApiResponseInt32} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an organisation group.    Requires the 'ManageOrganisationGroups' permissions.
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/InsertOrganisationGroupRequest} request An Insert OrganisationGroup Request object containing values for the new OrganisationGroup to create
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi~organisationGroupsCreateOrganisationGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/ApiResponseInt32}
     */
    organisationGroupsCreateOrganisationGroup(xChronosheetsAuth, request, callback) {
      let postBody = request;
      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling organisationGroupsCreateOrganisationGroup");
      }
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling organisationGroupsCreateOrganisationGroup");
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
        '/OrganisationGroups/CreateOrganisationGroup', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the organisationGroupsDeleteOrganisationGroup operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi~organisationGroupsDeleteOrganisationGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/ApiResponseBoolean} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} organisationGroupId 
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi~organisationGroupsDeleteOrganisationGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/ApiResponseBoolean}
     */
    organisationGroupsDeleteOrganisationGroup(organisationGroupId, xChronosheetsAuth, callback) {
      let postBody = null;
      // verify the required parameter 'organisationGroupId' is set
      if (organisationGroupId === undefined || organisationGroupId === null) {
        throw new Error("Missing the required parameter 'organisationGroupId' when calling organisationGroupsDeleteOrganisationGroup");
      }
      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling organisationGroupsDeleteOrganisationGroup");
      }

      let pathParams = {
      };
      let queryParams = {
        'OrganisationGroupId': organisationGroupId
      };
      let headerParams = {
        'x-chronosheets-auth': xChronosheetsAuth
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'multipart/form-data'];
      let returnType = ApiResponseBoolean;
      return this.apiClient.callApi(
        '/OrganisationGroups/DeleteOrganisationGroup', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the organisationGroupsGetOrganisationGroup operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi~organisationGroupsGetOrganisationGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/ApiResponseOrganisationGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a particular organisation group.    Requires the 'ManageOrganisationGroups', 'ManageJobsAndTask', 'ManageClientsAndProjects' or 'ManageOrganisationUsers' permissions.
     * @param {Number} organisationGroupId The ID of the OrganisationGroup you want to get
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi~organisationGroupsGetOrganisationGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/ApiResponseOrganisationGroup}
     */
    organisationGroupsGetOrganisationGroup(organisationGroupId, xChronosheetsAuth, callback) {
      let postBody = null;
      // verify the required parameter 'organisationGroupId' is set
      if (organisationGroupId === undefined || organisationGroupId === null) {
        throw new Error("Missing the required parameter 'organisationGroupId' when calling organisationGroupsGetOrganisationGroup");
      }
      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling organisationGroupsGetOrganisationGroup");
      }

      let pathParams = {
      };
      let queryParams = {
        'OrganisationGroupId': organisationGroupId
      };
      let headerParams = {
        'x-chronosheets-auth': xChronosheetsAuth
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'multipart/form-data'];
      let returnType = ApiResponseOrganisationGroup;
      return this.apiClient.callApi(
        '/OrganisationGroups/GetOrganisationGroup', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the organisationGroupsGetOrganisationGroups operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi~organisationGroupsGetOrganisationGroupsCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/ApiResponseListOrganisationGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a collection of organisation groups that are under your organisation.    Requires the 'ManageOrganisationGroups', 'ManageJobsAndTask', 'ManageClientsAndProjects' or 'ManageOrganisationUsers' permissions.
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi~organisationGroupsGetOrganisationGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/ApiResponseListOrganisationGroup}
     */
    organisationGroupsGetOrganisationGroups(xChronosheetsAuth, callback) {
      let postBody = null;
      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling organisationGroupsGetOrganisationGroups");
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
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'multipart/form-data'];
      let returnType = ApiResponseListOrganisationGroup;
      return this.apiClient.callApi(
        '/OrganisationGroups/GetOrganisationGroups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the organisationGroupsGetOrganisationGroupsForJob operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi~organisationGroupsGetOrganisationGroupsForJobCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/ApiResponseListOrganisationGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get org groups for a particular job.    Requires the 'ManageOrganisationGroups', 'ManageJobsAndTask', 'ManageClientsAndProjects' or 'ManageOrganisationUsers' permissions.
     * @param {Number} jobId The ID of the job
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi~organisationGroupsGetOrganisationGroupsForJobCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/ApiResponseListOrganisationGroup}
     */
    organisationGroupsGetOrganisationGroupsForJob(jobId, xChronosheetsAuth, callback) {
      let postBody = null;
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling organisationGroupsGetOrganisationGroupsForJob");
      }
      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling organisationGroupsGetOrganisationGroupsForJob");
      }

      let pathParams = {
      };
      let queryParams = {
        'JobId': jobId
      };
      let headerParams = {
        'x-chronosheets-auth': xChronosheetsAuth
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'multipart/form-data'];
      let returnType = ApiResponseListOrganisationGroup;
      return this.apiClient.callApi(
        '/OrganisationGroups/GetOrganisationGroupsForJob', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the organisationGroupsGetOrganisationGroupsForVehicle operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi~organisationGroupsGetOrganisationGroupsForVehicleCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/ApiResponseListOrganisationGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get org groups for a particular vehicle.    Requires the 'ManageOrganisationGroups', 'ManageFleet' or 'ManageOrganisationUsers' permissions.
     * @param {Number} vehicleId The ID of the vehicle
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi~organisationGroupsGetOrganisationGroupsForVehicleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/ApiResponseListOrganisationGroup}
     */
    organisationGroupsGetOrganisationGroupsForVehicle(vehicleId, xChronosheetsAuth, callback) {
      let postBody = null;
      // verify the required parameter 'vehicleId' is set
      if (vehicleId === undefined || vehicleId === null) {
        throw new Error("Missing the required parameter 'vehicleId' when calling organisationGroupsGetOrganisationGroupsForVehicle");
      }
      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling organisationGroupsGetOrganisationGroupsForVehicle");
      }

      let pathParams = {
      };
      let queryParams = {
        'VehicleId': vehicleId
      };
      let headerParams = {
        'x-chronosheets-auth': xChronosheetsAuth
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'multipart/form-data'];
      let returnType = ApiResponseListOrganisationGroup;
      return this.apiClient.callApi(
        '/OrganisationGroups/GetOrganisationGroupsForVehicle', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the organisationGroupsUpdateOrganisationGroup operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi~organisationGroupsUpdateOrganisationGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/ApiResponseBoolean} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an organisation group.    Requires the 'ManageOrganisationGroups' permissions.
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/SaveOrganisationGroupRequest} request A Save OrganisationGroup Request object containing updated fields.  Make sure to specify the OrganisationGroup Id in the request object so that ChronoSheets knows which OrganisationGroup to update
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi~organisationGroupsUpdateOrganisationGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/ApiResponseBoolean}
     */
    organisationGroupsUpdateOrganisationGroup(xChronosheetsAuth, request, callback) {
      let postBody = request;
      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling organisationGroupsUpdateOrganisationGroup");
      }
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling organisationGroupsUpdateOrganisationGroup");
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
      let returnType = ApiResponseBoolean;
      return this.apiClient.callApi(
        '/OrganisationGroups/UpdateOrganisationGroup', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
