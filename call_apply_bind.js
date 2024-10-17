function introduce(language) {
  console.log(`My name is ${this.name}, and I speak ${language}`)
}

const person = {
  name: 'Bob',
}

// Using call to invoke the function with a specific `this`
introduce.call(person, 'English') // My name is Bob, and I speak English

// Using apply (similar to call, but takes arguments as an array)
introduce.apply(person, ['Spanish']) // My name is Bob, and I speak Spanish

// Using bind to create a new function with `this` bound to `person`
const introduceBound = introduce.bind(person)
introduceBound('French') // My name is Bob, and I speak French

// These functions allow you to explicitly set the value of this inside a function.
