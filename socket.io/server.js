const express = require("express");
const app = express();
const port = 3200;
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/view/index.html"));
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
  console.log(`http://localhost:${port}`);
});
