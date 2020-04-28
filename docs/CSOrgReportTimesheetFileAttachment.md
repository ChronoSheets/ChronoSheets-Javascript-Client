# ChronoSheetsApi.CSOrgReportTimesheetFileAttachment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **String** |  | [optional] 
**emailAddress** | **String** |  | [optional] 
**firstName** | **String** |  | [optional] 
**lastName** | **String** |  | [optional] 
**timesheetId** | **Number** |  | [optional] 
**documentS3SignedUrl** | **String** |  | [optional] 
**imageLargeS3SignedUrl** | **String** |  | [optional] 
**imageMediumS3SignedUrl** | **String** |  | [optional] 
**imageSmallS3SignedUrl** | **String** |  | [optional] 
**timesheetStart** | **Date** |  | [optional] 
**timesheetEnd** | **Date** |  | [optional] 
**fileAttachmentId** | **Number** |  | [optional] 
**userId** | **Number** |  | [optional] 
**orgId** | **Number** |  | [optional] 
**mobilePlatform** | **String** |  | [optional] 
**attachmentType** | **String** |  | [optional] 
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
**audioDurationSeconds** | **Number** |  | [optional] 


<a name="MobilePlatformEnum"></a>
## Enum: MobilePlatformEnum


* `unknown` (value: `"Unknown"`)

* `iOS` (value: `"iOS"`)

* `android` (value: `"Android"`)




<a name="AttachmentTypeEnum"></a>
## Enum: AttachmentTypeEnum


* `image` (value: `"Image"`)

* `wordDoc` (value: `"WordDoc"`)

* `pdf` (value: `"Pdf"`)

* `mSSpreadSheet` (value: `"MSSpreadSheet"`)

* `mSPowerPoint` (value: `"MSPowerPoint"`)

* `richTextFormat` (value: `"RichTextFormat"`)

* `zipFile` (value: `"ZipFile"`)

* `other` (value: `"Other"`)

* `audio` (value: `"Audio"`)




