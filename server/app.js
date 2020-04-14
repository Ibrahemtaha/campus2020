var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");
const sequelize = require("./models/db");
require("dotenv").config();

const passPortConf = require("./passport");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var userRouter = require("./routes/user");
var coursesRouter = require("./routes/course");
var loginRouter = require("./routes/login");

var app = express();

app.use(cors());
// Configurar cabeceras y cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/user", userRouter);
app.use("/course", coursesRouter);
app.use("/login", loginRouter);

// sequelize
//   .sync()
//   .then(reslut => {
//     //console.log(reslut);
//     app.listen(8080);
//   })
//   .catch(error => {
//     //console.log(error);
//   });

module.exports = app;
