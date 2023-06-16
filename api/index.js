// const express = require("express");
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import routes from "./routes/index.js";
import db from "./db/index.js";
import "./models/User.js";

const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));

//Routes
app.use("/api", routes);

//Db connect
db.sync({ force: false })
  .then(() => {
    console.log("db connected");
    app.listen(3001, () => {
      console.log("Server is running on port 3001");
    });
  })
  .catch((err) => {
    console.error(err);
  });
