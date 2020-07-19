const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const port =  process.env.PORT || 3031;

app.get("/", function (req, res) {
  return res.sendFile(path.join(__dirname + "/index.html"));
});
app.use(express.static("./"));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error running server: ${err}`);
  } else {
    console.log(`Server running on port ${port}`);
  }
});
