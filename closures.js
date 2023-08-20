// function x() {
//   var a = 7;

//   function y() {
//     console.log(a);
//   }

//   a = 100;

//   return y;
// }

// var z = x();

// console.log(z()); // undefined

// function a() {
//   c();

//   function c() {
//     console.log(b);
//   }
// }

// const b = 10;
// a();

function z() {
  let b = 900;

  function x() {
    let a = 7;

    function y() {
      console.log(a, b);
    }

    y();
  }
  x();
}

z();
