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
 * The UpdateMyProfileRequest model module.
 * @module ChronoSheetsClient/ChronoSheetsClientLibModel/UpdateMyProfileRequest
 * @version 1.0.0
 */
class UpdateMyProfileRequest {
    /**
     * Constructs a new <code>UpdateMyProfileRequest</code>.
     * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/UpdateMyProfileRequest
     */
    constructor() { 
        
        UpdateMyProfileRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateMyProfileRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/UpdateMyProfileRequest} obj Optional instance to populate.
     * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/UpdateMyProfileRequest} The populated <code>UpdateMyProfileRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateMyProfileRequest();

            if (data.hasOwnProperty('EmailAddress')) {
                obj['EmailAddress'] = ApiClient.convertToType(data['EmailAddress'], 'String');
            }
            if (data.hasOwnProperty('FirstName')) {
                obj['FirstName'] = ApiClient.convertToType(data['FirstName'], 'String');
            }
            if (data.hasOwnProperty('LastName')) {
                obj['LastName'] = ApiClient.convertToType(data['LastName'], 'String');
            }
            if (data.hasOwnProperty('OldPassword')) {
                obj['OldPassword'] = ApiClient.convertToType(data['OldPassword'], 'String');
            }
            if (data.hasOwnProperty('NewPassword')) {
                obj['NewPassword'] = ApiClient.convertToType(data['NewPassword'], 'String');
            }
            if (data.hasOwnProperty('ConfirmNewPassword')) {
                obj['ConfirmNewPassword'] = ApiClient.convertToType(data['ConfirmNewPassword'], 'String');
            }
            if (data.hasOwnProperty('IsSubscribedToNewsletter')) {
                obj['IsSubscribedToNewsletter'] = ApiClient.convertToType(data['IsSubscribedToNewsletter'], 'Boolean');
            }
            if (data.hasOwnProperty('WantsToChangePassword')) {
                obj['WantsToChangePassword'] = ApiClient.convertToType(data['WantsToChangePassword'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} EmailAddress
 */
UpdateMyProfileRequest.prototype['EmailAddress'] = undefined;

/**
 * @member {String} FirstName
 */
UpdateMyProfileRequest.prototype['FirstName'] = undefined;

/**
 * @member {String} LastName
 */
UpdateMyProfileRequest.prototype['LastName'] = undefined;

/**
 * @member {String} OldPassword
 */
UpdateMyProfileRequest.prototype['OldPassword'] = undefined;

/**
 * @member {String} NewPassword
 */
UpdateMyProfileRequest.prototype['NewPassword'] = undefined;

/**
 * @member {String} ConfirmNewPassword
 */
UpdateMyProfileRequest.prototype['ConfirmNewPassword'] = undefined;

/**
 * @member {Boolean} IsSubscribedToNewsletter
 */
UpdateMyProfileRequest.prototype['IsSubscribedToNewsletter'] = undefined;

/**
 * @member {Boolean} WantsToChangePassword
 */
UpdateMyProfileRequest.prototype['WantsToChangePassword'] = undefined;






export default UpdateMyProfileRequest;

