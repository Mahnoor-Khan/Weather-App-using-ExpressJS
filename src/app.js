const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 8000;

// public static path
let staticPath = path.join(__dirname, "../public");
let template_path = path.join(__dirname, "./templates/views");
let partials_path = path.join(__dirname, "./templates/partials");
app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

// rouitng
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/weather", (req, res) => {
  res.render("weather");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("*", (req, res) => {
  res.render("404ErrorPage", {
    errorMsg: "Opps! Page Not Found",
  });
});

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
