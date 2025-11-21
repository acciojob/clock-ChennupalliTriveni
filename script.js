//your JS code here. If required.
function updateClock() {
  const timerElement = document.getElementById("timer");

  const now = new Date();
  const options = {
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true
  };

  timerElement.textContent = now.toLocaleString("en-US", options);
}

// Update once immediately
updateClock();

// Update every second
setInterval(updateClock, 1000);
