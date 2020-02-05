var currentHour = moment().hours(); //retrives current hour

//set intial time on page load
timerInterval();

//Funtion to update jumbotron date/time
function timerInterval() {
    $('#currentDay').text(moment().format('LLLL'));
}

//run timerInterval function every 1 seconds
setInterval(timerInterval, 1000);

//Save value of key index & text content to local storage
$(".saveBtn").on("click", function () {
    var key = $(this).parent().data('time');
    var value = $(this).parent().find('.form-control').val();
    localStorage.setItem(key, value); //save in local storage
});

//Load saved data from local storage to form-control (was not able to get for loop to work for this)
$('[data-time="8"]').find("form-control").val(localStorage.getItem("8"));   
$('[data-time="9"]').find("form-control").val(localStorage.getItem("9"));
$('[data-time="10"]').find("form-control").val(localStorage.getItem("10"));
$('[data-time="11"]').find("form-control").val(localStorage.getItem("11"));
$('[data-time="12"]').find("form-control").val(localStorage.getItem("12"));
$('[data-time="13"]').find("form-control").val(localStorage.getItem("13"));
$('[data-time="14"]').find("form-control").val(localStorage.getItem("14"));
$('[data-time="15"]').find("form-control").val(localStorage.getItem("15"));
$('[data-time="16"]').find("form-control").val(localStorage.getItem("16"));
