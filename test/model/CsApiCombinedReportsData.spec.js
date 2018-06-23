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
    instance = new ChronoSheetsApi.CsApiCombinedReportsData();
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

  describe('CsApiCombinedReportsData', function() {
    it('should create an instance of CsApiCombinedReportsData', function() {
      // uncomment below and update the code to test CsApiCombinedReportsData
      //var instane = new ChronoSheetsApi.CsApiCombinedReportsData();
      //expect(instance).to.be.a(ChronoSheetsApi.CsApiCombinedReportsData);
    });

    it('should have the property seriesJobCodes (base name: "SeriesJobCodes")', function() {
      // uncomment below and update the code to test the property seriesJobCodes
      //var instane = new ChronoSheetsApi.CsApiCombinedReportsData();
      //expect(instance).to.be();
    });

    it('should have the property seriesTasks (base name: "SeriesTasks")', function() {
      // uncomment below and update the code to test the property seriesTasks
      //var instane = new ChronoSheetsApi.CsApiCombinedReportsData();
      //expect(instance).to.be();
    });

    it('should have the property seriesClients (base name: "SeriesClients")', function() {
      // uncomment below and update the code to test the property seriesClients
      //var instane = new ChronoSheetsApi.CsApiCombinedReportsData();
      //expect(instance).to.be();
    });

    it('should have the property seriesProjects (base name: "SeriesProjects")', function() {
      // uncomment below and update the code to test the property seriesProjects
      //var instane = new ChronoSheetsApi.CsApiCombinedReportsData();
      //expect(instance).to.be();
    });

    it('should have the property totalsJobCodes (base name: "TotalsJobCodes")', function() {
      // uncomment below and update the code to test the property totalsJobCodes
      //var instane = new ChronoSheetsApi.CsApiCombinedReportsData();
      //expect(instance).to.be();
    });

    it('should have the property totalsTasks (base name: "TotalsTasks")', function() {
      // uncomment below and update the code to test the property totalsTasks
      //var instane = new ChronoSheetsApi.CsApiCombinedReportsData();
      //expect(instance).to.be();
    });

    it('should have the property totalsClients (base name: "TotalsClients")', function() {
      // uncomment below and update the code to test the property totalsClients
      //var instane = new ChronoSheetsApi.CsApiCombinedReportsData();
      //expect(instance).to.be();
    });

    it('should have the property totalsProjects (base name: "TotalsProjects")', function() {
      // uncomment below and update the code to test the property totalsProjects
      //var instane = new ChronoSheetsApi.CsApiCombinedReportsData();
      //expect(instance).to.be();
    });

  });

}));
