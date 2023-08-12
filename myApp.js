let express = require('express');
let path = require('path');
console.log("Hello World");
let app = express();

// Middleware
app.use("/public", express.static(__dirname + "/public"));
// app.use(express.static(path.join(__dirname, "public")));

app.get("/hello", function(req, res) {
  res.send("Hello Express");
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

































module.exports = app;
