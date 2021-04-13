require("dotenv").config();
const path = require("path");
const express = require("express");
const apiRouter = require("./routes");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: false, limit: "20mb" }));

app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/api", apiRouter);

app.get("/", function (req, res) {
  res.sendFile("index.html");
});

app.get("/*", function (req, res) {
  res.redirect("/");
});

function start() {
  return new Promise(function (resolve, reject) {
    app.listen(port, function (err) {
      if (err) {
        reject(err);
      } else {
        console.log("Server is running on Port: " + port);
        resolve(true);
      }
    });
  });
}

module.exports = start;
