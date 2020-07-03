# ChronoSheetsApi.UpdateGeoFenceRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**geofenceId** | **Number** | The ID of the geofence you want to update | [optional] 
**name** | **String** | The name of the geo fence | [optional] 
**fenceCoordinates** | [**[BasicCoordinate]**](BasicCoordinate.md) | A list of coordinates specifying the geofence region | [optional] 
**triggerJobCodeId** | **Number** | The job code to be used when the person enters/leaves the geofence | [optional] 
**triggerTaskId** | **Number** | The task to be used when the person enters/leaves the geofence | [optional] 
**sendAlertToOrgGroupId** | **Number** | Send an alert to a user, specified by their user ID | [optional] 
**alertSettings** | **String** | Define when you want the alerts to be setn | [optional] 
**triggerSettings** | **String** | Define how to you want to trigger the timesheet automation | [optional] 
**startTimeHour** | **Number** | The start hour in which this geofence should apply.  After this time, the geofence will be active. | [optional] 
**startTimeMinute** | **Number** | The start minute in which this geofence should apply.  After this time, the geofence will be active. | [optional] 
**endTimeHour** | **Number** | The end hour in which this geofence will stop applying.  After this time, the geofence will be inactive. | [optional] 
**endTimeMinute** | **Number** | The end minute in which this geofence will stop applying.  After this time, the geofence will be inactive. | [optional] 



## Enum: AlertSettingsEnum


* `None` (value: `"None"`)

* `SendWhenEntering` (value: `"SendWhenEntering"`)

* `SendWhenExiting` (value: `"SendWhenExiting"`)

* `SendWhenEnteringOrExiting` (value: `"SendWhenEnteringOrExiting"`)





## Enum: TriggerSettingsEnum


* `None` (value: `"None"`)

* `StartTimesheetWhenEntering` (value: `"StartTimesheetWhenEntering"`)

* `StopTimesheetWhenEntering` (value: `"StopTimesheetWhenEntering"`)

* `StartOnEnterStopOnLeave` (value: `"StartOnEnterStopOnLeave"`)




