const { db } = require("../config/db.js");

const _register = (email, password) => {
  return db("users")
    .insert({ email, password })
    .returning(["id", "email"]);
};

const _login = (email) => {
  return db("users")
  .select("id", "email", "password")
  .where({ email });
};

module.exports = {
  _register,
  _login
};
