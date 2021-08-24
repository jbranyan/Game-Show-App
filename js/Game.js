/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js 
 * Game.js to create a Game class methods for starting and ending the game, handling
interactions, getting a random phrase, checking for a win, and removing a life from the
scoreboard.*/

class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrases = null;
    }
/**
 * Creates phrases for use in the game
 * @return An array of phrases that could be used in the game
 */
    createPhrases() {
        const phrases = [
            new Phrase('May your coffee be strong'),
            new Phrase('Life is like a box of chocolates'),
            new Phrase('More Javascript'),
            new Phrase('Eat more food'),
            new Phrase('You are cool')];
        
            return phrases;
    }


        /**
     * Selects random phrase from phrases property
     * @return Phrase object chosen to be used
     */
    
         getRandomPhrase(){
            return this.phrases[Math.floor(Math.random() * this.phrases.length)];
        }

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
        startGame(){
            const hideOverlay = document.getElementById('overlay').style.display = 'none';
            this.activePhrase = this.getRandomPhrase();
            this.activePhrase.addPhraseToDisplay();

        }
}