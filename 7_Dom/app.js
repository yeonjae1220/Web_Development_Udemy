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