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
    describe('CSUsualHoursDay', function() {
      beforeEach(function() {
        instance = new ChronoSheetsApi.CSUsualHoursDay();
      });

      it('should create an instance of CSUsualHoursDay', function() {
        // TODO: update the code to test CSUsualHoursDay
        expect(instance).to.be.a(ChronoSheetsApi.CSUsualHoursDay);
      });

      it('should have the property dayType (base name: "DayType")', function() {
        // TODO: update the code to test the property dayType
        expect(instance).to.have.property('dayType');
        // expect(instance.dayType).to.be(expectedValueLiteral);
      });

      it('should have the property timeSlots (base name: "TimeSlots")', function() {
        // TODO: update the code to test the property timeSlots
        expect(instance).to.have.property('timeSlots');
        // expect(instance.timeSlots).to.be(expectedValueLiteral);
      });

      it('should have the property deleteUsualHours (base name: "DeleteUsualHours")', function() {
        // TODO: update the code to test the property deleteUsualHours
        expect(instance).to.have.property('deleteUsualHours');
        // expect(instance.deleteUsualHours).to.be(expectedValueLiteral);
      });

    });
  });

}));
