//var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const urlencoded = require("body-parser");
const { request } = require("express");
const app = express();

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var helloRouter = require("./routes/hello");
var formRouter = require("./routes/form");
var formdataRouter = require("./routes/formdata");
var calculatorRouter = require("./routes/calculator");


// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(urlencoded.json());
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/hello", helloRouter);
app.use("/form", formRouter);
app.use("/formdata", formdataRouter);
app.use("/calculator", calculatorRouter);

app.listen(8080, (localhost) => console.log("Server listening on port 8080!"));
console.log("Names for parameters for json in task 9a are \"firstParameter\", \"secondParameter\" and \"operation\".")

console.log("Recognizable operations are: \"addition\",\"substraction\",\"multiplication\",\"exponentiation\",\"division\".")
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
