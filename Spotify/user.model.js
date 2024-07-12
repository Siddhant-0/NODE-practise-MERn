import mongoose from "mongoose";

//set schema/ rules for DB

const userSchema = mongoose.Schema({
  name: String,
  genre: String,
  artist: String,
});

//create table model for the schema
const User = mongoose.model("User", userSchema);
export default User;
