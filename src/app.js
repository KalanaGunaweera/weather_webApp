const path = require("path");
const express = require("express");
const weather = require("./utils/weather.js");
const hbs = require("hbs");

const app = express();

const templePath = path.join(__dirname, "../templates");
const partialPath = path.join(__dirname, "../templates/partials");
//console.log(templePath);

app.set("view engine", "hbs");
app.set("views", templePath);
hbs.registerPartials(partialPath);

const publicDirPath = path.join(__dirname, "../public");
//console.log(publicDirPath);
app.use(express.static(publicDirPath));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/help", (req, res) => {
  res.render("help");
});

app.get("/about", (req, res) => {
  res.render("about");
});

// app.get("/", (req, res) => {
//   res.send("Welcome");
// });

// app.get("/help", (req, res) => {
//   res.send("help ");
// });

// app.get("/about", (req, res) => {
//   res.send("About ");
// });

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    res.send({ error: "Address not found" });
  }
  weather(req.query.address)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
});

// app.get("*", (req, res) => {
//   res.send("Page not found 404");
// });

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(3000, () => {
  console.log("this is 3000 port __ http://localhost:3000 ");
});

// weather("yatiyana")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
