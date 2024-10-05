import mongoose from "mongoose";

// //quantity detail
// const quantityDetail = new mongoose.Schema({
//   value: Number,
//   unit: String,
// });

//create schema
const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 55,
  },
  price: {
    type: Number,
    min: 0,
    required: true,
  },
});

//create table

const Food = mongoose.model("Food", foodSchema);
export default Food;
