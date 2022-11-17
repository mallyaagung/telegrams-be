require("dotenv").config();

module.exports = {
  APP_NAME: process.env.APP_NAME || "My App",
  PORT: process.env.PORT || 5000,
  // database
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
  DB_PORT: process.env.DB_PORT,
  // jwt
  JWT_SECRET: process.env.JWT_SECRET,
  // google
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  REDIRECT_URI: process.env.REDIRECT_URI,
  DRIVE_REFRESH_TOKEN: process.env.DRIVE_REFRESH_TOKEN,
};
