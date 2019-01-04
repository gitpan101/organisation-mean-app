import mongoose from "mongoose";

let Department = new mongoose.Schema({
  deptName: {
    type: String,
    required: true
  },
  streamType: {
    type: String
  },
  hodName: {
    type: String
  }
});

export default mongoose.model("Depaerment", Department);
