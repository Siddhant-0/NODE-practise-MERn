import mongoose from "mongoose";

const dbUserName = "siddhantshrestha04";
const dbPassword = encodeURIComponent("kec1234");
const dbHost = "cluster0.hnzeg3x.mongodb.net";
const dbName = "kec-b4-netflix";

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${dbUserName}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("Db connection established ............");
  } catch (error) {
    console.log("DB connection failed");
    console.log(error.message);
  }
};

export default connectDB;
