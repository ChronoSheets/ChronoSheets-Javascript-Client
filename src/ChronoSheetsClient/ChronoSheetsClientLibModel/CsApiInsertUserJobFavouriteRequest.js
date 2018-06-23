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
    define(['ChronoSheetsClient/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ChronoSheetsApi) {
      root.ChronoSheetsApi = {};
    }
    root.ChronoSheetsApi.CsApiInsertUserJobFavouriteRequest = factory(root.ChronoSheetsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CsApiInsertUserJobFavouriteRequest model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiInsertUserJobFavouriteRequest
   * @version v1
   */

  /**
   * Constructs a new <code>CsApiInsertUserJobFavouriteRequest</code>.
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiInsertUserJobFavouriteRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>CsApiInsertUserJobFavouriteRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiInsertUserJobFavouriteRequest} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiInsertUserJobFavouriteRequest} The populated <code>CsApiInsertUserJobFavouriteRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('JobId')) {
        obj['JobId'] = ApiClient.convertToType(data['JobId'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} JobId
   */
  exports.prototype['JobId'] = undefined;



  return exports;
}));

