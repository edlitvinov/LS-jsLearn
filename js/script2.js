'use strict';
// day 2

// Array

function hi([name, lastName, sitizen]) {
    console.log(`Hi!, my name is ${name} ${lastName}. I am ${sitizen}`);
}
let input = 'John Whait American';
hi(input.split(' '));


/*
let input = 'John Whait';
let name = '',
    lastName = '';

[name, lastName] = input.split(' ');

console.log(name);
console.log(lastName);
*/
// let [a, b] = ['John', 'Whait'];
// console.log(a, b);

/*
let input = 'John Whait';
let parts = input.split(' '); // erray
console.log(parts);
console.log(parts[0]);
*/

// let array = ['Sergey', 'Ivan'];
// console.log(array[1]);
// array[2] = 'Igor';
// console.log(array);
// console.log(array.length);
// array.push('Dan');
// console.log(array);
// console.log(array.length);
// for (let i = 0; i < array.length; i++) {
//     console.log(i);
// }

// object
// const obj = {
//     name: 'John',
//     lastName: 'Smith',
//     age: 25,
//     adress: {
//         str: 'Fifth Avenue',
//         city: 'New York'
//     }
// };
// console.log(obj.age);
// obj.age = 50;
// console.log(obj.age);
// obj.work = 'programmer';
// console.log(obj.work);
// console.log(obj);

