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
    describe('CSTimesheetAutomationWithOrgAndGeofence', function() {
      beforeEach(function() {
        instance = new ChronoSheetsApi.CSTimesheetAutomationWithOrgAndGeofence();
      });

      it('should create an instance of CSTimesheetAutomationWithOrgAndGeofence', function() {
        // TODO: update the code to test CSTimesheetAutomationWithOrgAndGeofence
        expect(instance).to.be.a(ChronoSheetsApi.CSTimesheetAutomationWithOrgAndGeofence);
      });

      it('should have the property orgId (base name: "OrgId")', function() {
        // TODO: update the code to test the property orgId
        expect(instance).to.have.property('orgId');
        // expect(instance.orgId).to.be(expectedValueLiteral);
      });

      it('should have the property geofenceName (base name: "GeofenceName")', function() {
        // TODO: update the code to test the property geofenceName
        expect(instance).to.have.property('geofenceName');
        // expect(instance.geofenceName).to.be(expectedValueLiteral);
      });

      it('should have the property coordinates (base name: "Coordinates")', function() {
        // TODO: update the code to test the property coordinates
        expect(instance).to.have.property('coordinates');
        // expect(instance.coordinates).to.be(expectedValueLiteral);
      });

      it('should have the property userId (base name: "UserId")', function() {
        // TODO: update the code to test the property userId
        expect(instance).to.have.property('userId');
        // expect(instance.userId).to.be(expectedValueLiteral);
      });

      it('should have the property userName (base name: "UserName")', function() {
        // TODO: update the code to test the property userName
        expect(instance).to.have.property('userName');
        // expect(instance.userName).to.be(expectedValueLiteral);
      });

      it('should have the property firstName (base name: "FirstName")', function() {
        // TODO: update the code to test the property firstName
        expect(instance).to.have.property('firstName');
        // expect(instance.firstName).to.be(expectedValueLiteral);
      });

      it('should have the property lastName (base name: "LastName")', function() {
        // TODO: update the code to test the property lastName
        expect(instance).to.have.property('lastName');
        // expect(instance.lastName).to.be(expectedValueLiteral);
      });

      it('should have the property automationId (base name: "AutomationId")', function() {
        // TODO: update the code to test the property automationId
        expect(instance).to.have.property('automationId');
        // expect(instance.automationId).to.be(expectedValueLiteral);
      });

      it('should have the property automationActionType (base name: "AutomationActionType")', function() {
        // TODO: update the code to test the property automationActionType
        expect(instance).to.have.property('automationActionType');
        // expect(instance.automationActionType).to.be(expectedValueLiteral);
      });

      it('should have the property created (base name: "Created")', function() {
        // TODO: update the code to test the property created
        expect(instance).to.have.property('created');
        // expect(instance.created).to.be(expectedValueLiteral);
      });

      it('should have the property latitude (base name: "Latitude")', function() {
        // TODO: update the code to test the property latitude
        expect(instance).to.have.property('latitude');
        // expect(instance.latitude).to.be(expectedValueLiteral);
      });

      it('should have the property longitude (base name: "Longitude")', function() {
        // TODO: update the code to test the property longitude
        expect(instance).to.have.property('longitude');
        // expect(instance.longitude).to.be(expectedValueLiteral);
      });

      it('should have the property isProcessed (base name: "IsProcessed")', function() {
        // TODO: update the code to test the property isProcessed
        expect(instance).to.have.property('isProcessed');
        // expect(instance.isProcessed).to.be(expectedValueLiteral);
      });

      it('should have the property expires (base name: "Expires")', function() {
        // TODO: update the code to test the property expires
        expect(instance).to.have.property('expires');
        // expect(instance.expires).to.be(expectedValueLiteral);
      });

      it('should have the property clientDateTime (base name: "ClientDateTime")', function() {
        // TODO: update the code to test the property clientDateTime
        expect(instance).to.have.property('clientDateTime');
        // expect(instance.clientDateTime).to.be(expectedValueLiteral);
      });

    });
  });

}));
