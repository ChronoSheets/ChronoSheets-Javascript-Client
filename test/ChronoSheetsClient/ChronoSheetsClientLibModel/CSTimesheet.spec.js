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
    // AMD.
    define(['expect.js', '../../../src/ChronoSheetsClient/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/ChronoSheetsClient/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ChronoSheetsApi);
  }
}(this, function(expect, ChronoSheetsApi) {
  'use strict';

  var instance;

  describe('ChronoSheetsClient', function() {
    describe('CSTimesheet', function() {
      beforeEach(function() {
        instance = new ChronoSheetsApi.CSTimesheet();
      });

      it('should create an instance of CSTimesheet', function() {
        // TODO: update the code to test CSTimesheet
        expect(instance).to.be.a(ChronoSheetsApi.CSTimesheet);
      });

      it('should have the property timesheetId (base name: "TimesheetId")', function() {
        // TODO: update the code to test the property timesheetId
        expect(instance).to.have.property('timesheetId');
        // expect(instance.timesheetId).to.be(expectedValueLiteral);
      });

      it('should have the property userId (base name: "UserId")', function() {
        // TODO: update the code to test the property userId
        expect(instance).to.have.property('userId');
        // expect(instance.userId).to.be(expectedValueLiteral);
      });

      it('should have the property jobId (base name: "JobId")', function() {
        // TODO: update the code to test the property jobId
        expect(instance).to.have.property('jobId');
        // expect(instance.jobId).to.be(expectedValueLiteral);
      });

      it('should have the property taskId (base name: "TaskId")', function() {
        // TODO: update the code to test the property taskId
        expect(instance).to.have.property('taskId');
        // expect(instance.taskId).to.be(expectedValueLiteral);
      });

      it('should have the property startDateTime (base name: "StartDateTime")', function() {
        // TODO: update the code to test the property startDateTime
        expect(instance).to.have.property('startDateTime');
        // expect(instance.startDateTime).to.be(expectedValueLiteral);
      });

      it('should have the property endDateTime (base name: "EndDateTime")', function() {
        // TODO: update the code to test the property endDateTime
        expect(instance).to.have.property('endDateTime');
        // expect(instance.endDateTime).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "Description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property tripId (base name: "TripId")', function() {
        // TODO: update the code to test the property tripId
        expect(instance).to.have.property('tripId');
        // expect(instance.tripId).to.be(expectedValueLiteral);
      });

      it('should have the property fileAttachmentCount (base name: "FileAttachmentCount")', function() {
        // TODO: update the code to test the property fileAttachmentCount
        expect(instance).to.have.property('fileAttachmentCount');
        // expect(instance.fileAttachmentCount).to.be(expectedValueLiteral);
      });

      it('should have the property payAmount (base name: "PayAmount")', function() {
        // TODO: update the code to test the property payAmount
        expect(instance).to.have.property('payAmount');
        // expect(instance.payAmount).to.be(expectedValueLiteral);
      });

      it('should have the property overtimePayAmount (base name: "OvertimePayAmount")', function() {
        // TODO: update the code to test the property overtimePayAmount
        expect(instance).to.have.property('overtimePayAmount');
        // expect(instance.overtimePayAmount).to.be(expectedValueLiteral);
      });

      it('should have the property includesOvertime (base name: "IncludesOvertime")', function() {
        // TODO: update the code to test the property includesOvertime
        expect(instance).to.have.property('includesOvertime');
        // expect(instance.includesOvertime).to.be(expectedValueLiteral);
      });

    });
  });

}));
