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
    let gameWon = false;
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
    lifeLost.src = "images/lostHeart.png";
    if (this.missed > 4) {
      this.gameOver();
    }
  };

  handleInteraction(button) {
    console.log(button);
    let letter = button.innerHTML;
    console.log(letter);
    this.guess = game.activePhrase.checkLetter(letter);
    console.log(this.guess);

    if (this.guess = false) {
      qwerty.classList.add('wrong');
      game.removeLife();
    } else if (this.guess = true) {
      qwerty.className = 'chosen';
      game.activePhrase.showMatchedLetter();
//      let win = game.checkForWin();
//        if (win = true) {
//          game.gameOver();
//        }
     }
  };

/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
  gameOver(gameWon) {
    const overlay = $("div[id='overlay']");
    const gameOverMessage = document.getElementById("game-over-message");
    if (gameWon) {
      overlay.addClass('win');
      gameOverMessage.innerText = "Way To Go!";
      overlay.show();
    } else {
      overlay.addClass('lose');
      gameOverMessage.innerHTML = "Nice try! Play again?";
      overlay.show();
    }
  };
}
