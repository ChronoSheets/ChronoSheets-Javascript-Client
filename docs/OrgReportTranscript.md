# ChronoSheetsApi.OrgReportTranscript

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
**timesheetId** | **Number** | The ID of the timesheet this attachment is attached to. | [optional] 
**documentS3SignedUrl** | **String** | The limited use signed URL for the document (if it&#39;s not an image).  This URL is unique and will eventually expire.  If the attachment is an image, then this won&#39;t be set. | [optional] 
**imageLargeS3SignedUrl** | **String** | The limited use signed URL for the large version of the image.  This URL is unique and will eventually expire.  Only set when the attachment is actually an image. | [optional] 
**imageMediumS3SignedUrl** | **String** | The limited use signed URL for the medium version of the image.  This URL is unique and will eventually expire.  Only set when the attachment is actually an image. | [optional] 
**imageSmallS3SignedUrl** | **String** | The limited use signed URL for the small version of the image.  This URL is unique and will eventually expire.  Only set when the attachment is actually an image. | [optional] 
**timesheetStart** | **Date** | The start date and time of the timesheet that this attachment is attached to | [optional] 
**timesheetEnd** | **Date** | The end date and time of the timesheet that this attachment is attached to | [optional] 
**fileAttachmentId** | **Number** | The ID of the file attachment | [optional] 
**userId** | **Number** | The ID of the user who attached the file | [optional] 
**orgId** | **Number** | The ID of the organisation that owns the file and employs the employee | [optional] 
**mobilePlatform** | **String** | The mobile platform that was used to attach the file | [optional] 
**attachmentType** | **String** | The type of file attachment | [optional] 
**notes** | **String** | Any notes regarding the file attachment | [optional] 
**nonImageFilePath** | **String** | The path to the file attachment as hosted by ChronoSheets storage, if it&#39;s not an image.  If the attachment is an image then this won&#39;t be set. | [optional] 
**imageLargeFilePath** | **String** | The path to the file attachment as hosted by ChronoSheets storage, only set if it&#39;s an image.  This is regarding the large version of the image. | [optional] 
**imageMediumFilePath** | **String** | The path to the file attachment as hosted by ChronoSheets storage, only set if it&#39;s an image.  This is regarding the medium version of the image. | [optional] 
**imageSmallFilePath** | **String** | The path to the file attachment as hosted by ChronoSheets storage, only set if it&#39;s an image.  This is regarding the small version of the image. | [optional] 
**originalFileName** | **String** | The original file name of the attachment | [optional] 
**latitude** | **Number** | Meta-data indicating the latitude of the file attachment.  If the attachment is an image, this data originates from the meta data inside the image file. | [optional] 
**longitude** | **Number** | Meta-data indicating the longitude of the file attachment.  If the attachment is an image, this data originates from the meta data inside the image file. | [optional] 
**dateUploaded** | **Date** | The date and time the attachment was uploaded.  Time is in UTC. | [optional] 
**dateImageCaptured** | **Date** | The original date and time the image was captured, if it was an image.  This data originates from the meta data inside the image file. | [optional] 
**storageAllocationBytes** | **Number** | The number of bytes allocated for storing the file attachment. | [optional] 
**audioDurationSeconds** | **Number** | If the attachment was an audio file, this field indicates the duration of the audio file in seconds.  This data originates from the meta data inside the audio file. | [optional] 



## Enum: MediaTypeEnum


* `Other` (value: `"Other"`)

* `Mp3` (value: `"Mp3"`)

* `Mp4` (value: `"Mp4"`)

* `Wav` (value: `"Wav"`)

* `Flac` (value: `"Flac"`)





## Enum: TranscriptionStatusEnum


* `Saved` (value: `"Saved"`)

* `Processing` (value: `"Processing"`)

* `Completed` (value: `"Completed"`)

* `FailedWithError` (value: `"FailedWithError"`)





## Enum: MobilePlatformEnum


* `Unknown` (value: `"Unknown"`)

* `iOS` (value: `"iOS"`)

* `Android` (value: `"Android"`)





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




