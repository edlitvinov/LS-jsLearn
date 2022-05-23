'use strict';

// замыкание

let a = 12;

function f1(b, c) {
    function f2(d, e) {
        return a + b + c + d + e;
    }
    return f2(4, 7);
}

let res = f1(8, 2);
console.log(res);

// функции

// function sum(a, b) {
//     let result = a + b;
//     return result;
// }
// // console.log(sum(11, 5)); 
// let res = sum(14, 7);
// console.log(res);
