const p = new Promise((resolve, reject) => {
  //async work
  setTimeout(() => {
    resolve(1); // pending =>resolved, fullfiled
    // reject(new Error('error')); // pending => rejected
  }, 2000);
});

p.then((result) => console.log('result', 1)).catch((err) =>
  console.log('error', err.message)
);

// Objects representing the eventual completion or failure of an asynchronous operation. They simplify error handling and provide a cleaner syntax compared to callbacks.

// In JavaScript, a Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value

const abc = new Promise((resolvedsecond, reject) => {
  // console.log(resolved);
  resolvedsecond('second demo');
});

abc
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// testing promise
const pro = new Promise((resolve, reject) => {
  console.log('promise js testunf ');
  // reject(new Error('error'));
  // reject(new Error('error'));
  resolve(123);
});

pro
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
