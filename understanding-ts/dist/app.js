"use strict";
const button = document.querySelector('button');
function clickHandler(message) {
    console.log('Cilicked!' + message);
}
button.addEventListener('click', clickHandler.bind(null, "You're welcome!"));
