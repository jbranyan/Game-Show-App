/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/*app.js to create a new instance of the `Game` class and add event listeners for the start
button and onscreen keyboard buttons.*/

let game;
const startButton = document.getElementById('btn__reset');
const letters = document.getElementById('qwerty');
startButton.addEventListener('click',() => {
    game = new Game();
    game.startGame();
});


letters.addEventListener('click',(e) => {
    const letter = e.target;
});

document.getElementById('qwerty')
.addEventListener('click',(e) => {
    const button = e.target;
    if(e.target.className === 'key'){
        game.handleInteraction(button);
    }
});