/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js 
 * Phrase.js to create a Phrase class to handle the creation of phrases.*/
class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }
    /**
     * This method adds letter placeholders to the display when the game starts. 
     * 
     */
    
    addPhraseToDisplay(){
        //Get ul element for the class with the id "phrase"
        const phraseFirstElement = document.getElementById('phrase').firstElementChild;
        const phrase = this.phrase;


        //In the for loop, grab the first letter of the phrase and create a seperate li element for each letter
        // next steps add class name to letter and space using example phrase html
        for(let i=0; i < this.phrase.length; i++ ){
            const liCharacterElement = document.createElement('LI');
            const letter = this.phrase.charAt(i);
            liCharacterElement.innerHTML = letter;
            
            if(letter !== ' '){
                liCharacterElement.className = `hide letter ${liCharacterElement.innerHTML}`;
            } else {
                liCharacterElement.className = `space ${liCharacterElement.innerHTML}`
            }
            phraseFirstElement.appendChild(liCharacterElement);
        }
    }
    
    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter){
        const phrase = this.phrase;
        let matchedLetter = false;
        console.log(letter);
        for(let i=0; i < this.phrase.length; i++ ){
            const phraseLetter = this.phrase.charAt(i);
            if(phraseLetter === letter){
                matchedLetter = true;
            }
        }
        console.log(matchedLetter);
        return matchedLetter;
    }

    /**
     * reveals the letter(s) on the board that matches the player's selection.To reveal the 
     * matching letter(s), select all of the letter DOM elements that have a CSS class 
     * name that matches the selected letter and replace each selected element's hide 
     * CSS class with the show 
     */
    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */

    showMatchedLetter(letter){
        //Get ul element for the class with the id "phrase"
        const phraseElement = document.querySelectorAll('#phrase li');

        //In the for loop, grab the first letter of the phrase and create a seperate li element for each letter
        // next steps add class name to letter and space using example phrase html
        for(let i=0; i < phraseElement.length; i++ ){
            console.log(phraseElement[i].innerHTML);
            if(letter === phraseElement[i].innerHTML){
                phraseElement[i].className = `show letter`;
                console.log(phraseElement[i].className);
            } 
        }
    }
}