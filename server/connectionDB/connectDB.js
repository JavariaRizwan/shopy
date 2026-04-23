
require("dotenv").config();
const mongoose = require("mongoose");

const connection = mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log("MongoDB Connection Failed ❌", err.message));

module.exports = connection;
