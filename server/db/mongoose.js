import mongoose from "mongoose";

mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGOLAB_URI,
  { useNewUrlParser: true }
);

mongoose.connection.once("open", () => {
  console.log("MongoDB connection established");
});
