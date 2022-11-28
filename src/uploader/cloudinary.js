const fs = require("fs");
const cloudinary = require("cloudinary").v2;
const { imageTypes, videoTypes } = require("../const/mimeTypes.const");

class CloudinaryUpload {
    constructor(props) {
        const { cloud_name, api_key, api_secret, cloud_folder = "Upcloudify", isUniqueFilename = true } = props;
        this.cloud_name = cloud_name;
        this.api_key = api_key;
        this.api_secret = api_secret;
        this.cloud_folder = cloud_folder;

        this.cloud_options = {
            folder: this.cloud_folder,
            unique_filename: isUniqueFilename
        };

        this.cloud_options_video = {
            folder: this.cloud_folder,
            public_id: `${Date.now()}`,
            resource_type: "auto",
            chunk_size: 6000000,
            eager: [
              { width: 300, height: 300, crop: "pad", audio_codec: "none" },
              { width: 160, height: 100, crop: "crop", gravity: "south", audio_codec: "none" }
            ],
            eager_async: true,
        }

        cloudinary.config({
            cloud_name: this.cloud_name,
            api_key: this.api_key,
            api_secret: this.api_secret,
        });
    }

    async uploadImage (files) {
        try {
            if (files.length > 1) {
                const uploads = [];
                for (const file of files) {
                    if(imageTypes.includes(file.mimetype)) {
                        const response = await cloudinary.uploader.upload(file.path, this.cloud_options);
                        uploads.push(response);
                    }
                    fs.unlinkSync(file.path);
                }
                return uploads;
            }
            else {
                for (const file of files) {
                    if(imageTypes.includes(file.mimetype)) {
                        const response = await cloudinary.uploader.upload(file.path, this.cloud_options);
                        fs.unlinkSync(file.path);
                        return response;
                    }
                }
            }
          } catch (error) {
            throw error;
        }
    }

    async uploadVideo (files) {
        try {
            if(videoTypes.includes(files[0].mimetype))
                return await cloudinary.uploader.upload(files[0].path, this.cloud_options_video);
          } catch (error) {
            console.log(error)
          }
    }
}

module.exports = CloudinaryUpload;
