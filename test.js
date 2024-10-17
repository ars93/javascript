// // function fun() {
// //   var k = 101;
// //   console.log('Inside function fun: ', k);
// // }
// // console.log('Outside Scope: ', k);

// // fun();

// // function mun() {
// //   console.log('Inside Function Mun: ', k);
// // }
// // mun();

// // (function gun() {
// //   console.log('ghi: ', k);
// // })();

// function fun() {
//   k2 = 101;
//   console.log('Inside function fun: ', k2); //1
// }
// fun();
// console.log('Outside Scope: ', k2);
// function mun() {
//   console.log('Inside Function Mun: ', k2);
// }
// mun();

// // (function gun() {
// //   console.log('Inside function gun : ', k);
// // })();

// // If you declare var then it is a functional scope if not delecared and used
//in function without var then it is global scope with var

// (function gun() {
//   k7 = 101;
//   console.log('Inside function gun : ', k7);
// })();

// function fun() {
//   console.log('Inside function fun: ', k7); //1
// }
// fun();
// console.log('Outside Scope: ', k7);
// function mun() {
//   console.log('Inside Function Mun: ', k7);
// }
// mun();

// why iife

// (function ()
{
  let i = 51;

  function sun() {
    console.log('Inside sun: ', i);
  }

  sun();
}
// ) ();

console.log('Outside: ', i);

// console.log("abc");

// setTimeout(() => {
//   console.log("xyz");
// }, 0);
// var k = 101;
// function fun() {
//   console.log('def: ', k);
// }

// fun();

// (function gun() {
//   console.log('ghi: ', k);
// })();

/*
1. abc
2. def
3. xyz
4. ghi
*/
