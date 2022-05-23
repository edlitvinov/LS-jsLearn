'use strict';

// стрелочные функции

let gaf = (a, b) => a * b;
console.log(gaf(2, 6));

let ar = [1, 2, 4, 6, 7];
let newAr = ar.map(n => n * n);
console.log(ar);
console.log(newAr);

// function Expression

let shg = function(a, b) {  // переменная sum создаётся явно. функция внутри какого то выражения
    return a + b;
}

// function Declaration 

function sum(a, b) {   // интерпретатор сам создаст переменную sum
    return a + b;
}
let d = sum(15, 3);
console.log(d);

// замыкание

// let a = 12;

// function f1(b, c) {
//     function f2(d, e) {
//         return a + b + c + d + e;
//     }
//     return f2(4, 7);
// }

// let res = f1(8, 2);
// console.log(res);

// функции

// function sum(a, b) {
//     let result = a + b;
//     return result;
// }
// // console.log(sum(11, 5)); 
// let res = sum(14, 7);
// console.log(res);
