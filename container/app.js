const express = require("express");

const app = express();
const port = 3030;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api", (req, res) => {
  res.send("Welcome to api page");
});

app.get("/users", (req, res) => {
  res.send("Welcome to api page");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
