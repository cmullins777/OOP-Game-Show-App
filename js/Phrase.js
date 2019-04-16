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
    console.log(letters);
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
    });
  }
/**
* Checks if passed letter is in phrase
*/
  checkLetter(letter) {
    let chosenLetter;
//  Get all buttons and set chosenLetter to clicked button
    this.qwerty = $("button[class='key']");
    qwerty.addEventListener("click", function() {
      this.chosenLetter = qwerty.innerHTML;
    });
//  Compare chosenLetter to letters in phrase    
    for (let i = 0; i < this.phrase.length; i++) {
    if (this.phrase[i] === chosenLetter) {
     return true;
      }
    }
     return false;
  };
}
