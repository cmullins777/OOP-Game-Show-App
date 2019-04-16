/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
/**
 * Display phrase on game board
 **/
  addPhraseToDisplay() {
    const letters = [...this.phrase];
    const displayPhrase = document.createElement('div');
    displayPhrase.classList.add("section");
    displayPhrase.setAttribute("id", "phrase");
    const ul = document.createElement('ul');
    displayPhrase.appendChild(ul);
    letters.forEach(letter => {
      const li = document.createElement('li');
      if (letter >= 'a' && letter <= 'z') {
        li.classList.add("hide", "letter", letter);
        li.textContent = letter;
        $("div[id='phrase'] ul").append(li);
      } else {
        li.classList.add("space");
        li.textContent="";
        $("div[id='phrase'] ul").append(li);
      }
    });  console.log(letters);
  }
/**
* Checks if passed letter is in phrase
*/
  checkLetter(letter) {
//  Compare chosenLetter to letters in phrase
    for (let i = 0; i < this.phrase.length; i++) {
    if (this.phrase[i] === letter) {
     return true;
      }
    }
     return false;
  };
/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/
  showMatchedLetter(letter) {
    let matchedLetter = document.querySelectorAll('ul li');
    matchedLetter.forEach(match => {
      if (match.innerHTML === letter) {
        match.classList = 'show';
      }
    });
  };
}
