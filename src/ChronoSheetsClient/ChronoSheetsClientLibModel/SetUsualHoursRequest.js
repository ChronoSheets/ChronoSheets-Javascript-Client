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
import UsualHoursDay from './UsualHoursDay';

/**
 * The SetUsualHoursRequest model module.
 * @module ChronoSheetsClient/ChronoSheetsClientLibModel/SetUsualHoursRequest
 * @version 1.0.0
 */
class SetUsualHoursRequest {
    /**
     * Constructs a new <code>SetUsualHoursRequest</code>.
     * An object that can be used to set the Usual Hours (Rostered Hours) of an employee user account
     * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/SetUsualHoursRequest
     */
    constructor() { 
        
        SetUsualHoursRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SetUsualHoursRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/SetUsualHoursRequest} obj Optional instance to populate.
     * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/SetUsualHoursRequest} The populated <code>SetUsualHoursRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SetUsualHoursRequest();

            if (data.hasOwnProperty('UsualHoursData')) {
                obj['UsualHoursData'] = ApiClient.convertToType(data['UsualHoursData'], [UsualHoursDay]);
            }
            if (data.hasOwnProperty('UserId')) {
                obj['UserId'] = ApiClient.convertToType(data['UserId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * A Collection of days (Mon-Sun) with updated Roster timeslots
 * @member {Array.<module:ChronoSheetsClient/ChronoSheetsClientLibModel/UsualHoursDay>} UsualHoursData
 */
SetUsualHoursRequest.prototype['UsualHoursData'] = undefined;

/**
 * The Id of the User that these updated Rostered Hours will be applied to
 * @member {Number} UserId
 */
SetUsualHoursRequest.prototype['UserId'] = undefined;






export default SetUsualHoursRequest;
