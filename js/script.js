'use strict';

let a = 15;

function f1(b, c) {
    function f2(d, e) {
        return a + b + c + d + e;
    }
    return f2(4, 7);
}

let res = f1(8, 2);
console.log(res);