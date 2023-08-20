const user = {
  firstName: "Anshika",
  lastName: "Agarwal",
};

function printFullName({ firstName, lastName }) {
  console.log(firstName + " " + lastName);
  console.log(`${firstName} ${lastName}`);
}

printFullName(user);
