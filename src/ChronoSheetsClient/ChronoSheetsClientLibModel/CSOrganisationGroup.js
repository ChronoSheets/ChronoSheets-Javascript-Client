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
    root.ChronoSheetsApi.CSOrganisationGroup = factory(root.ChronoSheetsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CSOrganisationGroup model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CSOrganisationGroup
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CSOrganisationGroup</code>.
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSOrganisationGroup
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>CSOrganisationGroup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSOrganisationGroup} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSOrganisationGroup} The populated <code>CSOrganisationGroup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Id')) {
        obj['Id'] = ApiClient.convertToType(data['Id'], 'Number');
      }
      if (data.hasOwnProperty('OrganisationId')) {
        obj['OrganisationId'] = ApiClient.convertToType(data['OrganisationId'], 'Number');
      }
      if (data.hasOwnProperty('OrganisationGroupName')) {
        obj['OrganisationGroupName'] = ApiClient.convertToType(data['OrganisationGroupName'], 'String');
      }
      if (data.hasOwnProperty('IsDeleted')) {
        obj['IsDeleted'] = ApiClient.convertToType(data['IsDeleted'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Number} Id
   */
  exports.prototype['Id'] = undefined;
  /**
   * @member {Number} OrganisationId
   */
  exports.prototype['OrganisationId'] = undefined;
  /**
   * @member {String} OrganisationGroupName
   */
  exports.prototype['OrganisationGroupName'] = undefined;
  /**
   * @member {Boolean} IsDeleted
   */
  exports.prototype['IsDeleted'] = undefined;



  return exports;
}));


