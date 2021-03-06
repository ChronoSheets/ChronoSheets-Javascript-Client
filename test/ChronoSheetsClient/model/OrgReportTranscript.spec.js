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
    instance = new ChronoSheetsApi.OrgReportTranscript();
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

  describe('OrgReportTranscript', function() {
    it('should create an instance of OrgReportTranscript', function() {
      // uncomment below and update the code to test OrgReportTranscript
      //var instane = new ChronoSheetsApi.OrgReportTranscript();
      //expect(instance).to.be.a(ChronoSheetsApi.OrgReportTranscript);
    });

    it('should have the property finishedJob (base name: "FinishedJob")', function() {
      // uncomment below and update the code to test the property finishedJob
      //var instane = new ChronoSheetsApi.OrgReportTranscript();
      //expect(instance).to.be();
    });

    it('should have the property completedProcessing (base name: "CompletedProcessing")', function() {
      // uncomment below and update the code to test the property completedProcessing
      //var instane = new ChronoSheetsApi.OrgReportTranscript();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "Created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new ChronoSheetsApi.OrgReportTranscript();
      //expect(instance).to.be();
    });

    it('should have the property startedProcessing (base name: "StartedProcessing")', function() {
      // uncomment below and update the code to test the property startedProcessing
      //var instane = new ChronoSheetsApi.OrgReportTranscript();
      //expect(instance).to.be();
    });

    it('should have the property transcriptionId (base name: "TranscriptionId")', function() {
      // uncomment below and update the code to test the property transcriptionId
      //var instane = new ChronoSheetsApi.OrgReportTranscript();
      //expect(instance).to.be();
    });

    it('should have the property jobName (base name: "JobName")', function() {
      // uncomment below and update the code to test the property jobName
      //var instane = new ChronoSheetsApi.OrgReportTranscript();
      //expect(instance).to.be();
    });

    it('should have the property contents (base name: "Contents")', function() {
      // uncomment below and update the code to test the property contents
      //var instane = new ChronoSheetsApi.OrgReportTranscript();
      //expect(instance).to.be();
    });

    it('should have the property mediaType (base name: "MediaType")', function() {
      // uncomment below and update the code to test the property mediaType
      //var instane = new ChronoSheetsApi.OrgReportTranscript();
      //expect(instance).to.be();
    });

    it('should have the property transcriptionStatus (base name: "TranscriptionStatus")', function() {
      // uncomment below and update the code to test the property transcriptionStatus
      //var instane = new ChronoSheetsApi.OrgReportTranscript();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "Username")', function() {
      // uncomment below and update the code to test the property username
      //var instane = new ChronoSheetsApi.OrgReportTranscript();
      //expect(instance).to.be();
    });

    it('should have the property emailAddress (base name: "EmailAddress")', function() {
      // uncomment below and update the code to test the property emailAddress
      //var instane = new ChronoSheetsApi.OrgReportTranscript();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "FirstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instane = new ChronoSheetsApi.OrgReportTranscript();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "LastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instane = new ChronoSheetsApi.OrgReportTranscript();
      //expect(instance).to.be();
    });

    it('should have the property timesheetId (base name: "TimesheetId")', function() {
      // uncomment below and update the code to test the property timesheetId
      //var instane = new ChronoSheetsApi.OrgReportTranscript();
      //expect(instance).to.be();
    });

    it('should have the property documentS3SignedUrl (base name: "DocumentS3SignedUrl")', function() {
      // uncomment below and update the code to test the property documentS3SignedUrl
      //var instane = new ChronoSheetsApi.OrgReportTranscript();
      //expect(instance).to.be();
    });

    it('should have the property imageLargeS3SignedUrl (base name: "ImageLargeS3SignedUrl")', function() {
      // uncomment below and update the code to test the property imageLargeS3SignedUrl
      //var instane = new ChronoSheetsApi.OrgReportTranscript();
      //expect(instance).to.be();
    });

    it('should have the property imageMediumS3SignedUrl (base name: "ImageMediumS3SignedUrl")', function() {
      // uncomment below and update the code to test the property imageMediumS3SignedUrl
      //var instane = new ChronoSheetsApi.OrgReportTranscript();
      //expect(instance).to.be();
    });

    it('should have the property imageSmallS3SignedUrl (base name: "ImageSmallS3SignedUrl")', function() {
      // uncomment below and update the code to test the property imageSmallS3SignedUrl
      //var instane = new ChronoSheetsApi.OrgReportTranscript();
      //expect(instance).to.be();
    });

    it('should have the property timesheetStart (base name: "TimesheetStart")', function() {
      // uncomment below and update the code to test the property timesheetStart
      //var instane = new ChronoSheetsApi.OrgReportTranscript();
      //expect(instance).to.be();
    });

    it('should have the property timesheetEnd (base name: "TimesheetEnd")', function() {
      // uncomment below and update the code to test the property timesheetEnd
      //var instane = new ChronoSheetsApi.OrgReportTranscript();
      //expect(instance).to.be();
    });

    it('should have the property fileAttachmentId (base name: "FileAttachmentId")', function() {
      // uncomment below and update the code to test the property fileAttachmentId
      //var instane = new ChronoSheetsApi.OrgReportTranscript();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "UserId")', function() {
      // uncomment below and update the code to test the property userId
      //var instane = new ChronoSheetsApi.OrgReportTranscript();
      //expect(instance).to.be();
    });

    it('should have the property orgId (base name: "OrgId")', function() {
      // uncomment below and update the code to test the property orgId
      //var instane = new ChronoSheetsApi.OrgReportTranscript();
      //expect(instance).to.be();
    });

    it('should have the property mobilePlatform (base name: "MobilePlatform")', function() {
      // uncomment below and update the code to test the property mobilePlatform
      //var instane = new ChronoSheetsApi.OrgReportTranscript();
      //expect(instance).to.be();
    });

    it('should have the property attachmentType (base name: "AttachmentType")', function() {
      // uncomment below and update the code to test the property attachmentType
      //var instane = new ChronoSheetsApi.OrgReportTranscript();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "Notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instane = new ChronoSheetsApi.OrgReportTranscript();
      //expect(instance).to.be();
    });

    it('should have the property nonImageFilePath (base name: "NonImageFilePath")', function() {
      // uncomment below and update the code to test the property nonImageFilePath
      //var instane = new ChronoSheetsApi.OrgReportTranscript();
      //expect(instance).to.be();
    });

    it('should have the property imageLargeFilePath (base name: "ImageLargeFilePath")', function() {
      // uncomment below and update the code to test the property imageLargeFilePath
      //var instane = new ChronoSheetsApi.OrgReportTranscript();
      //expect(instance).to.be();
    });

    it('should have the property imageMediumFilePath (base name: "ImageMediumFilePath")', function() {
      // uncomment below and update the code to test the property imageMediumFilePath
      //var instane = new ChronoSheetsApi.OrgReportTranscript();
      //expect(instance).to.be();
    });

    it('should have the property imageSmallFilePath (base name: "ImageSmallFilePath")', function() {
      // uncomment below and update the code to test the property imageSmallFilePath
      //var instane = new ChronoSheetsApi.OrgReportTranscript();
      //expect(instance).to.be();
    });

    it('should have the property originalFileName (base name: "OriginalFileName")', function() {
      // uncomment below and update the code to test the property originalFileName
      //var instane = new ChronoSheetsApi.OrgReportTranscript();
      //expect(instance).to.be();
    });

    it('should have the property latitude (base name: "Latitude")', function() {
      // uncomment below and update the code to test the property latitude
      //var instane = new ChronoSheetsApi.OrgReportTranscript();
      //expect(instance).to.be();
    });

    it('should have the property longitude (base name: "Longitude")', function() {
      // uncomment below and update the code to test the property longitude
      //var instane = new ChronoSheetsApi.OrgReportTranscript();
      //expect(instance).to.be();
    });

    it('should have the property dateUploaded (base name: "DateUploaded")', function() {
      // uncomment below and update the code to test the property dateUploaded
      //var instane = new ChronoSheetsApi.OrgReportTranscript();
      //expect(instance).to.be();
    });

    it('should have the property dateImageCaptured (base name: "DateImageCaptured")', function() {
      // uncomment below and update the code to test the property dateImageCaptured
      //var instane = new ChronoSheetsApi.OrgReportTranscript();
      //expect(instance).to.be();
    });

    it('should have the property storageAllocationBytes (base name: "StorageAllocationBytes")', function() {
      // uncomment below and update the code to test the property storageAllocationBytes
      //var instane = new ChronoSheetsApi.OrgReportTranscript();
      //expect(instance).to.be();
    });

    it('should have the property audioDurationSeconds (base name: "AudioDurationSeconds")', function() {
      // uncomment below and update the code to test the property audioDurationSeconds
      //var instane = new ChronoSheetsApi.OrgReportTranscript();
      //expect(instance).to.be();
    });

  });

}));
