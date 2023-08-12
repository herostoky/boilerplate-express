let express = require('express');
let path = require('path');
require('dotenv').config();
let app = express();

// Middleware
app.use("/public", express.static(__dirname + "/public"));
// app.use(express.static(path.join(__dirname, "public")));
app.use(function(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

app.get("/hello", function(req, res) {
  res.send("Hello Express");
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", function(req, res) {
  let message = "Hello json";
  if(process.env.MESSAGE_STYLE == "uppercase") {
    message = "HELLO JSON";
  }
  let data = {
    message: message,
  };
  res.json(data);
});

app.get('/now',
function(req, res, next) {
  req.time = new Date().toString();
  next();
},
function(req, res) {
  let data = {
    time: req.time,
  };
  res.json(data);
});

app.get("/:word/echo", function(req, res) {
  let data = {
    echo: req.params.word,
  };
  res.json(data);
});





























module.exports = app;
