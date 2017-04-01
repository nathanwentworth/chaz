var images;
var body;
var lightboxImg;
var lightbox;

window.onload = function () {
  GetImages();
  body = document.getElementById('body')
  lightbox = document.getElementById('lightbox');
  lightboxImg = document.getElementById('lightboxImg');

  lightbox.style.display = "none";
  lightbox.addEventListener("click", function() {
    ViewLightBox(event);
  });
}


function GetImages() {
  var gallery = document.getElementById('gallery');
  images = gallery.childNodes;

  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function() {
      ViewLightBox(event);
    });
  }
}

function ViewLightBox(event) {

  var img = event.target;
  img = img.style.backgroundImage;
  img = img.substring(img.indexOf('"') + 1, img.lastIndexOf('"'));

  lightboxImg.setAttribute('src', img);

  var lightboxDisp = (lightbox.style.display == "none");

  lightbox.style.display = (lightboxDisp) ? "flex" : "none";
  body.style.overflowY = (lightboxDisp) ? "hidden" : "scroll";


}
