const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hi kalana ");
});

app.get("/api", (req, res) => {
  res.send("Hi api ");
});

app.get("/help", (req, res) => {
  res.send("Hi help ");
});

app.get("*", (req, res) => {
  res.send("Page not found 404");
});

app.listen(3000, () => {
  console.log("this is 3000 port __ http://localhost:3000/ ");
});
