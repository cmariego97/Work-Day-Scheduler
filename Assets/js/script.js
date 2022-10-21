// variables
var currentDay = $('#currentDay');
var timeSlot = $('#current-time-block');
var saveBtn = $('#saveBtn');

// function display date
function displayDay() {
    var dateToday = moment().format('dddd, MMM Do YYYY');
    currentDay.text(dateToday);
}

// function - track time color coded
function currentTime() {
    var currentTimeNow = moment().hour();

    timeSlot.each(function() {
        var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

        // if the time row block is less than the current time, then it is past
        if (timeBlock < currentTimeNow) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
        // if time row block is the same as current time, then it is present
        else if (timeBlock === currentTimeNow) {
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
        }
        // if time row block is 'greater than' or else, it is in the future
        else if (timeBlock > currentTimeNow) {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }
    })
}

// add to do on schedule
function addTodo() {
    var todo = $(this).siblings(".todo").val();
    var time = $(this).parent().attr("id");
}


// save button event listener
saveBtn.on('click', addToDo);

// calling function to display date
displayDay();
currentTime();