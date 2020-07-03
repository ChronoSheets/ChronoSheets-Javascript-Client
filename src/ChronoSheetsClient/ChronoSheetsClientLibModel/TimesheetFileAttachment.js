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

import ApiClient from '../ApiClient';

/**
 * The TimesheetFileAttachment model module.
 * @module ChronoSheetsClient/ChronoSheetsClientLibModel/TimesheetFileAttachment
 * @version 1.0.0
 */
class TimesheetFileAttachment {
    /**
     * Constructs a new <code>TimesheetFileAttachment</code>.
     * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/TimesheetFileAttachment
     */
    constructor() { 
        
        TimesheetFileAttachment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TimesheetFileAttachment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/TimesheetFileAttachment} obj Optional instance to populate.
     * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/TimesheetFileAttachment} The populated <code>TimesheetFileAttachment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TimesheetFileAttachment();

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
            if (data.hasOwnProperty('TimesheetStart')) {
                obj['TimesheetStart'] = ApiClient.convertToType(data['TimesheetStart'], 'Date');
            }
            if (data.hasOwnProperty('TimesheetEnd')) {
                obj['TimesheetEnd'] = ApiClient.convertToType(data['TimesheetEnd'], 'Date');
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
                obj['MobilePlatform'] = ApiClient.convertToType(data['MobilePlatform'], 'String');
            }
            if (data.hasOwnProperty('AttachmentType')) {
                obj['AttachmentType'] = ApiClient.convertToType(data['AttachmentType'], 'String');
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
            if (data.hasOwnProperty('AudioDurationSeconds')) {
                obj['AudioDurationSeconds'] = ApiClient.convertToType(data['AudioDurationSeconds'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} TimesheetId
 */
TimesheetFileAttachment.prototype['TimesheetId'] = undefined;

/**
 * @member {String} DocumentS3SignedUrl
 */
TimesheetFileAttachment.prototype['DocumentS3SignedUrl'] = undefined;

/**
 * @member {String} ImageLargeS3SignedUrl
 */
TimesheetFileAttachment.prototype['ImageLargeS3SignedUrl'] = undefined;

/**
 * @member {String} ImageMediumS3SignedUrl
 */
TimesheetFileAttachment.prototype['ImageMediumS3SignedUrl'] = undefined;

/**
 * @member {String} ImageSmallS3SignedUrl
 */
TimesheetFileAttachment.prototype['ImageSmallS3SignedUrl'] = undefined;

/**
 * @member {Date} TimesheetStart
 */
TimesheetFileAttachment.prototype['TimesheetStart'] = undefined;

/**
 * @member {Date} TimesheetEnd
 */
TimesheetFileAttachment.prototype['TimesheetEnd'] = undefined;

/**
 * @member {Number} FileAttachmentId
 */
TimesheetFileAttachment.prototype['FileAttachmentId'] = undefined;

/**
 * @member {Number} UserId
 */
TimesheetFileAttachment.prototype['UserId'] = undefined;

/**
 * @member {Number} OrgId
 */
TimesheetFileAttachment.prototype['OrgId'] = undefined;

/**
 * @member {module:ChronoSheetsClient/ChronoSheetsClientLibModel/TimesheetFileAttachment.MobilePlatformEnum} MobilePlatform
 */
TimesheetFileAttachment.prototype['MobilePlatform'] = undefined;

/**
 * @member {module:ChronoSheetsClient/ChronoSheetsClientLibModel/TimesheetFileAttachment.AttachmentTypeEnum} AttachmentType
 */
TimesheetFileAttachment.prototype['AttachmentType'] = undefined;

/**
 * @member {String} Notes
 */
TimesheetFileAttachment.prototype['Notes'] = undefined;

/**
 * @member {String} NonImageFilePath
 */
TimesheetFileAttachment.prototype['NonImageFilePath'] = undefined;

/**
 * @member {String} ImageLargeFilePath
 */
TimesheetFileAttachment.prototype['ImageLargeFilePath'] = undefined;

/**
 * @member {String} ImageMediumFilePath
 */
TimesheetFileAttachment.prototype['ImageMediumFilePath'] = undefined;

/**
 * @member {String} ImageSmallFilePath
 */
TimesheetFileAttachment.prototype['ImageSmallFilePath'] = undefined;

/**
 * @member {String} OriginalFileName
 */
TimesheetFileAttachment.prototype['OriginalFileName'] = undefined;

/**
 * @member {Number} Latitude
 */
TimesheetFileAttachment.prototype['Latitude'] = undefined;

/**
 * @member {Number} Longitude
 */
TimesheetFileAttachment.prototype['Longitude'] = undefined;

/**
 * @member {Date} DateUploaded
 */
TimesheetFileAttachment.prototype['DateUploaded'] = undefined;

/**
 * @member {Date} DateImageCaptured
 */
TimesheetFileAttachment.prototype['DateImageCaptured'] = undefined;

/**
 * @member {Number} StorageAllocationBytes
 */
TimesheetFileAttachment.prototype['StorageAllocationBytes'] = undefined;

/**
 * @member {Number} AudioDurationSeconds
 */
TimesheetFileAttachment.prototype['AudioDurationSeconds'] = undefined;





/**
 * Allowed values for the <code>MobilePlatform</code> property.
 * @enum {String}
 * @readonly
 */
TimesheetFileAttachment['MobilePlatformEnum'] = {

    /**
     * value: "Unknown"
     * @const
     */
    "Unknown": "Unknown",

    /**
     * value: "iOS"
     * @const
     */
    "iOS": "iOS",

    /**
     * value: "Android"
     * @const
     */
    "Android": "Android"
};


/**
 * Allowed values for the <code>AttachmentType</code> property.
 * @enum {String}
 * @readonly
 */
TimesheetFileAttachment['AttachmentTypeEnum'] = {

    /**
     * value: "Image"
     * @const
     */
    "Image": "Image",

    /**
     * value: "WordDoc"
     * @const
     */
    "WordDoc": "WordDoc",

    /**
     * value: "Pdf"
     * @const
     */
    "Pdf": "Pdf",

    /**
     * value: "MSSpreadSheet"
     * @const
     */
    "MSSpreadSheet": "MSSpreadSheet",

    /**
     * value: "MSPowerPoint"
     * @const
     */
    "MSPowerPoint": "MSPowerPoint",

    /**
     * value: "RichTextFormat"
     * @const
     */
    "RichTextFormat": "RichTextFormat",

    /**
     * value: "ZipFile"
     * @const
     */
    "ZipFile": "ZipFile",

    /**
     * value: "Other"
     * @const
     */
    "Other": "Other",

    /**
     * value: "Audio"
     * @const
     */
    "Audio": "Audio"
};



export default TimesheetFileAttachment;

