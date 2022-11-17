const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const authModel = require("../models/auth.model");
const userModel = require("../models/user.model");
const jwtToken = require("../utils/generateJwtToken");
const { success, failed } = require("../utils/createResponse");

module.exports = {
  register: async (req, res) => {
    try {
      const user = await userModel.findBy("email", req.body.email);
      if (user.rowCount) {
        failed(res, {
          code: 403,
          payload: "Email already exist",
          message: "Register Failed",
        });
        return;
      }

      const { fullname, username, email } = req.body;
      const password = await bcrypt.hash(req.body.password, 10);
      const token = crypto.randomBytes(30).toString("hex");

      const insertData = await authModel.register({
        id: uuidv4(),
        fullname,
        username,
        email,
        password,
        date: new Date(),
      });

      success(res, {
        code: 201,
        payload: null,
        message: "Register Success",
      });
    } catch (error) {
      failed(res, {
        code: 500,
        payload: error.message,
        message: "Internal Server Error",
      });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await userModel.findBy("email", email);

      if (user.rowCount > 0) {
        const match = await bcrypt.compare(password, user.rows[0].password);

        if (match) {
          jwt = await jwtToken({
            id: user.rows[0].id,
          });
          success(res, {
            code: 200,
            payload: null,
            message: "Login Success",
            token: {
              jwt,
              id: user.rows[0].id,
            },
          });
          return;
        }
      }
      failed(res, {
        code: 401,
        payload: "Wrong Email or Password",
        message: "Login Failed",
      });
    } catch (error) {
      failed(res, {
        code: 500,
        payload: error.message,
        message: "Internal Server Error",
      });
    }
  },
};
