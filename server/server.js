
require("dotenv").config();

const connection = require("./connectionDB/connectDB");
const app = require("./app");

const PORT = process.env.PORT || 5000;

connection
  .then(() => {
    console.log("Database Connection Successful");

    app.listen(PORT, () => {
      console.log(`App is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database Connection Failed:", error.message);
    process.exit(1);
  });
