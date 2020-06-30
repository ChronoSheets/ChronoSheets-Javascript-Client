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
    // AMD. Register as an anonymous module.
    define(['ChronoSheetsClient/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ChronoSheetsApi) {
      root.ChronoSheetsApi = {};
    }
    root.ChronoSheetsApi.CSTimesheetFileAttachment = factory(root.ChronoSheetsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CSTimesheetFileAttachment model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CSTimesheetFileAttachment
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CSTimesheetFileAttachment</code>.
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSTimesheetFileAttachment
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CSTimesheetFileAttachment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSTimesheetFileAttachment} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSTimesheetFileAttachment} The populated <code>CSTimesheetFileAttachment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('TimesheetId'))
        obj.timesheetId = ApiClient.convertToType(data['TimesheetId'], 'Number');
      if (data.hasOwnProperty('DocumentS3SignedUrl'))
        obj.documentS3SignedUrl = ApiClient.convertToType(data['DocumentS3SignedUrl'], 'String');
      if (data.hasOwnProperty('ImageLargeS3SignedUrl'))
        obj.imageLargeS3SignedUrl = ApiClient.convertToType(data['ImageLargeS3SignedUrl'], 'String');
      if (data.hasOwnProperty('ImageMediumS3SignedUrl'))
        obj.imageMediumS3SignedUrl = ApiClient.convertToType(data['ImageMediumS3SignedUrl'], 'String');
      if (data.hasOwnProperty('ImageSmallS3SignedUrl'))
        obj.imageSmallS3SignedUrl = ApiClient.convertToType(data['ImageSmallS3SignedUrl'], 'String');
      if (data.hasOwnProperty('TimesheetStart'))
        obj.timesheetStart = ApiClient.convertToType(data['TimesheetStart'], 'Date');
      if (data.hasOwnProperty('TimesheetEnd'))
        obj.timesheetEnd = ApiClient.convertToType(data['TimesheetEnd'], 'Date');
      if (data.hasOwnProperty('FileAttachmentId'))
        obj.fileAttachmentId = ApiClient.convertToType(data['FileAttachmentId'], 'Number');
      if (data.hasOwnProperty('UserId'))
        obj.userId = ApiClient.convertToType(data['UserId'], 'Number');
      if (data.hasOwnProperty('OrgId'))
        obj.orgId = ApiClient.convertToType(data['OrgId'], 'Number');
      if (data.hasOwnProperty('MobilePlatform'))
        obj.mobilePlatform = ApiClient.convertToType(data['MobilePlatform'], 'String');
      if (data.hasOwnProperty('AttachmentType'))
        obj.attachmentType = ApiClient.convertToType(data['AttachmentType'], 'String');
      if (data.hasOwnProperty('Notes'))
        obj.notes = ApiClient.convertToType(data['Notes'], 'String');
      if (data.hasOwnProperty('NonImageFilePath'))
        obj.nonImageFilePath = ApiClient.convertToType(data['NonImageFilePath'], 'String');
      if (data.hasOwnProperty('ImageLargeFilePath'))
        obj.imageLargeFilePath = ApiClient.convertToType(data['ImageLargeFilePath'], 'String');
      if (data.hasOwnProperty('ImageMediumFilePath'))
        obj.imageMediumFilePath = ApiClient.convertToType(data['ImageMediumFilePath'], 'String');
      if (data.hasOwnProperty('ImageSmallFilePath'))
        obj.imageSmallFilePath = ApiClient.convertToType(data['ImageSmallFilePath'], 'String');
      if (data.hasOwnProperty('OriginalFileName'))
        obj.originalFileName = ApiClient.convertToType(data['OriginalFileName'], 'String');
      if (data.hasOwnProperty('Latitude'))
        obj.latitude = ApiClient.convertToType(data['Latitude'], 'Number');
      if (data.hasOwnProperty('Longitude'))
        obj.longitude = ApiClient.convertToType(data['Longitude'], 'Number');
      if (data.hasOwnProperty('DateUploaded'))
        obj.dateUploaded = ApiClient.convertToType(data['DateUploaded'], 'Date');
      if (data.hasOwnProperty('DateImageCaptured'))
        obj.dateImageCaptured = ApiClient.convertToType(data['DateImageCaptured'], 'Date');
      if (data.hasOwnProperty('StorageAllocationBytes'))
        obj.storageAllocationBytes = ApiClient.convertToType(data['StorageAllocationBytes'], 'Number');
      if (data.hasOwnProperty('AudioDurationSeconds'))
        obj.audioDurationSeconds = ApiClient.convertToType(data['AudioDurationSeconds'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} timesheetId
   */
  exports.prototype.timesheetId = undefined;

  /**
   * @member {String} documentS3SignedUrl
   */
  exports.prototype.documentS3SignedUrl = undefined;

  /**
   * @member {String} imageLargeS3SignedUrl
   */
  exports.prototype.imageLargeS3SignedUrl = undefined;

  /**
   * @member {String} imageMediumS3SignedUrl
   */
  exports.prototype.imageMediumS3SignedUrl = undefined;

  /**
   * @member {String} imageSmallS3SignedUrl
   */
  exports.prototype.imageSmallS3SignedUrl = undefined;

  /**
   * @member {Date} timesheetStart
   */
  exports.prototype.timesheetStart = undefined;

  /**
   * @member {Date} timesheetEnd
   */
  exports.prototype.timesheetEnd = undefined;

  /**
   * @member {Number} fileAttachmentId
   */
  exports.prototype.fileAttachmentId = undefined;

  /**
   * @member {Number} userId
   */
  exports.prototype.userId = undefined;

  /**
   * @member {Number} orgId
   */
  exports.prototype.orgId = undefined;

  /**
   * @member {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSTimesheetFileAttachment.MobilePlatformEnum} mobilePlatform
   */
  exports.prototype.mobilePlatform = undefined;

  /**
   * @member {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSTimesheetFileAttachment.AttachmentTypeEnum} attachmentType
   */
  exports.prototype.attachmentType = undefined;

  /**
   * @member {String} notes
   */
  exports.prototype.notes = undefined;

  /**
   * @member {String} nonImageFilePath
   */
  exports.prototype.nonImageFilePath = undefined;

  /**
   * @member {String} imageLargeFilePath
   */
  exports.prototype.imageLargeFilePath = undefined;

  /**
   * @member {String} imageMediumFilePath
   */
  exports.prototype.imageMediumFilePath = undefined;

  /**
   * @member {String} imageSmallFilePath
   */
  exports.prototype.imageSmallFilePath = undefined;

  /**
   * @member {String} originalFileName
   */
  exports.prototype.originalFileName = undefined;

  /**
   * @member {Number} latitude
   */
  exports.prototype.latitude = undefined;

  /**
   * @member {Number} longitude
   */
  exports.prototype.longitude = undefined;

  /**
   * @member {Date} dateUploaded
   */
  exports.prototype.dateUploaded = undefined;

  /**
   * @member {Date} dateImageCaptured
   */
  exports.prototype.dateImageCaptured = undefined;

  /**
   * @member {Number} storageAllocationBytes
   */
  exports.prototype.storageAllocationBytes = undefined;

  /**
   * @member {Number} audioDurationSeconds
   */
  exports.prototype.audioDurationSeconds = undefined;


  /**
   * Allowed values for the <code>mobilePlatform</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MobilePlatformEnum = {
    /**
     * value: "Unknown"
     * @const
     */
    unknown: "Unknown",

    /**
     * value: "iOS"
     * @const
     */
    iOS: "iOS",

    /**
     * value: "Android"
     * @const
     */
    android: "Android"
  };


  /**
   * Allowed values for the <code>attachmentType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AttachmentTypeEnum = {
    /**
     * value: "Image"
     * @const
     */
    image: "Image",

    /**
     * value: "WordDoc"
     * @const
     */
    wordDoc: "WordDoc",

    /**
     * value: "Pdf"
     * @const
     */
    pdf: "Pdf",

    /**
     * value: "MSSpreadSheet"
     * @const
     */
    mSSpreadSheet: "MSSpreadSheet",

    /**
     * value: "MSPowerPoint"
     * @const
     */
    mSPowerPoint: "MSPowerPoint",

    /**
     * value: "RichTextFormat"
     * @const
     */
    richTextFormat: "RichTextFormat",

    /**
     * value: "ZipFile"
     * @const
     */
    zipFile: "ZipFile",

    /**
     * value: "Other"
     * @const
     */
    other: "Other",

    /**
     * value: "Audio"
     * @const
     */
    audio: "Audio"
  };

  return exports;

}));
