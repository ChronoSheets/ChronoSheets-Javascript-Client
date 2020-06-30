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
    root.ChronoSheetsApi.CSSaveVehicleRequest = factory(root.ChronoSheetsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CSSaveVehicleRequest model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CSSaveVehicleRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CSSaveVehicleRequest</code>.
   * Fields for saving an existing Vehicle
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSSaveVehicleRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CSSaveVehicleRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSSaveVehicleRequest} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSSaveVehicleRequest} The populated <code>CSSaveVehicleRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Id'))
        obj.id = ApiClient.convertToType(data['Id'], 'Number');
      if (data.hasOwnProperty('Name'))
        obj.name = ApiClient.convertToType(data['Name'], 'String');
      if (data.hasOwnProperty('CostPerKilometer'))
        obj.costPerKilometer = ApiClient.convertToType(data['CostPerKilometer'], 'Number');
      if (data.hasOwnProperty('Make'))
        obj.make = ApiClient.convertToType(data['Make'], 'String');
      if (data.hasOwnProperty('Model'))
        obj.model = ApiClient.convertToType(data['Model'], 'String');
      if (data.hasOwnProperty('Year'))
        obj.year = ApiClient.convertToType(data['Year'], 'String');
      if (data.hasOwnProperty('LicencePlateNumber'))
        obj.licencePlateNumber = ApiClient.convertToType(data['LicencePlateNumber'], 'String');
      if (data.hasOwnProperty('LinkedOrgGroupIds'))
        obj.linkedOrgGroupIds = ApiClient.convertToType(data['LinkedOrgGroupIds'], ['Number']);
      if (data.hasOwnProperty('IsDeleted'))
        obj.isDeleted = ApiClient.convertToType(data['IsDeleted'], 'Boolean');
    }
    return obj;
  }

  /**
   * The Id of the Vehicle that is being updated
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * The Name of the Vehicle
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * The fuel cost / running cost of the Vehicle, measured per kilometer
   * @member {Number} costPerKilometer
   */
  exports.prototype.costPerKilometer = undefined;

  /**
   * The make of the Vehicle
   * @member {String} make
   */
  exports.prototype.make = undefined;

  /**
   * The model of the Vehicle
   * @member {String} model
   */
  exports.prototype.model = undefined;

  /**
   * The year the Vehicle was made
   * @member {String} year
   */
  exports.prototype.year = undefined;

  /**
   * The Licence Plate Number of the Vehicle
   * @member {String} licencePlateNumber
   */
  exports.prototype.licencePlateNumber = undefined;

  /**
   * Optionally restrict this Vehicle to only be available to employees within these Organisation Groups
   * @member {Array.<Number>} linkedOrgGroupIds
   */
  exports.prototype.linkedOrgGroupIds = undefined;

  /**
   * Whether or not this Vehicle is to be marked as deleted
   * @member {Boolean} isDeleted
   */
  exports.prototype.isDeleted = undefined;

  return exports;

}));
