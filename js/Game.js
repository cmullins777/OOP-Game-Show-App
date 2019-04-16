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
}
