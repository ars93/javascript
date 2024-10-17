function* generatorFunction() {
  yield 'First'
  yield 'Second'
  yield 'Third'
}

const gen = generatorFunction()
console.log(gen)
console.log(gen.next().value) // First
console.log(gen.next().value) // Second
console.log(gen.next().value) // Third

// Generators are functions that can be paused and resumed, useful in handling asynchronous data or iterating over large datasets.
