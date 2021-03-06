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
    describe('CSRawReportItem', function() {
      beforeEach(function() {
        instance = new ChronoSheetsApi.CSRawReportItem();
      });

      it('should create an instance of CSRawReportItem', function() {
        // TODO: update the code to test CSRawReportItem
        expect(instance).to.be.a(ChronoSheetsApi.CSRawReportItem);
      });

      it('should have the property organisationId (base name: "OrganisationId")', function() {
        // TODO: update the code to test the property organisationId
        expect(instance).to.have.property('organisationId');
        // expect(instance.organisationId).to.be(expectedValueLiteral);
      });

      it('should have the property userId (base name: "UserId")', function() {
        // TODO: update the code to test the property userId
        expect(instance).to.have.property('userId');
        // expect(instance.userId).to.be(expectedValueLiteral);
      });

      it('should have the property username (base name: "Username")', function() {
        // TODO: update the code to test the property username
        expect(instance).to.have.property('username');
        // expect(instance.username).to.be(expectedValueLiteral);
      });

      it('should have the property emailAddress (base name: "EmailAddress")', function() {
        // TODO: update the code to test the property emailAddress
        expect(instance).to.have.property('emailAddress');
        // expect(instance.emailAddress).to.be(expectedValueLiteral);
      });

      it('should have the property jobCode (base name: "JobCode")', function() {
        // TODO: update the code to test the property jobCode
        expect(instance).to.have.property('jobCode');
        // expect(instance.jobCode).to.be(expectedValueLiteral);
      });

      it('should have the property taskName (base name: "TaskName")', function() {
        // TODO: update the code to test the property taskName
        expect(instance).to.have.property('taskName');
        // expect(instance.taskName).to.be(expectedValueLiteral);
      });

      it('should have the property clientName (base name: "ClientName")', function() {
        // TODO: update the code to test the property clientName
        expect(instance).to.have.property('clientName');
        // expect(instance.clientName).to.be(expectedValueLiteral);
      });

      it('should have the property projectName (base name: "ProjectName")', function() {
        // TODO: update the code to test the property projectName
        expect(instance).to.have.property('projectName');
        // expect(instance.projectName).to.be(expectedValueLiteral);
      });

      it('should have the property startDate (base name: "StartDate")', function() {
        // TODO: update the code to test the property startDate
        expect(instance).to.have.property('startDate');
        // expect(instance.startDate).to.be(expectedValueLiteral);
      });

      it('should have the property endDate (base name: "EndDate")', function() {
        // TODO: update the code to test the property endDate
        expect(instance).to.have.property('endDate');
        // expect(instance.endDate).to.be(expectedValueLiteral);
      });

      it('should have the property spanSeconds (base name: "SpanSeconds")', function() {
        // TODO: update the code to test the property spanSeconds
        expect(instance).to.have.property('spanSeconds');
        // expect(instance.spanSeconds).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "Description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property payAmount (base name: "PayAmount")', function() {
        // TODO: update the code to test the property payAmount
        expect(instance).to.have.property('payAmount');
        // expect(instance.payAmount).to.be(expectedValueLiteral);
      });

      it('should have the property payOvertimeAmount (base name: "PayOvertimeAmount")', function() {
        // TODO: update the code to test the property payOvertimeAmount
        expect(instance).to.have.property('payOvertimeAmount');
        // expect(instance.payOvertimeAmount).to.be(expectedValueLiteral);
      });

      it('should have the property tripCost (base name: "TripCost")', function() {
        // TODO: update the code to test the property tripCost
        expect(instance).to.have.property('tripCost');
        // expect(instance.tripCost).to.be(expectedValueLiteral);
      });

      it('should have the property tripDistanceMeters (base name: "TripDistanceMeters")', function() {
        // TODO: update the code to test the property tripDistanceMeters
        expect(instance).to.have.property('tripDistanceMeters');
        // expect(instance.tripDistanceMeters).to.be(expectedValueLiteral);
      });

      it('should have the property spanSecondsNormalTime (base name: "SpanSecondsNormalTime")', function() {
        // TODO: update the code to test the property spanSecondsNormalTime
        expect(instance).to.have.property('spanSecondsNormalTime');
        // expect(instance.spanSecondsNormalTime).to.be(expectedValueLiteral);
      });

      it('should have the property spanSecondsOvertime (base name: "SpanSecondsOvertime")', function() {
        // TODO: update the code to test the property spanSecondsOvertime
        expect(instance).to.have.property('spanSecondsOvertime');
        // expect(instance.spanSecondsOvertime).to.be(expectedValueLiteral);
      });

    });
  });

}));
