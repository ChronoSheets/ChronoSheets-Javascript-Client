# ChronoSheetsApi.CSOrganisation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**name** | **String** |  | [optional] 
**addressLine01** | **String** |  | [optional] 
**addressLine02** | **String** |  | [optional] 
**suburb** | **String** |  | [optional] 
**state** | **String** |  | [optional] 
**postcode** | **String** |  | [optional] 
**country** | **String** |  | [optional] 
**phone** | **String** |  | [optional] 
**emailAddress** | **String** |  | [optional] 
**timezone** | **String** |  | [optional] 
**subscriptionCustomerId** | **String** |  | [optional] 
**signupToken** | **String** |  | [optional] 
**isActive** | **Boolean** |  | [optional] 
**stripeCouponCode** | **String** |  | [optional] 
**subscriptionSource** | **String** |  | [optional] 
**signUpSource** | **String** |  | [optional] 
**mobileSignUpCode** | **String** |  | [optional] 
**subscriptionCycleStart** | **Date** |  | [optional] 
**subscriptionCycleEnd** | **Date** |  | [optional] 
**pricingPlans** | [**[CSOrganisationPricingPlan]**](CSOrganisationPricingPlan.md) |  | [optional] 


<a name="SubscriptionSourceEnum"></a>
## Enum: SubscriptionSourceEnum


* `none` (value: `"None"`)

* `stripe` (value: `"Stripe"`)

* `appleInApp` (value: `"AppleInApp"`)

* `googleInApp` (value: `"GoogleInApp"`)




<a name="SignUpSourceEnum"></a>
## Enum: SignUpSourceEnum


* `desktop` (value: `"Desktop"`)

* `mobileiOS` (value: `"MobileiOS"`)

* `mobileAndroid` (value: `"MobileAndroid"`)




