(function(window, angular, $, undefined) {
  'use strict';

  /**
   * Image Preloader Module
   */
  angular.module('wwwim-imagepreloader', [])
    .service('ImagePreloaderService', ['$q', '$rootScope', function ($q, $rootScope) {

      this.preload = function (imageSources, options) {
        var deferred = $q.defer();
        var images = [];
        var imageCount = 0;

        angular.forEach(imageSources, function (imageSource, index) {
          var image = $(new Image())
            .load(function () {
              var img = image[0];
              imageCount++;
              images.push(img);

              if (imageCount == imageSources.length) {
                  $rootScope.$apply(deferred.resolve(images));
              }

            }).attr('src', imageSource);

          image.src = imageSource;
        });
        return deferred.promise;
      };
    }]);

})(window, angular, $);