let paragraphElement = document.querySelector('p')
// document.body.firstElementChild 이렇게 해도 된다

function changeParagraphText(event) {
    paragraphElement.textContent = 'Cliked!';
    console.log('Paragraph cliked!');
    console.log(event)
}

paragraphElement.addEventListener('click', changeParagraphText);

let inputElement = document.querySelector('input')

function retreiveUserInput(event) {
    //let enteredText = inputElement.value;
    //let enteredText = event.target.value;
    let enteredText = event.data;
    console.log(enteredText);
    //console.log(event);
}

inputElement.addEventListener('input', retreiveUserInput)