// display current date via moment
var currentDay = $('#currentDay');
var dateToday = moment().format("dddd, MMM Do, YYYY");
currentDay.text(dateToday);

// change color of text areas based on time of day
var schedulerHours = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]

var timeColor = function () {
    var currentHour = moment().format('HH');
    for (i=0; i < schedulerHours.length; i++) {

        // if hour on the scheduler is less than the current time then it is the "past"
        if (schedulerHours[i] < currentHour) {
            $('#' + schedulerHours[i]).addClass("past");
        }

        // if hour on the scheduler is bigger than the current hour, then it is the "future"
        else if (schedulerHours[i] > currentHour) {
            $('#' + schedulerHours[i]).addClass("future");
        }

        // if hour matches current hour, then it is the "present"
        else {
            $('#' + schedulerHours[i]).addClass("present");
        }
    }
}

timeColor();

// save buttons + store text values to local storage
var btn7 = document.getElementById("btn-7");
btn7.addEventListener("click", function () {
    localStorage.setItem('toDo7', document.getElementById("7").value)
    console.log("A ToDo has been added at 7:00 AM!")
    alert("A ToDo has been added at 7:00 AM!");
});

var btn8 = document.getElementById("btn-8");
btn8.addEventListener("click", function () {
    localStorage.setItem('toDo8', document.getElementById("8").value)
    console.log("A ToDo has been added at 8:00 AM!")
    alert("A ToDo has been added at 8:00 AM!");
});

var btn9 = document.getElementById("btn-9");
btn9.addEventListener("click", function () {
    localStorage.setItem('toDo9', document.getElementById("9").value)
    console.log("A ToDo has been added at 9:00 AM!")
    alert("A ToDo has been added at 9:00 AM!");
});

var btn10 = document.getElementById("btn-10");
btn10.addEventListener("click", function () {
    localStorage.setItem('toDo10', document.getElementById("10").value)
    console.log("A ToDo has been added at 10:00 AM!")
    alert("A ToDo has been added at 10:00 AM!");
});

var btn11 = document.getElementById("btn-11");
btn11.addEventListener("click", function () {
    localStorage.setItem('toDo11', document.getElementById("11").value)
    console.log("A ToDo has been added at 11:00 AM!")
    alert("A ToDo has been added at 11:00 AM!");
});

var btn12 = document.getElementById("btn-12");
btn12.addEventListener("click", function () {
    localStorage.setItem('toDo12', document.getElementById("12").value)
    console.log("A ToDo has been added at 12:00 PM!")
    alert("A ToDo has been added at 12:00 PM!");
});

var btn13 = document.getElementById("btn-13");
btn13.addEventListener("click", function () {
    localStorage.setItem('toDo13', document.getElementById("13").value)
    console.log("A ToDo has been added at 1:00 PM!")
    alert("A ToDo has been added at 1:00 PM!");
});

var btn14 = document.getElementById("btn-14");
btn14.addEventListener("click", function () {
    localStorage.setItem('toDo14', document.getElementById("14").value)
    console.log("A ToDo has been added at 2:00 PM!")
    alert("A ToDo has been added at 2:00 PM!");
});

var btn15 = document.getElementById("btn-15");
btn15.addEventListener("click", function () {
    localStorage.setItem('toDo15', document.getElementById("15").value)
    console.log("A ToDo has been added at 3:00 PM!")
    alert("A ToDo has been added at 3:00 PM!");
});

var btn16 = document.getElementById("btn-16");
btn16.addEventListener("click", function () {
    localStorage.setItem('toDo16', document.getElementById("16").value)
    console.log("A ToDo has been added at 4:00 PM!")
    alert("A ToDo has been added at 4:00 PM!");
});

var btn17 = document.getElementById("btn-17");
btn17.addEventListener("click", function () {
    localStorage.setItem('toDo17', document.getElementById("17").value)
    console.log("A ToDo has been added at 5:00 PM!")
    alert("A ToDo has been added at 5:00 PM!");
});

var btn18 = document.getElementById("btn-18");
btn18.addEventListener("click", function () {
    localStorage.setItem('toDo18', document.getElementById("18").value)
    console.log("A ToDo has been added at 6:00 PM!")
    alert("A ToDo has been added at 6:00 PM!");
});

var btn19 = document.getElementById("btn-19");
btn19.addEventListener("click", function () {
    localStorage.setItem('toDo19', document.getElementById("19").value)
    console.log("A ToDo has been added at 7:00 PM!")
    alert("A ToDo has been added at 7:00 PM!");
});

var btn20 = document.getElementById("btn-20");
btn20.addEventListener("click", function () {
    localStorage.setItem('toDo20', document.getElementById("20").value)
    console.log("A ToDo has been added at 8:00 PM!")
    alert("A ToDo has been added at 8:00 PM!");
});

var btn21 = document.getElementById("btn-21");
btn21.addEventListener("click", function () {
    localStorage.setItem('toDo21', document.getElementById("21").value)
    console.log("A ToDo has been added at 9:00 PM!")
    alert("A ToDo has been added at 9:00 PM!");
});

var btn22 = document.getElementById("btn-22");
btn22.addEventListener("click", function () {
    localStorage.setItem('toDo22', document.getElementById("22").value)
    console.log("A ToDo has been added at 10:00 PM!")
    alert("A ToDo has been added at 10:00 PM!");
});

// retrieve stored text values from local storage
$('#7').val(localStorage.getItem("toDo7"));
$('#8').val(localStorage.getItem("toDo8"));
$('#9').val(localStorage.getItem("toDo9"));
$('#10').val(localStorage.getItem("toDo10"));
$('#11').val(localStorage.getItem("toDo11"));
$('#12').val(localStorage.getItem("toDo12"));
$('#13').val(localStorage.getItem("toDo13"));
$('#14').val(localStorage.getItem("toDo14"));
$('#15').val(localStorage.getItem("toDo15"));
$('#16').val(localStorage.getItem("toDo16"));
$('#17').val(localStorage.getItem("toDo17"));
$('#18').val(localStorage.getItem("toDo18"));
$('#19').val(localStorage.getItem("toDo19"));
$('#20').val(localStorage.getItem("toDo20"));
$('#21').val(localStorage.getItem("toDo21"));
$('#22').val(localStorage.getItem("toDo22"));

// clear button
var clearBtnEl = document.getElementById("clearBtn");
clearBtnEl.addEventListener("click", function () {
    localStorage.clear()
    location.reload()
    alert("All ToDos cleared!")
});