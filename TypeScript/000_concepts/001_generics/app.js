"use strict";
// Array
// last
// makeArr: 2 generics, return, overwrite inference,default value
// addFullName: extends
// interfaces
// props
// useState
// jsx generic
var last = function (arr) {
    return arr[arr.length - 1];
};
var l1 = last([1, 2, 3]);
var l2 = last(['a', 'b', 'c']);
// console.log(l1, l2);
var makeArr = function (x, y) {
    //Return tuple
    return [x, y];
};
var v1 = makeArr(5, 6);
var v2 = makeArr('a', 'b');
var v3 = makeArr('a', 6);
console.log(v1, v2, v3);
