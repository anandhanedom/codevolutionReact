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

const makeArr = <T, U = number>(x: T, y: U): [T, U] => {
  //Return tuple
  return [x, y];
};

const v1 = makeArr(5, 6);
const v2 = makeArr('a', 'b');

const v3 = makeArr<string | null>(null, 6);

// console.log(v1, v2, v3);

interface IObj {
  firstName: string;
  lastName: string;
}

//ATLEAST THESE 2 FIELDS

const makeFullName = <T extends IObj>(obj: T) => {
  return { ...obj, fullName: obj.firstName + ' ' + obj.lastName };
};

const v4 = makeFullName({ firstName: 'John', lastName: 'Doe', age: 15 });
const v5 = makeFullName({ firstName: 'Hit', lastName: 'Man', age: 30 });

// console.log(v4);

interface Tab<T> {
  id: string;
  position: number;
  data: T;
}

type NumberTab = Tab<number>;
type StringTab = Tab<string>;
