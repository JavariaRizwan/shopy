
const express = require("express");
const router = require("./routes/user-router");
const adminRouter = require("./routes/admin-router");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://shopy-pk.netlify.app",
    ],
    methods: ["PUT", "PATCH", "DELETE", "OPTIONS", "POST", "GET"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/admin", adminRouter);
app.use("/api", router);

module.exports = app;
