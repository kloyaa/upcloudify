import { UploadType } from "../enum";

export function upload(type: UploadType) {
    if(type === UploadType.SingleImage) {
        return {
            message: 'type === UploadType.SingleImage',
            description: 'should return url of uploaded image'
        };
    }
    if(type === UploadType.MultipleImage) {
        return {
            message: 'type === UploadType.MultipleImage',
            description: 'should return url[] of uploaded image'
        };
    }
    if(type === UploadType.SingleVideo) {
        return {
            message: 'type === UploadType.SingleImage',
            description: 'should return url of uploaded video'
        };
    }
    if(type === UploadType.MultipleVideo) {
        return {
            message: 'type === UploadType.MultipleImage',
            description: 'should return url[] of uploaded video'
        };
    }
    if(type === UploadType.SingleFile) {
        return {
            message: 'type === UploadType.SingleFile',
            description: 'should return url of uploaded file'
        };
    }
    if(type === UploadType.MultipleFile) {
        return {
            message: 'type === UploadType.MultipleFile',
            description: 'should return url[] of uploaded file'
        };
    }
}
