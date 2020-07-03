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
 * The JobSeriesReportItem model module.
 * @module ChronoSheetsClient/ChronoSheetsClientLibModel/JobSeriesReportItem
 * @version 1.0.0
 */
class JobSeriesReportItem {
    /**
     * Constructs a new <code>JobSeriesReportItem</code>.
     * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/JobSeriesReportItem
     */
    constructor() { 
        
        JobSeriesReportItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JobSeriesReportItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/JobSeriesReportItem} obj Optional instance to populate.
     * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/JobSeriesReportItem} The populated <code>JobSeriesReportItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobSeriesReportItem();

            if (data.hasOwnProperty('StartDate')) {
                obj['StartDate'] = ApiClient.convertToType(data['StartDate'], 'Date');
            }
            if (data.hasOwnProperty('EndDate')) {
                obj['EndDate'] = ApiClient.convertToType(data['EndDate'], 'Date');
            }
            if (data.hasOwnProperty('JobId')) {
                obj['JobId'] = ApiClient.convertToType(data['JobId'], 'Number');
            }
            if (data.hasOwnProperty('ClientId')) {
                obj['ClientId'] = ApiClient.convertToType(data['ClientId'], 'Number');
            }
            if (data.hasOwnProperty('ClientName')) {
                obj['ClientName'] = ApiClient.convertToType(data['ClientName'], 'String');
            }
            if (data.hasOwnProperty('ProjectId')) {
                obj['ProjectId'] = ApiClient.convertToType(data['ProjectId'], 'Number');
            }
            if (data.hasOwnProperty('ProjectName')) {
                obj['ProjectName'] = ApiClient.convertToType(data['ProjectName'], 'String');
            }
            if (data.hasOwnProperty('SpanSeconds')) {
                obj['SpanSeconds'] = ApiClient.convertToType(data['SpanSeconds'], 'Number');
            }
            if (data.hasOwnProperty('JobCode')) {
                obj['JobCode'] = ApiClient.convertToType(data['JobCode'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} StartDate
 */
JobSeriesReportItem.prototype['StartDate'] = undefined;

/**
 * @member {Date} EndDate
 */
JobSeriesReportItem.prototype['EndDate'] = undefined;

/**
 * @member {Number} JobId
 */
JobSeriesReportItem.prototype['JobId'] = undefined;

/**
 * @member {Number} ClientId
 */
JobSeriesReportItem.prototype['ClientId'] = undefined;

/**
 * @member {String} ClientName
 */
JobSeriesReportItem.prototype['ClientName'] = undefined;

/**
 * @member {Number} ProjectId
 */
JobSeriesReportItem.prototype['ProjectId'] = undefined;

/**
 * @member {String} ProjectName
 */
JobSeriesReportItem.prototype['ProjectName'] = undefined;

/**
 * @member {Number} SpanSeconds
 */
JobSeriesReportItem.prototype['SpanSeconds'] = undefined;

/**
 * @member {String} JobCode
 */
JobSeriesReportItem.prototype['JobCode'] = undefined;






export default JobSeriesReportItem;

