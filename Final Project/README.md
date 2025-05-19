# Daily Planner

## Synopsis
The user may enter their daily schedule on the landing page. Using localStorage, the information will be stored for them. Two other pages host a calendar and a journal where the use may enter thoughts or experiences.

## Motivation
Throughout this course, no mention was made of on how to store information for longer than a session. The base idea of storing tasks and journal entries requires longer term storage. Going through with this was meant to teach me some method of how to do this.

## How to Run
Download the folder and select "index.html".

## Code Example
This is part of the "loadTasks()" function.

```
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
```
While it is messy and unoptimized, I am quite pleased with myself here. The program will run through all localStorage keys, associated with tasks, created and convert them from a ```String``` back to an ```Object```. This object is then used later to save new data or pull current data.

## Note
The following versions have been tested for:
+ Chrome 136 on Windows 10
