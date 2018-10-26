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
  console.log(scoreValue) 
} 



function myDisplay(myContents) {
//This function will open a new window and show the results calculated 
// alert(myContents); **use alert for testing only**. 
document.getElementById("result").innerHTML = (myContents);
} 


function saver(q, points) { 
// this function puts the points that each answer is worth into the array 
  q=q-1; 
  Quest[q]=points 
} 


