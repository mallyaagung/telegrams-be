const express = require("express");
const validation = require("../validations/auth.validation");
const runValidation = require("../middlewares/runValidation");
const { register, login } = require("../controllers/auth.controller");

const router = express.Router();

router
  .post("/auth/register", validation.register, runValidation, register)
  .post("/auth/login", validation.login, login);

module.exports = router;
