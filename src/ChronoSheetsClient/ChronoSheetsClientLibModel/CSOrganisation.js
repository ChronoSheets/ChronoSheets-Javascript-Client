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
    root.ChronoSheetsApi.CSOrganisation = factory(root.ChronoSheetsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CSOrganisation model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CSOrganisation
   * @version v1
   */

  /**
   * Constructs a new <code>CSOrganisation</code>.
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSOrganisation
   * @class
   */
  var exports = function() {
    var _this = this;
















  };

  /**
   * Constructs a <code>CSOrganisation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSOrganisation} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSOrganisation} The populated <code>CSOrganisation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Id')) {
        obj['Id'] = ApiClient.convertToType(data['Id'], 'Number');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('AddressLine01')) {
        obj['AddressLine01'] = ApiClient.convertToType(data['AddressLine01'], 'String');
      }
      if (data.hasOwnProperty('AddressLine02')) {
        obj['AddressLine02'] = ApiClient.convertToType(data['AddressLine02'], 'String');
      }
      if (data.hasOwnProperty('Suburb')) {
        obj['Suburb'] = ApiClient.convertToType(data['Suburb'], 'String');
      }
      if (data.hasOwnProperty('State')) {
        obj['State'] = ApiClient.convertToType(data['State'], 'String');
      }
      if (data.hasOwnProperty('Postcode')) {
        obj['Postcode'] = ApiClient.convertToType(data['Postcode'], 'String');
      }
      if (data.hasOwnProperty('Country')) {
        obj['Country'] = ApiClient.convertToType(data['Country'], 'String');
      }
      if (data.hasOwnProperty('Phone')) {
        obj['Phone'] = ApiClient.convertToType(data['Phone'], 'String');
      }
      if (data.hasOwnProperty('EmailAddress')) {
        obj['EmailAddress'] = ApiClient.convertToType(data['EmailAddress'], 'String');
      }
      if (data.hasOwnProperty('Timezone')) {
        obj['Timezone'] = ApiClient.convertToType(data['Timezone'], 'String');
      }
      if (data.hasOwnProperty('SubscriptionCustomerId')) {
        obj['SubscriptionCustomerId'] = ApiClient.convertToType(data['SubscriptionCustomerId'], 'String');
      }
      if (data.hasOwnProperty('SubscriptionPlanId')) {
        obj['SubscriptionPlanId'] = ApiClient.convertToType(data['SubscriptionPlanId'], 'String');
      }
      if (data.hasOwnProperty('SignupToken')) {
        obj['SignupToken'] = ApiClient.convertToType(data['SignupToken'], 'String');
      }
      if (data.hasOwnProperty('NumberSeatsAvailable')) {
        obj['NumberSeatsAvailable'] = ApiClient.convertToType(data['NumberSeatsAvailable'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} Id
   */
  exports.prototype['Id'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {String} AddressLine01
   */
  exports.prototype['AddressLine01'] = undefined;
  /**
   * @member {String} AddressLine02
   */
  exports.prototype['AddressLine02'] = undefined;
  /**
   * @member {String} Suburb
   */
  exports.prototype['Suburb'] = undefined;
  /**
   * @member {String} State
   */
  exports.prototype['State'] = undefined;
  /**
   * @member {String} Postcode
   */
  exports.prototype['Postcode'] = undefined;
  /**
   * @member {String} Country
   */
  exports.prototype['Country'] = undefined;
  /**
   * @member {String} Phone
   */
  exports.prototype['Phone'] = undefined;
  /**
   * @member {String} EmailAddress
   */
  exports.prototype['EmailAddress'] = undefined;
  /**
   * @member {String} Timezone
   */
  exports.prototype['Timezone'] = undefined;
  /**
   * @member {String} SubscriptionCustomerId
   */
  exports.prototype['SubscriptionCustomerId'] = undefined;
  /**
   * @member {String} SubscriptionPlanId
   */
  exports.prototype['SubscriptionPlanId'] = undefined;
  /**
   * @member {String} SignupToken
   */
  exports.prototype['SignupToken'] = undefined;
  /**
   * @member {Number} NumberSeatsAvailable
   */
  exports.prototype['NumberSeatsAvailable'] = undefined;



  return exports;
}));


