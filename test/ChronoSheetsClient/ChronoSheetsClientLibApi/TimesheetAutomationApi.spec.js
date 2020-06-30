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
    instance = new ChronoSheetsApi.TimesheetAutomationApi();
  });

  describe('ChronoSheetsClient', function() {
    describe('TimesheetAutomationApi', function() {
      describe('timesheetAutomationCreateAutomationStep', function() {
        it('should call timesheetAutomationCreateAutomationStep successfully', function(done) {
          // TODO: uncomment, update parameter values for timesheetAutomationCreateAutomationStep call and complete the assertions
          /*
          var request = new ChronoSheetsApi.CSCreateAutomationStepRequest();
          request.geofencingId = 0;
          request.nfcId = 0;
          request.automationActionType = "EnterGeofence";
          request.latitude = 0.0;
          request.longitude = 0.0;
          request.clientTime = new Date();
          var xChronosheetsAuth = "xChronosheetsAuth_example";

          instance.timesheetAutomationCreateAutomationStep(request, xChronosheetsAuth, function(error, data, response) {
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
      describe('timesheetAutomationGetTimesheetAutomationAuditTrail', function() {
        it('should call timesheetAutomationGetTimesheetAutomationAuditTrail successfully', function(done) {
          // TODO: uncomment, update parameter values for timesheetAutomationGetTimesheetAutomationAuditTrail call and complete the assertions
          /*
          var geofenceId = 56;
          var userId = 56;
          var sort = "sort_example";
          var order = "order_example";
          var xChronosheetsAuth = "xChronosheetsAuth_example";
          var opts = {};
          opts.skip = 56;
          opts.take = 56;

          instance.timesheetAutomationGetTimesheetAutomationAuditTrail(geofenceId, userId, sort, order, xChronosheetsAuth, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ChronoSheetsApi.CSApiResponseForPaginatedListTimesheetAutomationWithOrgAndGeofence);
            expect(data.totalSetCount).to.be.a('number');
            expect(data.totalSetCount).to.be(0);
            {
              let dataCtr = data.data;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(ChronoSheetsApi.CSTimesheetAutomationWithOrgAndGeofence);
                expect(data.orgId).to.be.a('number');
                expect(data.orgId).to.be(0);
                expect(data.geofenceName).to.be.a('string');
                expect(data.geofenceName).to.be("");
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
                expect(data.userId).to.be.a('number');
                expect(data.userId).to.be(0);
                expect(data.userName).to.be.a('string');
                expect(data.userName).to.be("");
                expect(data.firstName).to.be.a('string');
                expect(data.firstName).to.be("");
                expect(data.lastName).to.be.a('string');
                expect(data.lastName).to.be("");
                expect(data.automationId).to.be.a('number');
                expect(data.automationId).to.be(0);
                expect(data.automationActionType).to.be.a('string');
                expect(data.automationActionType).to.be("EnterGeofence");
                expect(data.created).to.be.a(Date);
                expect(data.created).to.be(new Date());
                expect(data.latitude).to.be.a('number');
                expect(data.latitude).to.be(0.0);
                expect(data.longitude).to.be.a('number');
                expect(data.longitude).to.be(0.0);
                expect(data.isProcessed).to.be.a('boolean');
                expect(data.isProcessed).to.be(false);
                expect(data.expires).to.be.a(Date);
                expect(data.expires).to.be(new Date());
                expect(data.clientDateTime).to.be.a(Date);
                expect(data.clientDateTime).to.be(new Date());

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
    });
  });

}));
