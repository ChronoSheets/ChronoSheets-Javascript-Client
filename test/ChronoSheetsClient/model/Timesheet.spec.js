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
    instance = new ChronoSheetsApi.Timesheet();
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

  describe('Timesheet', function() {
    it('should create an instance of Timesheet', function() {
      // uncomment below and update the code to test Timesheet
      //var instane = new ChronoSheetsApi.Timesheet();
      //expect(instance).to.be.a(ChronoSheetsApi.Timesheet);
    });

    it('should have the property timesheetId (base name: "TimesheetId")', function() {
      // uncomment below and update the code to test the property timesheetId
      //var instane = new ChronoSheetsApi.Timesheet();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "UserId")', function() {
      // uncomment below and update the code to test the property userId
      //var instane = new ChronoSheetsApi.Timesheet();
      //expect(instance).to.be();
    });

    it('should have the property jobId (base name: "JobId")', function() {
      // uncomment below and update the code to test the property jobId
      //var instane = new ChronoSheetsApi.Timesheet();
      //expect(instance).to.be();
    });

    it('should have the property taskId (base name: "TaskId")', function() {
      // uncomment below and update the code to test the property taskId
      //var instane = new ChronoSheetsApi.Timesheet();
      //expect(instance).to.be();
    });

    it('should have the property startDateTime (base name: "StartDateTime")', function() {
      // uncomment below and update the code to test the property startDateTime
      //var instane = new ChronoSheetsApi.Timesheet();
      //expect(instance).to.be();
    });

    it('should have the property endDateTime (base name: "EndDateTime")', function() {
      // uncomment below and update the code to test the property endDateTime
      //var instane = new ChronoSheetsApi.Timesheet();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "Description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new ChronoSheetsApi.Timesheet();
      //expect(instance).to.be();
    });

    it('should have the property tripId (base name: "TripId")', function() {
      // uncomment below and update the code to test the property tripId
      //var instane = new ChronoSheetsApi.Timesheet();
      //expect(instance).to.be();
    });

    it('should have the property fileAttachmentCount (base name: "FileAttachmentCount")', function() {
      // uncomment below and update the code to test the property fileAttachmentCount
      //var instane = new ChronoSheetsApi.Timesheet();
      //expect(instance).to.be();
    });

    it('should have the property payAmount (base name: "PayAmount")', function() {
      // uncomment below and update the code to test the property payAmount
      //var instane = new ChronoSheetsApi.Timesheet();
      //expect(instance).to.be();
    });

    it('should have the property overtimePayAmount (base name: "OvertimePayAmount")', function() {
      // uncomment below and update the code to test the property overtimePayAmount
      //var instane = new ChronoSheetsApi.Timesheet();
      //expect(instance).to.be();
    });

    it('should have the property includesOvertime (base name: "IncludesOvertime")', function() {
      // uncomment below and update the code to test the property includesOvertime
      //var instane = new ChronoSheetsApi.Timesheet();
      //expect(instance).to.be();
    });

  });

}));
