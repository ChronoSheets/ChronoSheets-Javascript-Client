/**
 * ChronoSheets API
 * ChronoSheets is a flexible timesheet solution for small to medium businesses, it is free for small teams of up to 5 and there are iOS and Android apps available.  Use the ChronoSheets API to create your own custom integrations.
 *
 * OpenAPI spec version: v1
 * Contact: lachlan@chronosheets.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
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
    root.ChronoSheetsApi.CsApiOrgReportTimesheetFileAttachment = factory(root.ChronoSheetsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CsApiOrgReportTimesheetFileAttachment model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiOrgReportTimesheetFileAttachment
   * @version v1
   */

  /**
   * Constructs a new <code>CsApiOrgReportTimesheetFileAttachment</code>.
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiOrgReportTimesheetFileAttachment
   * @class
   */
  var exports = function() {
    var _this = this;




























  };

  /**
   * Constructs a <code>CsApiOrgReportTimesheetFileAttachment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiOrgReportTimesheetFileAttachment} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiOrgReportTimesheetFileAttachment} The populated <code>CsApiOrgReportTimesheetFileAttachment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Username')) {
        obj['Username'] = ApiClient.convertToType(data['Username'], 'String');
      }
      if (data.hasOwnProperty('EmailAddress')) {
        obj['EmailAddress'] = ApiClient.convertToType(data['EmailAddress'], 'String');
      }
      if (data.hasOwnProperty('FirstName')) {
        obj['FirstName'] = ApiClient.convertToType(data['FirstName'], 'String');
      }
      if (data.hasOwnProperty('LastName')) {
        obj['LastName'] = ApiClient.convertToType(data['LastName'], 'String');
      }
      if (data.hasOwnProperty('TimesheetStart')) {
        obj['TimesheetStart'] = ApiClient.convertToType(data['TimesheetStart'], 'Date');
      }
      if (data.hasOwnProperty('TimesheetEnd')) {
        obj['TimesheetEnd'] = ApiClient.convertToType(data['TimesheetEnd'], 'Date');
      }
      if (data.hasOwnProperty('TimesheetId')) {
        obj['TimesheetId'] = ApiClient.convertToType(data['TimesheetId'], 'Number');
      }
      if (data.hasOwnProperty('DocumentS3SignedUrl')) {
        obj['DocumentS3SignedUrl'] = ApiClient.convertToType(data['DocumentS3SignedUrl'], 'String');
      }
      if (data.hasOwnProperty('ImageLargeS3SignedUrl')) {
        obj['ImageLargeS3SignedUrl'] = ApiClient.convertToType(data['ImageLargeS3SignedUrl'], 'String');
      }
      if (data.hasOwnProperty('ImageMediumS3SignedUrl')) {
        obj['ImageMediumS3SignedUrl'] = ApiClient.convertToType(data['ImageMediumS3SignedUrl'], 'String');
      }
      if (data.hasOwnProperty('ImageSmallS3SignedUrl')) {
        obj['ImageSmallS3SignedUrl'] = ApiClient.convertToType(data['ImageSmallS3SignedUrl'], 'String');
      }
      if (data.hasOwnProperty('FileAttachmentId')) {
        obj['FileAttachmentId'] = ApiClient.convertToType(data['FileAttachmentId'], 'Number');
      }
      if (data.hasOwnProperty('UserId')) {
        obj['UserId'] = ApiClient.convertToType(data['UserId'], 'Number');
      }
      if (data.hasOwnProperty('OrgId')) {
        obj['OrgId'] = ApiClient.convertToType(data['OrgId'], 'Number');
      }
      if (data.hasOwnProperty('MobilePlatform')) {
        obj['MobilePlatform'] = ApiClient.convertToType(data['MobilePlatform'], 'Number');
      }
      if (data.hasOwnProperty('AttachmentType')) {
        obj['AttachmentType'] = ApiClient.convertToType(data['AttachmentType'], 'Number');
      }
      if (data.hasOwnProperty('Notes')) {
        obj['Notes'] = ApiClient.convertToType(data['Notes'], 'String');
      }
      if (data.hasOwnProperty('NonImageFilePath')) {
        obj['NonImageFilePath'] = ApiClient.convertToType(data['NonImageFilePath'], 'String');
      }
      if (data.hasOwnProperty('ImageLargeFilePath')) {
        obj['ImageLargeFilePath'] = ApiClient.convertToType(data['ImageLargeFilePath'], 'String');
      }
      if (data.hasOwnProperty('ImageMediumFilePath')) {
        obj['ImageMediumFilePath'] = ApiClient.convertToType(data['ImageMediumFilePath'], 'String');
      }
      if (data.hasOwnProperty('ImageSmallFilePath')) {
        obj['ImageSmallFilePath'] = ApiClient.convertToType(data['ImageSmallFilePath'], 'String');
      }
      if (data.hasOwnProperty('OriginalFileName')) {
        obj['OriginalFileName'] = ApiClient.convertToType(data['OriginalFileName'], 'String');
      }
      if (data.hasOwnProperty('Latitude')) {
        obj['Latitude'] = ApiClient.convertToType(data['Latitude'], 'Number');
      }
      if (data.hasOwnProperty('Longitude')) {
        obj['Longitude'] = ApiClient.convertToType(data['Longitude'], 'Number');
      }
      if (data.hasOwnProperty('DateUploaded')) {
        obj['DateUploaded'] = ApiClient.convertToType(data['DateUploaded'], 'Date');
      }
      if (data.hasOwnProperty('DateImageCaptured')) {
        obj['DateImageCaptured'] = ApiClient.convertToType(data['DateImageCaptured'], 'Date');
      }
      if (data.hasOwnProperty('StorageAllocationBytes')) {
        obj['StorageAllocationBytes'] = ApiClient.convertToType(data['StorageAllocationBytes'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} Username
   */
  exports.prototype['Username'] = undefined;
  /**
   * @member {String} EmailAddress
   */
  exports.prototype['EmailAddress'] = undefined;
  /**
   * @member {String} FirstName
   */
  exports.prototype['FirstName'] = undefined;
  /**
   * @member {String} LastName
   */
  exports.prototype['LastName'] = undefined;
  /**
   * @member {Date} TimesheetStart
   */
  exports.prototype['TimesheetStart'] = undefined;
  /**
   * @member {Date} TimesheetEnd
   */
  exports.prototype['TimesheetEnd'] = undefined;
  /**
   * @member {Number} TimesheetId
   */
  exports.prototype['TimesheetId'] = undefined;
  /**
   * @member {String} DocumentS3SignedUrl
   */
  exports.prototype['DocumentS3SignedUrl'] = undefined;
  /**
   * @member {String} ImageLargeS3SignedUrl
   */
  exports.prototype['ImageLargeS3SignedUrl'] = undefined;
  /**
   * @member {String} ImageMediumS3SignedUrl
   */
  exports.prototype['ImageMediumS3SignedUrl'] = undefined;
  /**
   * @member {String} ImageSmallS3SignedUrl
   */
  exports.prototype['ImageSmallS3SignedUrl'] = undefined;
  /**
   * @member {Number} FileAttachmentId
   */
  exports.prototype['FileAttachmentId'] = undefined;
  /**
   * @member {Number} UserId
   */
  exports.prototype['UserId'] = undefined;
  /**
   * @member {Number} OrgId
   */
  exports.prototype['OrgId'] = undefined;
  /**
   * 0 = Unknown, 1 = iOS, 2 = Android
   * @member {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiOrgReportTimesheetFileAttachment.MobilePlatformEnum} MobilePlatform
   */
  exports.prototype['MobilePlatform'] = undefined;
  /**
   * 1 = Image, 30 = WordDoc, 31 = Pdf, 32 = MSSpreadSheet, 33 = MSPowerPoint, 34 = RichTextFormat, 35 = ZipFile, 100 = Other
   * @member {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiOrgReportTimesheetFileAttachment.AttachmentTypeEnum} AttachmentType
   */
  exports.prototype['AttachmentType'] = undefined;
  /**
   * @member {String} Notes
   */
  exports.prototype['Notes'] = undefined;
  /**
   * @member {String} NonImageFilePath
   */
  exports.prototype['NonImageFilePath'] = undefined;
  /**
   * @member {String} ImageLargeFilePath
   */
  exports.prototype['ImageLargeFilePath'] = undefined;
  /**
   * @member {String} ImageMediumFilePath
   */
  exports.prototype['ImageMediumFilePath'] = undefined;
  /**
   * @member {String} ImageSmallFilePath
   */
  exports.prototype['ImageSmallFilePath'] = undefined;
  /**
   * @member {String} OriginalFileName
   */
  exports.prototype['OriginalFileName'] = undefined;
  /**
   * @member {Number} Latitude
   */
  exports.prototype['Latitude'] = undefined;
  /**
   * @member {Number} Longitude
   */
  exports.prototype['Longitude'] = undefined;
  /**
   * @member {Date} DateUploaded
   */
  exports.prototype['DateUploaded'] = undefined;
  /**
   * @member {Date} DateImageCaptured
   */
  exports.prototype['DateImageCaptured'] = undefined;
  /**
   * @member {Number} StorageAllocationBytes
   */
  exports.prototype['StorageAllocationBytes'] = undefined;


  /**
   * Allowed values for the <code>MobilePlatform</code> property.
   * @enum {Number}
   * @readonly
   */
  exports.MobilePlatformEnum = {
    /**
     * value: 0
     * @const
     */
    "0": 0,
    /**
     * value: 1
     * @const
     */
    "1": 1,
    /**
     * value: 2
     * @const
     */
    "2": 2  };

  /**
   * Allowed values for the <code>AttachmentType</code> property.
   * @enum {Number}
   * @readonly
   */
  exports.AttachmentTypeEnum = {
    /**
     * value: 1
     * @const
     */
    "1": 1,
    /**
     * value: 30
     * @const
     */
    "30": 30,
    /**
     * value: 31
     * @const
     */
    "31": 31,
    /**
     * value: 32
     * @const
     */
    "32": 32,
    /**
     * value: 33
     * @const
     */
    "33": 33,
    /**
     * value: 34
     * @const
     */
    "34": 34,
    /**
     * value: 35
     * @const
     */
    "35": 35,
    /**
     * value: 100
     * @const
     */
    "100": 100  };


  return exports;
}));


