'use strict';

// const body = document.body;

// console.log(body.firstElementChild.nextElementSibling.previousElementSibling);


// for (const node of body.children) {
//     console.log(node);
// }

// console.log(body.childNodes);

// for (const node of body.childNodes) {
//     if(node.nodeType === 3) {
//         console.log('text type', node);
//     } else  if(node.nodeType === 1) {
//         console.log('element type', node);
//     };
// }


// const myButton = document.querySelector('#myButton');
// const nameInput = document.querySelector('#nameInput');
// const list = document.querySelector('#list');

// myButton.addEventListener('click', function() {
//     const newItem = document.createElement('li');
//     newItem.classList.add('item');
//     newItem.textContent = nameInput.value;

//     const delButton = document.createElement('button');
//     delButton.textContent = 'delete';
//     delButton.addEventListener('click', function() {
//         list.removeChild(newItem);
//     });

//     newItem.appendChild(delButton);
//     list.appendChild(newItem);

//     nameInput.value = '';

// });