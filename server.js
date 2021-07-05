//Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

//Port
const PORT = process.env.PORT || 3009;

//Express App
const app = express();

//Logger App
app.use(logger("dev"));

// Compression App
app.use(compression());

//Express App
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Mongoose Connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// Routes
app.use(require("./routes/api.js"));

//Listening on Port...
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});