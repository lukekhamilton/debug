var express = require("express");
var redis = require("redis");

// client = redis.createClient();

var app = express();

const exec = require("child_process").exec;

app.get("/", function(req, res) {
  res.send("Hello Luke, welcome to your World!");
  console.log("someone just hit me");
  exec("ifconfig", (error, stdout, stderr) => {
    console.log("stdout: " + stdout);
    console.log("stderr: " + stderr);
  });
});

app.listen(5001, function() {
  console.log("Luke your example app is listening on port 5001! Yay!");
});
