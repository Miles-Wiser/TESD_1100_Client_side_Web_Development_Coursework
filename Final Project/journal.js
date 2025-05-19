"use strict";

var tempVar = 0; // This is temporary; delete when cookies are solved. Also Change the conditional for addTask.onclick

var journalDay = new Array(31);
var journalEntry = new Array(31);

const btnSubmit = document.getElementById("submit");        // Journal submit button
const txtDesc = document.getElementById("description");     // Journal text area

document.getElementById("addTask").onclick = function() {
    if (tempVar == 0) {document.getElementById("noJournal").style.display = "none"; tempVar++;}

    showEntry(true);
}

document.getElementById("submit").onclick = function() {
    submitEntry();
    showEntry(false);
}

// Toggles visibility of journalEntry pop-up
function showEntry(tf) {
    if (tf == true) {document.getElementById("journalEntry").style.display = "block";}
    else {document.getElementById("journalEntry").style.display = "none";}
}

// Adds value to journalDay
function submitEntry() {
    const day = localStorage.getItem("day");
    const entry = localStorage.getItem("entry");

    localStorage.setItem("day", journalDay[date.getDate()]);
    localStorage.setItem("entry", txtDesc.innerHTML);
    document.getElementById("yesJournal").innerHTML = `${entry}`;
}