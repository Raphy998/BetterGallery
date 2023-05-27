var splittedUrl = document.URL.split('/',) ;

var controlName = 'gallery_image_list_' + splittedUrl[splittedUrl.length - 2];
var jsonImage = document.getElementById(controlName).value;
var imageArray = JSON.parse(jsonImage);

for(var pic of imageArray)
{
	let image = document.createElement('img');
	image.src = pic.src;
	document.body.appendChild(image);
}