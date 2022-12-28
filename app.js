import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import notFound from "./middleware/not-found.js";

dotenv.config();

const app = express();
import tasks from "./routes/tasks.js";

const port = 3000;

// middleware
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasks);
app.use(notFound);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to the DB...");
  })
  .then(() => {
    app.listen(port, console.log(`server is listening on port: ${port}`));
  })
  .catch((e) => console.log(e));
