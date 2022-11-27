# Upcloudify v1.2.7 (Development)

[![NPM Version][npm-image]][npm-url]

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
    const upcloudify = new Cloudinary(
        CLOUDINARY_NAME,
        CLOUDINARY_KEY,
        CLOUDINARY_SECRET,
        CLOUDINARY_FOLDER,
        isUniqueFilename
    );

    // Uploading images
    const result = await upcloudify.uploadImage(files);

    // Uploading videos
    const result = await upcloudify.uploadVideo(files);
```
<p>IMPORTANT NOTE: Secrets should be stored in enviroment variables or use secret managers if available</p>

<br/>
<br/>

<h3>API</h3>

Key | Type | Usage | Default
--- | --- | --- | ---
*files* | *required File[]* | *files you want to upload to the cloud* | `undefined`
*isUniqueFilename* | *boolean* | *The uploaded file will have a unique name if set to true.* | `true`


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


[npm-image]: https://img.shields.io/npm/v/serve-favicon.svg
[npm-url]: https://www.npmjs.com/package/@koalaranger/upcloudify
