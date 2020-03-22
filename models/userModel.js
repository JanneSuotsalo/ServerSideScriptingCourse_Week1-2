"use strict";
const users = [
  {
    id: "1",
    name: "John Doe",
    email: "john@metropolia.fi",
    password: "1234"
  },
  {
    id: "2",
    name: "Jane Doez",
    email: "jane@metropolia.fi",
    password: "qwer"
  }
];

const getUser = id => {
  const user = users.filter(usr => {
    if (usr.user_id === id) {
      return usr;
    }
  });
  return user[0];
};

module.exports = {
  users,
  getUser
};
