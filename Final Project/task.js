"use strict";

var taskArray = new Array;

document.forms[0].onclick = function() {
    document.getElementById("list").innerHTML += newTask();
}

function newTask() {
    taskArray[taskArray.length] = new objTask();
    alert("New Task");
    var htmlList = " <li id='" + (taskArray.at(-1).id) +"'>"
        + "<p class='time'>" + taskArray.at(-1).time + "</p>"
        + "<p class='task'>" + taskArray.at(-1).description + "</p>"
        + "<input type='checkbox' class='checkbox'>"
        + "<label for='checkbox'>Incomplete/Complete</label>"
        + "<input type='button' class='trash' value='trash'>"
        + "<label for='trash'>Trash</label>"
        + "</li>";
    taskArray[taskArray.length] = 1;

    return htmlList;
}

let objTask = {
    id: 0,
    time: 700,
    description: "Enter a task here.",
}