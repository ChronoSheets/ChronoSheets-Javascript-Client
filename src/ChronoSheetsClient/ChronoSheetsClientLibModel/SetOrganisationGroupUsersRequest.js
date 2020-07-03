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
 * The SetOrganisationGroupUsersRequest model module.
 * @module ChronoSheetsClient/ChronoSheetsClientLibModel/SetOrganisationGroupUsersRequest
 * @version 1.0.0
 */
class SetOrganisationGroupUsersRequest {
    /**
     * Constructs a new <code>SetOrganisationGroupUsersRequest</code>.
     * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/SetOrganisationGroupUsersRequest
     */
    constructor() { 
        
        SetOrganisationGroupUsersRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SetOrganisationGroupUsersRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/SetOrganisationGroupUsersRequest} obj Optional instance to populate.
     * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/SetOrganisationGroupUsersRequest} The populated <code>SetOrganisationGroupUsersRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SetOrganisationGroupUsersRequest();

            if (data.hasOwnProperty('OrganisationGroupId')) {
                obj['OrganisationGroupId'] = ApiClient.convertToType(data['OrganisationGroupId'], 'Number');
            }
            if (data.hasOwnProperty('CsvUserIds')) {
                obj['CsvUserIds'] = ApiClient.convertToType(data['CsvUserIds'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} OrganisationGroupId
 */
SetOrganisationGroupUsersRequest.prototype['OrganisationGroupId'] = undefined;

/**
 * @member {String} CsvUserIds
 */
SetOrganisationGroupUsersRequest.prototype['CsvUserIds'] = undefined;






export default SetOrganisationGroupUsersRequest;

