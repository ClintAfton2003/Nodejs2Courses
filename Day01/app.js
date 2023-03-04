const express = require("express");
const app = express();
const port = 3000;

// Quan trọng
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("index.html"); // Quan trọng
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
