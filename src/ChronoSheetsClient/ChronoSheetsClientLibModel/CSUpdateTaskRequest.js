/**
 * The ChronoSheets API
 * <div style='font-size: 14px!important;font-family: Open Sans,sans-serif!important;color: #3b4151!important;'><p>      ChronoSheets is a flexible timesheet solution for small to medium businesses, it is free for small teams of up to 5 and there are iOS and Android apps available.  Use the ChronoSheets API to create your own custom integrations.  </p>  <p>      First Steps:       <ol>          <li>Make sure you've <a href='/HomeV2/App/sign-up'>signed up to ChronoSheets</a> to get yourself a user account</li>          <li>Confirm your account by following the link sent to your email address.  This will activate your account</li>          <li>Use your username and password to obtain an Auth Token by using the DoLogin method inside the UserProfile section below.  Use the Auth Token as an argument to the other methods</li>          <li>Try different methods in the API Playground to learn about the API</li>          <li>If you're stuck, try the full getting started guide on the <a href='/Home/ApiDocs'>API Toolkit</a> page.</li>      </ol>  </p>  <p>      Further Steps:       <ul>          <li>Create a mobile app (iOS, Android or Windows) using one of the ChronoSheets Mobile SDKs</li>          <li>Create a custom integration with your app using one of the ChronoSheets API Client Libraries.</li>      </ul>      Read more about the API Toolkit on the <a href='/Home/ApiDocs'>API Toolkit</a> page.  </p></div>
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ChronoSheetsClient/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.TheChronoSheetsApi) {
      root.TheChronoSheetsApi = {};
    }
    root.TheChronoSheetsApi.CSUpdateTaskRequest = factory(root.TheChronoSheetsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CSUpdateTaskRequest model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CSUpdateTaskRequest
   * @version v1
   */

  /**
   * Constructs a new <code>CSUpdateTaskRequest</code>.
   * Fields used to update a Task
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSUpdateTaskRequest
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>CSUpdateTaskRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSUpdateTaskRequest} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSUpdateTaskRequest} The populated <code>CSUpdateTaskRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Id')) {
        obj['Id'] = ApiClient.convertToType(data['Id'], 'Number');
      }
      if (data.hasOwnProperty('TaskName')) {
        obj['TaskName'] = ApiClient.convertToType(data['TaskName'], 'String');
      }
      if (data.hasOwnProperty('IsDeleted')) {
        obj['IsDeleted'] = ApiClient.convertToType(data['IsDeleted'], 'Boolean');
      }
      if (data.hasOwnProperty('TripEnabled')) {
        obj['TripEnabled'] = ApiClient.convertToType(data['TripEnabled'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * The Id of the Task that is to be updated
   * @member {Number} Id
   */
  exports.prototype['Id'] = undefined;
  /**
   * The updated Task Name
   * @member {String} TaskName
   */
  exports.prototype['TaskName'] = undefined;
  /**
   * Whether or not this Task should be marked as deleted
   * @member {Boolean} IsDeleted
   */
  exports.prototype['IsDeleted'] = undefined;
  /**
   * Whether or not this Task should have GPS Trip Recording enabled
   * @member {Boolean} TripEnabled
   */
  exports.prototype['TripEnabled'] = undefined;



  return exports;
}));

