// variables
var timeSlot = $('#current-time-block');

// display current date via moment
var currentDay = $('#currentDay');
var dateToday = moment().format("dddd, MMM Do, YYYY");
currentDay.text(dateToday);

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

// saves event to local storage
var saveBtn = $('#saveBtn');

function saveEvent(event) {
    event.preventDefault();

    var grandParent = $(event.target).parent().parent();
    var secondChild = grandparent.children().eq(1);
    var firstChild = secondChild.children().eq(0);
    var input = firstChild.val().trim();
    var time = grandParent.attr("id");

    console.log(time);
    $('#appt-msg').text("Event has been saved: " + input + " at " + time);

    localStorage.setItem(time, input);
}

// saves Event on button click
var containerEl = $('.container');
containerEl.on('click', '.saveBtn', saveEvent);

// retrieve events from local storage
function loadEvents() {
    var hour7 = localStorage.getItem("hour7");
    $('#hour7 .description').val(hour7);
}

loadEvents();

// calling function to display date
displayDay();
currentTime();