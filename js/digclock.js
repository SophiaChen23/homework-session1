function currentTime() {
    var d = new Date();
    var hr = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var ampm;

    var utchr = d.getUTCHours();
    // console.log(hr + " " + utchr);
    utchr = utchr < hr ? utchr + 24 : utchr;

    // var gmtHour = utchr > 12 ? utchr - 12 : utchr;


    // var localHour = d.getHours();

    var timeDiff = utchr - hr;
    var adjTimeDiff = Math.abs(timeDiff);


    var convertedTimezoneAbbr = "";
    switch (adjTimeDiff) {
        case 7:
            convertedTimezoneAbbr = "PT";
            break;
        case 6:
            convertedTimezoneAbbr = "MT";
            break;
        case 5:
            convertedTimezoneAbbr = "CT";
            break;
        case 4:
            convertedTimezoneAbbr = "ET";
            break;
        default:
            convertedTimezoneAbbr = "nothing"; // Use original abbreviation if no match
            break;
    }



    if (sec < 10) {
        sec = "0" + sec;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (hr == 12) {
        ampm = "PM";
    } else if (hr > 12){
        ampm = "PM";
    } else {
        ampm = "AM";
    }
    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + convertedTimezoneAbbr;


    document.getElementById("clock").innerText = time;
}

// function setInterbal(currentTime, milliseconds) {
//
// }

//document.getElementById("clock").innerText = time;
setInterval(currentTime, 1000);
currentTime();
