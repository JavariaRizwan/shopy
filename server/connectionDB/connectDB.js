require("dotenv").config();
const mongoose = require("mongoose");

const connection = mongoose.connect(process.env.MONGO_URI);
connection
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => {
    console.error("MongoDB Connection Failed ❌", err.message);
  });

module.exports = connection;
