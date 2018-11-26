/*
  Click Count

  After the user clicks #click-me:

  1. Increment the variable count by 1 (think back to calculator-box)
  2: Update the UI by changing the HTML in #click-num to the new value of count
  3: If count === 5, change the background-color of <body> to red
  4: Else if count === 10, change the background-color of <body> to green
  5: Else if count === 15, change the background-color of <body> to blue
  6: Else, change the background-color of <body> to black

  HINT: Just like calculator-box, use the variable count (declared for you below) to keep track of the user's clicks
*/

/*
var count = 0

$('#click-me').click(clickCount)

function clickCount() {
	// count = count + 1
	count += 1;
	$('#click-num').html(count)

	if (count === 5) {
		console.log ('This should be red')
		document.body.style.backgroundColor = "red";
	} else {
		console.log ('do nothing')
	}


	if (count === 10) {
		console.log ('This should be green')
		document.body.style.backgroundColor = "green";
	} else {
		console.log ('do nothing')
	}


	if (count === 15) {
		console.log ('This should be blue')
		document.body.style.backgroundColor = "blue";
	} else {
		console.log ('do nothing')
	}
}*/


var count = 0

$('#click-me').click(clickCount)

function clickCount() {
  // 1. increment the variable count by 1
  count = count + 1

  // 2. update the UI with the new count value
  $('#click-num').html(count)

  // 3. run conditional logic to change background-color
  if (count === 5) {
    $('body').css('background-color', 'red')
  } else if (count === 10) {
    $('body').css('background-color', 'green')
  } else if (count === 15) {
    $('body').css('background-color', 'blue')
  } else if (count === 20) {
    $('body').addClass('rotate')
  } else if (count === 21) {
    $('body').removeClass('rotate')
  } else {
    $('body').css('background-color', 'black')
  }
}
