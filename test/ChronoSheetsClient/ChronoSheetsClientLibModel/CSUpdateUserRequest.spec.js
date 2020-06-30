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
    describe('CSUpdateUserRequest', function() {
      beforeEach(function() {
        instance = new ChronoSheetsApi.CSUpdateUserRequest();
      });

      it('should create an instance of CSUpdateUserRequest', function() {
        // TODO: update the code to test CSUpdateUserRequest
        expect(instance).to.be.a(ChronoSheetsApi.CSUpdateUserRequest);
      });

      it('should have the property userId (base name: "UserId")', function() {
        // TODO: update the code to test the property userId
        expect(instance).to.have.property('userId');
        // expect(instance.userId).to.be(expectedValueLiteral);
      });

      it('should have the property emailAddress (base name: "EmailAddress")', function() {
        // TODO: update the code to test the property emailAddress
        expect(instance).to.have.property('emailAddress');
        // expect(instance.emailAddress).to.be(expectedValueLiteral);
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

      it('should have the property isSubscribedToNewsletter (base name: "IsSubscribedToNewsletter")', function() {
        // TODO: update the code to test the property isSubscribedToNewsletter
        expect(instance).to.have.property('isSubscribedToNewsletter');
        // expect(instance.isSubscribedToNewsletter).to.be(expectedValueLiteral);
      });

      it('should have the property isAccountActive (base name: "IsAccountActive")', function() {
        // TODO: update the code to test the property isAccountActive
        expect(instance).to.have.property('isAccountActive');
        // expect(instance.isAccountActive).to.be(expectedValueLiteral);
      });

      it('should have the property roles (base name: "Roles")', function() {
        // TODO: update the code to test the property roles
        expect(instance).to.have.property('roles');
        // expect(instance.roles).to.be(expectedValueLiteral);
      });

      it('should have the property alertSettings (base name: "AlertSettings")', function() {
        // TODO: update the code to test the property alertSettings
        expect(instance).to.have.property('alertSettings');
        // expect(instance.alertSettings).to.be(expectedValueLiteral);
      });

    });
  });

}));
