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
  abc.innerHTML = hours + ":" + mins + ":" + seconds + " <br> on " + day;

  if (mins < 10) {
    mins = "0" + mins;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  abc.innerHTML = hours + ":" + mins + ":" + seconds + " <br> on " + day;
}

dateshow();
setInterval(dateshow, 1000);
