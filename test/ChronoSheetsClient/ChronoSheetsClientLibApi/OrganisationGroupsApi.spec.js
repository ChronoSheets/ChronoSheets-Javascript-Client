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
    instance = new ChronoSheetsApi.OrganisationGroupsApi();
  });

  describe('ChronoSheetsClient', function() {
    describe('OrganisationGroupsApi', function() {
      describe('organisationGroupsCreateOrganisationGroup', function() {
        it('should call organisationGroupsCreateOrganisationGroup successfully', function(done) {
          // TODO: uncomment, update parameter values for organisationGroupsCreateOrganisationGroup call and complete the assertions
          /*
          var request = new ChronoSheetsApi.CSInsertOrganisationGroupRequest();
          request.organisationGroupName = "";
          request.organisationGroupUserIds = [0];
          var xChronosheetsAuth = "xChronosheetsAuth_example";

          instance.organisationGroupsCreateOrganisationGroup(request, xChronosheetsAuth, function(error, data, response) {
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
      describe('organisationGroupsDeleteOrganisationGroup', function() {
        it('should call organisationGroupsDeleteOrganisationGroup successfully', function(done) {
          // TODO: uncomment, update parameter values for organisationGroupsDeleteOrganisationGroup call and complete the assertions
          /*
          var organisationGroupId = 56;
          var xChronosheetsAuth = "xChronosheetsAuth_example";

          instance.organisationGroupsDeleteOrganisationGroup(organisationGroupId, xChronosheetsAuth, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ChronoSheetsApi.CSApiResponseBoolean);
            expect(data.data).to.be.a('boolean');
            expect(data.data).to.be(false);
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
      describe('organisationGroupsGetOrganisationGroup', function() {
        it('should call organisationGroupsGetOrganisationGroup successfully', function(done) {
          // TODO: uncomment, update parameter values for organisationGroupsGetOrganisationGroup call and complete the assertions
          /*
          var organisationGroupId = 56;
          var xChronosheetsAuth = "xChronosheetsAuth_example";

          instance.organisationGroupsGetOrganisationGroup(organisationGroupId, xChronosheetsAuth, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ChronoSheetsApi.CSApiResponseOrganisationGroup);
            expect(data.data).to.be.a(ChronoSheetsApi.CSOrganisationGroup);
                  expect(data.data.id).to.be.a('number');
              expect(data.data.id).to.be(0);
              expect(data.data.organisationId).to.be.a('number');
              expect(data.data.organisationId).to.be(0);
              expect(data.data.organisationGroupName).to.be.a('string');
              expect(data.data.organisationGroupName).to.be("");
              expect(data.data.isDeleted).to.be.a('boolean');
              expect(data.data.isDeleted).to.be(false);
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
      describe('organisationGroupsGetOrganisationGroups', function() {
        it('should call organisationGroupsGetOrganisationGroups successfully', function(done) {
          // TODO: uncomment, update parameter values for organisationGroupsGetOrganisationGroups call and complete the assertions
          /*
          var xChronosheetsAuth = "xChronosheetsAuth_example";

          instance.organisationGroupsGetOrganisationGroups(xChronosheetsAuth, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ChronoSheetsApi.CSApiResponseListOrganisationGroup);
            {
              let dataCtr = data.data;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(ChronoSheetsApi.CSOrganisationGroup);
                expect(data.id).to.be.a('number');
                expect(data.id).to.be(0);
                expect(data.organisationId).to.be.a('number');
                expect(data.organisationId).to.be(0);
                expect(data.organisationGroupName).to.be.a('string');
                expect(data.organisationGroupName).to.be("");
                expect(data.isDeleted).to.be.a('boolean');
                expect(data.isDeleted).to.be(false);

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
      describe('organisationGroupsGetOrganisationGroupsForJob', function() {
        it('should call organisationGroupsGetOrganisationGroupsForJob successfully', function(done) {
          // TODO: uncomment, update parameter values for organisationGroupsGetOrganisationGroupsForJob call and complete the assertions
          /*
          var jobId = 56;
          var xChronosheetsAuth = "xChronosheetsAuth_example";

          instance.organisationGroupsGetOrganisationGroupsForJob(jobId, xChronosheetsAuth, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ChronoSheetsApi.CSApiResponseListOrganisationGroup);
            {
              let dataCtr = data.data;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(ChronoSheetsApi.CSOrganisationGroup);
                expect(data.id).to.be.a('number');
                expect(data.id).to.be(0);
                expect(data.organisationId).to.be.a('number');
                expect(data.organisationId).to.be(0);
                expect(data.organisationGroupName).to.be.a('string');
                expect(data.organisationGroupName).to.be("");
                expect(data.isDeleted).to.be.a('boolean');
                expect(data.isDeleted).to.be(false);

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
      describe('organisationGroupsGetOrganisationGroupsForVehicle', function() {
        it('should call organisationGroupsGetOrganisationGroupsForVehicle successfully', function(done) {
          // TODO: uncomment, update parameter values for organisationGroupsGetOrganisationGroupsForVehicle call and complete the assertions
          /*
          var vehicleId = 56;
          var xChronosheetsAuth = "xChronosheetsAuth_example";

          instance.organisationGroupsGetOrganisationGroupsForVehicle(vehicleId, xChronosheetsAuth, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ChronoSheetsApi.CSApiResponseListOrganisationGroup);
            {
              let dataCtr = data.data;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(ChronoSheetsApi.CSOrganisationGroup);
                expect(data.id).to.be.a('number');
                expect(data.id).to.be(0);
                expect(data.organisationId).to.be.a('number');
                expect(data.organisationId).to.be(0);
                expect(data.organisationGroupName).to.be.a('string');
                expect(data.organisationGroupName).to.be("");
                expect(data.isDeleted).to.be.a('boolean');
                expect(data.isDeleted).to.be(false);

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
      describe('organisationGroupsUpdateOrganisationGroup', function() {
        it('should call organisationGroupsUpdateOrganisationGroup successfully', function(done) {
          // TODO: uncomment, update parameter values for organisationGroupsUpdateOrganisationGroup call and complete the assertions
          /*
          var request = new ChronoSheetsApi.CSSaveOrganisationGroupRequest();
          request.id = 0;
          request.organisationGroupName = "";
          request.isDeleted = false;
          var xChronosheetsAuth = "xChronosheetsAuth_example";

          instance.organisationGroupsUpdateOrganisationGroup(request, xChronosheetsAuth, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ChronoSheetsApi.CSApiResponseBoolean);
            expect(data.data).to.be.a('boolean');
            expect(data.data).to.be(false);
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
