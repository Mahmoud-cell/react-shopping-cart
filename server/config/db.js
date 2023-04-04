const mongoose = require("mongoose")
const connectionString = "mongodb://127.0.0.1:27017/react-shopping-cart";

function runDB() {
  mongoose
    .connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((res) => console.log("Connected"));
} 

module.exports = runDB;