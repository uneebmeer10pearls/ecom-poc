// @ts-check
const express = require("express");
const app = express();
const port = 8080;

app.use(express.static("public"));

app.get("/", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.send('Hello World2345!')
});


app.get("/employees", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

