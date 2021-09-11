/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/*app.js to create a new instance of the `Game` class and add event listeners for the start
button and onscreen keyboard buttons.*/

let game;
const startButton = document.getElementById('btn__reset');
const qwertyElement = document.getElementById('qwerty');
const qwertyKeys = document.querySelectorAll('#qwerty button');
const heartImage = document.querySelectorAll('#scoreboard li');

startButton.addEventListener('click',() => {
    //Create a new game
    game = new Game();

    const ul = document.getElementsByTagName('ul')[0];
    const listItems = ul.getElementsByTagName('li');

    //https://stackoverflow.com/questions/18795028/javascript-remove-li-without-removing-ul
    for (let i = 0; li = listItems[i]; i++) {
        li.parentNode.removeChild(li);
        i = i - 1;
    }

    //start a new game
    game.startGame();

    //For the new game, reset the keyboard by enabling all keyboard buttons
    qwertyKeys.forEach(qwertyKey => {
        qwertyKey.className = `key`;
        qwertyKey.disabled = false;
    });

    //For the new game, reset the lost heart image to the live heart
    heartImage.forEach(heart => {
        heart.innerHTML = `<img src="images/liveHeart.png" alt="Heart Icon" height=\"35\" width=\"30\">`;
    });
});

//
qwertyElement.addEventListener('click',(e) => {
    const letter = e.target;
});


qwerty.addEventListener('click',(e) => {
    const button = e.target;
    if(e.target.className === 'key'){
        game.handleInteraction(button);
    }
});

//Captures the key pressed by the user and passed it to handleInteraction
document.addEventListener('keyup', (e) => {
    qwertyKeys.forEach(qwertyKey => {
        if(qwertyKey.innerHTML === e.key){
            const button = qwertyKey;
            game.handleInteraction(button);
        }
    })
});