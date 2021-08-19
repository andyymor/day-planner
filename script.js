//var date=moment("Friday April, 9th","dddd MMM, DD");

//var dateNow=date.format("dddd MMM, DD");
//$("#currentDay").text(date);

//console.log(date.format("MM/DD/YYYY") );

function displayDate() {
    document.getElementsById("currentDay").innerHTML = Date();
}
displayDate(displayTime, 1000);