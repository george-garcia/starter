import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
import tasks from "./routes/tasks.js";

const port = 3000;

// middleware
app.use(express.json());

// routes

app.get("/hello/", (req, res) => {
  res.send("Task Manager");
});

app.use("/api/v1/tasks", tasks);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to the DB...");
  })
  .then(() => {
    app.listen(port, console.log(`server is listening on port: ${port}`));
  })
  .catch((e) => console.log(e));
