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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/ChronoSheetsClient/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/ChronoSheetsClient/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ChronoSheetsApi);
  }
}(this, function(expect, ChronoSheetsApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ChronoSheetsApi.UpdateGeoFenceRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('UpdateGeoFenceRequest', function() {
    it('should create an instance of UpdateGeoFenceRequest', function() {
      // uncomment below and update the code to test UpdateGeoFenceRequest
      //var instane = new ChronoSheetsApi.UpdateGeoFenceRequest();
      //expect(instance).to.be.a(ChronoSheetsApi.UpdateGeoFenceRequest);
    });

    it('should have the property geofenceId (base name: "GeofenceId")', function() {
      // uncomment below and update the code to test the property geofenceId
      //var instane = new ChronoSheetsApi.UpdateGeoFenceRequest();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "Name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ChronoSheetsApi.UpdateGeoFenceRequest();
      //expect(instance).to.be();
    });

    it('should have the property fenceCoordinates (base name: "FenceCoordinates")', function() {
      // uncomment below and update the code to test the property fenceCoordinates
      //var instane = new ChronoSheetsApi.UpdateGeoFenceRequest();
      //expect(instance).to.be();
    });

    it('should have the property triggerJobCodeId (base name: "TriggerJobCodeId")', function() {
      // uncomment below and update the code to test the property triggerJobCodeId
      //var instane = new ChronoSheetsApi.UpdateGeoFenceRequest();
      //expect(instance).to.be();
    });

    it('should have the property triggerTaskId (base name: "TriggerTaskId")', function() {
      // uncomment below and update the code to test the property triggerTaskId
      //var instane = new ChronoSheetsApi.UpdateGeoFenceRequest();
      //expect(instance).to.be();
    });

    it('should have the property sendAlertToOrgGroupId (base name: "SendAlertToOrgGroupId")', function() {
      // uncomment below and update the code to test the property sendAlertToOrgGroupId
      //var instane = new ChronoSheetsApi.UpdateGeoFenceRequest();
      //expect(instance).to.be();
    });

    it('should have the property alertSettings (base name: "AlertSettings")', function() {
      // uncomment below and update the code to test the property alertSettings
      //var instane = new ChronoSheetsApi.UpdateGeoFenceRequest();
      //expect(instance).to.be();
    });

    it('should have the property triggerSettings (base name: "TriggerSettings")', function() {
      // uncomment below and update the code to test the property triggerSettings
      //var instane = new ChronoSheetsApi.UpdateGeoFenceRequest();
      //expect(instance).to.be();
    });

    it('should have the property startTimeHour (base name: "StartTimeHour")', function() {
      // uncomment below and update the code to test the property startTimeHour
      //var instane = new ChronoSheetsApi.UpdateGeoFenceRequest();
      //expect(instance).to.be();
    });

    it('should have the property startTimeMinute (base name: "StartTimeMinute")', function() {
      // uncomment below and update the code to test the property startTimeMinute
      //var instane = new ChronoSheetsApi.UpdateGeoFenceRequest();
      //expect(instance).to.be();
    });

    it('should have the property endTimeHour (base name: "EndTimeHour")', function() {
      // uncomment below and update the code to test the property endTimeHour
      //var instane = new ChronoSheetsApi.UpdateGeoFenceRequest();
      //expect(instance).to.be();
    });

    it('should have the property endTimeMinute (base name: "EndTimeMinute")', function() {
      // uncomment below and update the code to test the property endTimeMinute
      //var instane = new ChronoSheetsApi.UpdateGeoFenceRequest();
      //expect(instance).to.be();
    });

  });

}));
