/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game;
game.getRandomPhrase().addPhraseToDisplay();
game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
