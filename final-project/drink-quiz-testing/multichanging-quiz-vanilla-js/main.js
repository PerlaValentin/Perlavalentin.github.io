function questions() {
  var questionone = document.querySelector("input[name='pet']:checked").value;
  if (questionone == "cat"){
document.querySelector("body").setAttribute("style", "background: url('http://cdn.litlepups.net/2015/09/22/space-cat-tumblr-backgrounds-space-cats-d.jpg');")
  }
  else if (questionone == "dog"){
document.querySelector("body").setAttribute("style", "background: url('https://image-gr.s3.envato.com/files/77294259/preview.jpg');")
  }
   var questiontwo = document.querySelector("input[name='color']:checked").value;
  if (questiontwo == "red"){
  document.getElementById("question10").setAttribute("style", "color: red;")
    document.getElementById("question9").setAttribute("style", "color: red;")
  document.getElementById("question8").setAttribute("style", "color: red;")
    document.getElementById("question7").setAttribute("style", "color: red;")
  document.getElementById("question6").setAttribute("style", "color: red;")
    document.getElementById("question5").setAttribute("style", "color: red;")
document.getElementById("question4").setAttribute("style", "color: red;")
document.getElementById("question3").setAttribute("style", "color: red;")
document.getElementById("question2").setAttribute("style", "color: red;")
document.getElementById("question1").setAttribute("style", "color: red;")
document.getElementById("title").setAttribute("style", "color: red;")
  }
  else if (questiontwo == "blue"){
      document.getElementById("question10").setAttribute("style", "color: blue;")
    document.getElementById("question9").setAttribute("style", "color: blue;")
    document.getElementById("question8").setAttribute("style", "color: blue;")
    document.getElementById("question7").setAttribute("style", "color: blue;")
  document.getElementById("question6").setAttribute("style", "color: blue;")
    document.getElementById("question5").setAttribute("style", "color: blue;")
document.getElementById("question4").setAttribute("style", "color: blue;")
document.getElementById("question3").setAttribute("style", "color: blue;")
document.getElementById("question2").setAttribute("style", "color: blue;")
document.getElementById("question1").setAttribute("style", "color: blue;")
document.getElementById("title").setAttribute("style", "color: blue;")
  }
  
  
  var questionthree = document.querySelector("input[name='font']:checked").value;
  if (questionthree == "cursive"){
    if (questiontwo == "red"){
      document.getElementById("question10").setAttribute("style", "font-family: 'Pacifico', cursive; color: red;")
  document.getElementById("question9").setAttribute("style", "font-family: 'Pacifico', cursive; color: red;")
      document.getElementById("question8").setAttribute("style", "font-family: 'Pacifico', cursive; color: red;")
      document.getElementById("question7").setAttribute("style", "font-family: 'Pacifico', cursive; color: red;")
  document.getElementById("question6").setAttribute("style", "font-family: 'Pacifico', cursive; color: red;")
      document.getElementById("question5").setAttribute("style", "font-family: 'Pacifico', cursive; color: red;")
      document.getElementById("question4").setAttribute("style", "font-family: 'Pacifico', cursive; color: red;")
document.getElementById("question3").setAttribute("style", "font-family: 'Pacifico', cursive; color: red;")
document.getElementById("question2").setAttribute("style", "font-family: 'Pacifico', cursive; color: red;")
document.getElementById("question1").setAttribute("style", "font-family: 'Pacifico', cursive; color: red;")
document.getElementById("title").setAttribute("style", "font-family: 'Pacifico', cursive; color: red;")
    }
    else if (questiontwo == "blue"){
      document.getElementById("question10").setAttribute("style", "font-family: 'Pacifico', cursive; color: blue;")
  document.getElementById("question9").setAttribute("style", "font-family: 'Pacifico', cursive; color: blue;")
      document.getElementById("question8").setAttribute("style", "font-family: 'Pacifico', cursive; color: blue;")
      document.getElementById("question7").setAttribute("style", "font-family: 'Pacifico', cursive; color: blue;")
  document.getElementById("question6").setAttribute("style", "font-family: 'Pacifico', cursive; color: blue;")
      document.getElementById("question5").setAttribute("style", "font-family: 'Pacifico', cursive; color: blue;")
      document.getElementById("question4").setAttribute("style", "font-family: 'Pacifico', cursive; color: blue;")
document.getElementById("question3").setAttribute("style", "font-family: 'Pacifico', cursive; color: blue;")
document.getElementById("question2").setAttribute("style", "font-family: 'Pacifico', cursive; color: blue;")
document.getElementById("question1").setAttribute("style", "font-family: 'Pacifico', cursive; color: blue;")
document.getElementById("title").setAttribute("style", "font-family: 'Pacifico', cursive; color: blue;")
    }
  }
  else if (questionthree == "bold"){
    if (questiontwo == "red"){
    document.getElementById("question10").setAttribute("style", "font-family: 'Acme', sans-serif; color: red;")
      document.getElementById("question9").setAttribute("style", "font-family: 'Acme', sans-serif; color: red;")
      document.getElementById("question8").setAttribute("style", "font-family: 'Acme', sans-serif; color: red;")
      document.getElementById("question7").setAttribute("style", "font-family: 'Acme', sans-serif; color: red;")
  document.getElementById("question6").setAttribute("style", "font-family: 'Acme', sans-serif; color: red;")
      document.getElementById("question5").setAttribute("style", "font-family: 'Acme', sans-serif; color: red;")
      document.getElementById("question4").setAttribute("style", "font-family: 'Acme', sans-serif; color: red;")
document.getElementById("question3").setAttribute("style", "font-family: 'Acme', sans-serif; color: red;")
document.getElementById("question2").setAttribute("style", "font-family: 'Acme', sans-serif; color: red;")
document.getElementById("question1").setAttribute("style", "font-family: 'Acme', sans-serif; color: red;")
document.getElementById("title").setAttribute("style", "font-family: 'Acme', sans-serif; color: red;")
    }
    else if (questiontwo == "blue"){
      document.getElementById("question10").setAttribute("style", "font-family: 'Acme', sans-serif; color: blue;")
  document.getElementById("question9").setAttribute("style", "font-family: 'Acme', sans-serif; color: blue;")
      document.getElementById("question8").setAttribute("style", "font-family: 'Acme', sans-serif; color: blue;")
      document.getElementById("question7").setAttribute("style", "font-family: 'Acme', sans-serif; color: blue;")
  document.getElementById("question6").setAttribute("style", "font-family: 'Acme', sans-serif; color: blue;")
      document.getElementById("question5").setAttribute("style", "font-family: 'Acme', sans-serif; color: blue;")
      document.getElementById("question4").setAttribute("style", "font-family: 'Acme', sans-serif; color: blue;")
document.getElementById("question3").setAttribute("style", "font-family: 'Acme', sans-serif; color: blue;")
document.getElementById("question2").setAttribute("style", "font-family: 'Acme', sans-serif; color: blue;")
document.getElementById("question1").setAttribute("style", "font-family: 'Acme', sans-serif; color: blue;")
document.getElementById("title").setAttribute("style", "font-family: 'Acme', sans-serif; color: blue;")
    }
  }
  var questionfour = document.querySelector("input[name='bg']:checked").value;
  if (questionfour == "no"){
document.getElementById("question4").setAttribute("style", "display: none;")
}
 var questionsix = document.querySelector("input[name='six']:checked").value;
var questionseven = document.querySelector("input[name='seven']:checked").value;
  if (questionseven == "colors"){
    if (questionsix == "pink"){
      document.querySelector("body").setAttribute("style", "background: lightpink;")
    }
    else if (questionsix == "green"){
      document.querySelector("body").setAttribute("style", "background: lightgreen;")
    }
  }
  var questioneight = document.querySelector("input[name='eight']:checked").value;
  if (questioneight = "yes"){
 document.getElementById("title").setAttribute("style", "display: none;")
    document.getElementById("cheese").setAttribute("style", "display: block;")
  }
  var questionten = document.querySelector("input[name='ten']:checked").value;
   if (questionten = "no"){
    alert("Yes.")
  }
  
  
  
  
  
  
}
function questionsfourandfive(){
  var questionfour = document.querySelector("input[name='bg']:checked").value;
  var questionfive = document.querySelector("input[name='q']:checked").value;
  if (questionfive == "no"){
    if (questionfour == "no" ){
alert("Well, this quiz isn't enjoying you either.")
    }
else if (questionfour == "yes"){
  alert("You're sending me mixed messages here.")
}
}
  else if (questionfive == "yes"){
    if (questionfour == "no" ){
alert("You're sending me mixed messages here.")
    }
else if (questionfour == "yes"){
  alert("Aw, thanks!")
}
}
}