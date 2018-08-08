# JavascriptApiClientForChronoSheets.CSCreateTripRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timesheetId** | **Number** | The associated Timesheet record Id.  The Trip will be linked to the Timesheet with this TimesheetId | [optional] 
**vehicleId** | **Number** | The associated Vehicle Id.  The Trip will show that this Vehicle was used | [optional] 
**pathCoordsStringCsv** | **String** | A CSV of GPS path co-ordinates.  Format example: -37.8433562,144.7226188;[Lat1],[Long1];........[LatN],[LongN] | [optional] 
**distanceMeters** | **Number** | The total distance of the Trip | [optional] 
**mobilePlatform** | **String** | The Mobile platform that the Trip was recorded on | [optional] 


<a name="MobilePlatformEnum"></a>
## Enum: MobilePlatformEnum


* `Unknown` (value: `"Unknown"`)

* `iOS` (value: `"iOS"`)

* `Android` (value: `"Android"`)




