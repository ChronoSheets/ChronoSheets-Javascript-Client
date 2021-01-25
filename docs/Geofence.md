# ChronoSheetsApi.Geofence

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**geoFencingId** | **Number** | The ID of the geofence | [optional] 
**orgId** | **Number** | The ID of the organisation owning the geofence record | [optional] 
**createdByUserId** | **Number** | The ID of the user/employee who created the geofence | [optional] 
**lastUpdatedByUserId** | **Number** | The ID of the user/employee who last updated the geofence | [optional] 
**name** | **String** | A descriptive name of the geofence | [optional] 
**locationName** | **String** | The name of the approx. location of the geofence | [optional] 
**coordinates** | [**[BasicCoordinate]**](BasicCoordinate.md) | A list of co-ordinates specifying the geofence | [optional] 
**createdAt** | **Date** | The date and time the geofence was created.  Time is in UTC. | [optional] 
**updatedAt** | **Date** | The date and time the geofence was updated last.  Time is in UTC. | [optional] 
**triggerJobCodeId** | **Number** | The ID of the job code used when the employee enters/exits the geofence | [optional] 
**triggerTaskId** | **Number** | The ID of the task used when the employee enters/exits the geofence | [optional] 
**triggerSettings** | **String** | The settings for triggering actions | [optional] 
**alertToOrgGroupId** | **Number** | The organisation group that will be notified when the geofence is triggered | [optional] 
**alertSettings** | **String** | The settings for trigger alerts | [optional] 
**startTimeHour** | **Number** | The hour start time. E.g. 13 would be 1pm.  Time is in 24hr format. | [optional] 
**startTimeMinute** | **Number** | The minute start time.  E.g. 46 would be the 46th minute of the hour. | [optional] 
**endTimeHour** | **Number** | The hour end time. E.g. 21 would be 9pm.  Time is in 24hr format. | [optional] 
**endTimeMinute** | **Number** | The minute end time.  E.g. 13 would be the 13th minute of the hour. | [optional] 



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




