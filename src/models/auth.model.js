const db = require("../config/db");

module.exports = {
  register: (body) =>
    new Promise((resolve, reject) => {
      const { id, fullname, username, email, password, date } = body;

      db.query(
        "INSERT INTO users (id, fullname, username, email, password, date) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id",
        [id, fullname, username, email, password, date],
        (error, result) => {
          if (error) {
            reject(error);
          }
          resolve(result);
        }
      );
    }),
};
