describe('Image Preloader', function () {
  var imagePreloaderService;

  beforeEach(function () {
    // Load the service's module
    module('wwwim-imagepreloader');

    inject(function (_ImagePreloaderService_, _$rootScope_) {
      imagePreloaderService = _ImagePreloaderService_;
      $rootScope = _$rootScope_;
    });
  });

  afterEach(function(){
  });

  it('should exist', function () {
    expect(!!imagePreloaderService).toBe(true);
  });

  it('should have preload method', function () {
    expect(!!imagePreloaderService.preload).toBe(true);
  });

  it('should return a promise from preload', function () {
    expect(!!imagePreloaderService.preload([]).then).toBe(true);
  });

  it('should expect an array of images from preload', function () {
    var imageFixture = ['http://i.istockimg.com/cms/resources/images/HomePage/Tiles/tile_people.jpg'];
    var images;
    imagePreloaderService.preload(imageFixture).then(function (data) {
      images = data;
    });

    waitsFor(function () {
      if (images) {
        return images;
      }
    }, "Images Should Be Returned", 750);

    runs(function () {
      expect(images.length).toEqual(1);
    });
  });
});
