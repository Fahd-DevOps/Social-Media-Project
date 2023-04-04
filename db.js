const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/todo")
  .then(() => console.log("Connected To Database"))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });