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
    describe('CSTimesheetFileAttachment', function() {
      beforeEach(function() {
        instance = new ChronoSheetsApi.CSTimesheetFileAttachment();
      });

      it('should create an instance of CSTimesheetFileAttachment', function() {
        // TODO: update the code to test CSTimesheetFileAttachment
        expect(instance).to.be.a(ChronoSheetsApi.CSTimesheetFileAttachment);
      });

      it('should have the property timesheetId (base name: "TimesheetId")', function() {
        // TODO: update the code to test the property timesheetId
        expect(instance).to.have.property('timesheetId');
        // expect(instance.timesheetId).to.be(expectedValueLiteral);
      });

      it('should have the property documentS3SignedUrl (base name: "DocumentS3SignedUrl")', function() {
        // TODO: update the code to test the property documentS3SignedUrl
        expect(instance).to.have.property('documentS3SignedUrl');
        // expect(instance.documentS3SignedUrl).to.be(expectedValueLiteral);
      });

      it('should have the property imageLargeS3SignedUrl (base name: "ImageLargeS3SignedUrl")', function() {
        // TODO: update the code to test the property imageLargeS3SignedUrl
        expect(instance).to.have.property('imageLargeS3SignedUrl');
        // expect(instance.imageLargeS3SignedUrl).to.be(expectedValueLiteral);
      });

      it('should have the property imageMediumS3SignedUrl (base name: "ImageMediumS3SignedUrl")', function() {
        // TODO: update the code to test the property imageMediumS3SignedUrl
        expect(instance).to.have.property('imageMediumS3SignedUrl');
        // expect(instance.imageMediumS3SignedUrl).to.be(expectedValueLiteral);
      });

      it('should have the property imageSmallS3SignedUrl (base name: "ImageSmallS3SignedUrl")', function() {
        // TODO: update the code to test the property imageSmallS3SignedUrl
        expect(instance).to.have.property('imageSmallS3SignedUrl');
        // expect(instance.imageSmallS3SignedUrl).to.be(expectedValueLiteral);
      });

      it('should have the property timesheetStart (base name: "TimesheetStart")', function() {
        // TODO: update the code to test the property timesheetStart
        expect(instance).to.have.property('timesheetStart');
        // expect(instance.timesheetStart).to.be(expectedValueLiteral);
      });

      it('should have the property timesheetEnd (base name: "TimesheetEnd")', function() {
        // TODO: update the code to test the property timesheetEnd
        expect(instance).to.have.property('timesheetEnd');
        // expect(instance.timesheetEnd).to.be(expectedValueLiteral);
      });

      it('should have the property fileAttachmentId (base name: "FileAttachmentId")', function() {
        // TODO: update the code to test the property fileAttachmentId
        expect(instance).to.have.property('fileAttachmentId');
        // expect(instance.fileAttachmentId).to.be(expectedValueLiteral);
      });

      it('should have the property userId (base name: "UserId")', function() {
        // TODO: update the code to test the property userId
        expect(instance).to.have.property('userId');
        // expect(instance.userId).to.be(expectedValueLiteral);
      });

      it('should have the property orgId (base name: "OrgId")', function() {
        // TODO: update the code to test the property orgId
        expect(instance).to.have.property('orgId');
        // expect(instance.orgId).to.be(expectedValueLiteral);
      });

      it('should have the property mobilePlatform (base name: "MobilePlatform")', function() {
        // TODO: update the code to test the property mobilePlatform
        expect(instance).to.have.property('mobilePlatform');
        // expect(instance.mobilePlatform).to.be(expectedValueLiteral);
      });

      it('should have the property attachmentType (base name: "AttachmentType")', function() {
        // TODO: update the code to test the property attachmentType
        expect(instance).to.have.property('attachmentType');
        // expect(instance.attachmentType).to.be(expectedValueLiteral);
      });

      it('should have the property notes (base name: "Notes")', function() {
        // TODO: update the code to test the property notes
        expect(instance).to.have.property('notes');
        // expect(instance.notes).to.be(expectedValueLiteral);
      });

      it('should have the property nonImageFilePath (base name: "NonImageFilePath")', function() {
        // TODO: update the code to test the property nonImageFilePath
        expect(instance).to.have.property('nonImageFilePath');
        // expect(instance.nonImageFilePath).to.be(expectedValueLiteral);
      });

      it('should have the property imageLargeFilePath (base name: "ImageLargeFilePath")', function() {
        // TODO: update the code to test the property imageLargeFilePath
        expect(instance).to.have.property('imageLargeFilePath');
        // expect(instance.imageLargeFilePath).to.be(expectedValueLiteral);
      });

      it('should have the property imageMediumFilePath (base name: "ImageMediumFilePath")', function() {
        // TODO: update the code to test the property imageMediumFilePath
        expect(instance).to.have.property('imageMediumFilePath');
        // expect(instance.imageMediumFilePath).to.be(expectedValueLiteral);
      });

      it('should have the property imageSmallFilePath (base name: "ImageSmallFilePath")', function() {
        // TODO: update the code to test the property imageSmallFilePath
        expect(instance).to.have.property('imageSmallFilePath');
        // expect(instance.imageSmallFilePath).to.be(expectedValueLiteral);
      });

      it('should have the property originalFileName (base name: "OriginalFileName")', function() {
        // TODO: update the code to test the property originalFileName
        expect(instance).to.have.property('originalFileName');
        // expect(instance.originalFileName).to.be(expectedValueLiteral);
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

      it('should have the property dateUploaded (base name: "DateUploaded")', function() {
        // TODO: update the code to test the property dateUploaded
        expect(instance).to.have.property('dateUploaded');
        // expect(instance.dateUploaded).to.be(expectedValueLiteral);
      });

      it('should have the property dateImageCaptured (base name: "DateImageCaptured")', function() {
        // TODO: update the code to test the property dateImageCaptured
        expect(instance).to.have.property('dateImageCaptured');
        // expect(instance.dateImageCaptured).to.be(expectedValueLiteral);
      });

      it('should have the property storageAllocationBytes (base name: "StorageAllocationBytes")', function() {
        // TODO: update the code to test the property storageAllocationBytes
        expect(instance).to.have.property('storageAllocationBytes');
        // expect(instance.storageAllocationBytes).to.be(expectedValueLiteral);
      });

      it('should have the property audioDurationSeconds (base name: "AudioDurationSeconds")', function() {
        // TODO: update the code to test the property audioDurationSeconds
        expect(instance).to.have.property('audioDurationSeconds');
        // expect(instance.audioDurationSeconds).to.be(expectedValueLiteral);
      });

    });
  });

}));
