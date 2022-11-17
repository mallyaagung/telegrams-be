const { check } = require("express-validator");

const register = [
  // username
  check("username", "Username required").not().isEmpty(),
  check("username", "Username maximum length is 100 characters").isLength({
    max: 100,
  }),
  //fullname
  check("fullname", "Fullname required").not().isEmpty(),
  check("fullname", "Fullname only can contains alphabet").isAlpha("en-US", {
    ignore: " ",
  }),
  check("fullname", "Fullname maximum length is 100 characters").isLength({
    max: 100,
  }),
  // email
  check("email", "Email required").not().isEmpty(),
  check("email", "Please include a valid email").isEmail(),
  // password
  check("password", "Password require 8 or more characters").isLength({
    min: 8,
  }),
  check("password", "Password can't above 100 characters").isLength({
    max: 100,
  }),
];

const login = [
  // email
  check("email", "Email required").not().isEmpty(),
  check("email", "Please include a valid email").isEmail(),
  // password
  check("password", "Password required").not().isEmpty(),
];

module.exports = {
  register,
  login,
};
