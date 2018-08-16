# ChronoSheetsApi.CSOrgReportTranscript

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**finishedJob** | **Boolean** |  | [optional] 
**completedProcessing** | **Date** |  | [optional] 
**created** | **Date** |  | [optional] 
**startedProcessing** | **Date** |  | [optional] 
**transcriptionId** | **Number** |  | [optional] 
**jobName** | **String** |  | [optional] 
**contents** | **String** |  | [optional] 
**mediaType** | **String** |  | [optional] 
**transcriptionStatus** | **String** |  | [optional] 
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


<a name="MediaTypeEnum"></a>
## Enum: MediaTypeEnum


* `Other` (value: `"Other"`)

* `Mp3` (value: `"Mp3"`)

* `Mp4` (value: `"Mp4"`)

* `Wav` (value: `"Wav"`)

* `Flac` (value: `"Flac"`)




<a name="TranscriptionStatusEnum"></a>
## Enum: TranscriptionStatusEnum


* `Saved` (value: `"Saved"`)

* `Processing` (value: `"Processing"`)

* `Completed` (value: `"Completed"`)

* `FailedWithError` (value: `"FailedWithError"`)




<a name="MobilePlatformEnum"></a>
## Enum: MobilePlatformEnum


* `Unknown` (value: `"Unknown"`)

* `iOS` (value: `"iOS"`)

* `Android` (value: `"Android"`)




<a name="AttachmentTypeEnum"></a>
## Enum: AttachmentTypeEnum


* `Image` (value: `"Image"`)

* `WordDoc` (value: `"WordDoc"`)

* `Pdf` (value: `"Pdf"`)

* `MSSpreadSheet` (value: `"MSSpreadSheet"`)

* `MSPowerPoint` (value: `"MSPowerPoint"`)

* `RichTextFormat` (value: `"RichTextFormat"`)

* `ZipFile` (value: `"ZipFile"`)

* `Other` (value: `"Other"`)

* `Audio` (value: `"Audio"`)




