import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 55,
    trim: true,
  },
  duration: {
    type: Number,
    required: true,
    trim: true,
  },
  tutorName: {
    type: String,
    required: true,
    maxlength: 55,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    maxlength: 25,
    trim: true,
  },
});

const Course = mongoose.model("Course", courseSchema);
export default Course;
