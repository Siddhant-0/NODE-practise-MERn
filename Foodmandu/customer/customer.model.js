import mongoose from "mongoose";

// set rule /schema/ structure

const customerSchema = new mongoose.Schema({
  email: String,
  phNumber: Number,
  address: String,
});

// create table /model/ collection
const Customer = mongoose.model("Customer", customerSchema);
export default Customer;
