
require("dotenv").config();

const serverless = require("serverless-http");
const connection = require("../../connectionDB/connectDB");
const app = require("../../app");

const handler = serverless(app);

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connection;
    return await handler(event, context);
  } catch (error) {
    console.error("Backend error:", error.message);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal server error" }),
    };
  }
};
