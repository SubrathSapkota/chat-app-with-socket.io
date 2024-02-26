import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server saying hello");
});

app.listen(3000, () => {
  console.log("server started at port 300");
});
