// Object destructuring

const user = {
  firstName: "anshika",
  lastName: "agarwal",
  age: "45",
  hobby: "cooking",
};

function printFirstName({ firstName, lastName }) {
  console.log(firstName);
  console.log(lastName);
}

printFirstName(user);
