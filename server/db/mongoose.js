import mongoose from "mongoose";

mongoose.connect(
  "mongodb://localhost:27017/OrganisationDB",
  { useNewUrlParser: true }
);

mongoose.connection.once("open", () => {
  console.log("MongoDB connection established");
});
