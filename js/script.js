'use strict';

// HW 1.5

// let retArr = (a, b, c) => [a, b, c];
// console.log(retArr(4, 9, 13));

//HW 1.4
// let  num = 10;
// function retCount(a) {
//     return ++num;
// }
// console.log(retCount());



//HW 1.3

// let retFun = (a) => a;
// console.log(retFun('hello!'));

// let ft  = (a) => a;
// console.log(ft(retFun('world')));



//HW 1.2

// let res3 = (a) => a +100;
// console.log(res3(7));

// let n = 100;
// let res2 = (a, b) => a +b;
// console.log(res2(5, n));

// let res = (a, b) => a +b;
// console.log(res(5,4));


// HW 1.1
// function ret(a) {
//     return a;
// }

// let ret = (a) => a;
// let b = ret('hello!');
// console.log(b);


// стрелочные функции

// let gaf = (a, b) => a * b;
// console.log(gaf(2, 6));

// let ar = [1, 2, 4, 6, 7];
// let newAr = ar.map(n => n * n);
// console.log(ar);
// console.log(newAr);

// function Expression

// let shg = function(a, b) {  // переменная sum создаётся явно. функция внутри какого то выражения
//     return a + b;
// }

// function Declaration 

// function sum(a, b) {   // интерпретатор сам создаст переменную sum
//     return a + b;
// }
// let d = sum(15, 3);
// console.log(d);

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
