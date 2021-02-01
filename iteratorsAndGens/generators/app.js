// Generators

function* generator() {
  yield 1;
  yield* anotherGen();

  return 'hello'; // no more yielding from here

  yield 3;
}

function* anotherGen() {
  yield 2;
}

let geGen = generator();

console.log(geGen.next());
console.log(geGen.next());
console.log(geGen.next());
console.log(geGen.next());

// function* sayNames(params) {
//   yield 'Jack';
//   yield 'Jill';
//   yield 'John';
// }

// const name = sayNames();

// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);

// ID creator
// function* createIds(params) {
//   let index = 1;

//   while (true) {
//     yield index++;
//   }
// }

// const gen = createIds();

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
