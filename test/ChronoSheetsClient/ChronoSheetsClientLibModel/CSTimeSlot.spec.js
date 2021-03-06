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
    describe('CSTimeSlot', function() {
      beforeEach(function() {
        instance = new ChronoSheetsApi.CSTimeSlot();
      });

      it('should create an instance of CSTimeSlot', function() {
        // TODO: update the code to test CSTimeSlot
        expect(instance).to.be.a(ChronoSheetsApi.CSTimeSlot);
      });

      it('should have the property dayType (base name: "DayType")', function() {
        // TODO: update the code to test the property dayType
        expect(instance).to.have.property('dayType');
        // expect(instance.dayType).to.be(expectedValueLiteral);
      });

      it('should have the property usualHourId (base name: "UsualHourId")', function() {
        // TODO: update the code to test the property usualHourId
        expect(instance).to.have.property('usualHourId');
        // expect(instance.usualHourId).to.be(expectedValueLiteral);
      });

      it('should have the property startHour (base name: "StartHour")', function() {
        // TODO: update the code to test the property startHour
        expect(instance).to.have.property('startHour');
        // expect(instance.startHour).to.be(expectedValueLiteral);
      });

      it('should have the property startMinute (base name: "StartMinute")', function() {
        // TODO: update the code to test the property startMinute
        expect(instance).to.have.property('startMinute');
        // expect(instance.startMinute).to.be(expectedValueLiteral);
      });

      it('should have the property endHour (base name: "EndHour")', function() {
        // TODO: update the code to test the property endHour
        expect(instance).to.have.property('endHour');
        // expect(instance.endHour).to.be(expectedValueLiteral);
      });

      it('should have the property endMinute (base name: "EndMinute")', function() {
        // TODO: update the code to test the property endMinute
        expect(instance).to.have.property('endMinute');
        // expect(instance.endMinute).to.be(expectedValueLiteral);
      });

      it('should have the property isValid (base name: "IsValid")', function() {
        // TODO: update the code to test the property isValid
        expect(instance).to.have.property('isValid');
        // expect(instance.isValid).to.be(expectedValueLiteral);
      });

    });
  });

}));
