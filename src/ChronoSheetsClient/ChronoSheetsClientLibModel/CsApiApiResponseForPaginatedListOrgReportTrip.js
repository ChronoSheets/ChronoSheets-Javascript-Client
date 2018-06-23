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
    define(['ChronoSheetsClient/ApiClient', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiOrgReportTrip'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CsApiOrgReportTrip'));
  } else {
    // Browser globals (root is window)
    if (!root.ChronoSheetsApi) {
      root.ChronoSheetsApi = {};
    }
    root.ChronoSheetsApi.CsApiApiResponseForPaginatedListOrgReportTrip = factory(root.ChronoSheetsApi.ApiClient, root.ChronoSheetsApi.CsApiOrgReportTrip);
  }
}(this, function(ApiClient, CsApiOrgReportTrip) {
  'use strict';




  /**
   * The CsApiApiResponseForPaginatedListOrgReportTrip model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseForPaginatedListOrgReportTrip
   * @version v1
   */

  /**
   * Constructs a new <code>CsApiApiResponseForPaginatedListOrgReportTrip</code>.
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseForPaginatedListOrgReportTrip
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>CsApiApiResponseForPaginatedListOrgReportTrip</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseForPaginatedListOrgReportTrip} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseForPaginatedListOrgReportTrip} The populated <code>CsApiApiResponseForPaginatedListOrgReportTrip</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('TotalSetCount')) {
        obj['TotalSetCount'] = ApiClient.convertToType(data['TotalSetCount'], 'Number');
      }
      if (data.hasOwnProperty('Data')) {
        obj['Data'] = ApiClient.convertToType(data['Data'], [CsApiOrgReportTrip]);
      }
      if (data.hasOwnProperty('Status')) {
        obj['Status'] = ApiClient.convertToType(data['Status'], 'String');
      }
      if (data.hasOwnProperty('Message')) {
        obj['Message'] = ApiClient.convertToType(data['Message'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} TotalSetCount
   */
  exports.prototype['TotalSetCount'] = undefined;
  /**
   * @member {Array.<module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiOrgReportTrip>} Data
   */
  exports.prototype['Data'] = undefined;
  /**
   * @member {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseForPaginatedListOrgReportTrip.StatusEnum} Status
   */
  exports.prototype['Status'] = undefined;
  /**
   * @member {String} Message
   */
  exports.prototype['Message'] = undefined;


  /**
   * Allowed values for the <code>Status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "Succeeded"
     * @const
     */
    "Succeeded": "Succeeded",
    /**
     * value: "FatalException"
     * @const
     */
    "FatalException": "FatalException",
    /**
     * value: "GeneralError"
     * @const
     */
    "GeneralError": "GeneralError",
    /**
     * value: "ValidationError"
     * @const
     */
    "ValidationError": "ValidationError",
    /**
     * value: "UnAuthorized"
     * @const
     */
    "UnAuthorized": "UnAuthorized",
    /**
     * value: "SessionExpired"
     * @const
     */
    "SessionExpired": "SessionExpired"  };


  return exports;
}));

