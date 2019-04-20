/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
  this.missed = 0;
  this.phrases = this.createPhrases();
  this.activePhrase = null;
  }
/**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in Game
*/
  createPhrases() {
    const newPhrase =
    [
      new Phrase('All work and no play makes Jack a dull boy'),
      new Phrase('Play it again Sam'),
      new Phrase('There is no crying in baseball'),
      new Phrase('If you build it he will come'),
      new Phrase('Shake and bake'),
    ];
    return newPhrase;
  }
/**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
  getRandomPhrase() {
    let phrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
    return phrase;
  }
/**
* Begins game by selecting a random phrase and displaying it to user
*/
  startGame() {
    $("div[id='overlay']").hide();
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  };
/**
* Checks for winning move
* @return {boolean} True if game has been won, otherwise false
*/
  checkForWin() {
    let unmatchedLetters = document.getElementsByClassName("hide");
    if (unmatchedLetters.length === 0) {
      return true;
    } else {
      return false;
    }
  };
/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player does not
*/
  removeLife() {
    const lifeLost = document.querySelector("img[src='images/liveHeart.png']");
    this.missed += 1;
    lifeLost.src="images/lostHeart.png";
    if (this.missed > 4) {
      let gameWon = false;
      this.gameOver(gameWon);
    }
  };
/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
  handleInteraction(button) {
//    console.log(button);
    let letter = button.innerHTML;
//    console.log(letter);
    this.guess = game.activePhrase.checkLetter(letter);
//    console.log(this.guess);

    if (this.guess == false) {
      button.classList.add('wrong');
      game.removeLife();
    } else if (this.guess == true) {
      button.classList.add('chosen');
      game.activePhrase.showMatchedLetter(letter);
      this.win = game.checkForWin();
        if (this.win == true) {
          let gameWon = true;
          return game.gameOver(gameWon);
        }
     }
  };

/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
  gameOver(gameWon) {
    const overlay = $("div[id='overlay']");
    const gameOverMessage = document.getElementById("game-over-message");
    if (gameWon == true) {
      overlay.addClass('win');
      overlay.backgroundColor='#78CF82';
      gameOverMessage.innerText = "Way To Go!";
      overlay.show();
    } else if (gameWon == false) {
      overlay.addClass('lose');
      gameOverMessage.innerHTML = "Nice try! Play again?";
      overlay.show();
    }
      this.gameReset();
  };
// Removes previous phrase tiles from board
  gameReset() {
    let tiles = document.querySelectorAll("ul li");
    tiles.forEach(tile => {
      tile.remove();
    });
// Enables disabled buttons and removes selected classes
    let buttons = document.querySelectorAll(".key");
    buttons.forEach(button => {
      button.removeAttribute('disabled');
      button.classList.remove('wrong', 'chosen');
    });
// Restores heart images and sets missed count to zero
    this.missed = 0;
    let lifeLost = document.querySelectorAll("img[src='images/lostHeart.png']");
    lifeLost.forEach(life => {
      life.src="images/liveHeart.png";
    });
  }

}
