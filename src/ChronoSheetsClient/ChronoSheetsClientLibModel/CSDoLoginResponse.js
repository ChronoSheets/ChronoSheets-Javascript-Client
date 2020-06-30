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
    define(['ChronoSheetsClient/ApiClient', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSClientSideUser'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CSClientSideUser'));
  } else {
    // Browser globals (root is window)
    if (!root.ChronoSheetsApi) {
      root.ChronoSheetsApi = {};
    }
    root.ChronoSheetsApi.CSDoLoginResponse = factory(root.ChronoSheetsApi.ApiClient, root.ChronoSheetsApi.CSClientSideUser);
  }
}(this, function(ApiClient, CSClientSideUser) {
  'use strict';

  /**
   * The CSDoLoginResponse model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CSDoLoginResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CSDoLoginResponse</code>.
   * A Response object containing important information that can be used after the user has logged in
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSDoLoginResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CSDoLoginResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSDoLoginResponse} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSDoLoginResponse} The populated <code>CSDoLoginResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('CSAuthToken'))
        obj.cSAuthToken = ApiClient.convertToType(data['CSAuthToken'], 'String');
      if (data.hasOwnProperty('LoggedInUser'))
        obj.loggedInUser = CSClientSideUser.constructFromObject(data['LoggedInUser']);
    }
    return obj;
  }

  /**
   * The ChronoSheets Auth Token.  Use this token for all subsequent requests to the API.  The Auth Token does these things: holds your session and gives you appropraite authorisation to access API endpoints based on your UserRoles
   * @member {String} cSAuthToken
   */
  exports.prototype.cSAuthToken = undefined;

  /**
   * An object containg all your account information
   * @member {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSClientSideUser} loggedInUser
   */
  exports.prototype.loggedInUser = undefined;

  return exports;

}));
