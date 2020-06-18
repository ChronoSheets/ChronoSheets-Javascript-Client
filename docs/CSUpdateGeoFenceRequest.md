# ChronoSheetsApi.CSUpdateGeoFenceRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**geofenceId** | **Number** | The ID of the geofence you want to update | [optional] 
**name** | **String** | The name of the geo fence | [optional] 
**fenceCoordinates** | [**[CSBasicCoordinate]**](CSBasicCoordinate.md) | A list of coordinates specifying the geofence region | [optional] 
**triggerJobCodeId** | **Number** | The job code to be used when the person enters/leaves the geofence | [optional] 
**triggerTaskId** | **Number** | The task to be used when the person enters/leaves the geofence | [optional] 
**sendAlertToOrgGroupId** | **Number** | Send an alert to a user, specified by their user ID | [optional] 
**alertSettings** | **String** | Define when you want the alerts to be setn | [optional] 
**triggerSettings** | **String** | Define how to you want to trigger the timesheet automation | [optional] 
**startTimeHour** | **Number** | The start hour in which this geofence should apply.  After this time, the geofence will be active. | [optional] 
**startTimeMinute** | **Number** | The start minute in which this geofence should apply.  After this time, the geofence will be active. | [optional] 
**endTimeHour** | **Number** | The end hour in which this geofence will stop applying.  After this time, the geofence will be inactive. | [optional] 
**endTimeMinute** | **Number** | The end minute in which this geofence will stop applying.  After this time, the geofence will be inactive. | [optional] 


<a name="AlertSettingsEnum"></a>
## Enum: AlertSettingsEnum


* `none` (value: `"None"`)

* `sendWhenEntering` (value: `"SendWhenEntering"`)

* `sendWhenExiting` (value: `"SendWhenExiting"`)

* `sendWhenEnteringOrExiting` (value: `"SendWhenEnteringOrExiting"`)




<a name="TriggerSettingsEnum"></a>
## Enum: TriggerSettingsEnum


* `none` (value: `"None"`)

* `startTimesheetWhenEntering` (value: `"StartTimesheetWhenEntering"`)

* `stopTimesheetWhenEntering` (value: `"StopTimesheetWhenEntering"`)

* `startOnEnterStopOnLeave` (value: `"StartOnEnterStopOnLeave"`)




