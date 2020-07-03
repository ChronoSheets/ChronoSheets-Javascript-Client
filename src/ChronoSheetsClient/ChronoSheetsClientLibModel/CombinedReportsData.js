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
import ClientSeriesReportItem from './ClientSeriesReportItem';
import ClientTotalsReportItem from './ClientTotalsReportItem';
import JobSeriesReportItem from './JobSeriesReportItem';
import JobTotalsReportItem from './JobTotalsReportItem';
import ProjectSeriesReportItem from './ProjectSeriesReportItem';
import ProjectTotalsReportItem from './ProjectTotalsReportItem';
import TaskSeriesReportItem from './TaskSeriesReportItem';
import TaskTotalsReportItem from './TaskTotalsReportItem';

/**
 * The CombinedReportsData model module.
 * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CombinedReportsData
 * @version 1.0.0
 */
class CombinedReportsData {
    /**
     * Constructs a new <code>CombinedReportsData</code>.
     * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CombinedReportsData
     */
    constructor() { 
        
        CombinedReportsData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CombinedReportsData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CombinedReportsData} obj Optional instance to populate.
     * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CombinedReportsData} The populated <code>CombinedReportsData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CombinedReportsData();

            if (data.hasOwnProperty('SeriesJobCodes')) {
                obj['SeriesJobCodes'] = ApiClient.convertToType(data['SeriesJobCodes'], [JobSeriesReportItem]);
            }
            if (data.hasOwnProperty('SeriesTasks')) {
                obj['SeriesTasks'] = ApiClient.convertToType(data['SeriesTasks'], [TaskSeriesReportItem]);
            }
            if (data.hasOwnProperty('SeriesClients')) {
                obj['SeriesClients'] = ApiClient.convertToType(data['SeriesClients'], [ClientSeriesReportItem]);
            }
            if (data.hasOwnProperty('SeriesProjects')) {
                obj['SeriesProjects'] = ApiClient.convertToType(data['SeriesProjects'], [ProjectSeriesReportItem]);
            }
            if (data.hasOwnProperty('TotalsJobCodes')) {
                obj['TotalsJobCodes'] = ApiClient.convertToType(data['TotalsJobCodes'], [JobTotalsReportItem]);
            }
            if (data.hasOwnProperty('TotalsTasks')) {
                obj['TotalsTasks'] = ApiClient.convertToType(data['TotalsTasks'], [TaskTotalsReportItem]);
            }
            if (data.hasOwnProperty('TotalsClients')) {
                obj['TotalsClients'] = ApiClient.convertToType(data['TotalsClients'], [ClientTotalsReportItem]);
            }
            if (data.hasOwnProperty('TotalsProjects')) {
                obj['TotalsProjects'] = ApiClient.convertToType(data['TotalsProjects'], [ProjectTotalsReportItem]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:ChronoSheetsClient/ChronoSheetsClientLibModel/JobSeriesReportItem>} SeriesJobCodes
 */
CombinedReportsData.prototype['SeriesJobCodes'] = undefined;

/**
 * @member {Array.<module:ChronoSheetsClient/ChronoSheetsClientLibModel/TaskSeriesReportItem>} SeriesTasks
 */
CombinedReportsData.prototype['SeriesTasks'] = undefined;

/**
 * @member {Array.<module:ChronoSheetsClient/ChronoSheetsClientLibModel/ClientSeriesReportItem>} SeriesClients
 */
CombinedReportsData.prototype['SeriesClients'] = undefined;

/**
 * @member {Array.<module:ChronoSheetsClient/ChronoSheetsClientLibModel/ProjectSeriesReportItem>} SeriesProjects
 */
CombinedReportsData.prototype['SeriesProjects'] = undefined;

/**
 * @member {Array.<module:ChronoSheetsClient/ChronoSheetsClientLibModel/JobTotalsReportItem>} TotalsJobCodes
 */
CombinedReportsData.prototype['TotalsJobCodes'] = undefined;

/**
 * @member {Array.<module:ChronoSheetsClient/ChronoSheetsClientLibModel/TaskTotalsReportItem>} TotalsTasks
 */
CombinedReportsData.prototype['TotalsTasks'] = undefined;

/**
 * @member {Array.<module:ChronoSheetsClient/ChronoSheetsClientLibModel/ClientTotalsReportItem>} TotalsClients
 */
CombinedReportsData.prototype['TotalsClients'] = undefined;

/**
 * @member {Array.<module:ChronoSheetsClient/ChronoSheetsClientLibModel/ProjectTotalsReportItem>} TotalsProjects
 */
CombinedReportsData.prototype['TotalsProjects'] = undefined;






export default CombinedReportsData;

