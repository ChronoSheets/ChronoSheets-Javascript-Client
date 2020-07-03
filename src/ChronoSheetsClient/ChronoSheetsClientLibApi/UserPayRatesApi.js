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
import ApiResponseInt32 from '../ChronoSheetsClientLibModel/ApiResponseInt32';
import ApiResponseListUserHourlyRate from '../ChronoSheetsClientLibModel/ApiResponseListUserHourlyRate';
import InsertUserHourlyRateRequest from '../ChronoSheetsClientLibModel/InsertUserHourlyRateRequest';

/**
* UserPayRates service.
* @module ChronoSheetsClient/ChronoSheetsClientLibApi/UserPayRatesApi
* @version 1.0.0
*/
export default class UserPayRatesApi {

    /**
    * Constructs a new UserPayRatesApi. 
    * @alias module:ChronoSheetsClient/ChronoSheetsClientLibApi/UserPayRatesApi
    * @class
    * @param {module:ChronoSheetsClient/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ChronoSheetsClient/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the userPayRatesCreatePayRate operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/UserPayRatesApi~userPayRatesCreatePayRateCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/ApiResponseInt32} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new pay rate for a particular user, archiving the previous pay rate.    Requires the 'ManageOrganisationUsers' permission.
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/InsertUserHourlyRateRequest} request An Insert UserHourlyRate Request object containing values for the new UserHourlyRate to create
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/UserPayRatesApi~userPayRatesCreatePayRateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/ApiResponseInt32}
     */
    userPayRatesCreatePayRate(xChronosheetsAuth, request, callback) {
      let postBody = request;
      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling userPayRatesCreatePayRate");
      }
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling userPayRatesCreatePayRate");
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
        '/UserPayRates/CreatePayRate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the userPayRatesGetPayRates operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/UserPayRatesApi~userPayRatesGetPayRatesCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/ApiResponseListUserHourlyRate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a collection of pay rates for a particular user, specified by user id.    Requires the 'ManageOrganisationUsers' permission.
     * @param {Number} userId The ID of the User for which you want to get UserHourlyRate objects
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/UserPayRatesApi~userPayRatesGetPayRatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/ApiResponseListUserHourlyRate}
     */
    userPayRatesGetPayRates(userId, xChronosheetsAuth, callback) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling userPayRatesGetPayRates");
      }
      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling userPayRatesGetPayRates");
      }

      let pathParams = {
      };
      let queryParams = {
        'UserId': userId
      };
      let headerParams = {
        'x-chronosheets-auth': xChronosheetsAuth
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'multipart/form-data'];
      let returnType = ApiResponseListUserHourlyRate;
      return this.apiClient.callApi(
        '/UserPayRates/GetPayRates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
