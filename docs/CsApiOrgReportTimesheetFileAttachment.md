# ChronoSheetsApi.CsApiOrgReportTimesheetFileAttachment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **String** |  | [optional] 
**emailAddress** | **String** |  | [optional] 
**firstName** | **String** |  | [optional] 
**lastName** | **String** |  | [optional] 
**timesheetStart** | **Date** |  | [optional] 
**timesheetEnd** | **Date** |  | [optional] 
**timesheetId** | **Number** |  | [optional] 
**documentS3SignedUrl** | **String** |  | [optional] 
**imageLargeS3SignedUrl** | **String** |  | [optional] 
**imageMediumS3SignedUrl** | **String** |  | [optional] 
**imageSmallS3SignedUrl** | **String** |  | [optional] 
**fileAttachmentId** | **Number** |  | [optional] 
**userId** | **Number** |  | [optional] 
**orgId** | **Number** |  | [optional] 
**mobilePlatform** | **Number** | 0 &#x3D; Unknown, 1 &#x3D; iOS, 2 &#x3D; Android | [optional] 
**attachmentType** | **Number** | 1 &#x3D; Image, 30 &#x3D; WordDoc, 31 &#x3D; Pdf, 32 &#x3D; MSSpreadSheet, 33 &#x3D; MSPowerPoint, 34 &#x3D; RichTextFormat, 35 &#x3D; ZipFile, 100 &#x3D; Other | [optional] 
**notes** | **String** |  | [optional] 
**nonImageFilePath** | **String** |  | [optional] 
**imageLargeFilePath** | **String** |  | [optional] 
**imageMediumFilePath** | **String** |  | [optional] 
**imageSmallFilePath** | **String** |  | [optional] 
**originalFileName** | **String** |  | [optional] 
**latitude** | **Number** |  | [optional] 
**longitude** | **Number** |  | [optional] 
**dateUploaded** | **Date** |  | [optional] 
**dateImageCaptured** | **Date** |  | [optional] 
**storageAllocationBytes** | **Number** |  | [optional] 


<a name="MobilePlatformEnum"></a>
## Enum: MobilePlatformEnum


* `0` (value: `0`)

* `1` (value: `1`)

* `2` (value: `2`)




<a name="AttachmentTypeEnum"></a>
## Enum: AttachmentTypeEnum


* `1` (value: `1`)

* `30` (value: `30`)

* `31` (value: `31`)

* `32` (value: `32`)

* `33` (value: `33`)

* `34` (value: `34`)

* `35` (value: `35`)

* `100` (value: `100`)




