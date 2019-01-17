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
      message: "{VALUE} is not valid"
    }
  },
  contactNum: {
    type: String,
    required: false,
    validate: {
      validator: value => {
        if (value === "") {
          return true;
        }

        return validator.isMobilePhone(
          value,
          // Indian MobilePhonelocale System, "en-IN"
          "any",
          {
            // used to not validate if country code is not used, e.g. +911234567890
            strictMode: true
          }
        );
      },
      message: "{VALUE} is not valid"
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
