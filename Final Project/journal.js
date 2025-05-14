"use strict";

var tempVar = 0; // This is temporary; delete when cookies are solved. Also Change the conditional for addTask.onclick

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

// Adds value to jouralArray
function submitEntry() {

}