// Array
// last
// makeArr: 2 generics, return, overwrite inference,default value
// addFullName: extends
// interfaces
// props
// useState
// jsx generic

type numArray = Array<number>;

const last = <T>(arr: Array<T>): T => {
  return arr[arr.length - 1];
};

const l1 = last([1, 2, 3]);
const l2 = last(['a', 'b', 'c']);
// console.log(l1, l2);

const makeArr = <T, U>(x: T, y: U): [T, U] => {
  //Return tuple
  return [x, y];
};

const v1 = makeArr(5, 6);
const v2 = makeArr('a', 'b');

const v3 = makeArr('a', 6);

console.log(v1, v2, v3);
