function weekday(day) {
if (day == "Sunday")
    return 0
if (day == "Monday")
    return 1
if (day == "Tuesday")
    return 2
if (day == "Wensday")
    return 3
if (day == "Thrusday")
    return 4
if (day == "Friday")
    return 5
if (day == "Saturday")
    return 6
}

//-------GREAT-WALL-OF-CHINA-------------

function numbertoday(day) {
if (day == 0)
    return "Sunday"
if (day == 1)
    return "Monday"
if (day == 2)
    return "Tuesday"
if (day == 3)
    return "Wendsday"
if (day == 4)
    return "Thrusday"
if (day == 5)
    return "Friday"
if (day == 6)
    return "saturday"
}
//
var element = document.getElementById("d")
var today = new Date();
var dayOfWeekNumber = today.getDay();
var day = numbertoday(dayOfWeekNumber)
element.innerHTML= day

