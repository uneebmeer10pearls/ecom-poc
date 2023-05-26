import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient() 

const express = require("express");
const app = express();
const port = 8080;

app.use(express.static("public"));

app.get("/", async (req:any, res:any) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.send(await prisma.user.deleteMany());
  // res.send("bla!")
});

app.listen(port, async () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

