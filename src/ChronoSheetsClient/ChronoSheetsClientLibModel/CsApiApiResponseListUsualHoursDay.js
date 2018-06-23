/**
 * ChronoSheets API
 * ChronoSheets is a flexible timesheet solution for small to medium businesses, it is free for small teams of up to 5 and there are iOS and Android apps available.  Use the ChronoSheets API to create your own custom integrations.
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
    define(['ChronoSheetsClient/ApiClient', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiUsualHoursDay'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CsApiUsualHoursDay'));
  } else {
    // Browser globals (root is window)
    if (!root.ChronoSheetsApi) {
      root.ChronoSheetsApi = {};
    }
    root.ChronoSheetsApi.CsApiApiResponseListUsualHoursDay = factory(root.ChronoSheetsApi.ApiClient, root.ChronoSheetsApi.CsApiUsualHoursDay);
  }
}(this, function(ApiClient, CsApiUsualHoursDay) {
  'use strict';




  /**
   * The CsApiApiResponseListUsualHoursDay model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseListUsualHoursDay
   * @version v1
   */

  /**
   * Constructs a new <code>CsApiApiResponseListUsualHoursDay</code>.
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseListUsualHoursDay
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>CsApiApiResponseListUsualHoursDay</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseListUsualHoursDay} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseListUsualHoursDay} The populated <code>CsApiApiResponseListUsualHoursDay</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Data')) {
        obj['Data'] = ApiClient.convertToType(data['Data'], [CsApiUsualHoursDay]);
      }
      if (data.hasOwnProperty('Status')) {
        obj['Status'] = ApiClient.convertToType(data['Status'], 'Number');
      }
      if (data.hasOwnProperty('Message')) {
        obj['Message'] = ApiClient.convertToType(data['Message'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiUsualHoursDay>} Data
   */
  exports.prototype['Data'] = undefined;
  /**
   * 0 = Succeeded, 1 = FatalException, 2 = GeneralError, 3 = ValidationError, 4 = UnAuthorized, 5 = SessionExpired
   * @member {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseListUsualHoursDay.StatusEnum} Status
   */
  exports.prototype['Status'] = undefined;
  /**
   * @member {String} Message
   */
  exports.prototype['Message'] = undefined;


  /**
   * Allowed values for the <code>Status</code> property.
   * @enum {Number}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: 0
     * @const
     */
    "0": 0,
    /**
     * value: 1
     * @const
     */
    "1": 1,
    /**
     * value: 2
     * @const
     */
    "2": 2,
    /**
     * value: 3
     * @const
     */
    "3": 3,
    /**
     * value: 4
     * @const
     */
    "4": 4,
    /**
     * value: 5
     * @const
     */
    "5": 5  };


  return exports;
}));


