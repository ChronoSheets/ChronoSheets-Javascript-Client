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
    instance = new ChronoSheetsApi.Transcription();
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

  describe('Transcription', function() {
    it('should create an instance of Transcription', function() {
      // uncomment below and update the code to test Transcription
      //var instane = new ChronoSheetsApi.Transcription();
      //expect(instance).to.be.a(ChronoSheetsApi.Transcription);
    });

    it('should have the property id (base name: "Id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ChronoSheetsApi.Transcription();
      //expect(instance).to.be();
    });

    it('should have the property orgId (base name: "OrgId")', function() {
      // uncomment below and update the code to test the property orgId
      //var instane = new ChronoSheetsApi.Transcription();
      //expect(instance).to.be();
    });

    it('should have the property fileAttachmentId (base name: "FileAttachmentId")', function() {
      // uncomment below and update the code to test the property fileAttachmentId
      //var instane = new ChronoSheetsApi.Transcription();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "Created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new ChronoSheetsApi.Transcription();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "Status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new ChronoSheetsApi.Transcription();
      //expect(instance).to.be();
    });

    it('should have the property mediaType (base name: "MediaType")', function() {
      // uncomment below and update the code to test the property mediaType
      //var instane = new ChronoSheetsApi.Transcription();
      //expect(instance).to.be();
    });

    it('should have the property contents (base name: "Contents")', function() {
      // uncomment below and update the code to test the property contents
      //var instane = new ChronoSheetsApi.Transcription();
      //expect(instance).to.be();
    });

  });

}));
