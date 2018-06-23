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
    instance = new ChronoSheetsApi.CsApiUpdateOrganisationResponse();
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

  describe('CsApiUpdateOrganisationResponse', function() {
    it('should create an instance of CsApiUpdateOrganisationResponse', function() {
      // uncomment below and update the code to test CsApiUpdateOrganisationResponse
      //var instane = new ChronoSheetsApi.CsApiUpdateOrganisationResponse();
      //expect(instance).to.be.a(ChronoSheetsApi.CsApiUpdateOrganisationResponse);
    });

    it('should have the property validationErrors (base name: "ValidationErrors")', function() {
      // uncomment below and update the code to test the property validationErrors
      //var instane = new ChronoSheetsApi.CsApiUpdateOrganisationResponse();
      //expect(instance).to.be();
    });

  });

}));
