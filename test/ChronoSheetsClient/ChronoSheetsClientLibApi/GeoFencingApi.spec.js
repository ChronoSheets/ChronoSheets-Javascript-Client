/*
 * ChronoSheets API
 * <div style='font-size: 14px!important;font-family: Open Sans,sans-serif!important;color: #3b4151!important;'><p>      ChronoSheets is a flexible timesheet solution for small to medium businesses, it is free for small teams of up to 3 and there are iOS and Android apps available.  Use the ChronoSheets API to create your own custom integrations.  Before starting, sign up for a ChronoSheets account at <a target='_BLANK' href='http://tsheets.xyz/signup'>http://tsheets.xyz/signup</a>.  </p></div><div id='cs-extra-info'></div>
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../../src/ChronoSheetsClient/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/ChronoSheetsClient/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ChronoSheetsApi);
  }
}(this, function(expect, ChronoSheetsApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ChronoSheetsApi.GeoFencingApi();
  });

  describe('ChronoSheetsClient', function() {
    describe('GeoFencingApi', function() {
      describe('geoFencingCreateGeofence', function() {
        it('should call geoFencingCreateGeofence successfully', function(done) {
          // TODO: uncomment, update parameter values for geoFencingCreateGeofence call and complete the assertions
          /*
          var request = new ChronoSheetsApi.CSCreateGeoFenceRequest();
          request.name = "";
          request.fenceCoordinates = [new ChronoSheetsApi.CSBasicCoordinate()];
          request.fenceCoordinates[0].latitude = 0.0;
          request.fenceCoordinates[0].longitude = 0.0;
          request.triggerJobCodeId = 0;
          request.triggerTaskId = 0;
          request.sendAlertToOrgGroupId = 0;
          request.alertSettings = "None";
          request.triggerSettings = "None";
          request.startTimeHour = 0;
          request.startTimeMinute = 0;
          request.endTimeHour = 0;
          request.endTimeMinute = 0;
          var xChronosheetsAuth = "xChronosheetsAuth_example";

          instance.geoFencingCreateGeofence(request, xChronosheetsAuth, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ChronoSheetsApi.CSApiResponseInt32);
            expect(data.data).to.be.a('number');
            expect(data.data).to.be(0);
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("Succeeded");
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('geoFencingDeleteGeofence', function() {
        it('should call geoFencingDeleteGeofence successfully', function(done) {
          // TODO: uncomment, update parameter values for geoFencingDeleteGeofence call and complete the assertions
          /*
          var geofenceId = 56;
          var xChronosheetsAuth = "xChronosheetsAuth_example";

          instance.geoFencingDeleteGeofence(geofenceId, xChronosheetsAuth, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ChronoSheetsApi.CSApiResponseGeofence);
            expect(data.data).to.be.a(ChronoSheetsApi.CSGeofence);
                  expect(data.data.geoFencingId).to.be.a('number');
              expect(data.data.geoFencingId).to.be(0);
              expect(data.data.orgId).to.be.a('number');
              expect(data.data.orgId).to.be(0);
              expect(data.data.createdByUserId).to.be.a('number');
              expect(data.data.createdByUserId).to.be(0);
              expect(data.data.lastUpdatedByUserId).to.be.a('number');
              expect(data.data.lastUpdatedByUserId).to.be(0);
              expect(data.data.name).to.be.a('string');
              expect(data.data.name).to.be("");
              expect(data.data.locationName).to.be.a('string');
              expect(data.data.locationName).to.be("");
              {
                let dataCtr = data.data.coordinates;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(ChronoSheetsApi.CSBasicCoordinate);
                  expect(data.latitude).to.be.a('number');
                  expect(data.latitude).to.be(0.0);
                  expect(data.longitude).to.be.a('number');
                  expect(data.longitude).to.be(0.0);
  
                        }
              }
              expect(data.data.createdAt).to.be.a(Date);
              expect(data.data.createdAt).to.be(new Date());
              expect(data.data.updatedAt).to.be.a(Date);
              expect(data.data.updatedAt).to.be(new Date());
              expect(data.data.triggerJobCodeId).to.be.a('number');
              expect(data.data.triggerJobCodeId).to.be(0);
              expect(data.data.triggerTaskId).to.be.a('number');
              expect(data.data.triggerTaskId).to.be(0);
              expect(data.data.triggerSettings).to.be.a('string');
              expect(data.data.triggerSettings).to.be("None");
              expect(data.data.alertToOrgGroupId).to.be.a('number');
              expect(data.data.alertToOrgGroupId).to.be(0);
              expect(data.data.alertSettings).to.be.a('string');
              expect(data.data.alertSettings).to.be("None");
              expect(data.data.startTimeHour).to.be.a('number');
              expect(data.data.startTimeHour).to.be(0);
              expect(data.data.startTimeMinute).to.be.a('number');
              expect(data.data.startTimeMinute).to.be(0);
              expect(data.data.endTimeHour).to.be.a('number');
              expect(data.data.endTimeHour).to.be(0);
              expect(data.data.endTimeMinute).to.be.a('number');
              expect(data.data.endTimeMinute).to.be(0);
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("Succeeded");
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('geoFencingGetGeofenceById', function() {
        it('should call geoFencingGetGeofenceById successfully', function(done) {
          // TODO: uncomment, update parameter values for geoFencingGetGeofenceById call and complete the assertions
          /*
          var geofenceId = 56;
          var xChronosheetsAuth = "xChronosheetsAuth_example";

          instance.geoFencingGetGeofenceById(geofenceId, xChronosheetsAuth, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ChronoSheetsApi.CSApiResponseGeofence);
            expect(data.data).to.be.a(ChronoSheetsApi.CSGeofence);
                  expect(data.data.geoFencingId).to.be.a('number');
              expect(data.data.geoFencingId).to.be(0);
              expect(data.data.orgId).to.be.a('number');
              expect(data.data.orgId).to.be(0);
              expect(data.data.createdByUserId).to.be.a('number');
              expect(data.data.createdByUserId).to.be(0);
              expect(data.data.lastUpdatedByUserId).to.be.a('number');
              expect(data.data.lastUpdatedByUserId).to.be(0);
              expect(data.data.name).to.be.a('string');
              expect(data.data.name).to.be("");
              expect(data.data.locationName).to.be.a('string');
              expect(data.data.locationName).to.be("");
              {
                let dataCtr = data.data.coordinates;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(ChronoSheetsApi.CSBasicCoordinate);
                  expect(data.latitude).to.be.a('number');
                  expect(data.latitude).to.be(0.0);
                  expect(data.longitude).to.be.a('number');
                  expect(data.longitude).to.be(0.0);
  
                        }
              }
              expect(data.data.createdAt).to.be.a(Date);
              expect(data.data.createdAt).to.be(new Date());
              expect(data.data.updatedAt).to.be.a(Date);
              expect(data.data.updatedAt).to.be(new Date());
              expect(data.data.triggerJobCodeId).to.be.a('number');
              expect(data.data.triggerJobCodeId).to.be(0);
              expect(data.data.triggerTaskId).to.be.a('number');
              expect(data.data.triggerTaskId).to.be(0);
              expect(data.data.triggerSettings).to.be.a('string');
              expect(data.data.triggerSettings).to.be("None");
              expect(data.data.alertToOrgGroupId).to.be.a('number');
              expect(data.data.alertToOrgGroupId).to.be(0);
              expect(data.data.alertSettings).to.be.a('string');
              expect(data.data.alertSettings).to.be("None");
              expect(data.data.startTimeHour).to.be.a('number');
              expect(data.data.startTimeHour).to.be(0);
              expect(data.data.startTimeMinute).to.be.a('number');
              expect(data.data.startTimeMinute).to.be(0);
              expect(data.data.endTimeHour).to.be.a('number');
              expect(data.data.endTimeHour).to.be(0);
              expect(data.data.endTimeMinute).to.be.a('number');
              expect(data.data.endTimeMinute).to.be(0);
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("Succeeded");
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('geoFencingGetGeofences', function() {
        it('should call geoFencingGetGeofences successfully', function(done) {
          // TODO: uncomment, update parameter values for geoFencingGetGeofences call and complete the assertions
          /*
          var xChronosheetsAuth = "xChronosheetsAuth_example";
          var opts = {};
          opts.skip = 56;
          opts.take = 56;

          instance.geoFencingGetGeofences(xChronosheetsAuth, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ChronoSheetsApi.CSApiResponseForPaginatedListExtendedGeofence);
            expect(data.totalSetCount).to.be.a('number');
            expect(data.totalSetCount).to.be(0);
            {
              let dataCtr = data.data;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(ChronoSheetsApi.CSExtendedGeofence);
                expect(data.jobCode).to.be.a('string');
                expect(data.jobCode).to.be("");
                expect(data.taskName).to.be.a('string');
                expect(data.taskName).to.be("");
                expect(data.createdBy).to.be.a('string');
                expect(data.createdBy).to.be("");
                expect(data.updatedBy).to.be.a('string');
                expect(data.updatedBy).to.be("");
                expect(data.alertOrganisation).to.be.a('string');
                expect(data.alertOrganisation).to.be("");
                expect(data.geoFencingId).to.be.a('number');
                expect(data.geoFencingId).to.be(0);
                expect(data.orgId).to.be.a('number');
                expect(data.orgId).to.be(0);
                expect(data.createdByUserId).to.be.a('number');
                expect(data.createdByUserId).to.be(0);
                expect(data.lastUpdatedByUserId).to.be.a('number');
                expect(data.lastUpdatedByUserId).to.be(0);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.locationName).to.be.a('string');
                expect(data.locationName).to.be("");
                {
                  let dataCtr = data.coordinates;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(ChronoSheetsApi.CSBasicCoordinate);
                    expect(data.latitude).to.be.a('number');
                    expect(data.latitude).to.be(0.0);
                    expect(data.longitude).to.be.a('number');
                    expect(data.longitude).to.be(0.0);
    
                          }
                }
                expect(data.createdAt).to.be.a(Date);
                expect(data.createdAt).to.be(new Date());
                expect(data.updatedAt).to.be.a(Date);
                expect(data.updatedAt).to.be(new Date());
                expect(data.triggerJobCodeId).to.be.a('number');
                expect(data.triggerJobCodeId).to.be(0);
                expect(data.triggerTaskId).to.be.a('number');
                expect(data.triggerTaskId).to.be(0);
                expect(data.triggerSettings).to.be.a('string');
                expect(data.triggerSettings).to.be("None");
                expect(data.alertToOrgGroupId).to.be.a('number');
                expect(data.alertToOrgGroupId).to.be(0);
                expect(data.alertSettings).to.be.a('string');
                expect(data.alertSettings).to.be("None");
                expect(data.startTimeHour).to.be.a('number');
                expect(data.startTimeHour).to.be(0);
                expect(data.startTimeMinute).to.be.a('number');
                expect(data.startTimeMinute).to.be(0);
                expect(data.endTimeHour).to.be.a('number');
                expect(data.endTimeHour).to.be(0);
                expect(data.endTimeMinute).to.be.a('number');
                expect(data.endTimeMinute).to.be(0);

                      }
            }
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("Succeeded");
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('geoFencingUpdateGeofence', function() {
        it('should call geoFencingUpdateGeofence successfully', function(done) {
          // TODO: uncomment, update parameter values for geoFencingUpdateGeofence call and complete the assertions
          /*
          var request = new ChronoSheetsApi.CSUpdateGeoFenceRequest();
          request.geofenceId = 0;
          request.name = "";
          request.fenceCoordinates = [new ChronoSheetsApi.CSBasicCoordinate()];
          request.fenceCoordinates[0].latitude = 0.0;
          request.fenceCoordinates[0].longitude = 0.0;
          request.triggerJobCodeId = 0;
          request.triggerTaskId = 0;
          request.sendAlertToOrgGroupId = 0;
          request.alertSettings = "None";
          request.triggerSettings = "None";
          request.startTimeHour = 0;
          request.startTimeMinute = 0;
          request.endTimeHour = 0;
          request.endTimeMinute = 0;
          var xChronosheetsAuth = "xChronosheetsAuth_example";

          instance.geoFencingUpdateGeofence(request, xChronosheetsAuth, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ChronoSheetsApi.CSApiResponseInt32);
            expect(data.data).to.be.a('number');
            expect(data.data).to.be(0);
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("Succeeded");
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
