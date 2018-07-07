/**
 * ChronoSheets API
 * <div style='font-size: 14px!important;font-family: Open Sans,sans-serif!important;color: #3b4151!important;'><p>      ChronoSheets is a flexible timesheet solution for small to medium businesses, it is free for small teams of up to 5 and there are iOS and Android apps available.  Use the ChronoSheets API to create your own custom integrations.  Before starting, sign up for a ChronoSheets account at <a target='_BLANK' href='http://tsheets.xyz/signup'>http://tsheets.xyz/signup</a>.  </p></div><div id='cs-extra-info'></div>
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
    root.ChronoSheetsApi.CSInsertUserHourlyRateRequest = factory(root.ChronoSheetsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CSInsertUserHourlyRateRequest model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CSInsertUserHourlyRateRequest
   * @version v1
   */

  /**
   * Constructs a new <code>CSInsertUserHourlyRateRequest</code>.
   * Fields for inserting a new set of Pay Rates for a user.  Archiving of the previous Pay Rate is done for you automatically
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSInsertUserHourlyRateRequest
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>CSInsertUserHourlyRateRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSInsertUserHourlyRateRequest} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSInsertUserHourlyRateRequest} The populated <code>CSInsertUserHourlyRateRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('UserId')) {
        obj['UserId'] = ApiClient.convertToType(data['UserId'], 'Number');
      }
      if (data.hasOwnProperty('HourlyRate')) {
        obj['HourlyRate'] = ApiClient.convertToType(data['HourlyRate'], 'Number');
      }
      if (data.hasOwnProperty('HourlyOvertimeRate')) {
        obj['HourlyOvertimeRate'] = ApiClient.convertToType(data['HourlyOvertimeRate'], 'Number');
      }
      if (data.hasOwnProperty('CurrentDate')) {
        obj['CurrentDate'] = ApiClient.convertToType(data['CurrentDate'], 'Date');
      }
    }
    return obj;
  }

  /**
   * The Id of the User that is getting the new set of Pay Rates
   * @member {Number} UserId
   */
  exports.prototype['UserId'] = undefined;
  /**
   * The Hourly Rate the employee should receive during their usual rostered hours
   * @member {Number} HourlyRate
   */
  exports.prototype['HourlyRate'] = undefined;
  /**
   * The Hourly Rate the employee should receive during outside of their usual rostered hours
   * @member {Number} HourlyOvertimeRate
   */
  exports.prototype['HourlyOvertimeRate'] = undefined;
  /**
   * The current date time
   * @member {Date} CurrentDate
   */
  exports.prototype['CurrentDate'] = undefined;



  return exports;
}));


