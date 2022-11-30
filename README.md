# [Upcloudify (Development)](https://github.com/kloyaa/upcloudify) &middot;  [![NPM Version][npm-image]][npm-url]

<h3>Revision history</h3>

Rev. | Date | Author | Dscription
--- | --- | --- | ---
1.0 | Nov 30, 2022 | **Kolya Nikolai Madridano** | Added revision table and convert other options to built-in functions

<br/>
<br/>

<h3>What is upcloudify?</h3>
<p>upcloudify is a javascript package that allows you to easily upload files to your cloud. </p>
✔️ Upload your files with short block of codes <br />
✔️ Built in video and image compression <br />
✔️ Use anywhere with your javascript projects <br />

<h3>Supports</h3>
✔️ <a href="https://cloudinary.com" target="blank">Cloudinary</a><br />
✔️ Amazon S3 (In progress) <br />

<h3>Installation</h3>
<p>Open your desired command line tool and run these commands</p>
<pre>
    $ mkdir project_name
    $ cd project_name
    $ npm i @koalaranger/upcloudify
</pre>

<h3>Supported video types</h3>

Video Type | Extension | MIME Type
--- | --- | ---
*Flash* | *.flv* | **video/x-flv**
*MPEG-4* | *.mp4* | **video/mp4**
*iPhone Index* | *.m3u8* | **video/x-mpegURL**
*iPhone Segment* | *.ts* | **video/MP2T**
*3GP Mobile* | *.3gp* | **video/3gpp**
*QuickTime* | *.mov* | **video/quicktime**
*A/V Interleave* | *.avi* | **video/x-msvideo**
*Windows Media* | *.wmv* | **video/x-ms-wmv**

<h3>Supported image types</h3>

Image Type | Extension | MIME Type
--- | --- | ---
*PNG* | *.png* | **image/png**
*JPG* | *.jpg* | **image/jpg**
*JPEG* | *.jpeg* | **image/jpeg**
*SVG* | *.svg* | **image/svg+xml**
*WEBP* | *.webp* | **image/webp**
*AVIF* | *.avif* | **image/avif**

<br/>
<br/>

<h1>Cloudinary</h1>

[Cloudinary homepage](https://cloudinary.com)

<h3>Cloudinary secrets</h3>

![cloudinary credentials](https://res.cloudinary.com/diigkcc6g/image/upload/v1669528054/tempsnip_ijvb9w.png)

<h3>Cloudinary upload usage</h3>

```jsx
    // Configuration
    const upcloudify = new CloudinaryUpload({
        api_key: "927*********4",
        api_secret: "LUlMVq******-Lf06*****",
        cloud_name: "d************g"
    });

    // files must be an array of File
    const files = [
        {
            fieldname: 'file',
            originalname: 'sample_image.jpg',
            encoding: '7bit',
            mimetype: 'image/jpeg',
            destination: 'C:\\Users\\USERNAME\\AppData\\Local\\Temp',
            filename: '771ec752e412cf',
            path: 'C:\\Users\\USERNAME\\AppData\\Local\\Temp\\771ec752e412cf',
            size: 40055
        }
    ]

    // Uploading images
    const result = await upcloudify
        .cartoonify() // add cartoonify effect
        .blur(300) // add blurry effect
        .uploadImage(files);

    // Uploading videos
    const result = await upcloudify.uploadVideo(files);
```
<p>IMPORTANT NOTE: Secrets should be stored in enviroment variables or use secret managers if available</p>

<br/>
<br/>

<h1>OPTIONS</h1>

<br/>

<h3>Filters & Effects</h3>

Preview | Usage
--- | ---
![cloudinary options](https://res.cloudinary.com/diigkcc6g/image/upload/c_scale,h_300,w_400/v1669629291/filters_q8ifgc.png) | `.applyFilter('red_rock')`
![cloudinary options cartoonify](https://res.cloudinary.com/diigkcc6g/image/upload/c_scale,h_300,w_400/v1669629785/cartonify_vm2ti7.png) | `.cartoonify()`
![cloudinary options opacity](https://res.cloudinary.com/diigkcc6g/image/upload/c_crop,h_300,w_400/v1669629966/opacity_idcqhm.png) |  `.opacity(30)`
![cloudinary options pixelate](https://res.cloudinary.com/diigkcc6g/image/upload/c_crop,h_300,w_400/v1669630132/pixelate_wbdda7.png) | `.pixelate(20)`
![cloudinary options gradient](https://res.cloudinary.com/diigkcc6g/image/upload/c_crop,g_auto,h_300,w_400/v1669630281/gradient_fade_leljbr.png) | `.gradient()`
![cloudinary options border](https://res.cloudinary.com/diigkcc6g/image/upload/c_fit,h_300,w_400/v1669630445/border_ejv3dj.png) | `.border({ size, color })`
![cloudinary options replace color](https://res.cloudinary.com/diigkcc6g/image/upload/c_fit,h_300,w_400/v1669630924/replace_color_vvapmx.png) | `.replaceColor({ original, tolerance, newcolor })`
![cloudinary options round](https://res.cloudinary.com/diigkcc6g/image/upload/c_fit,h_300,w_400/v1669631205/rouding_value_tfaxbt.png) | `.borderRadius({ height, width, crop, radius })`
![cloudinary options round](https://res.cloudinary.com/diigkcc6g/image/upload/c_fit,h_300,w_400/v1669631445/avatar_ttpj7l.png) | ` .vectorize({ height , width, crop = "thumb", radius = "max" })`


<br/>

<h3>Image resizing and cropping</h3>

Preview | Usage
--- | ---
![cloudinary options](https://res.cloudinary.com/demo/image/upload/c_thumb,g_face,h_100,w_100/docs/model.jpg) | `.resize({ height, width })`


<br/>
<br/>

<h3>API</h3>

Key | Type | Usage | Default
--- | --- | --- | ---
*files* | *File[]* | *files you want to upload to the cloud* | `undefined`
*isUniqueFilename* | *boolean* | *The uploaded file will have a unique name if set to true.* | `true`

<br/>

<h3>Author</h3>
<a href="https://www.facebook.com/kloya.kamisato">
    Kolya Nikolai Madridano
</a>


<h3 align="left">Support</h3>
<a href="https://www.buymeacoffee.com/koalaa">
    <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50" width="210" alt="buy-me-a-coffee" />
</a>

<a href="https://ko-fi.com/kolyamadridano">
    <img src="https://uploads-ssl.webflow.com/5c14e387dab576fe667689cf/5cbed8a4cf61eceb26012821_SupportMe_red.png" height="50" alt="ko-fi" />
</a>

<a href="https://paypal.me/koolamadridano">
    <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c530.png" height="50"  alt="paypal" />
</a>


[npm-image]: https://img.shields.io/npm/v/@koalaranger/upcloudify
[npm-url]: https://www.npmjs.com/package/@koalaranger/upcloudify
