# Upcloudify (Development)

[![NPM Version][npm-image]][npm-url]

<h3>Revision history</h3>

Rev. | Date | Author | Dscription
--- | --- | --- | ---
1.0 | Nov 30, 2022 | **Kolya Nikolai Madridano** | Added revision table and convert other options to built-in functions

<<<<<<< Updated upstream
=======
<br/>


>>>>>>> Stashed changes
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
    const result = await upcloudify.uploadImage(files);

    // Uploading videos
    const result = await upcloudify.uploadVideo(files);
```
<p>IMPORTANT NOTE: Secrets should be stored in enviroment variables or use secret managers if available</p>

<br/>

<h3>OPTIONS</h3>

<br/>

<h3>filters</h3>

<<<<<<< Updated upstream
![cloudinary options](https://res.cloudinary.com/diigkcc6g/image/upload/v1669629291/filters_q8ifgc.png)
=======
Preview | Usage
--- | ---
![cloudinary options](https://res.cloudinary.com/diigkcc6g/image/upload/c_scale,h_300,w_400/v1669629291/filters_q8ifgc.png) | `.applyFilter('aurora')`
![cloudinary options cartoonify](https://res.cloudinary.com/diigkcc6g/image/upload/c_scale,h_300,w_400/v1669629785/cartonify_vm2ti7.png) | `.cartoonify()`
![cloudinary options opacity](https://res.cloudinary.com/diigkcc6g/image/upload/c_crop,h_300,w_400/v1669629966/opacity_idcqhm.png) |  `.opacity(30)`
![cloudinary options pixelate](https://res.cloudinary.com/diigkcc6g/image/upload/c_crop,h_300,w_400/v1669630132/pixelate_wbdda7.png) | `.pixelate(20)`
![cloudinary options gradient](https://res.cloudinary.com/diigkcc6g/image/upload/c_crop,g_auto,h_300,w_400/v1669630281/gradient_fade_leljbr.png) | `.gradient()`
![cloudinary options border](https://res.cloudinary.com/diigkcc6g/image/upload/c_fit,h_300,w_400/v1669630445/border_ejv3dj.png) | `.border({ size, color })`
![cloudinary options replace color](https://res.cloudinary.com/diigkcc6g/image/upload/c_fit,h_300,w_400/v1669630924/replace_color_vvapmx.png) | `.replaceColor({ original, tolerance, newcolor })`
![cloudinary options round](https://res.cloudinary.com/diigkcc6g/image/upload/c_fit,h_300,w_400/v1669631205/rouding_value_tfaxbt.png) | `.borderRadius({ crop, radius })`
![cloudinary options round](https://res.cloudinary.com/diigkcc6g/image/upload/c_fit,h_300,w_400/v1669631445/avatar_ttpj7l.png) | ` .vectorize({ crop, radius = "max" })`
>>>>>>> Stashed changes

```jsx
    // Usage
    const result = await upcloudify
        .applyFilter('red_rock')
        .uploadImage(files);
```

<br/>

![cloudinary options cartoonify](https://res.cloudinary.com/diigkcc6g/image/upload/c_scale,h_664,w_834/v1669629785/cartonify_vm2ti7.png)

```jsx
    // Usage
    const result = await upcloudify
        .cartoonify()
        .uploadImage(files);
```

<br/>

![cloudinary options opacity](https://res.cloudinary.com/diigkcc6g/image/upload/c_crop,h_664,w_834/v1669629966/opacity_idcqhm.png)

```jsx
    // Usage
    const result = await upcloudify
        .opacity(30)
        .uploadImage(files);
```

<br/>

![cloudinary options pixelate](https://res.cloudinary.com/diigkcc6g/image/upload/c_crop,h_664,w_834/v1669630132/pixelate_wbdda7.png)

```jsx
    // Usage
    const result = await upcloudify
        .pixelate(20)
        .uploadImage(files);
```

<br/>

![cloudinary options gradient](https://res.cloudinary.com/diigkcc6g/image/upload/c_crop,g_auto,h_664,w_834/v1669630281/gradient_fade_leljbr.png)

```jsx
    // Usage
    const result = await upcloudify
        .gradient()
        .uploadImage(files);
```

<br/>

![cloudinary options border](https://res.cloudinary.com/diigkcc6g/image/upload/c_fit,h_664,w_834/v1669630445/border_ejv3dj.png)

```jsx
    // Usage
    const options = [
        {   border: "5px_solid_red"   }

        /*  You can also add a multi-colored outline by creating
            successive outline effect components.For example:  */

        {   color: "red", effect: "outline:20:200"   },
        {   color: "orange", effect: "outline:15:200"   },
        {   color: "yellow", effect: "outline:10:200"   }
    ]
    const result = await upcloudify.uploadImage(files, options);
