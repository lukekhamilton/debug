var express = require("express");
var app = express();
app.get("/", function(req, res) {
  res.send("Hello Luke, welcome to your World!");
});
app.listen(5050, function() {
  console.log("Luke your example app is listening on port 5050! Yay!");
});
