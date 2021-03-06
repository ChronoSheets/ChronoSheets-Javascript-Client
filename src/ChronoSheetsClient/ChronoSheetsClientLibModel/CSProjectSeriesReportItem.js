/*
 * ChronoSheets API
 * <div style='font-size: 14px!important;font-family: Open Sans,sans-serif!important;color: #3b4151!important;'><p>      ChronoSheets is a flexible timesheet solution for small to medium businesses, it is free for small teams of up to 3 and there are iOS and Android apps available.  Use the ChronoSheets API to create your own custom integrations.  Before starting, sign up for a ChronoSheets account at <a target='_BLANK' href='http://tsheets.xyz/signup'>http://tsheets.xyz/signup</a>.  </p></div><div id='cs-extra-info'></div>
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
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
    root.ChronoSheetsApi.CSProjectSeriesReportItem = factory(root.ChronoSheetsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CSProjectSeriesReportItem model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CSProjectSeriesReportItem
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CSProjectSeriesReportItem</code>.
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSProjectSeriesReportItem
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CSProjectSeriesReportItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSProjectSeriesReportItem} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSProjectSeriesReportItem} The populated <code>CSProjectSeriesReportItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('StartDate'))
        obj.startDate = ApiClient.convertToType(data['StartDate'], 'Date');
      if (data.hasOwnProperty('EndDate'))
        obj.endDate = ApiClient.convertToType(data['EndDate'], 'Date');
      if (data.hasOwnProperty('ProjectId'))
        obj.projectId = ApiClient.convertToType(data['ProjectId'], 'Number');
      if (data.hasOwnProperty('ProjectName'))
        obj.projectName = ApiClient.convertToType(data['ProjectName'], 'String');
      if (data.hasOwnProperty('SpanSeconds'))
        obj.spanSeconds = ApiClient.convertToType(data['SpanSeconds'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Date} startDate
   */
  exports.prototype.startDate = undefined;

  /**
   * @member {Date} endDate
   */
  exports.prototype.endDate = undefined;

  /**
   * @member {Number} projectId
   */
  exports.prototype.projectId = undefined;

  /**
   * @member {String} projectName
   */
  exports.prototype.projectName = undefined;

  /**
   * @member {Number} spanSeconds
   */
  exports.prototype.spanSeconds = undefined;

  return exports;

}));
