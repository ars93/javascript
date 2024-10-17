function multiply(a) {
  return function (b) {
    //console.log('b = ' + b)
    return a * b
  }
}

const multiplyBy2 = multiply(2)
// console.log(multiplyBy2)
console.log(multiplyBy2(5)) // 10
console.log(multiplyBy2(10)) // 20

// Currying is a technique where a function doesn't take all its arguments upfront but instead returns a new function that takes the remaining arguments.
