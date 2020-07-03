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
import ClientSideUser from './ClientSideUser';

/**
 * The DoLoginResponse model module.
 * @module ChronoSheetsClient/ChronoSheetsClientLibModel/DoLoginResponse
 * @version 1.0.0
 */
class DoLoginResponse {
    /**
     * Constructs a new <code>DoLoginResponse</code>.
     * A Response object containing important information that can be used after the user has logged in
     * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/DoLoginResponse
     */
    constructor() { 
        
        DoLoginResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DoLoginResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/DoLoginResponse} obj Optional instance to populate.
     * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/DoLoginResponse} The populated <code>DoLoginResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DoLoginResponse();

            if (data.hasOwnProperty('CSAuthToken')) {
                obj['CSAuthToken'] = ApiClient.convertToType(data['CSAuthToken'], 'String');
            }
            if (data.hasOwnProperty('LoggedInUser')) {
                obj['LoggedInUser'] = ClientSideUser.constructFromObject(data['LoggedInUser']);
            }
        }
        return obj;
    }


}

/**
 * The ChronoSheets Auth Token.  Use this token for all subsequent requests to the API.  The Auth Token does these things: holds your session and gives you appropraite authorisation to access API endpoints based on your UserRoles
 * @member {String} CSAuthToken
 */
DoLoginResponse.prototype['CSAuthToken'] = undefined;

/**
 * @member {module:ChronoSheetsClient/ChronoSheetsClientLibModel/ClientSideUser} LoggedInUser
 */
DoLoginResponse.prototype['LoggedInUser'] = undefined;






export default DoLoginResponse;
