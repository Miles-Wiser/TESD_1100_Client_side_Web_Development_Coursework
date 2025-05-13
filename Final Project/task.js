"use strict";

var taskArray = new Array;

document.forms[0].onclick = function() {
    document.getElementById("list").innerHTML += newTask();
}

function newTask() {
    taskArray[taskArray.at(-1)] = new Task(0, 1750, "Testing Task");

    alert("New Task");

    var htmlList = "<li id='" + taskArray[taskArray.at(-1)].id +"'>"
        + "<p class='time'>" + taskArray[taskArray.at(-1)].time + "</p>"
        + "<p class='task'>" + taskArray[taskArray.at(-1)].description + "</p>"
        + "<input type='checkbox' class='checkbox'>"
        + "<label for='checkbox'>Incomplete/Complete</label>"
        + "<input type='button' class='trash' value='trash'>"
        + "</li>";

    return htmlList;
}


class Task {
    constructor(id, time, description) {
        this.id = id;
        this.time = time;
        this.description = description;
    }
}