// Iterator Example
function nameIterator(names) {
  let index = 0;

  return {
    next: function () {
      return index < names.length
        ? { value: names[index++], done: false }
        : { done: true };
    },
  };
}

// Array of names
const namesArr = ['Victor', 'John', 'Spike'];

// Init iterator
const names = nameIterator(namesArr);

console.log(names.next());
console.log(names.next());
console.log(names.next());
console.log(names.next());
