import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.json({ message: "HELLO!" });
});

app.listen(5000, () => {
  console.log("SERVER LISTENING");
});
