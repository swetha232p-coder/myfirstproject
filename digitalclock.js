function updateClock() {
  let now = new Date(); // Current date & time
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Format with leading zeros (e.g., 09:05:07)
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let timeString = hours + ":" + minutes + ":" + seconds;

  // Display in the div
  document.getElementById("clock").innerText = timeString;
}

// Update every second
setInterval(updateClock, 1000);

// Run immediately so it doesn’t wait 1 second
updateClock();
