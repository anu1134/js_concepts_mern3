const users = [
  {
    firstName: "anshika",
    lastName: "agarwal",
    age: "23",
  },
  {
    firstName: "anshul",
    lastName: "agarwal",
    age: "27",
  },
  {
    firstName: "ansha",
    lastName: "agarwal",
    age: "78",
  },
  {
    firstName: "anika",
    lastName: "agarwal",
    age: "45",
  },
];

// Print firstnames of users whose age is greate than 30

console.log(users);

const filteredUsers = users
  .filter((user) => user.age > 30)
  .map((user) => user.firstName);

console.log(filteredUsers);
