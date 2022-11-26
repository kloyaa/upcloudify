const fs = require("fs");
const cloudinary = require("cloudinary").v2;

class CloudinaryUpload {
    constructor(
        cloud_name,
        api_key,
        api_secret,
        cloud_folder = "Upcloudify",
        isUniqueFilename = true
        ) {
        this.cloud_name = cloud_name;
        this.api_key = api_key;
        this.api_secret = api_secret;
        this.cloud_folder = cloud_folder;

        this.cloud_options = {
            folder: this.cloud_folder,
            unique_filename: isUniqueFilename
        };

        cloudinary.config({
            cloud_name: this.cloud_name,
            api_key: this.api_key,
            api_secret: this.api_secret,
        });
    }

    async image (files) {
        try {
            if (files.length > 1) {
                const uploads = [];
                for (const file of files) {
                    const response = await cloudinary.uploader.upload(file.path, this.cloud_options);
                    uploads.push(response);
                    fs.unlinkSync(file.path);
                }
                return uploads;
            }
            else {
                for (const file of files) {
                    const response = await cloudinary.uploader.upload(file.path, this.cloud_options);
                    fs.unlinkSync(file.path);
                    return response;
                }
            }
          } catch (error) {
            console.log(error)
        }
    }
}

module.exports = CloudinaryUpload;
