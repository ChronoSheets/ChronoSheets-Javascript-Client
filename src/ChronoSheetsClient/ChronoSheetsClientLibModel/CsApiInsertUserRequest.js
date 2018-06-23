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
    root.ChronoSheetsApi.CsApiInsertUserRequest = factory(root.ChronoSheetsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CsApiInsertUserRequest model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiInsertUserRequest
   * @version v1
   */

  /**
   * Constructs a new <code>CsApiInsertUserRequest</code>.
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiInsertUserRequest
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>CsApiInsertUserRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiInsertUserRequest} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiInsertUserRequest} The populated <code>CsApiInsertUserRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('EmailAddress')) {
        obj['EmailAddress'] = ApiClient.convertToType(data['EmailAddress'], 'String');
      }
      if (data.hasOwnProperty('FirstName')) {
        obj['FirstName'] = ApiClient.convertToType(data['FirstName'], 'String');
      }
      if (data.hasOwnProperty('LastName')) {
        obj['LastName'] = ApiClient.convertToType(data['LastName'], 'String');
      }
      if (data.hasOwnProperty('IsSubscribedToNewsletter')) {
        obj['IsSubscribedToNewsletter'] = ApiClient.convertToType(data['IsSubscribedToNewsletter'], 'Boolean');
      }
      if (data.hasOwnProperty('Roles')) {
        obj['Roles'] = ApiClient.convertToType(data['Roles'], 'Number');
      }
      if (data.hasOwnProperty('AlertSettings')) {
        obj['AlertSettings'] = ApiClient.convertToType(data['AlertSettings'], 'Number');
      }
      if (data.hasOwnProperty('UserName')) {
        obj['UserName'] = ApiClient.convertToType(data['UserName'], 'String');
      }
      if (data.hasOwnProperty('HourlyPayRate')) {
        obj['HourlyPayRate'] = ApiClient.convertToType(data['HourlyPayRate'], 'Number');
      }
      if (data.hasOwnProperty('HourlyOvertimePayRate')) {
        obj['HourlyOvertimePayRate'] = ApiClient.convertToType(data['HourlyOvertimePayRate'], 'Number');
      }
      if (data.hasOwnProperty('CurrentDate')) {
        obj['CurrentDate'] = ApiClient.convertToType(data['CurrentDate'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {String} EmailAddress
   */
  exports.prototype['EmailAddress'] = undefined;
  /**
   * @member {String} FirstName
   */
  exports.prototype['FirstName'] = undefined;
  /**
   * @member {String} LastName
   */
  exports.prototype['LastName'] = undefined;
  /**
   * @member {Boolean} IsSubscribedToNewsletter
   */
  exports.prototype['IsSubscribedToNewsletter'] = undefined;
  /**
   * @member {Number} Roles
   */
  exports.prototype['Roles'] = undefined;
  /**
   * @member {Number} AlertSettings
   */
  exports.prototype['AlertSettings'] = undefined;
  /**
   * @member {String} UserName
   */
  exports.prototype['UserName'] = undefined;
  /**
   * @member {Number} HourlyPayRate
   */
  exports.prototype['HourlyPayRate'] = undefined;
  /**
   * @member {Number} HourlyOvertimePayRate
   */
  exports.prototype['HourlyOvertimePayRate'] = undefined;
  /**
   * @member {Date} CurrentDate
   */
  exports.prototype['CurrentDate'] = undefined;



  return exports;
}));

