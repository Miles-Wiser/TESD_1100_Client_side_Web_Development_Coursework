"use strict";

//
var date = new Date();

document.getElementById("today").innerHTML = calDate(date);

// Converts date from long to Str "day of month, year"
function calDate(date) {
    var htmlCode = "<h1>"

    var monthName = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    
    // Set suffix of day, i.e. day + "rd"
    var calDaySuffix = "";
    if (date.getDate() == 1 || date.getDate() == 21 || date.getDate() == 31) {
        calDaySuffix = "st";
    } else if (date.getDate() == 2 || date.getDate() == 22) {
        calDaySuffix = "nd";
    } else if (date.getDate() == 3 || date.getDate() == 23) {
        calDaySuffix = "rd";
    } else {
        calDaySuffix = "th";
    }
    
    htmlCode += date.getDate() + calDaySuffix + " of ";
    htmlCode += monthName[date.getMonth()] +", ";
    htmlCode += date.getFullYear();

    return htmlCode + "</h1>"
}