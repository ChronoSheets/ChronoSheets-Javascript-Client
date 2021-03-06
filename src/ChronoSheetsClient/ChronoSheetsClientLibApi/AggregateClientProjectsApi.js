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
import ApiResponseListAggregateClient from '../ChronoSheetsClientLibModel/ApiResponseListAggregateClient';

/**
* AggregateClientProjects service.
* @module ChronoSheetsClient/ChronoSheetsClientLibApi/AggregateClientProjectsApi
* @version 1.0.0
*/
export default class AggregateClientProjectsApi {

    /**
    * Constructs a new AggregateClientProjectsApi. 
    * @alias module:ChronoSheetsClient/ChronoSheetsClientLibApi/AggregateClientProjectsApi
    * @class
    * @param {module:ChronoSheetsClient/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ChronoSheetsClient/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the aggregateClientProjectsGetAggregateClientProjects operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/AggregateClientProjectsApi~aggregateClientProjectsGetAggregateClientProjectsCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/ApiResponseListAggregateClient} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get client and project information, aggregated.    Requires the 'SubmitTimesheets' or 'ManageClientsAndProjects' permissions.
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/AggregateClientProjectsApi~aggregateClientProjectsGetAggregateClientProjectsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/ApiResponseListAggregateClient}
     */
    aggregateClientProjectsGetAggregateClientProjects(xChronosheetsAuth, callback) {
      let postBody = null;
      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling aggregateClientProjectsGetAggregateClientProjects");
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
      let returnType = ApiResponseListAggregateClient;
      return this.apiClient.callApi(
        '/AggregateClientProjects/GetAggregateClientProjects', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
