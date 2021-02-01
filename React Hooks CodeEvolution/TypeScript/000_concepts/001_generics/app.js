"use strict";
// Array
// last
// makeArr: 2 generics, return, overwrite inference,default value
// addFullName: extends
// interfaces
// props
// useState
// jsx generic
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var v3 = makeArr(null, 6);
//ATLEAST THESE 2 FIELDS
var makeFullName = function (obj) {
    return __assign(__assign({}, obj), { fullName: obj.firstName + ' ' + obj.lastName });
};
var v4 = makeFullName({ firstName: 'John', lastName: 'Doe', age: 15 });
var v5 = makeFullName({ firstName: 'Hit', lastName: 'Man', age: 30 });
