import mongoose from "mongoose";

const connectionSring =
  "mongodb+srv://dummyuser:12skid31@cluster0.jlx2sbn.mongodb.net/TaskManager?retryWrites=true&w=majority";

try {
  await mongoose.connect(connectionSring);
  console.log("CONNECTED TO THE DB...");
} catch (e) {
  console.log(e);
}
