# Upcloudify v1.0.0

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

<h3>Cloudinary usage</h3>
Create an account in [cloudinary](https://cloudinary.com) and get your own credentials <br/>

```jsx
    const cloudinary = new Cloudinary(
        CLOUDINARY_NAME,
        CLOUDINARY_KEY,
        CLOUDINARY_SECRET,
        CLOUDINARY_FOLDER
    );
    const result = await cloudinary.image(files);
```
<p>NOTE: Secrets should be stored in enviroment variables or use secret managers if available</p>

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
