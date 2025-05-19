/* journal.html Functions */

const txtJournal = document.getElementById("journalDesc");
var arrJournal = new Array();

class Journal {
    constructor(order, description) {
        this.order = order;
        this.description = description;
    }
}

function showTxtEntry() {
    document.getElementById("journalEntry").style.display = "block";
}

function addJournal() {
    const txtJournalValue = txtJournal.value;

    // sets entry box values to an object
    const newJournal = new Journal(date.getDate(), txtJournalValue);

    // sorts objects by time
    arrJournal[newJournal.order] = newJournal;

    /* Removes all previously displayed tasks. Then re-displays with new tasks sorted by time */
    document.getElementById("noJournal").style.display = "none";
    document.getElementById('yesJournal').innerHTML = newJournal.description;

    saveJournal();
    document.getElementById("journalEntry").style.display = "none"
}

function saveJournal() {
    localStorage.setItem('journal' + date.getDate(), txtJournal.value);
    localStorage.setItem('date' + date.getDate(), date.getDate());
}

function loadJournal(day) {
    document.getElementById("noJournal").style.display = "none";
    document.getElementById("yesJournal").innerHTML =
         "<p>" + localStorage.getItem('journal' + day.getDate()) + "</p>";
}

if (localStorage.getItem('journal' + date.getDate()) != null) {
    loadJournal(date);
}