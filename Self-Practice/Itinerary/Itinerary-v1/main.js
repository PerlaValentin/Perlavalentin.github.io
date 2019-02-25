var moved = false;
var currentDay = "";
var fridaySchedule = '<span class="time">5:00 PM</span><span class="event">Check In</span><br><br><span class="time">6:00 PM</span><span class="event">Dinner</span><br><br><span class="time">7:00 PM</span><span class="event">Tech Talk</span><br><br><span class="time">8:30 PM</span><span class="event">Social</span>';
var saturdaySchedule = '<span class="time">9:00 AM</span><span class="event">Breakfast</span><br><br><span class="time">10:00 AM</span><span class="event">Tech Talk</span><br><br><span class="time">11:30 AM</span><span class="event">Lunch</span><br><br><span class="time">1:00 PM</span><span class="event">Hackathon</span><br><br><span class="time">5:00 PM</span><span class="event">Awards</span><br><br><span class="time">6:00 PM</span><span class="event">Dinner</span><br><br><span class="time">7:00 PM</span><span class="event">Tech Talk</span><br><br><span class="time">8:00 PM</span><span class="event">Card Swap</span>';
var sundaySchedule = '<span class="time">9:00 AM</span><span class="event">Devotional</span><br><br><span class="time">10:00 AM</span><span class="event">Breakfast</span><br><br><span class="time">11:00 AM</span><span class="event">Tech Talk</span><br><br><span class="time">12:30 PM</span><span class="event">Lunch</span><br><br><span class="time">2:00 PM</span><span class="event">Demos</span><br><br><span class="time">4:00 PM</span><span class="event">Check Out</span><br><br>';

$(document).ready(function () {
  $('#resetDiv').hide();
});

$('.day').click(function () {
  if (!moved) {
    $('#mainDiv').animate({
      'marginLeft': '-=200px' });

    $('#mainScheduleDiv').animate({
      'marginLeft': '+=200px' });

    moved = true;
  }
  currentDay = $(this).text();
  $('#dayTitle').text(currentDay);
  getScheduleText($(this));
  $('#resetDiv').fadeIn(1000);
});

function getScheduleText(dayObj) {
  var day = dayObj.attr('id');
  if (day === 'Friday') {
    $('#schedule').html(fridaySchedule);
  } else if (day === 'Saturday') {
    $('#schedule').html(saturdaySchedule);
  } else {
    $('#schedule').html(sundaySchedule);
  }
}

$('#resetBtn').click(function () {
  moved = false;
  $('#resetDiv').fadeOut('fast');
  $('#mainDiv').animate({
    'marginLeft': '+=200px' });

  $('#mainScheduleDiv').animate({
    'marginLeft': '-=200px' });

});
