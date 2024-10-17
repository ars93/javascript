const obj = {
  name: 'Alice',
  greet: function () {
    console.log(`Hello, ${this.name}`)
  },
}

obj.greet() // Hello, Alice

// Assigning greet to a variable
const greetFunction = obj.greet
greetFunction() // Hello, undefined (or in strict mode, error)

// To fix this, you can bind 'this' to the original object
const greetBound = obj.greet.bind(obj)
greetBound() // Hello, Alice

// The this keyword refers to the object that is executing the current function. However, in different contexts, this can change its value.
