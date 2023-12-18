const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_CONNECTION);

const indexRouter = require("./routes/index");
const shoesRouter = require("./routes/shoe");
const usersRouter = require("./routes/user");


const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/v1/shoes", shoesRouter);

app.use("/api/v1/users", usersRouter);


module.exports = app;