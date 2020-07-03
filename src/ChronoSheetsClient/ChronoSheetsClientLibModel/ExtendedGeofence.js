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
import BasicCoordinate from './BasicCoordinate';

/**
 * The ExtendedGeofence model module.
 * @module ChronoSheetsClient/ChronoSheetsClientLibModel/ExtendedGeofence
 * @version 1.0.0
 */
class ExtendedGeofence {
    /**
     * Constructs a new <code>ExtendedGeofence</code>.
     * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/ExtendedGeofence
     */
    constructor() { 
        
        ExtendedGeofence.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExtendedGeofence</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/ExtendedGeofence} obj Optional instance to populate.
     * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/ExtendedGeofence} The populated <code>ExtendedGeofence</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExtendedGeofence();

            if (data.hasOwnProperty('JobCode')) {
                obj['JobCode'] = ApiClient.convertToType(data['JobCode'], 'String');
            }
            if (data.hasOwnProperty('TaskName')) {
                obj['TaskName'] = ApiClient.convertToType(data['TaskName'], 'String');
            }
            if (data.hasOwnProperty('CreatedBy')) {
                obj['CreatedBy'] = ApiClient.convertToType(data['CreatedBy'], 'String');
            }
            if (data.hasOwnProperty('UpdatedBy')) {
                obj['UpdatedBy'] = ApiClient.convertToType(data['UpdatedBy'], 'String');
            }
            if (data.hasOwnProperty('AlertOrganisation')) {
                obj['AlertOrganisation'] = ApiClient.convertToType(data['AlertOrganisation'], 'String');
            }
            if (data.hasOwnProperty('GeoFencingId')) {
                obj['GeoFencingId'] = ApiClient.convertToType(data['GeoFencingId'], 'Number');
            }
            if (data.hasOwnProperty('OrgId')) {
                obj['OrgId'] = ApiClient.convertToType(data['OrgId'], 'Number');
            }
            if (data.hasOwnProperty('CreatedByUserId')) {
                obj['CreatedByUserId'] = ApiClient.convertToType(data['CreatedByUserId'], 'Number');
            }
            if (data.hasOwnProperty('LastUpdatedByUserId')) {
                obj['LastUpdatedByUserId'] = ApiClient.convertToType(data['LastUpdatedByUserId'], 'Number');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('LocationName')) {
                obj['LocationName'] = ApiClient.convertToType(data['LocationName'], 'String');
            }
            if (data.hasOwnProperty('Coordinates')) {
                obj['Coordinates'] = ApiClient.convertToType(data['Coordinates'], [BasicCoordinate]);
            }
            if (data.hasOwnProperty('CreatedAt')) {
                obj['CreatedAt'] = ApiClient.convertToType(data['CreatedAt'], 'Date');
            }
            if (data.hasOwnProperty('UpdatedAt')) {
                obj['UpdatedAt'] = ApiClient.convertToType(data['UpdatedAt'], 'Date');
            }
            if (data.hasOwnProperty('TriggerJobCodeId')) {
                obj['TriggerJobCodeId'] = ApiClient.convertToType(data['TriggerJobCodeId'], 'Number');
            }
            if (data.hasOwnProperty('TriggerTaskId')) {
                obj['TriggerTaskId'] = ApiClient.convertToType(data['TriggerTaskId'], 'Number');
            }
            if (data.hasOwnProperty('TriggerSettings')) {
                obj['TriggerSettings'] = ApiClient.convertToType(data['TriggerSettings'], 'String');
            }
            if (data.hasOwnProperty('AlertToOrgGroupId')) {
                obj['AlertToOrgGroupId'] = ApiClient.convertToType(data['AlertToOrgGroupId'], 'Number');
            }
            if (data.hasOwnProperty('AlertSettings')) {
                obj['AlertSettings'] = ApiClient.convertToType(data['AlertSettings'], 'String');
            }
            if (data.hasOwnProperty('StartTimeHour')) {
                obj['StartTimeHour'] = ApiClient.convertToType(data['StartTimeHour'], 'Number');
            }
            if (data.hasOwnProperty('StartTimeMinute')) {
                obj['StartTimeMinute'] = ApiClient.convertToType(data['StartTimeMinute'], 'Number');
            }
            if (data.hasOwnProperty('EndTimeHour')) {
                obj['EndTimeHour'] = ApiClient.convertToType(data['EndTimeHour'], 'Number');
            }
            if (data.hasOwnProperty('EndTimeMinute')) {
                obj['EndTimeMinute'] = ApiClient.convertToType(data['EndTimeMinute'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} JobCode
 */
ExtendedGeofence.prototype['JobCode'] = undefined;

/**
 * @member {String} TaskName
 */
ExtendedGeofence.prototype['TaskName'] = undefined;

/**
 * @member {String} CreatedBy
 */
ExtendedGeofence.prototype['CreatedBy'] = undefined;

/**
 * @member {String} UpdatedBy
 */
ExtendedGeofence.prototype['UpdatedBy'] = undefined;

/**
 * @member {String} AlertOrganisation
 */
ExtendedGeofence.prototype['AlertOrganisation'] = undefined;

/**
 * @member {Number} GeoFencingId
 */
ExtendedGeofence.prototype['GeoFencingId'] = undefined;

/**
 * @member {Number} OrgId
 */
ExtendedGeofence.prototype['OrgId'] = undefined;

/**
 * @member {Number} CreatedByUserId
 */
ExtendedGeofence.prototype['CreatedByUserId'] = undefined;

/**
 * @member {Number} LastUpdatedByUserId
 */
ExtendedGeofence.prototype['LastUpdatedByUserId'] = undefined;

/**
 * @member {String} Name
 */
ExtendedGeofence.prototype['Name'] = undefined;

/**
 * @member {String} LocationName
 */
ExtendedGeofence.prototype['LocationName'] = undefined;

/**
 * @member {Array.<module:ChronoSheetsClient/ChronoSheetsClientLibModel/BasicCoordinate>} Coordinates
 */
ExtendedGeofence.prototype['Coordinates'] = undefined;

/**
 * @member {Date} CreatedAt
 */
ExtendedGeofence.prototype['CreatedAt'] = undefined;

/**
 * @member {Date} UpdatedAt
 */
ExtendedGeofence.prototype['UpdatedAt'] = undefined;

/**
 * @member {Number} TriggerJobCodeId
 */
ExtendedGeofence.prototype['TriggerJobCodeId'] = undefined;

/**
 * @member {Number} TriggerTaskId
 */
ExtendedGeofence.prototype['TriggerTaskId'] = undefined;

/**
 * @member {module:ChronoSheetsClient/ChronoSheetsClientLibModel/ExtendedGeofence.TriggerSettingsEnum} TriggerSettings
 */
ExtendedGeofence.prototype['TriggerSettings'] = undefined;

/**
 * @member {Number} AlertToOrgGroupId
 */
ExtendedGeofence.prototype['AlertToOrgGroupId'] = undefined;

/**
 * @member {module:ChronoSheetsClient/ChronoSheetsClientLibModel/ExtendedGeofence.AlertSettingsEnum} AlertSettings
 */
ExtendedGeofence.prototype['AlertSettings'] = undefined;

/**
 * @member {Number} StartTimeHour
 */
ExtendedGeofence.prototype['StartTimeHour'] = undefined;

/**
 * @member {Number} StartTimeMinute
 */
ExtendedGeofence.prototype['StartTimeMinute'] = undefined;

/**
 * @member {Number} EndTimeHour
 */
ExtendedGeofence.prototype['EndTimeHour'] = undefined;

/**
 * @member {Number} EndTimeMinute
 */
ExtendedGeofence.prototype['EndTimeMinute'] = undefined;





/**
 * Allowed values for the <code>TriggerSettings</code> property.
 * @enum {String}
 * @readonly
 */
ExtendedGeofence['TriggerSettingsEnum'] = {

    /**
     * value: "None"
     * @const
     */
    "None": "None",

    /**
     * value: "StartTimesheetWhenEntering"
     * @const
     */
    "StartTimesheetWhenEntering": "StartTimesheetWhenEntering",

    /**
     * value: "StopTimesheetWhenEntering"
     * @const
     */
    "StopTimesheetWhenEntering": "StopTimesheetWhenEntering",

    /**
     * value: "StartOnEnterStopOnLeave"
     * @const
     */
    "StartOnEnterStopOnLeave": "StartOnEnterStopOnLeave"
};


/**
 * Allowed values for the <code>AlertSettings</code> property.
 * @enum {String}
 * @readonly
 */
ExtendedGeofence['AlertSettingsEnum'] = {

    /**
     * value: "None"
     * @const
     */
    "None": "None",

    /**
     * value: "SendWhenEntering"
     * @const
     */
    "SendWhenEntering": "SendWhenEntering",

    /**
     * value: "SendWhenExiting"
     * @const
     */
    "SendWhenExiting": "SendWhenExiting",

    /**
     * value: "SendWhenEnteringOrExiting"
     * @const
     */
    "SendWhenEnteringOrExiting": "SendWhenEnteringOrExiting"
};



export default ExtendedGeofence;

