import express from "express";
import logger from "morgan";
import indexRouter from "./routes/index.js";
import {
  notFoundResponse,
  unauthorizedResponse,
} from "./helpers/apiResponse.js";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
const result = dotenv.config();

if (result.error) {
  throw result.error;
}

const { connect } = mongoose;
const { json, urlencoded } = express;
const port = 3000;

var MONGODB_URL = process.env.MONGODB_URL;
console.log(MONGODB_URL);

connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to %s", MONGODB_URL);
    console.log("App is running ... \n");
  })
  .catch((err) => {
    console.error("App starting error:", err.message);
  });

const app = express();

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors());

app.use("/", indexRouter);

app.all("*", function (req, res) {
  return notFoundResponse(res, "Page not found");
});

app.use((err, req, res) => {
  if (err.name == "UnauthorizedError") {
    return unauthorizedResponse(res, err.message);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
