
// Exercise Time!

// 1. Select the <h1> element by "drilling into the DOM" and 
//    save it in a variable with a name of your choice
let h1Element = document.body.children[0]
h1Element = document.body.firstElementChild; //이렇게 할 수 도 있다.

console.dir(h1Element); //이렇게 하면 여기 속성들을 다 볼 수 있다.

// 2. Use the variable from (1) and get access to the "parent"
//    element of the stored <h1> element (i.e. to the <body> element)
console.dir(h1Element.parentElement);
//    BONUS: Try using the variable from (1) to get access to the 
//    sibling element (i.e. the <p> element next to the <h1> element)
//let parentElement = console.dir(parent.h1Element)
console.dir(h1Element.nextElementSibling);


// 3. Select the <h1> element with getElementById and store in
//    the same or a new variable (up to you)
h1Element = document.getElementById('first-title');
console.dir(h1Element);

// 4. Select the second <p> element with querySelector (you might
//    need to add something in the HTML code, e.g. a class) 
//    and store it in a new variable with a name of your choice
//let highlightedParagraph = document.getElementsByClassName('highlighted-paragraph'); 이게 아닌가
let highlightedParagraph = document.querySelector('.highlighted-paragraph');
console.dir(highlightedParagraph);


// 5. BONUS TASK: Try changing the text content of the <p> element
//    you selected in (4) and set it to any other text of your choice
highlightedParagraph.textContent = '\n changed \n';