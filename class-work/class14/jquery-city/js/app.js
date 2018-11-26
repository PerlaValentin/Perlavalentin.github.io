// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

/*
$('#first').click(click1)
$('#second').click(click2)
$('#third').click(click3)
$('#fourth').click(click4)



function click1() {
  $('#bigimage').attr('src','img/1.jpg')
}

function click2() {
  $('#bigimage').attr('src','img/2.jpg')
}

function click3() {
  $('#bigimage').attr('src','img/3.jpg')
}

function click4() {
  $('#bigimage').attr('src','img/4.jpg')
}
*/

/* You can use the below code to combine javascript*/

function changeImage() {
	console.log(this)
	var src = $(this).attr('src')
	$('#bigimage').attr('src', src)
}

$('.thumb').click(changeImage)