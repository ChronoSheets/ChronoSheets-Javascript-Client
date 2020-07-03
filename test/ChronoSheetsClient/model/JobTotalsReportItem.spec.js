/**
 * ChronoSheets API
 * <div style='font-size: 14px!important;font-family: Open Sans,sans-serif!important;color: #3b4151!important;'><p>      ChronoSheets is a flexible timesheet solution for small to medium businesses, it is free for small teams of up to 3 and there are iOS and Android apps available.  Use the ChronoSheets API to create your own custom integrations.  Before starting, sign up for a ChronoSheets account at <a target='_BLANK' href='http://tsheets.xyz/signup'>http://tsheets.xyz/signup</a>.  </p></div><div id='cs-extra-info'></div>
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/ChronoSheetsClient/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/ChronoSheetsClient/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ChronoSheetsApi);
  }
}(this, function(expect, ChronoSheetsApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ChronoSheetsApi.JobTotalsReportItem();
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

  describe('JobTotalsReportItem', function() {
    it('should create an instance of JobTotalsReportItem', function() {
      // uncomment below and update the code to test JobTotalsReportItem
      //var instane = new ChronoSheetsApi.JobTotalsReportItem();
      //expect(instance).to.be.a(ChronoSheetsApi.JobTotalsReportItem);
    });

    it('should have the property organisationId (base name: "OrganisationId")', function() {
      // uncomment below and update the code to test the property organisationId
      //var instane = new ChronoSheetsApi.JobTotalsReportItem();
      //expect(instance).to.be();
    });

    it('should have the property jobId (base name: "JobId")', function() {
      // uncomment below and update the code to test the property jobId
      //var instane = new ChronoSheetsApi.JobTotalsReportItem();
      //expect(instance).to.be();
    });

    it('should have the property jobCode (base name: "JobCode")', function() {
      // uncomment below and update the code to test the property jobCode
      //var instane = new ChronoSheetsApi.JobTotalsReportItem();
      //expect(instance).to.be();
    });

    it('should have the property clientId (base name: "ClientId")', function() {
      // uncomment below and update the code to test the property clientId
      //var instane = new ChronoSheetsApi.JobTotalsReportItem();
      //expect(instance).to.be();
    });

    it('should have the property clientName (base name: "ClientName")', function() {
      // uncomment below and update the code to test the property clientName
      //var instane = new ChronoSheetsApi.JobTotalsReportItem();
      //expect(instance).to.be();
    });

    it('should have the property projectId (base name: "ProjectId")', function() {
      // uncomment below and update the code to test the property projectId
      //var instane = new ChronoSheetsApi.JobTotalsReportItem();
      //expect(instance).to.be();
    });

    it('should have the property projectName (base name: "ProjectName")', function() {
      // uncomment below and update the code to test the property projectName
      //var instane = new ChronoSheetsApi.JobTotalsReportItem();
      //expect(instance).to.be();
    });

    it('should have the property spanSeconds (base name: "SpanSeconds")', function() {
      // uncomment below and update the code to test the property spanSeconds
      //var instane = new ChronoSheetsApi.JobTotalsReportItem();
      //expect(instance).to.be();
    });

  });

}));
