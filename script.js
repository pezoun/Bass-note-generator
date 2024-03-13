function displayText() {
    var notes = [
    "F",
    "G",
    "A",
    "B",
    "C",
    "D"
];

var numbers = [
  "1",
  "2",
  "3",
  "4"
];

function updateReason() {
    var randomNotesIndex = Math.floor(Math.random() * notes.length);
    var randomNumIndex = Math.floor(Math.random() * numbers.length);
    document.getElementById("current-reason").textContent = notes[randomNotesIndex] + " " + numbers[randomNumIndex];
}

updateReason();
}

document.body.addEventListener('click', function() {
    displayText(); // Call function on click anywhere on the page
  });

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 32) {
      // Call your JavaScript function here
      displayText();
    }});

setInterval(displayText, 5000); // Updates every 3 seconds