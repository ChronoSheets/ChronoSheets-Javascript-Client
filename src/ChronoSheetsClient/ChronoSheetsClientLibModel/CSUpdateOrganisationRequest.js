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
    root.ChronoSheetsApi.CSUpdateOrganisationRequest = factory(root.ChronoSheetsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CSUpdateOrganisationRequest model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CSUpdateOrganisationRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CSUpdateOrganisationRequest</code>.
   * Field for updating your Organisation
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSUpdateOrganisationRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CSUpdateOrganisationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSUpdateOrganisationRequest} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSUpdateOrganisationRequest} The populated <code>CSUpdateOrganisationRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('OrgansationId'))
        obj.organsationId = ApiClient.convertToType(data['OrgansationId'], 'Number');
      if (data.hasOwnProperty('OrganisationName'))
        obj.organisationName = ApiClient.convertToType(data['OrganisationName'], 'String');
      if (data.hasOwnProperty('AddressLine01'))
        obj.addressLine01 = ApiClient.convertToType(data['AddressLine01'], 'String');
      if (data.hasOwnProperty('AddressLine02'))
        obj.addressLine02 = ApiClient.convertToType(data['AddressLine02'], 'String');
      if (data.hasOwnProperty('OrganisationSuburb'))
        obj.organisationSuburb = ApiClient.convertToType(data['OrganisationSuburb'], 'String');
      if (data.hasOwnProperty('OrganisationState'))
        obj.organisationState = ApiClient.convertToType(data['OrganisationState'], 'String');
      if (data.hasOwnProperty('OrganisationPostcode'))
        obj.organisationPostcode = ApiClient.convertToType(data['OrganisationPostcode'], 'String');
      if (data.hasOwnProperty('OrganisationCountry'))
        obj.organisationCountry = ApiClient.convertToType(data['OrganisationCountry'], 'String');
      if (data.hasOwnProperty('OrganisationPhone'))
        obj.organisationPhone = ApiClient.convertToType(data['OrganisationPhone'], 'String');
      if (data.hasOwnProperty('OrganisationEmailAddress'))
        obj.organisationEmailAddress = ApiClient.convertToType(data['OrganisationEmailAddress'], 'String');
    }
    return obj;
  }

  /**
   * The Id of your Organisation.  This is validated based on your current Auth Token
   * @member {Number} organsationId
   */
  exports.prototype.organsationId = undefined;

  /**
   * The updated organisation name
   * @member {String} organisationName
   */
  exports.prototype.organisationName = undefined;

  /**
   * The updated Address Line 1 value
   * @member {String} addressLine01
   */
  exports.prototype.addressLine01 = undefined;

  /**
   * The updated Address Line 2 value
   * @member {String} addressLine02
   */
  exports.prototype.addressLine02 = undefined;

  /**
   * The updated address suburb
   * @member {String} organisationSuburb
   */
  exports.prototype.organisationSuburb = undefined;

  /**
   * The updated address state
   * @member {String} organisationState
   */
  exports.prototype.organisationState = undefined;

  /**
   * The updated address postcode
   * @member {String} organisationPostcode
   */
  exports.prototype.organisationPostcode = undefined;

  /**
   * The updated address country
   * @member {String} organisationCountry
   */
  exports.prototype.organisationCountry = undefined;

  /**
   * The updated contact phone number
   * @member {String} organisationPhone
   */
  exports.prototype.organisationPhone = undefined;

  /**
   * The update organisation email address
   * @member {String} organisationEmailAddress
   */
  exports.prototype.organisationEmailAddress = undefined;

  return exports;

}));
