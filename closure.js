function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
      console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
    };
  }
  
  const newFunction = outerFunction('outside');
  newFunction('inside'); // Outer: outside, Inner: inside


//   A closure is a function that remembers the environment (variables) in which it was created. This allows the inner function to access variables of the outer function even after the outer function has finished executing.

