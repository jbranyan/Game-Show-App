/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/*app.js to create a new instance of the `Game` class and add event listeners for the start
button and onscreen keyboard buttons.*/

let game;
const startButton = document.getElementById('btn__reset');
const qwertyElement = document.getElementById('qwerty');
const qwertyKeys = document.querySelectorAll('#qwerty button');
const heartLi = document.querySelectorAll('#scoreboard li');

startButton.addEventListener('click',() => {
    game = new Game();
    const ul = document.getElementsByTagName('ul')[0];
    const listItems = ul.getElementsByTagName('li');

    for (let i = 0; i < listItems.length; i++) {
        console.log (listItems[i]);
        ul.removeChild(listItems[i]);
    }

    game.startGame();

    for (let i = 0; i < qwertyKeys.length; i++) {
        qwertyKeys[i].className = `key`;
        qwertyKeys[i].disabled = false;   
    }

    for (let i = 0; i < heartLi.length; i++) {
        heartLi[i].innerHTML = `<img src="images/liveHeart.png" alt="Heart Icon" height=\"35\" width=\"30\">`;
    }
});


qwertyElement.addEventListener('click',(e) => {
    const letter = e.target;
});


qwerty.addEventListener('click',(e) => {
    const button = e.target;
    if(e.target.className === 'key'){
        game.handleInteraction(button);
    }
});