```

<br/>

![cloudinary options replace color](https://res.cloudinary.com/diigkcc6g/image/upload/c_fit,h_664,w_834/v1669630924/replace_color_vvapmx.png)

```jsx
    // Usage
    const options = [
        /*  For example, without specifying a color to change,
            the most prominent color is changed to the specified    */
        {   effect: "replace_color:maroon"   }

        /*   Specifying blue as the color to replace (to a tolerance of 80 from the color #2b38aa)
        replaces the blue sides with parallel shades of maroon,
        taking into account shadows, lighting, etc:   */
        {   effect: "replace_color:maroon:10"   }

        /*   Specifying blue as the color to replace (to a tolerance of 80 from the color #2b38aa)
             replaces the blue sides with parallel shades of maroon,
             taking into account shadows, lighting, etc:   */
        {   effect: "replace_color:maroon:80:2b38aa"   }
    ]
    const result = await upcloudify.uploadImage(files, options);
```

<br/>

![cloudinary options round](https://res.cloudinary.com/diigkcc6g/image/upload/c_fit,h_664,w_834/v1669631205/rouding_value_tfaxbt.png)

```jsx
    /*
        Manually setting rounding values
        To manually control the rounding, use the radius parameter with between 1 and 4 values defining the rounding amount (in pixels, separated by colons), following the same concept as the border-radius CSS property. When specifying multiple values, keep a corner untouched by specifying '0'.

        One value: Symmetrical. All four corners are rounded equally according to the specified value.
        Two values: Opposites are symmetrical. The first value applies to the top-left and bottom-right corners. The second value applies to the top-right and bottom-left corners.
        Three values: One set of corners is symmetrical. The first value applies to the top-left. The second value applies to the top-right and bottom-left corners. The third value applies to the bottom-right.
        Four values: The rounding for each corner is specified separately, in clockwise order, starting with the top-
    */

    // Usage
    const options = [
        {   height: 100, width: 150, crop: "fill"   },
        {   radius: "25:0"  }
    ]
    const result = await upcloudify.uploadImage(files, options);
```

<br/>

![cloudinary options round](https://res.cloudinary.com/diigkcc6g/image/upload/c_fit,h_664,w_834/v1669631445/avatar_ttpj7l.png)

```jsx
    // Usage
    const options = [
        {   gravity: "face", height: 200, width: 200, crop: "thumb" },
        {   radius: "max"   },
    ]
    const result = await upcloudify.uploadImage(files, options);
```

<br/>
<br/>

<h1>Vectorize</h1>
<p>The vectorize effect (e_vectorize in URLs) can be used to convert a raster image to a vector format such as SVG. This can be useful for a variety of use-cases, such as:</p>
<ul>
    <li>Converting a logo graphic in PNG format to an SVG, allowing the graphic to scale as required.</li>
    <li>Creating a low quality image placeholder that resembles the original image but with a reduced number of colors and lower file-size.</li>
    <li>Vectorizing as an artistic effect. </li>
</ul>

<p>
    Vectorizing as an artistic effect
    Vectorizing is a great way to capture the main shapes and objects composing a photo or drawing and also produces a nice effect. When using the vectorize effect for an artistic transformation, you can deliver the vectorized images in any format, simply by specifying the relevant extension.
    For example, the image of a fruit stand below has been vectorized to create a nice artistic effect and subsequently delivered as an optimized jpg file
</p>

![cloudinary options vectorized](https://res.cloudinary.com/diigkcc6g/image/upload/c_fit,h_664,w_834/v1669631863/food_puzvqi.png)

```jsx
    // Usage
    const options = [
        {  effect: "vectorize:colors:3:corners:40:detail:1.0" },
    ]
    const result = await upcloudify.uploadImage(files, options);
```

<br/>


<h3>API</h3>

Key | Type | Usage | Default
--- | --- | --- | ---
*files* | *File []* | *files you want to upload to the cloud* | `undefined`
*isUniqueFilename* | *boolean* | *The uploaded file will have a unique name if set to true.* | `true`
*crop* | *string* | fill, pad | `fill`
*radius* | *number or string* | 1 to 100, "max" | `default`
*height* | *number* | No information given | `default`
*width* | *number* | No information given | `default`



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


[npm-image]: https://img.shields.io/npm/v/serve-favicon.svg
[npm-url]: https://www.npmjs.com/package/@koalaranger/upcloudify
