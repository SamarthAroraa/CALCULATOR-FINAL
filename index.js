const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

app.get("/", function (req, res) {
  return res.sendFile(path.join(__dirname + "/index.html"));
});
app.use(express.static("./"));

const port = 8000;
app.listen(port, function (err) {
  if (err) {
    console.log(`Error running server: ${err}`);
  } else {
    console.log(`Server running on port ${port}`);
  }
});
