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
    root.ChronoSheetsApi.CSSaveClientRequest = factory(root.ChronoSheetsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CSSaveClientRequest model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CSSaveClientRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CSSaveClientRequest</code>.
   * Fields used to save a Client
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSSaveClientRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CSSaveClientRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSSaveClientRequest} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSSaveClientRequest} The populated <code>CSSaveClientRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Id'))
        obj.id = ApiClient.convertToType(data['Id'], 'Number');
      if (data.hasOwnProperty('ClientName'))
        obj.clientName = ApiClient.convertToType(data['ClientName'], 'String');
      if (data.hasOwnProperty('ClientAddressLine1'))
        obj.clientAddressLine1 = ApiClient.convertToType(data['ClientAddressLine1'], 'String');
      if (data.hasOwnProperty('ClientAddressLine2'))
        obj.clientAddressLine2 = ApiClient.convertToType(data['ClientAddressLine2'], 'String');
      if (data.hasOwnProperty('ClientSuburb'))
        obj.clientSuburb = ApiClient.convertToType(data['ClientSuburb'], 'String');
      if (data.hasOwnProperty('ClientState'))
        obj.clientState = ApiClient.convertToType(data['ClientState'], 'String');
      if (data.hasOwnProperty('ClientPostCode'))
        obj.clientPostCode = ApiClient.convertToType(data['ClientPostCode'], 'String');
      if (data.hasOwnProperty('PersonOfContact'))
        obj.personOfContact = ApiClient.convertToType(data['PersonOfContact'], 'String');
      if (data.hasOwnProperty('ClientPhoneNumber'))
        obj.clientPhoneNumber = ApiClient.convertToType(data['ClientPhoneNumber'], 'String');
      if (data.hasOwnProperty('ClientMobileNumber'))
        obj.clientMobileNumber = ApiClient.convertToType(data['ClientMobileNumber'], 'String');
      if (data.hasOwnProperty('ClientEmailAddress'))
        obj.clientEmailAddress = ApiClient.convertToType(data['ClientEmailAddress'], 'String');
      if (data.hasOwnProperty('ClientWebURL'))
        obj.clientWebURL = ApiClient.convertToType(data['ClientWebURL'], 'String');
    }
    return obj;
  }

  /**
   * The Id of the Client
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * The name of the Client
   * @member {String} clientName
   */
  exports.prototype.clientName = undefined;

  /**
   * Address line 1 of the Client
   * @member {String} clientAddressLine1
   */
  exports.prototype.clientAddressLine1 = undefined;

  /**
   * Address line 2 of the Client
   * @member {String} clientAddressLine2
   */
  exports.prototype.clientAddressLine2 = undefined;

  /**
   * The suburb of the Client's address
   * @member {String} clientSuburb
   */
  exports.prototype.clientSuburb = undefined;

  /**
   * The state of the Client's address
   * @member {String} clientState
   */
  exports.prototype.clientState = undefined;

  /**
   * The post code of the Client's address
   * @member {String} clientPostCode
   */
  exports.prototype.clientPostCode = undefined;

  /**
   * The name of the contact working with the Client
   * @member {String} personOfContact
   */
  exports.prototype.personOfContact = undefined;

  /**
   * The phone number of the Client
   * @member {String} clientPhoneNumber
   */
  exports.prototype.clientPhoneNumber = undefined;

  /**
   * The mobile phone number of the Client
   * @member {String} clientMobileNumber
   */
  exports.prototype.clientMobileNumber = undefined;

  /**
   * The email address of the Client
   * @member {String} clientEmailAddress
   */
  exports.prototype.clientEmailAddress = undefined;

  /**
   * The Client's website URL
   * @member {String} clientWebURL
   */
  exports.prototype.clientWebURL = undefined;

  return exports;

}));
