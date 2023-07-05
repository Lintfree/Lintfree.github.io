
// Get the current date
var currentDate = new Date();

// Format the date as desired
var formattedDate = currentDate.toDateString();

// Insert the formatted date into the HTML element with the id "currentDate"
document.getElementById("currentDate").innerHTML = formattedDate;

