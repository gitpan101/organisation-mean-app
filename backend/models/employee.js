import mongoose from "mongoose";
import validator from "validator";

let Employee = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "{Value} is not valid"
    }
  },
  contactNum: {
    type: String,
    validate: {
      validator: validator.isMobilePhone,
      message: "{Value} is not valid"
    }
  },
  salary: {
    type: String
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department"
  }
});

export default mongoose.model("Employee", Employee);
