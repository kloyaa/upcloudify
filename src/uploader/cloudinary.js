const fs = require("fs");
const cloudinary = require("cloudinary").v2;
const { imageTypes, videoTypes } = require("../const/mimeTypes.const");
const Options = require("../options/cloudinary.options");



class CloudinaryUpload extends Options {
    constructor({cloud_name, api_key, api_secret}) {
        super();
        this.cloud_name = cloud_name;
        this.api_key = api_key;
        this.api_secret = api_secret;
        this.cloud_options = {
            folder: "Upcloudify",
            unique_filename: true,
            transformation: [],
            tags: []
        };
        this.cloud_options_video = {
            folder: "Upcloudify",
            public_id: `${Date.now()}`,
            resource_type: "auto",
            chunk_size: 6000000,
            eager: [
              { width: 300, height: 300, crop: "pad", audio_codec: "none" },
              { width: 160, height: 100, crop: "crop", gravity: "south", audio_codec: "none" }
            ],
            eager_async: true,
        };
        cloudinary.config({
            cloud_name: this.cloud_name,
            api_key: this.api_key,
            api_secret: this.api_secret,
        });
    }
    /**
     * Apply Artistic filters
     *
     * @param   filter
     * @description Apply an artistic filter using the art effect, specifying one of the filters shown.
     * @default aurora
    */
     applyFilter(filter) {
        this.cloud_options.transformation.push(Options.applyFilter(filter));
        return this;
    }

    /**
     * Apply Cartoonify effect
     *
     * @param   number  Choose [100, 200, ... 600]
     * @description Make an image look more like a cartoon using the cartoonify effect.
     * @default 300
    */
     cartoonify() {
        this.cloud_options.transformation.push(Options.cartoonify());
        return this;
    }

    /**
     * Apply Opacity effect
     *
     * @param   number  Choose [0, 10, ... 100]
     * @description Adjust the opacity of an image using the opacity transformation (o in URLs). Specify a value between 0 and 100, representing the percentage of transparency, where 100 means completely opaque and 0 is completely transparent. In this case the image is delivered with 30% opacity:
     * @default 30
    */
    opacity() {
        this.cloud_options.transformation.push(Options.opacity());
        return this;
    }

    /**
     * Apply Pixelate effect
     *
     * @param   number  Choose [10, 20, ... 100]
     * @description Pixelate an image using the pixelate effect.
     * @default 20
    */
    pixelate() {
        this.cloud_options.transformation.push(Options.pixelate());
        return this;
    }

    /**
     * Apply Sepia effect
     *
     * @description Change the colors of an image to shades of sepia using the sepia effect.
    */
    sepia() {
        this.cloud_options.transformation.push(Options.sepia());
        return this;
    }

    /**
     * Apply Vignette effect
     *
     * @description Fade the edges of images into the background using the vignette effect.
    */
    vignette() {
        this.cloud_options.transformation.push(Options.vignette());
        return this;
    }

    /**
     * Apply Blur effect
     *
     * @param   number  Choose [100, 300, ... 1000]
     * @description Apply blurry effect to image
     * @default 300
     *
    */
    blur() {
        this.cloud_options.transformation.push(Options.blur());
        return this;
    }

    /**
     * Apply Gradient effect
     *
     * @param   (crop)
     * @description Apply blurry effect to image
     * @default { crop = pad  }
     *
    */
    gradient() {
        this.cloud_options.transformation.push(Options.gradient());
        return this;
    }

    /**
     * Add border
     *
     * @param   ({size, color})
     * @description Add border to image
     * @default {  size = 5, color = red  }
     *
    */
    border({ size, color }) {
        this.cloud_options.transformation.push(Options.border({ color, size }));
        return this;
    }

    /**
     * Apply Vectorize effect
     *
     * @param   ({ corners })
     * @description  Vectorizing is a great way to capture the main shapes and objects composing a photo or drawing and also produces a nice effect. When using the vectorize effect for an artistic transformation, you can deliver the vectorized images in any format, simply by specifying the relevant extension.
     * @default { corners = 40 }
     *
    */
    vectorize({ corners }) {
        this.cloud_options.transformation.push(Options.vectorize({ corners }));
        return this;
    }

    /**
     * Replace color
     *
     * @param   ({ original, tolerance, newcolor })
     * @description Specifying blue as the color to replace (to a tolerance of 80 from the color #2b38aa) replaces the blue sides with parallel shades of maroon, taking into account shadows, lighting, etc:
     * @default { tolerance = 80, newcolor = red }
     *
    */
    replaceColor({ original, tolerance, newcolor }) {
        this.cloud_options.transformation.push(Options.replaceColor({ original, tolerance, newcolor }));
        return this;
    }

    /**
     * Border radius
     *
     * @param   ({ crop, radius })
     * @description Rather than specifying specific rounding values, you can automatically crop images to the shape of an ellipse (if the requested image size is a rectangle) or a circle (if the requested image size is a square). Simply pass max as the value of the radius parameter instead of numeric values.
     * @default { height = 100, width = 100, crop = "fill", radius = 25 }
     *
    */
    borderRadius({ crop, radius }) {
        this.cloud_options.transformation.push(Options.borderRadius({ crop, radius }));
        return this;
    }

    /**
     * Resize Image
     *
     * @param   ({ height, width })
     * @description You can set the target dimensions of your resized image by specifying width, height, and/or the target aspect ratio as qualifiers of your resize transformation.
     * @default { height = 100, width = 200 }
     *
    */
    resize({ height, width }) {
        this.cloud_options.transformation.push(Options.resize({ height, width }));
        return this;
    }

    /**
     * @function add tags
     * @param   Array  ["tag_1", "tag_2", ... more]
     * @description Array<string> can contain one or more strings
    */
    addTags(tags) {
        this.cloud_options.tags.push(...tags);
        return this;
    }

    /**
     * @function create folder name in cloudinary
     * @param   string  FOLDER_TITLE
     * @description FOLDER_TITLE will be `Upcloudify` by default
    */
    addFolderName(title) {
        this.cloud_options.folder = title;
        return this;
    }

    /**
     * @param   boolean  true or false
     * @description Uploaded image will have a unique name if set to true
     * @default true
    */
    isUniqueFilename(value) {
        this.cloud_options.unique_filename = value;
        return this;
    }

    /**
     * @function uploadImage
     * @param   Array  [image1, image2, ... image20].
     * @description Array<Images> can contain one or more files
    */
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
            return;
          } catch (error) {
            console.log(error)
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
