/* Treehouse FSJS Techdegree
 * Author: Julie Branyan
 * Project 4 - OOP Game App 
 * Phrase.js to create a Phrase class to handle the creation of phrases.*/
class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    /**
     * This method adds letter placeholders to the display when the game starts. 
     */
    
    addPhraseToDisplay(){
        const phraseFirstElement = document.getElementById('phrase').firstElementChild;
        const phrase = this.phrase;

        phrase.split('').forEach(letter => {
            const liCharacterElement = document.createElement('LI');
            liCharacterElement.innerHTML = letter;
            //set the class name to 'hide letter' if its a letter
            //if not, set the class name for a space
            if(letter !== ' '){
                liCharacterElement.className = `hide letter ${liCharacterElement.innerHTML}`;
            } else {
                liCharacterElement.className = `space ${liCharacterElement.innerHTML}`
            }
            phraseFirstElement.appendChild(liCharacterElement);
        });
    }

    /**
    * Checks if selected letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter){
        const phrase = this.phrase;
        let matchedLetter = false;

        phrase.split('').forEach(phraseLetter => {
            if(phraseLetter === letter){
                matchedLetter = true;
            }
        });
        return matchedLetter;
    }

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */

    showMatchedLetter(letter){
        const phraseLetters = document.querySelectorAll('#phrase li');

        phraseLetters.forEach(phraseLetter => {
            if(letter === phraseLetter.innerHTML){
                phraseLetter.className = `show letter`;
            } 
        });
    }
}