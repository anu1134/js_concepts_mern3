let success = false;
const promiseObject = new Promise(function (onFulfilled, onRejected) {
  if (success) {
    onFulfilled("Javascript Promise is successful");
  } else {
    onRejected("Error in promise");
  }
});

promiseObject.then((res) => console.log("response", res));

promiseObject.catch((err) => console.log("error", err));
