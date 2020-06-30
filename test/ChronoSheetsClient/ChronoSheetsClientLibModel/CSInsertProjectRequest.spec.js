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
    describe('CSInsertProjectRequest', function() {
      beforeEach(function() {
        instance = new ChronoSheetsApi.CSInsertProjectRequest();
      });

      it('should create an instance of CSInsertProjectRequest', function() {
        // TODO: update the code to test CSInsertProjectRequest
        expect(instance).to.be.a(ChronoSheetsApi.CSInsertProjectRequest);
      });

      it('should have the property clientId (base name: "ClientId")', function() {
        // TODO: update the code to test the property clientId
        expect(instance).to.have.property('clientId');
        // expect(instance.clientId).to.be(expectedValueLiteral);
      });

      it('should have the property projectName (base name: "ProjectName")', function() {
        // TODO: update the code to test the property projectName
        expect(instance).to.have.property('projectName');
        // expect(instance.projectName).to.be(expectedValueLiteral);
      });

      it('should have the property costEstimation (base name: "CostEstimation")', function() {
        // TODO: update the code to test the property costEstimation
        expect(instance).to.have.property('costEstimation');
        // expect(instance.costEstimation).to.be(expectedValueLiteral);
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

    });
  });

}));
