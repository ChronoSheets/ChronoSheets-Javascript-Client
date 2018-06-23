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
    instance = new ChronoSheetsApi.CsApiUpdateOrganisationRequest();
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

  describe('CsApiUpdateOrganisationRequest', function() {
    it('should create an instance of CsApiUpdateOrganisationRequest', function() {
      // uncomment below and update the code to test CsApiUpdateOrganisationRequest
      //var instane = new ChronoSheetsApi.CsApiUpdateOrganisationRequest();
      //expect(instance).to.be.a(ChronoSheetsApi.CsApiUpdateOrganisationRequest);
    });

    it('should have the property organsationId (base name: "OrgansationId")', function() {
      // uncomment below and update the code to test the property organsationId
      //var instane = new ChronoSheetsApi.CsApiUpdateOrganisationRequest();
      //expect(instance).to.be();
    });

    it('should have the property organisationName (base name: "OrganisationName")', function() {
      // uncomment below and update the code to test the property organisationName
      //var instane = new ChronoSheetsApi.CsApiUpdateOrganisationRequest();
      //expect(instance).to.be();
    });

    it('should have the property addressLine01 (base name: "AddressLine01")', function() {
      // uncomment below and update the code to test the property addressLine01
      //var instane = new ChronoSheetsApi.CsApiUpdateOrganisationRequest();
      //expect(instance).to.be();
    });

    it('should have the property addressLine02 (base name: "AddressLine02")', function() {
      // uncomment below and update the code to test the property addressLine02
      //var instane = new ChronoSheetsApi.CsApiUpdateOrganisationRequest();
      //expect(instance).to.be();
    });

    it('should have the property organisationSuburb (base name: "OrganisationSuburb")', function() {
      // uncomment below and update the code to test the property organisationSuburb
      //var instane = new ChronoSheetsApi.CsApiUpdateOrganisationRequest();
      //expect(instance).to.be();
    });

    it('should have the property organisationState (base name: "OrganisationState")', function() {
      // uncomment below and update the code to test the property organisationState
      //var instane = new ChronoSheetsApi.CsApiUpdateOrganisationRequest();
      //expect(instance).to.be();
    });

    it('should have the property organisationPostcode (base name: "OrganisationPostcode")', function() {
      // uncomment below and update the code to test the property organisationPostcode
      //var instane = new ChronoSheetsApi.CsApiUpdateOrganisationRequest();
      //expect(instance).to.be();
    });

    it('should have the property organisationCountry (base name: "OrganisationCountry")', function() {
      // uncomment below and update the code to test the property organisationCountry
      //var instane = new ChronoSheetsApi.CsApiUpdateOrganisationRequest();
      //expect(instance).to.be();
    });

    it('should have the property organisationPhone (base name: "OrganisationPhone")', function() {
      // uncomment below and update the code to test the property organisationPhone
      //var instane = new ChronoSheetsApi.CsApiUpdateOrganisationRequest();
      //expect(instance).to.be();
    });

    it('should have the property organisationEmailAddress (base name: "OrganisationEmailAddress")', function() {
      // uncomment below and update the code to test the property organisationEmailAddress
      //var instane = new ChronoSheetsApi.CsApiUpdateOrganisationRequest();
      //expect(instance).to.be();
    });

  });

}));
