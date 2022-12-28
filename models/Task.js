import mongoose, { mongo } from "mongoose";

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide a name'],
    trim: true,
    minlength: [3, 'name cannot be less than 3 characters'],
    maxlength: [20, 'name cannot be more than 20 characters'],
  },
  completed: {
    type: Boolean,
    default: false
  }
});

const Task = mongoose.model("Task", taskSchema);

export default Task;
