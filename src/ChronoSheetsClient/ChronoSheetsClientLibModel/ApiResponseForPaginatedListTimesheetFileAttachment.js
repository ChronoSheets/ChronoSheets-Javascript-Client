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
import TimesheetFileAttachment from './TimesheetFileAttachment';

/**
 * The ApiResponseForPaginatedListTimesheetFileAttachment model module.
 * @module ChronoSheetsClient/ChronoSheetsClientLibModel/ApiResponseForPaginatedListTimesheetFileAttachment
 * @version 1.0.0
 */
class ApiResponseForPaginatedListTimesheetFileAttachment {
    /**
     * Constructs a new <code>ApiResponseForPaginatedListTimesheetFileAttachment</code>.
     * A paginated API repsonse
     * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/ApiResponseForPaginatedListTimesheetFileAttachment
     */
    constructor() { 
        
        ApiResponseForPaginatedListTimesheetFileAttachment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApiResponseForPaginatedListTimesheetFileAttachment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/ApiResponseForPaginatedListTimesheetFileAttachment} obj Optional instance to populate.
     * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/ApiResponseForPaginatedListTimesheetFileAttachment} The populated <code>ApiResponseForPaginatedListTimesheetFileAttachment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiResponseForPaginatedListTimesheetFileAttachment();

            if (data.hasOwnProperty('TotalSetCount')) {
                obj['TotalSetCount'] = ApiClient.convertToType(data['TotalSetCount'], 'Number');
            }
            if (data.hasOwnProperty('Data')) {
                obj['Data'] = ApiClient.convertToType(data['Data'], [TimesheetFileAttachment]);
            }
            if (data.hasOwnProperty('Status')) {
                obj['Status'] = ApiClient.convertToType(data['Status'], 'String');
            }
            if (data.hasOwnProperty('Message')) {
                obj['Message'] = ApiClient.convertToType(data['Message'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The count of total records that are being paginated
 * @member {Number} TotalSetCount
 */
ApiResponseForPaginatedListTimesheetFileAttachment.prototype['TotalSetCount'] = undefined;

/**
 * The main Data of the response
 * @member {Array.<module:ChronoSheetsClient/ChronoSheetsClientLibModel/TimesheetFileAttachment>} Data
 */
ApiResponseForPaginatedListTimesheetFileAttachment.prototype['Data'] = undefined;

/**
 * The API response status. Indicates if the request was successful, failed or was unauthorised.
 * @member {module:ChronoSheetsClient/ChronoSheetsClientLibModel/ApiResponseForPaginatedListTimesheetFileAttachment.StatusEnum} Status
 */
ApiResponseForPaginatedListTimesheetFileAttachment.prototype['Status'] = undefined;

/**
 * A message to accompany the response status.  If the Status is failed, this message will hint why it failed and what you need to do.
 * @member {String} Message
 */
ApiResponseForPaginatedListTimesheetFileAttachment.prototype['Message'] = undefined;





/**
 * Allowed values for the <code>Status</code> property.
 * @enum {String}
 * @readonly
 */
ApiResponseForPaginatedListTimesheetFileAttachment['StatusEnum'] = {

    /**
     * value: "Succeeded"
     * @const
     */
    "Succeeded": "Succeeded",

    /**
     * value: "FatalException"
     * @const
     */
    "FatalException": "FatalException",

    /**
     * value: "GeneralError"
     * @const
     */
    "GeneralError": "GeneralError",

    /**
     * value: "ValidationError"
     * @const
     */
    "ValidationError": "ValidationError",

    /**
     * value: "UnAuthorized"
     * @const
     */
    "UnAuthorized": "UnAuthorized",

    /**
     * value: "SessionExpired"
     * @const
     */
    "SessionExpired": "SessionExpired"
};



export default ApiResponseForPaginatedListTimesheetFileAttachment;

