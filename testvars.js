a;
console.log(a); // undefined
var a = 10;
console.log(a); // 10

b;
console.log(b); //undefined

let b = 20;
console.log(b); // 20

{
  var c = 11;
  {
    console.log('Inside scope var:', c); // undefined 11
    var d = 21;
    let e = 51;
    f = 101;
  }
  console.log('Outside Scope Var: ', c); // 11
  console.log('Outside Scope: ', f);

  console.log('Outside Scope Var: ', d); //21
  console.log('Inside Scope Var: ', e); // undefined not defined
}
