WWIMImagePreloader
==================

HTML Image Preloader Service

To Install Run 
```
bower install wwim-image-preloader
```

To Use

Include the script tag in your html
```js
<script src="/bower_components/wwim-image-preloader/lib/wwim-imagepreloader.js"></script>
```

Add the module as a dependency to your project
```js
app.module('my-app', ['wwwim-imagepreloader'])
```

Inject the service into a controller
```js
.controller('SomeController', ['ImagePreloaderService', function(ImagePreloaderService)]{
});
```

Get images from the service via promises
```js
var imageSources = ['imageurl.jpg', 'imageurl2.jpg', ...];
var imagesPromise = ImagePreloaderService.preload(imageSources);

var canvas = document.getElementById('mycanvas');
var context = canvas.getContext("2d");

imagesPromise.then(function (data) { // data = image elements
  // The preload function returns an array of image elements which can be directly written to a canvas context
  angular.forEach(data, function (image, index) {
    context.drawImage(image);
  });
});
```