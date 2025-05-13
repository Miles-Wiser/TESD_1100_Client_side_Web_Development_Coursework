"use strict";

var taskArray = new Array;

// Adds task(s) to html file
if (taskArray.length >= 1) {
    document.getElementById("noTask").style.display = "none";
}

document.forms[1].onclick = function() {
    showNewTask(true);
}

document.getElementById("submit").onclick = function() {
    document.getElementById("list").innerHTML += newTask();
    showNewTask(false);
}

// Adds Task object to taskArray
function newTask() {
    taskArray[taskArray.at(-1)] = new Task(1750, "Testing Task");

    // List task information in proper order
    var htmlList = "<li id='" + taskArray[taskArray.at(-1)].id +"'>"
        + "<p class='time'>" + taskArray[taskArray.at(-1)].time + "</p>"
        + "<p class='task'>" + taskArray[taskArray.at(-1)].description + "</p>"
        + "<input type='button' class='trash'>"
        + "</li>";

    // At least one task is visible. This <p> element is not needed.
    document.getElementById("noTask").style.display = "none";
    
    return htmlList;
    // return "<p class='time'>" + document.getElementById('description').innerHTML +"</p>" //Use this to get information from the form.
}

// Toggles "add task" menu visibility
function showNewTask(show) {
    if (show == true) {document.getElementById("taskEntry").style.display = "block";}
    else {document.getElementById("taskEntry").style.display = "none";}
}

// Task Object
class Task {
    constructor(time, description) {
        this.id = time;
        this.time = time;
        this.description = description;
    }
}