const jwt = require("jsonwebtoken");
const { failed } = require("../utils/createResponse");
const { JWT_SECRET } = require("../utils/env");

module.exports = (req, res, next) => {
  try {
    const token = req.headers;
    const decoded = jwt.verify(token.split(" ")[1], JWT_SECRET);

    req.APP_DATA = { tokenDecoded: decoded };
    // console.log(req.APP_DATA)
    next();
  } catch (error) {
    console.log(error);
    // const {authorization}  = req.headers
    // console.log(authorization)
    console.log(req.headers.authorization.split(" ")[1]);
    failed(res, {
      code: 401,
      payload: "Token Invalid",
      message: "Unauthorized",
    });
  }
};
