'use strict';

const myButton = document.querySelector('#myButton');
const nameInput = document.querySelector('#nameInput');
const list = document.querySelector('#list');

myButton.addEventListener('click', function() {
    const newItem = document.createElement('li');
    newItem.classList.add('item');
    newItem.textContent = nameInput.value;

    const delButton = document.createElement('button');
    delButton.textContent = 'delete';
    delButton.addEventListener('click', function() {
        list.removeChild(newItem);
    });

    newItem.appendChild(delButton);
    list.appendChild(newItem);
    
    nameInput.value = '';

});