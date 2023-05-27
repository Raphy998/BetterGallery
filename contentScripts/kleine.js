var splittedUrl = document.URL.split('/',) ;

var controlName = 'gallery_image_list_' + splittedUrl[splittedUrl.length - 2];
var jsonImage = document.getElementById(controlName).value;
var imageArray = JSON.parse(jsonImage);

var elementToInsertGallery = document.getElementById(controlName).parentElement;

builderGallery(elementToInsertGallery, imageArray);