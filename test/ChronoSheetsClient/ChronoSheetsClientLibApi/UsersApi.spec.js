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
    instance = new ChronoSheetsApi.UsersApi();
  });

  describe('ChronoSheetsClient', function() {
    describe('UsersApi', function() {
      describe('usersCreateTimesheetUser', function() {
        it('should call usersCreateTimesheetUser successfully', function(done) {
          // TODO: uncomment, update parameter values for usersCreateTimesheetUser call and complete the assertions
          /*
          var request = new ChronoSheetsApi.CSInsertUserRequest();
          request.emailAddress = "";
          request.firstName = "";
          request.lastName = "";
          request.isSubscribedToNewsletter = false;
          request.roles = "0";
          request.alertSettings = "0";
          request.userName = "";
          request.hourlyPayRate = 0.0;
          request.hourlyOvertimePayRate = 0.0;
          request.currentDate = new Date();
          var xChronosheetsAuth = "xChronosheetsAuth_example";

          instance.usersCreateTimesheetUser(request, xChronosheetsAuth, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ChronoSheetsApi.CSApiResponseInsertUserResponse);
            expect(data.data).to.be.a(ChronoSheetsApi.CSInsertUserResponse);
                  expect(data.data.organisationId).to.be.a('number');
              expect(data.data.organisationId).to.be(0);
              expect(data.data.userId).to.be.a('number');
              expect(data.data.userId).to.be(0);
              {
                let dataCtr = data.data.validationErrors;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  expect(data).to.be("");
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
      describe('usersGetTimesheetUser', function() {
        it('should call usersGetTimesheetUser successfully', function(done) {
          // TODO: uncomment, update parameter values for usersGetTimesheetUser call and complete the assertions
          /*
          var userId = 56;
          var xChronosheetsAuth = "xChronosheetsAuth_example";

          instance.usersGetTimesheetUser(userId, xChronosheetsAuth, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ChronoSheetsApi.CSApiResponseUserForManagement);
            expect(data.data).to.be.a(ChronoSheetsApi.CSUserForManagement);
                  expect(data.data.isAccountActive).to.be.a('boolean');
              expect(data.data.isAccountActive).to.be(false);
              expect(data.data.id).to.be.a('number');
              expect(data.data.id).to.be(0);
              expect(data.data.organisationId).to.be.a('number');
              expect(data.data.organisationId).to.be(0);
              expect(data.data.userName).to.be.a('string');
              expect(data.data.userName).to.be("");
              expect(data.data.firstName).to.be.a('string');
              expect(data.data.firstName).to.be("");
              expect(data.data.lastName).to.be.a('string');
              expect(data.data.lastName).to.be("");
              expect(data.data.emailAddress).to.be.a('string');
              expect(data.data.emailAddress).to.be("");
              expect(data.data.roles).to.be.a('number');
              expect(data.data.roles).to.be("0");
              expect(data.data.alertSettings).to.be.a('number');
              expect(data.data.alertSettings).to.be("0");
              expect(data.data.setupWizardRequired).to.be.a('boolean');
              expect(data.data.setupWizardRequired).to.be(false);
              expect(data.data.isSubscribedToNewsletter).to.be.a('boolean');
              expect(data.data.isSubscribedToNewsletter).to.be(false);
              expect(data.data.organisation).to.be.a(ChronoSheetsApi.CSOrganisation);
                    expect(data.data.organisation.id).to.be.a('number');
                expect(data.data.organisation.id).to.be(0);
                expect(data.data.organisation.name).to.be.a('string');
                expect(data.data.organisation.name).to.be("");
                expect(data.data.organisation.addressLine01).to.be.a('string');
                expect(data.data.organisation.addressLine01).to.be("");
                expect(data.data.organisation.addressLine02).to.be.a('string');
                expect(data.data.organisation.addressLine02).to.be("");
                expect(data.data.organisation.suburb).to.be.a('string');
                expect(data.data.organisation.suburb).to.be("");
                expect(data.data.organisation.state).to.be.a('string');
                expect(data.data.organisation.state).to.be("");
                expect(data.data.organisation.postcode).to.be.a('string');
                expect(data.data.organisation.postcode).to.be("");
                expect(data.data.organisation.country).to.be.a('string');
                expect(data.data.organisation.country).to.be("");
                expect(data.data.organisation.phone).to.be.a('string');
                expect(data.data.organisation.phone).to.be("");
                expect(data.data.organisation.emailAddress).to.be.a('string');
                expect(data.data.organisation.emailAddress).to.be("");
                expect(data.data.organisation.timezone).to.be.a('string');
                expect(data.data.organisation.timezone).to.be("");
                expect(data.data.organisation.subscriptionCustomerId).to.be.a('string');
                expect(data.data.organisation.subscriptionCustomerId).to.be("");
                expect(data.data.organisation.signupToken).to.be.a('string');
                expect(data.data.organisation.signupToken).to.be("");
                expect(data.data.organisation.isActive).to.be.a('boolean');
                expect(data.data.organisation.isActive).to.be(false);
                expect(data.data.organisation.stripeCouponCode).to.be.a('string');
                expect(data.data.organisation.stripeCouponCode).to.be("");
                expect(data.data.organisation.subscriptionSource).to.be.a('string');
                expect(data.data.organisation.subscriptionSource).to.be("None");
                expect(data.data.organisation.signUpSource).to.be.a('string');
                expect(data.data.organisation.signUpSource).to.be("Desktop");
                expect(data.data.organisation.mobileSignUpCode).to.be.a('string');
                expect(data.data.organisation.mobileSignUpCode).to.be("");
                expect(data.data.organisation.subscriptionCycleStart).to.be.a(Date);
                expect(data.data.organisation.subscriptionCycleStart).to.be(new Date());
                expect(data.data.organisation.subscriptionCycleEnd).to.be.a(Date);
                expect(data.data.organisation.subscriptionCycleEnd).to.be(new Date());
                {
                  let dataCtr = data.data.organisation.pricingPlans;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(ChronoSheetsApi.CSOrganisationPricingPlan);
                    expect(data.planId).to.be.a('string');
                    expect(data.planId).to.be("");
                    expect(data.quantity).to.be.a('number');
                    expect(data.quantity).to.be(0);
    
                          }
                }
              expect(data.data.isPrimaryAccount).to.be.a('boolean');
              expect(data.data.isPrimaryAccount).to.be(false);
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
      describe('usersGetTimesheetUsers', function() {
        it('should call usersGetTimesheetUsers successfully', function(done) {
          // TODO: uncomment, update parameter values for usersGetTimesheetUsers call and complete the assertions
          /*
          var xChronosheetsAuth = "xChronosheetsAuth_example";

          instance.usersGetTimesheetUsers(xChronosheetsAuth, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ChronoSheetsApi.CSApiResponseListUserForManagement);
            {
              let dataCtr = data.data;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(ChronoSheetsApi.CSUserForManagement);
                expect(data.isAccountActive).to.be.a('boolean');
                expect(data.isAccountActive).to.be(false);
                expect(data.id).to.be.a('number');
                expect(data.id).to.be(0);
                expect(data.organisationId).to.be.a('number');
                expect(data.organisationId).to.be(0);
                expect(data.userName).to.be.a('string');
                expect(data.userName).to.be("");
                expect(data.firstName).to.be.a('string');
                expect(data.firstName).to.be("");
                expect(data.lastName).to.be.a('string');
                expect(data.lastName).to.be("");
                expect(data.emailAddress).to.be.a('string');
                expect(data.emailAddress).to.be("");
                expect(data.roles).to.be.a('number');
                expect(data.roles).to.be("0");
                expect(data.alertSettings).to.be.a('number');
                expect(data.alertSettings).to.be("0");
                expect(data.setupWizardRequired).to.be.a('boolean');
                expect(data.setupWizardRequired).to.be(false);
                expect(data.isSubscribedToNewsletter).to.be.a('boolean');
                expect(data.isSubscribedToNewsletter).to.be(false);
                expect(data.organisation).to.be.a(ChronoSheetsApi.CSOrganisation);
                      expect(data.organisation.id).to.be.a('number');
                  expect(data.organisation.id).to.be(0);
                  expect(data.organisation.name).to.be.a('string');
                  expect(data.organisation.name).to.be("");
                  expect(data.organisation.addressLine01).to.be.a('string');
                  expect(data.organisation.addressLine01).to.be("");
                  expect(data.organisation.addressLine02).to.be.a('string');
                  expect(data.organisation.addressLine02).to.be("");
                  expect(data.organisation.suburb).to.be.a('string');
                  expect(data.organisation.suburb).to.be("");
                  expect(data.organisation.state).to.be.a('string');
                  expect(data.organisation.state).to.be("");
                  expect(data.organisation.postcode).to.be.a('string');
                  expect(data.organisation.postcode).to.be("");
                  expect(data.organisation.country).to.be.a('string');
                  expect(data.organisation.country).to.be("");
                  expect(data.organisation.phone).to.be.a('string');
                  expect(data.organisation.phone).to.be("");
                  expect(data.organisation.emailAddress).to.be.a('string');
                  expect(data.organisation.emailAddress).to.be("");
                  expect(data.organisation.timezone).to.be.a('string');
                  expect(data.organisation.timezone).to.be("");
                  expect(data.organisation.subscriptionCustomerId).to.be.a('string');
                  expect(data.organisation.subscriptionCustomerId).to.be("");
                  expect(data.organisation.signupToken).to.be.a('string');
                  expect(data.organisation.signupToken).to.be("");
                  expect(data.organisation.isActive).to.be.a('boolean');
                  expect(data.organisation.isActive).to.be(false);
                  expect(data.organisation.stripeCouponCode).to.be.a('string');
                  expect(data.organisation.stripeCouponCode).to.be("");
                  expect(data.organisation.subscriptionSource).to.be.a('string');
                  expect(data.organisation.subscriptionSource).to.be("None");
                  expect(data.organisation.signUpSource).to.be.a('string');
                  expect(data.organisation.signUpSource).to.be("Desktop");
                  expect(data.organisation.mobileSignUpCode).to.be.a('string');
                  expect(data.organisation.mobileSignUpCode).to.be("");
                  expect(data.organisation.subscriptionCycleStart).to.be.a(Date);
                  expect(data.organisation.subscriptionCycleStart).to.be(new Date());
                  expect(data.organisation.subscriptionCycleEnd).to.be.a(Date);
                  expect(data.organisation.subscriptionCycleEnd).to.be(new Date());
                  {
                    let dataCtr = data.organisation.pricingPlans;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a(ChronoSheetsApi.CSOrganisationPricingPlan);
                      expect(data.planId).to.be.a('string');
                      expect(data.planId).to.be("");
                      expect(data.quantity).to.be.a('number');
                      expect(data.quantity).to.be(0);
      
                            }
                  }
                expect(data.isPrimaryAccount).to.be.a('boolean');
                expect(data.isPrimaryAccount).to.be(false);

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
      describe('usersUpdateTimesheetUser', function() {
        it('should call usersUpdateTimesheetUser successfully', function(done) {
          // TODO: uncomment, update parameter values for usersUpdateTimesheetUser call and complete the assertions
          /*
          var request = new ChronoSheetsApi.CSUpdateUserRequest();
          request.userId = 0;
          request.emailAddress = "";
          request.firstName = "";
          request.lastName = "";
          request.isSubscribedToNewsletter = false;
          request.isAccountActive = false;
          request.roles = "0";
          request.alertSettings = "0";
          var xChronosheetsAuth = "xChronosheetsAuth_example";

          instance.usersUpdateTimesheetUser(request, xChronosheetsAuth, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ChronoSheetsApi.CSApiResponseUpdateUserResponse);
            expect(data.data).to.be.a(ChronoSheetsApi.CSUpdateUserResponse);
                  expect(data.data.organisationId).to.be.a('number');
              expect(data.data.organisationId).to.be(0);
              expect(data.data.userId).to.be.a('number');
              expect(data.data.userId).to.be(0);
              {
                let dataCtr = data.data.validationErrors;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  expect(data).to.be("");
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
