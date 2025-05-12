"use strict";

var date = new Date();

document.getElementById("today").innerHTML = calDate(date);

function calDate(date) {
    var htmlCode = "<h1>"

    var monthName = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    
    
    htmlCode += date.getDate() + calDaySuffix(date) + " of ";
    htmlCode += monthName[date.getMonth()] +", ";
    htmlCode += date.getFullYear();

    return htmlCode + "</h1"
}


function calDaySuffix(date) {
    if (date.getDate() == 1 || date.getDate() == 21 || date.getDate() == 31) {
        return "st";
    } else if (date.getDate() == 2 || date.getDate() == 22) {
        return "nd";
    } else if (date.getDate() == 3 || date.getDate() == 23) {
        return "rd";
    } else {
        return "th";
    }
}