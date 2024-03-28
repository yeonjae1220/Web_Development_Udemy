// console.dir(window.document);
// document.body.children[1].children[0].href = 'https://google.com';

let anchorElement = document.getElementById('external-link');
anchorElement.href = 'https://google.com';

anchorElement.href = document.querySelector('#external-id');
anchorElement.href = 'http://academind.com';

// ADD AN ELEMENT
let newAnchorElement = document.createElement('a');
//newAnchorElement.hrep = 'https://google.com'; ㅋㅋ 오타 hrep 찾기 힘드네
newAnchorElement.href = 'https://google.com';
newAnchorElement.textContent = 'This leads to Google';

let firstParagraph = document.querySelector('p');

firstParagraph.append(newAnchorElement);

//REMOVE ELEMENTS
// 1. Select the element that should be removed
let firstH1Element = document.querySelector('h1');

// 2. Remove it!
//this approch does not work in previous version of browser like internet explore
// firstH1Element.remove();

//otherway (more complecate)
firstH1Element.parentElement.removeChild(firstH1Element);

// Move Elements

firstParagraph.parentElement.append(firstParagraph);


// innerHTML
console.log(firstParagraph.innerHTML);
console.log(firstParagraph.textContent);

//firstParagraph.textContent = 'Hi! This is <strong>important!</strong>';
firstParagraph.innerHTML = 'Hi! This is <strong>important!</strong>';