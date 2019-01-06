$(document).ready(function() {
  var daysInLastMonth = moment()
    .subtract(1, "months")
    .daysInMonth();
  var daysInMonth = moment().daysInMonth();
  var preMonthDays = moment()
    .startOf("month")
    .day();
  var postMonthDays = 7 - ((daysInMonth + preMonthDays) % 7);

  console.log(daysInLastMonth);

  for (var i = daysInLastMonth - preMonthDays; i < daysInLastMonth; i++) {
    $("#calendarBox").append(
      `<div class="calendarSquare"><div class="calendarContent">${i}</div></div>`
    );
  }
  for (var i = 0; i < daysInMonth; i++) {
    var day = i + 1;
    $("#calendarBox").append(
      `<div class="calendarSquare"><div class="calendarContent">${day}</div></div>`
    );
  }

  for (var i = 0; i < postMonthDays; i++) {
    var day = i + 1;
    $("#calendarBox").append(
      `<div class="calendarSquare"><div class="calendarContent">${day}</div></div>`
    );
  }
});
