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
 * The UpdateProfileResponse model module.
 * @module ChronoSheetsClient/ChronoSheetsClientLibModel/UpdateProfileResponse
 * @version 1.0.0
 */
class UpdateProfileResponse {
    /**
     * Constructs a new <code>UpdateProfileResponse</code>.
     * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/UpdateProfileResponse
     */
    constructor() { 
        
        UpdateProfileResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateProfileResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/UpdateProfileResponse} obj Optional instance to populate.
     * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/UpdateProfileResponse} The populated <code>UpdateProfileResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateProfileResponse();

            if (data.hasOwnProperty('OrganisationId')) {
                obj['OrganisationId'] = ApiClient.convertToType(data['OrganisationId'], 'Number');
            }
            if (data.hasOwnProperty('UserId')) {
                obj['UserId'] = ApiClient.convertToType(data['UserId'], 'Number');
            }
            if (data.hasOwnProperty('ValidationErrors')) {
                obj['ValidationErrors'] = ApiClient.convertToType(data['ValidationErrors'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} OrganisationId
 */
UpdateProfileResponse.prototype['OrganisationId'] = undefined;

/**
 * @member {Number} UserId
 */
UpdateProfileResponse.prototype['UserId'] = undefined;

/**
 * @member {Array.<String>} ValidationErrors
 */
UpdateProfileResponse.prototype['ValidationErrors'] = undefined;






export default UpdateProfileResponse;

