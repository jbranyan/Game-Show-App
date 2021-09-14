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
            new Phrase('Keep Going'),
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
        
    handleInteraction(button){
        button.disabled = true;
        const buttonInnerHTML = button.innerHTML;
        const matchedLetter = this.activePhrase.checkLetter(buttonInnerHTML);

        if(!matchedLetter){
            this.removeLife();
            button.className = `wrong`;
        } else{
            button.className = `chosen`;
            this.activePhrase.showMatchedLetter(buttonInnerHTML);
            const gameWon = this.checkForWin();
            if(gameWon){
                this.gameOver(true);
            }
        }
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't won
    */
    checkForWin() {
        const phraseElement = document.querySelectorAll('#phrase li.hide');

        //Initialize gameWon to false
        let gameWon = false;

        //Verify if the user won the game. If they won, set gameWon to true
        if(phraseElement.length === 0 ){
            gameWon = true;
        }
        return gameWon;
    }

    /**
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        const tries = document.querySelectorAll('#scoreboard li');
        //If the user incorrectly guessed 5 times, the game is over. If not, 
        //set the lives heart to lose a life image.
        if(this.missed === 4){
            this.gameOver(false);
        } else {
            tries[this.missed].innerHTML = `<img src=\"images/lostHeart.png\" alt=\"Lost Heart Icon\" height=\"35\" width=\"30\">`;
            this.missed = this.missed + 1;
        }
    };

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    * 
    */
    gameOver(gameWon) {
        const gameOverMessage = document.getElementById('game-over-message');
        const showOverlay = document.getElementById('overlay');
        showOverlay.style.display = 'block';
        
        //User won the game, display the win screen. If not, the lose screen displays.
        if(gameWon){
            gameOverMessage.innerHTML = 'You Won. Congratulations!';
            showOverlay.className = 'win';
        } else {
            gameOverMessage.innerHTML = 'Better luck next time.';
            showOverlay.className = 'lose'; 
        }
    };
}