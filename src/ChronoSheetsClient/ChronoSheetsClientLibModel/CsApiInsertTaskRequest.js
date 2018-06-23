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
    root.ChronoSheetsApi.CsApiInsertTaskRequest = factory(root.ChronoSheetsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CsApiInsertTaskRequest model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiInsertTaskRequest
   * @version v1
   */

  /**
   * Constructs a new <code>CsApiInsertTaskRequest</code>.
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiInsertTaskRequest
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CsApiInsertTaskRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiInsertTaskRequest} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiInsertTaskRequest} The populated <code>CsApiInsertTaskRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('TaskName')) {
        obj['TaskName'] = ApiClient.convertToType(data['TaskName'], 'String');
      }
      if (data.hasOwnProperty('TripEnabled')) {
        obj['TripEnabled'] = ApiClient.convertToType(data['TripEnabled'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} TaskName
   */
  exports.prototype['TaskName'] = undefined;
  /**
   * @member {Boolean} TripEnabled
   */
  exports.prototype['TripEnabled'] = undefined;



  return exports;
}));

