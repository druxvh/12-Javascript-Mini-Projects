let display = document.querySelector("span");

function timeLoad() {
    const newDate = new Date();
    let hours = newDate.getHours();
    let minutes = newDate.getMinutes();
    let seconds = newDate.getSeconds();
    let time, session;

    if (hours == 0) {
        hours = 12;
    }
    if (hours > 12) {
        hours = hours - 12;
        session = "PM";
    } else {
        session = "AM";
    }

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    time = `${hours}:${minutes}:${seconds} ${session}`;
    (display.textContent = time), setTimeout(timeLoad, 1000);
}

timeLoad();