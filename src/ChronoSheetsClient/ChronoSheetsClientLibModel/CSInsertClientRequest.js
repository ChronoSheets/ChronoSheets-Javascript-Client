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
    root.ChronoSheetsApi.CSInsertClientRequest = factory(root.ChronoSheetsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CSInsertClientRequest model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CSInsertClientRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CSInsertClientRequest</code>.
   * Fields for inserting a new Client
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSInsertClientRequest
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>CSInsertClientRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSInsertClientRequest} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSInsertClientRequest} The populated <code>CSInsertClientRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ClientName')) {
        obj['ClientName'] = ApiClient.convertToType(data['ClientName'], 'String');
      }
      if (data.hasOwnProperty('ClientAddressLine1')) {
        obj['ClientAddressLine1'] = ApiClient.convertToType(data['ClientAddressLine1'], 'String');
      }
      if (data.hasOwnProperty('ClientAddressLine2')) {
        obj['ClientAddressLine2'] = ApiClient.convertToType(data['ClientAddressLine2'], 'String');
      }
      if (data.hasOwnProperty('ClientSuburb')) {
        obj['ClientSuburb'] = ApiClient.convertToType(data['ClientSuburb'], 'String');
      }
      if (data.hasOwnProperty('ClientState')) {
        obj['ClientState'] = ApiClient.convertToType(data['ClientState'], 'String');
      }
      if (data.hasOwnProperty('ClientPostCode')) {
        obj['ClientPostCode'] = ApiClient.convertToType(data['ClientPostCode'], 'String');
      }
      if (data.hasOwnProperty('PersonOfContact')) {
        obj['PersonOfContact'] = ApiClient.convertToType(data['PersonOfContact'], 'String');
      }
      if (data.hasOwnProperty('ClientPhoneNumber')) {
        obj['ClientPhoneNumber'] = ApiClient.convertToType(data['ClientPhoneNumber'], 'String');
      }
      if (data.hasOwnProperty('ClientMobileNumber')) {
        obj['ClientMobileNumber'] = ApiClient.convertToType(data['ClientMobileNumber'], 'String');
      }
      if (data.hasOwnProperty('ClientEmailAddress')) {
        obj['ClientEmailAddress'] = ApiClient.convertToType(data['ClientEmailAddress'], 'String');
      }
      if (data.hasOwnProperty('ClientWebURL')) {
        obj['ClientWebURL'] = ApiClient.convertToType(data['ClientWebURL'], 'String');
      }
    }
    return obj;
  }

  /**
   * The name of the Client
   * @member {String} ClientName
   */
  exports.prototype['ClientName'] = undefined;
  /**
   * Address line 1 of the Client
   * @member {String} ClientAddressLine1
   */
  exports.prototype['ClientAddressLine1'] = undefined;
  /**
   * Address line 2 of the Client
   * @member {String} ClientAddressLine2
   */
  exports.prototype['ClientAddressLine2'] = undefined;
  /**
   * The suburb of the Client's address
   * @member {String} ClientSuburb
   */
  exports.prototype['ClientSuburb'] = undefined;
  /**
   * The state of the Client's address
   * @member {String} ClientState
   */
  exports.prototype['ClientState'] = undefined;
  /**
   * The post code of the Client's address
   * @member {String} ClientPostCode
   */
  exports.prototype['ClientPostCode'] = undefined;
  /**
   * The name of the contact working with the Client
   * @member {String} PersonOfContact
   */
  exports.prototype['PersonOfContact'] = undefined;
  /**
   * The phone number of the Client
   * @member {String} ClientPhoneNumber
   */
  exports.prototype['ClientPhoneNumber'] = undefined;
  /**
   * The mobile phone number of the Client
   * @member {String} ClientMobileNumber
   */
  exports.prototype['ClientMobileNumber'] = undefined;
  /**
   * The email address of the Client
   * @member {String} ClientEmailAddress
   */
  exports.prototype['ClientEmailAddress'] = undefined;
  /**
   * The Client's website URL
   * @member {String} ClientWebURL
   */
  exports.prototype['ClientWebURL'] = undefined;



  return exports;
}));


