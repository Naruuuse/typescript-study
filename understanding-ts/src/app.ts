const button = document.querySelector('button')!

function clickHandler(message: string) {
  console.log('Cilicked!' + message)
}

button.addEventListener('click', clickHandler.bind(null, "You're welcome!"))