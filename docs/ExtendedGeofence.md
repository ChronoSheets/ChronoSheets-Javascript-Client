# ChronoSheetsApi.ExtendedGeofence

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
**coordinates** | [**[BasicCoordinate]**](BasicCoordinate.md) |  | [optional] 
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



## Enum: TriggerSettingsEnum


* `None` (value: `"None"`)

* `StartTimesheetWhenEntering` (value: `"StartTimesheetWhenEntering"`)

* `StopTimesheetWhenEntering` (value: `"StopTimesheetWhenEntering"`)

* `StartOnEnterStopOnLeave` (value: `"StartOnEnterStopOnLeave"`)





## Enum: AlertSettingsEnum


* `None` (value: `"None"`)

* `SendWhenEntering` (value: `"SendWhenEntering"`)

* `SendWhenExiting` (value: `"SendWhenExiting"`)

* `SendWhenEnteringOrExiting` (value: `"SendWhenEnteringOrExiting"`)




