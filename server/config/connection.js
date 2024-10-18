require("dotenv").config();

const { connect, connection } = require("mongoose");

const dbUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/notes";
connect(dbUri);

module.exports = connection;
