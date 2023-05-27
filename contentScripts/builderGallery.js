function builderGallery(parentElement, imageArray)
{

    console.log("----------------------------------------");
    console.log(parentElement);

    let galleryContainer = document.createElement('div');
    galleryContainer.id = "betterGalleryContainer";

    parentElement.insertBefore(galleryContainer, parentElement.firstChild);

    for(var pic of imageArray)
    {
        let image = document.createElement('img');
        image.src = pic.src;
        galleryContainer.appendChild(image);
    }
    var color = window.getComputedStyle(document.getElementById('wrapper') ,null).getPropertyValue('background-color');
    galleryContainer.style.background = color;
}