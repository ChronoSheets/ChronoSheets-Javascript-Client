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
    instance = new ChronoSheetsApi.CsApiUserForManagement();
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

  describe('CsApiUserForManagement', function() {
    it('should create an instance of CsApiUserForManagement', function() {
      // uncomment below and update the code to test CsApiUserForManagement
      //var instane = new ChronoSheetsApi.CsApiUserForManagement();
      //expect(instance).to.be.a(ChronoSheetsApi.CsApiUserForManagement);
    });

    it('should have the property emailAddress (base name: "EmailAddress")', function() {
      // uncomment below and update the code to test the property emailAddress
      //var instane = new ChronoSheetsApi.CsApiUserForManagement();
      //expect(instance).to.be();
    });

    it('should have the property isSubscribedToNewsletter (base name: "IsSubscribedToNewsletter")', function() {
      // uncomment below and update the code to test the property isSubscribedToNewsletter
      //var instane = new ChronoSheetsApi.CsApiUserForManagement();
      //expect(instance).to.be();
    });

    it('should have the property isAccountActive (base name: "IsAccountActive")', function() {
      // uncomment below and update the code to test the property isAccountActive
      //var instane = new ChronoSheetsApi.CsApiUserForManagement();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "Id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ChronoSheetsApi.CsApiUserForManagement();
      //expect(instance).to.be();
    });

    it('should have the property organisationId (base name: "OrganisationId")', function() {
      // uncomment below and update the code to test the property organisationId
      //var instane = new ChronoSheetsApi.CsApiUserForManagement();
      //expect(instance).to.be();
    });

    it('should have the property userName (base name: "UserName")', function() {
      // uncomment below and update the code to test the property userName
      //var instane = new ChronoSheetsApi.CsApiUserForManagement();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "FirstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instane = new ChronoSheetsApi.CsApiUserForManagement();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "LastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instane = new ChronoSheetsApi.CsApiUserForManagement();
      //expect(instance).to.be();
    });

    it('should have the property roles (base name: "Roles")', function() {
      // uncomment below and update the code to test the property roles
      //var instane = new ChronoSheetsApi.CsApiUserForManagement();
      //expect(instance).to.be();
    });

    it('should have the property alertSettings (base name: "AlertSettings")', function() {
      // uncomment below and update the code to test the property alertSettings
      //var instane = new ChronoSheetsApi.CsApiUserForManagement();
      //expect(instance).to.be();
    });

    it('should have the property setupWizardRequired (base name: "SetupWizardRequired")', function() {
      // uncomment below and update the code to test the property setupWizardRequired
      //var instane = new ChronoSheetsApi.CsApiUserForManagement();
      //expect(instance).to.be();
    });

    it('should have the property organisation (base name: "Organisation")', function() {
      // uncomment below and update the code to test the property organisation
      //var instane = new ChronoSheetsApi.CsApiUserForManagement();
      //expect(instance).to.be();
    });

  });

}));
