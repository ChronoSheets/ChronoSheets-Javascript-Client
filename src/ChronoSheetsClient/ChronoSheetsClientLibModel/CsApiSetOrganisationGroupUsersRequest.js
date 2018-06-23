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
    root.ChronoSheetsApi.CsApiSetOrganisationGroupUsersRequest = factory(root.ChronoSheetsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CsApiSetOrganisationGroupUsersRequest model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiSetOrganisationGroupUsersRequest
   * @version v1
   */

  /**
   * Constructs a new <code>CsApiSetOrganisationGroupUsersRequest</code>.
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiSetOrganisationGroupUsersRequest
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CsApiSetOrganisationGroupUsersRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiSetOrganisationGroupUsersRequest} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiSetOrganisationGroupUsersRequest} The populated <code>CsApiSetOrganisationGroupUsersRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('OrganisationGroupId')) {
        obj['OrganisationGroupId'] = ApiClient.convertToType(data['OrganisationGroupId'], 'Number');
      }
      if (data.hasOwnProperty('CsvUserIds')) {
        obj['CsvUserIds'] = ApiClient.convertToType(data['CsvUserIds'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} OrganisationGroupId
   */
  exports.prototype['OrganisationGroupId'] = undefined;
  /**
   * @member {String} CsvUserIds
   */
  exports.prototype['CsvUserIds'] = undefined;



  return exports;
}));

