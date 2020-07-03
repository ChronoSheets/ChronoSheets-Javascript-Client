# ChronoSheetsApi.InsertUserRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emailAddress** | **String** | The Email Address of the employee | [optional] 
**firstName** | **String** | The First Name of the employee | [optional] 
**lastName** | **String** | The Last Name of the employee | [optional] 
**isSubscribedToNewsletter** | **Boolean** | Whether or not the employee is subscribed to ChronoSheets newsletters | [optional] 
**roles** | **Number** | A BIT field designating which Roles/Permissions the employee will have when they sign in.  See the {timesheets.types.Enums.UserRoles} Enum for more details | [optional] 
**alertSettings** | **Number** | A BIT field designating which Alerts the employee will receive.  See the {timesheets.types.Enums.AlertSettings} Enum for more details | [optional] 
**userName** | **String** | The UserName of the employee.  This can be used when logging into ChronoSheets | [optional] 
**hourlyPayRate** | **Number** | Set the starting usual Hourly Pay Rate with this value.  This is the Pay Rate the employee receives for working during Rostered Hours | [optional] 
**hourlyOvertimePayRate** | **Number** | Set the starting usual Overtime Hourly Pay Rate with this value.  This is the Pay Rate the employee receives for working outside of Rostered Hours | [optional] 
**currentDate** | **Date** | The Current date time | [optional] 


