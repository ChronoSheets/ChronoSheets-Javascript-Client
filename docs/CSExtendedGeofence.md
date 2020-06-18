# ChronoSheetsApi.CSExtendedGeofence

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobCode** | **String** |  | [optional] 
**taskName** | **String** |  | [optional] 
**createdBy** | **String** |  | [optional] 
**updatedBy** | **String** |  | [optional] 
**alertOrganisation** | **String** |  | [optional] 
**geoFencingId** | **Number** |  | [optional] 
**orgId** | **Number** |  | [optional] 
**createdByUserId** | **Number** |  | [optional] 
**lastUpdatedByUserId** | **Number** |  | [optional] 
**name** | **String** |  | [optional] 
**locationName** | **String** |  | [optional] 
**coordinates** | [**[CSBasicCoordinate]**](CSBasicCoordinate.md) |  | [optional] 
**createdAt** | **Date** |  | [optional] 
**updatedAt** | **Date** |  | [optional] 
**triggerJobCodeId** | **Number** |  | [optional] 
**triggerTaskId** | **Number** |  | [optional] 
**triggerSettings** | **String** |  | [optional] 
**alertToOrgGroupId** | **Number** |  | [optional] 
**alertSettings** | **String** |  | [optional] 
**startTimeHour** | **Number** |  | [optional] 
**startTimeMinute** | **Number** |  | [optional] 
**endTimeHour** | **Number** |  | [optional] 
**endTimeMinute** | **Number** |  | [optional] 


<a name="TriggerSettingsEnum"></a>
## Enum: TriggerSettingsEnum


* `none` (value: `"None"`)

* `startTimesheetWhenEntering` (value: `"StartTimesheetWhenEntering"`)

* `stopTimesheetWhenEntering` (value: `"StopTimesheetWhenEntering"`)

* `startOnEnterStopOnLeave` (value: `"StartOnEnterStopOnLeave"`)




<a name="AlertSettingsEnum"></a>
## Enum: AlertSettingsEnum


* `none` (value: `"None"`)

* `sendWhenEntering` (value: `"SendWhenEntering"`)

* `sendWhenExiting` (value: `"SendWhenExiting"`)

* `sendWhenEnteringOrExiting` (value: `"SendWhenEnteringOrExiting"`)




