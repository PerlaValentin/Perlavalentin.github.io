/*JS for NAV BAR */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

/* END JS for NAV BAR */

document.querySelectorAll('a[href^="#About"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            inline: 'center'
        });
    });
});


//SLIDER FUNCTION//
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("blogSlides");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";

}

//QUIZ FUNCTION//
var Quest = new Array(3);  //this sets up an array for all of the answers that are given  ????? do I have to change the value here?  

function populate() {
// alert("function populate started");
// this function gives each of the answers 0 points so if someone doesn't answer a question
// the whole thing will continue to work
  for(var i=0; i<3; i++) { Quest[i]=0; }
}

function total() {
// alert("function total started");
// this function adds the number of points each answer is worth together
  myScore=0;
  for (var i=0; i<3; i++) { myScore=myScore+Quest[i]; }
  analyzer(myScore);
}

var results = document.getElementById("result");
var next = document.getElementById("next-button");
var prev = document.getElementById("prev-button");
var resultsImage = document.getElementById('result-image');
var submitSlide = document.getElementById('submit-content');

myContents = {
  111:"Rusty Nail",
  211:"Rusty Nail",
  311:"Rusty Nail",
  113:"Rusty Nail",
  213:"Rusty Nail",
  313:"Rusty Nail",
  121:"Screw Driver",
  221:"Screw Driver",
  123:"Screw Driver",
  223:"Screw Driver",
  323:"Screw Driver",
  321:"Hawaiian Hammer",
  122:"Hawaiian Hammer",
  222:"Hawaiian Hammer",
  322:"Hawaiian Hammer",
  112:"Cement Mixer",
  212:"Cement Mixer",
  312:"Cement Mixer"
}

function analyzer (scoreValue) {
// this function uses the total calculated score to figure out which personality type they are 
  for  (var key in myContents){
    if (key == scoreValue){
      myDisplay(myContents[key])
      console.log(myContents[key])
    }
  }
  console.log('this is scoreValue'+scoreValue)
}


//This will Display the Drink

function myDisplay(drinkName) {
  results.innerHTML = (drinkName);
  if (drinkName == 'Rusty Nail') {
      resultsImage.src = "img/rusty-nail.jpg";
      submitSlide.style.display = 'none';
      next.style.display = 'none';
      prev.style.display = 'none';
  }
  else {

  }

  if (drinkName == 'Screw Driver') {
      resultsImage.src = "img/screw-driver.jpg";
      submitSlide.style.display = 'none';
      next.style.display = 'none';
      prev.style.display = 'none';
  } else {

  }

  if (drinkName == 'Hawaiian Hammer') {
      resultsImage.src = "img/hawaiian.jpg";
      submitSlide.style.display = 'none';
      next.style.display = 'none';
      prev.style.display = 'none';
  } else {

  }

  if (drinkName == 'Cement Mixer') {
      resultsImage.src = "img/cement-mixer.jpg";
      submitSlide.style.display = 'none';
      next.style.display = 'none';
      prev.style.display = 'none';
  } else {

  }

}

function saver(q, points) {
// this function puts the points that each answer is worth into the array
  q=q-1;
  Quest[q]=points
}


