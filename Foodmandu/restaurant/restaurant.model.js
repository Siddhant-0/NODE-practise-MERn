import mongoose from "mongoose";

//set schema /rule
const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 55,
    trim: true,
    lowercase: true,
  },
  location: {
    type: String,
    required: true,
    maxlength: 55,
    trim: true,
  },
  contact: {
    type: String,
    maxlength: 15,
    minlength: 10,
    trim: true,
  },
  ownerName: {
    type: String,
    required: true,
    nullable: true,
    default: null,
    maxlength: 55,
  },
});

//create collection
const Restaurant = mongoose.model("restaurant", restaurantSchema);

export default Restaurant;
