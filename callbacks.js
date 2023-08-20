// function doStep1(num) {
//   return num + 1;
// }

// function doStep2(num) {
//   return num + 2;
// }

// function doStep3(num) {
//   return num + 3;
// }

// function doOperation() {
//   // synchronous code
//   let result = 0;

//   result = doStep1(result);
//   result = doStep2(result);
//   result = doStep3(result);

//   console.log(`result:${result}`);
// }

// doOperation();

function doStep1(num, callback) {
  const result = num + 1;
  callback(result);
}

function doStep2(num, callback) {
  const result = num + 2;
  callback(result);
}

function doStep3(num, callback) {
  const result = num + 3;
  callback(result);
}

// Pyramid of doom
// callback hell

function doOperation() {
  doStep1(0, (result1) => {
    doStep2(result1, (result2) => {
      doStep3(result2, (result3) => {
        console.log(`result: ${result3}`);
      });
    });
  });
}

doOperation();
