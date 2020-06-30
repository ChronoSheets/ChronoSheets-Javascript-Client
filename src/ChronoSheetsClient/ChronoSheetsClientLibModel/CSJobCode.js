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
    root.ChronoSheetsApi.CSJobCode = factory(root.ChronoSheetsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CSJobCode model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CSJobCode
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CSJobCode</code>.
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSJobCode
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CSJobCode</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSJobCode} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSJobCode} The populated <code>CSJobCode</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Id'))
        obj.id = ApiClient.convertToType(data['Id'], 'Number');
      if (data.hasOwnProperty('Code'))
        obj.code = ApiClient.convertToType(data['Code'], 'String');
      if (data.hasOwnProperty('Client'))
        obj.client = ApiClient.convertToType(data['Client'], 'String');
      if (data.hasOwnProperty('ClientId'))
        obj.clientId = ApiClient.convertToType(data['ClientId'], 'Number');
      if (data.hasOwnProperty('Project'))
        obj.project = ApiClient.convertToType(data['Project'], 'String');
      if (data.hasOwnProperty('ProjectId'))
        obj.projectId = ApiClient.convertToType(data['ProjectId'], 'Number');
      if (data.hasOwnProperty('OrganisationId'))
        obj.organisationId = ApiClient.convertToType(data['OrganisationId'], 'Number');
      if (data.hasOwnProperty('IsDeleted'))
        obj.isDeleted = ApiClient.convertToType(data['IsDeleted'], 'Boolean');
    }
    return obj;
  }

  /**
   * The ID of the job code (not the code itself)
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * The job code itself
   * @member {String} code
   */
  exports.prototype.code = undefined;

  /**
   * The name of the client
   * @member {String} client
   */
  exports.prototype.client = undefined;

  /**
   * The ID of the client
   * @member {Number} clientId
   */
  exports.prototype.clientId = undefined;

  /**
   * The name of the project
   * @member {String} project
   */
  exports.prototype.project = undefined;

  /**
   * The ID of the project
   * @member {Number} projectId
   */
  exports.prototype.projectId = undefined;

  /**
   * Your organisation ID
   * @member {Number} organisationId
   */
  exports.prototype.organisationId = undefined;

  /**
   * A flag indicating whether or not the job code has been marked as deleted
   * @member {Boolean} isDeleted
   */
  exports.prototype.isDeleted = undefined;

  return exports;

}));
