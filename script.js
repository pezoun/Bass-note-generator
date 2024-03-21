// Define Audio objects for each bass tone
let bassSounds = {
  "A1": new Audio("bassTones/A (1).wav"),
  "A2": new Audio("bassTones/A (2).wav"),
  "A3": new Audio("bassTones/A (3).wav"),
  "B1": new Audio("bassTones/B (1).wav"),
  "B2": new Audio("bassTones/B (2).wav"),
  "B3": new Audio("bassTones/B (3).wav"),
  "C1": new Audio("bassTones/C (1).wav"),
  "C2": new Audio("bassTones/C (2).wav"),
  "C3": new Audio("bassTones/C (3).wav"),
  "D1": new Audio("bassTones/D (1).wav"),
  "D2": new Audio("bassTones/D (2).wav"),
  "D3": new Audio("bassTones/D (3).wav"),
  "F1": new Audio("bassTones/F (1).wav"),
  "F2": new Audio("bassTones/F (2).wav"),
  "F3": new Audio("bassTones/F (3).wav"),
  "G1": new Audio("bassTones/G (1).wav"),
  "G2": new Audio("bassTones/G (2).wav"),
  "G3": new Audio("bassTones/G (3).wav")
};

function playBassSound(note, number) {
  let soundKey = note + number;
  if (bassSounds.hasOwnProperty(soundKey)) {
      bassSounds[soundKey].play();
  } else {
      console.error("No audio found for the bass note: " + soundKey);
  }
}

function displayText() {
  var notes = ["F", "G", "A", "B", "C", "D"];
  var numbers = ["1", "2", "3"];

  var randomNotesIndex = Math.floor(Math.random() * notes.length);
  var randomNumIndex = Math.floor(Math.random() * numbers.length);

  var note = notes[randomNotesIndex];
  var number = numbers[randomNumIndex];

  document.getElementById("current-reason").textContent = note + " " + number;

  // Play the corresponding bass sound
  playBassSound(note, number);
}

document.body.addEventListener('click', function () {
  displayText(); // Call function on click anywhere on the page
});

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 32) {
      // Call your JavaScript function here
      displayText();
  }
});

setInterval(displayText, 5000); // Updates every 5 seconds