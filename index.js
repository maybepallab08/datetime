function dateshow() {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const abc = document.querySelector(".date");
  var date = new Date();
  day = date.toLocaleDateString(undefined, options);
  var hours = date.getHours();
  var mins = date.getMinutes();
  var seconds = date.getSeconds();
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (hours > 12) {
    hours = hours - 12;
    ampm = "PM";
  } else {
    ampm = "AM";
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  abc.innerHTML =
    hours + ":" + mins + ":" + seconds + " " + ampm + " <br> on " + day;
}
dateshow();
setInterval(dateshow, 1000);
