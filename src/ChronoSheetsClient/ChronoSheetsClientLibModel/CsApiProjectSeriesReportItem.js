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
    root.ChronoSheetsApi.CsApiProjectSeriesReportItem = factory(root.ChronoSheetsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CsApiProjectSeriesReportItem model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiProjectSeriesReportItem
   * @version v1
   */

  /**
   * Constructs a new <code>CsApiProjectSeriesReportItem</code>.
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiProjectSeriesReportItem
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>CsApiProjectSeriesReportItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiProjectSeriesReportItem} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiProjectSeriesReportItem} The populated <code>CsApiProjectSeriesReportItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('StartDate')) {
        obj['StartDate'] = ApiClient.convertToType(data['StartDate'], 'Date');
      }
      if (data.hasOwnProperty('EndDate')) {
        obj['EndDate'] = ApiClient.convertToType(data['EndDate'], 'Date');
      }
      if (data.hasOwnProperty('ProjectId')) {
        obj['ProjectId'] = ApiClient.convertToType(data['ProjectId'], 'Number');
      }
      if (data.hasOwnProperty('ProjectName')) {
        obj['ProjectName'] = ApiClient.convertToType(data['ProjectName'], 'String');
      }
      if (data.hasOwnProperty('SpanSeconds')) {
        obj['SpanSeconds'] = ApiClient.convertToType(data['SpanSeconds'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Date} StartDate
   */
  exports.prototype['StartDate'] = undefined;
  /**
   * @member {Date} EndDate
   */
  exports.prototype['EndDate'] = undefined;
  /**
   * @member {Number} ProjectId
   */
  exports.prototype['ProjectId'] = undefined;
  /**
   * @member {String} ProjectName
   */
  exports.prototype['ProjectName'] = undefined;
  /**
   * @member {Number} SpanSeconds
   */
  exports.prototype['SpanSeconds'] = undefined;



  return exports;
}));

