var express = require("express");
var redis = require("redis");

// client = redis.createClient();

var app = express();

// const exec = require("child_process").exec;

app.get("/", function(req, res) {
  res.send("Hello Luke, welcome to your World! " + req);
  console.log("someone just hit me");
  // exec("ifconfig", (error, stdout, stderr) => {
  //   console.log("stdout: " + stdout);
  //   console.log("stderr: " + stderr);
  // });

  // client = redis.createClient("redis://redis:6379");
  client = redis.createClient();
  console.log(client);

  client.on("error", function(err) {
    console.log("Error " + err);
  });

  client.set("string key", "string val", redis.print);
  client.hset("hash key", "hashtest 1", "some value", redis.print);
  client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
  client.hkeys("hash key", function(err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function(reply, i) {
      console.log("    " + i + ": " + reply);
    });
    client.quit();
  });

  console.log("Thank you");
});

app.listen(5001, function() {
  console.log("Luke your example app is listening on port 5001! Yay!");
});
