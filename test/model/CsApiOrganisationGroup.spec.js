/**
 * ChronoSheets API
 * An API for integrating into ChronoSheets timesheets
 *
 * OpenAPI spec version: v1
 * Contact: lachlan@chronosheets.com
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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ChronoSheetsApi);
  }
}(this, function(expect, ChronoSheetsApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ChronoSheetsApi.CsApiOrganisationGroup();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CsApiOrganisationGroup', function() {
    it('should create an instance of CsApiOrganisationGroup', function() {
      // uncomment below and update the code to test CsApiOrganisationGroup
      //var instane = new ChronoSheetsApi.CsApiOrganisationGroup();
      //expect(instance).to.be.a(ChronoSheetsApi.CsApiOrganisationGroup);
    });

    it('should have the property id (base name: "Id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ChronoSheetsApi.CsApiOrganisationGroup();
      //expect(instance).to.be();
    });

    it('should have the property organisationId (base name: "OrganisationId")', function() {
      // uncomment below and update the code to test the property organisationId
      //var instane = new ChronoSheetsApi.CsApiOrganisationGroup();
      //expect(instance).to.be();
    });

    it('should have the property organisationGroupName (base name: "OrganisationGroupName")', function() {
      // uncomment below and update the code to test the property organisationGroupName
      //var instane = new ChronoSheetsApi.CsApiOrganisationGroup();
      //expect(instance).to.be();
    });

    it('should have the property isDeleted (base name: "IsDeleted")', function() {
      // uncomment below and update the code to test the property isDeleted
      //var instane = new ChronoSheetsApi.CsApiOrganisationGroup();
      //expect(instance).to.be();
    });

  });

}));
