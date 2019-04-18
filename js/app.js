/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
let resetButton = document.getElementById("btn__reset");
resetButton.addEventListener("click", function() {
  game = new Game;
  game.startGame();
});

/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
let qwerty =$("button[class='key']");
this.qwerty.addEventListener('click', (event) => {
  if (event.target.className === 'key') {
    game.handleInteraction(event.target);
  }
});
