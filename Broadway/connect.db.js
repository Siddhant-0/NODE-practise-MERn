import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://siddhantshrestha04:${encodeURI(
        "kec1234"
      )}@cluster0.hnzeg3x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log(`DB connection is sucessful `);
  } catch (error) {
    console.log("DB connection failed..");
  }
};

export default connectDB;
