/* index.html Functions */

const taskEntry = document.getElementById("taskEntry");
const timeTask = document.getElementById("time");
const txtTask = document.getElementById("descTask");

// holds tasks
var arrTask = new Array();

function showTaskEntry() {
    taskEntry.style.display = "block";
}

// Gets values from taskEntry input fields and puts them to arrTask[]
function addTask() {
    // gets values from task entry boxes
    const timeValue = timeTask.value;
    const txtValue = txtTask.value;

    // sets entry box values to an object
    const newTask = new Task(timeValue, txtValue);

    // sorts objects by time
    arrTask[newTask.order] = newTask;

    /* Removes all previously displayed tasks. Then re-displays with new tasks sorted by time */
    document.getElementById('task').innerHTML = "";

    // sorts and prints by time
    for (var i = 0; i < 2400; i++) {
        if (arrTask[i] != null)
            document.getElementById('task').innerHTML += "<li><p class='time'>" + arrTask[i].time + "</p>" +
                "<p class='task'>" + arrTask[i].description + "</p>" +
                "<button type='button' onclick='trashTask(" + arrTask[i].order + ")'><img src='trash.png'></button>" +
                "</li>";
    }

    saveTasks(arrTask);
    taskEntry.style.display = "none"
}

// Takes arrTask and all index object values
// This can be done with only 3 variables but I don't have the time right now.
function saveTasks(arrTask) {
    for (var j = 0; j < 2400; j++) {

        // Conditionals standardize storage key:value pairs
        if (j < 10) {
            if (arrTask[j] != null) {
                localStorage.setItem('task000' + j, j);
                localStorage.setItem('tskTime000' + j, arrTask[j].time);
                localStorage.setItem('tskDesc000' + j, arrTask[j].description);
            }
        }
        else if (j < 100) {
            if (arrTask[j] != null) {
                localStorage.setItem('task00' + j, j);
                localStorage.setItem('tskTime00' + j, arrTask[j].time);
                localStorage.setItem('tskDesc00' + j, arrTask[j].description);
            }
        }
        else if (j < 1000) {
            if (arrTask[j] != null) {
                localStorage.setItem('task0' + j, j);
                localStorage.setItem('tskTime0' + j, arrTask[j].time);
                localStorage.setItem('tskDesc0' + j, arrTask[j].description);
            }
        } else {
            if (arrTask[j] != null) {
                localStorage.setItem('task' + j, j);
                localStorage.setItem('tskTime' + j, arrTask[j].time);
                localStorage.setItem('tskDesc' + j, arrTask[j].description);
            }
        }
    }
}

function loadTasks(arrTask) {
    for (var i = 0; i < 2400; i++) {
        if (i < 10 && localStorage.getItem('task000' + i) != null) {
            const index = i;
            arrTask[index] = new Task(localStorage.getItem('tskTime000' + i),
                                             localStorage.getItem('tskDesc000' + i)
            );
        }
        else if (i < 100  && localStorage.getItem('task00' + i) != null) {
            const index = i;
            arrTask[index] = new Task(localStorage.getItem('tskTime00' + i),
                                             localStorage.getItem('tskDesc00' + i)
            );
        }
        else if (i < 1000  && localStorage.getItem('task0' + i) != null) {
            const index = i;
            arrTask[index] = new Task(localStorage.getItem('tskTime0' + i),
                                             localStorage.getItem('tskDesc0' + i)
            );
        } else if (localStorage.getItem('task' + i) != null) {
            const index = i;
            arrTask[index] = new Task(localStorage.getItem('tskTime' + i),
                                             localStorage.getItem('tskDesc' + i)
            );
        }
    }
    addTask();
}

function trashTask(taskOrder) {
    if (taskOrder < 10 && localStorage.getItem('task000' + taskOrder) != null) {
            localStorage.removeItem('task000' + taskOrder);
            localStorage.removeItem('tskTime000' + taskOrder);
            localStorage.removeItem('tskDesc000' + taskOrder);
            arrTask.splice(taskOrder, 1);
        }
        else if (taskOrder < 100  && localStorage.getItem('task00' + taskOrder) != null) {
            localStorage.removeItem('task00' + taskOrder);
            localStorage.removeItem('tskTime00' + taskOrder);
            localStorage.removeItem('tskDesc00' + taskOrder);
            arrTask.splice(taskOrder, 1);
        }
        else if (taskOrder < 1000  && localStorage.getItem('task0' + taskOrder) != null) {
            localStorage.removeItem('task0' + taskOrder);
            localStorage.removeItem('tskTime0' + taskOrder);
            localStorage.removeItem('tskDesc0' + taskOrder);
            arrTask.splice(taskOrder, 1);
        } else if (localStorage.getItem('task' + taskOrder) != null) {
            localStorage.removeItem('task' + taskOrder);
            localStorage.removeItem('tskTime' + taskOrder);
            localStorage.removeItem('tskDesc' + taskOrder);
            arrTask.splice(taskOrder, 1);
        }
    
    /* Removes all previously displayed tasks. Then re-displays with new tasks sorted by time */
    document.getElementById('task').innerHTML = "";

    // sorts and prints by time
    for (var i = 0; i < 2400; i++) {
        if (arrTask[i] != null)
            document.getElementById('task').innerHTML += "<li><p class='time'>" + arrTask[i].time + "</p>" +
                "<p class='task'>" + arrTask[i].description + "</p>" +
                "<button type='button' onclick='trashTask(" + arrTask[i].order + ")'><img src='trash.png'></button>" +
                "</li>";
    }
}

class Task {
    constructor(time, description) {
        this.order = parseInt(time.replace(":", ""), 10); // string value converted int
        this.time = time;   // string value
        this.description = description; // string value
    }
}

loadTasks(arrTask);

if (arrTask.length <= 0) {showTaskEntry()};