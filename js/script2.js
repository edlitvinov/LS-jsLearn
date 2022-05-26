'use strict';

// day 3 DOM

const element = document.createElement('div');
const container = document.querySelector('#container');
const element2 = document.createElement('span');
container.appendChild(element);
element.textContent = 'text in div';
container.appendChild(element2);
element2.textContent = 'text in span';


// day 2
// console.
// console.log('привет!');
// console.log('привет', 'JavaScript');
// console.info('info');
// console.warn('warn');
// console.error('error');

// итераторы
/*
function range(from, to) {
    let objWithIterator = {};
    objWithIterator[Symbol.iterator] = function() {
        let i = from;
        return {
            next() {
                return {
                    value: i,
                    done: i++ === to
                }
            }
        };
    };

    return  objWithIterator;
}


for (const number of range(0, 15)) {
    console.log(number);
}
*/

// let iterator = {
//     next() {
//         return {
//             value: '',
//             done: ''   // done - флаг законченности
//         };
//     }
// };

// let numbers = [2,5,7,9];
// for (let element of numbers) {

// };
// next();

/*
function sumar() {
    let res = 0;
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
        res += arguments[i];
    }
    return res;
}

sumar(2,5,9,7,6);
*/

/*
function range(from, to) {
    for (let i = from; i <= to; i++) {
        console.log(i);
    }
}

range(0, 20);
*/

// for-of

/*
function s() {
    let res = 0;
    for (let arg of arguments) {
        res += arg;
    }
    return res;
}
console.log(s(4, 5, 15, 3));
*/

// Array
// rest-оператор - это массив данных из остатка
/*
let n = [5, 9, 6, 1, 4];
let n2 = [45, 78, 19, 4];
let con = [...n, ...n2]; //n.concat(n2);
console.log(con);
*/
/*
function summ(a, b, ...rest) {
    console.log(a, b, rest);
}
summ(...n);
*/

/*
let dd = [1, 5, 7, 4];
let [a, b, ...rest] = dd;
*/
/*
let a = dd[0];
let b = dd[1];
let c = dd[2];
*/

// let [first, second] = dd;

// console.log(a, b, rest);



/*
let numb = [1, 7, 9, 13];

function sum() {
    let res = 0;

    for (let i = 0; i < arguments.length; i++) {
        res += arguments[i];
    }
    return res;
}

let focus = sum(...numb); // спред оператор
console.log(focus);
*/

// function hi([name, lastName, sitizen]) {
//     console.log(`Hi!, my name is ${name} ${lastName}. I am ${sitizen}`);
// }
// let input = 'John Whait American';
// hi(input.split(' '));


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

 //object
/*
const user = {
     name: 'John',
     lastName: 'Smith',
     age: 25,
     adress: {
         str: 'Fifth Avenue',
         city: 'New York'
    }
};
let {name, lastName} = user;
*/
/*
console.log(obj.age);
obj.age = 50;
console.log(obj.age);
obj.work = 'programmer';
console.log(obj.work);
console.log(obj);
*/
