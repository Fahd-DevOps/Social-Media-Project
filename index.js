const express = require("express");
const app = express();
const Mongoose = require("mongoose");
require("./db");
// const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const reviw = require("./routes/ReviewRoute");

// dotenv.config();


// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/", reviw);

app.listen(80, () => {
  console.log("Server is running!");
});