// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

var image1 = document.getElementById('first')
var image2 = document.getElementById('second')
var image3 = document.getElementById('third')
var image4 = document.getElementById('fourth')
var bigimage = document.getElementById('bigimage')

image1.onclick = function() {
  bigimage.src="img/1.jpg"
}

image2.onclick = function() {
  bigimage.src="img/2.jpg"
}

image3.onclick = function() {
  bigimage.src="img/3.jpg"
}

image4.onclick = function() {
  bigimage.src="img/4.jpg"
}
