import express from "express";
import connectDB from "./connect.db.js";
import CourseRoutes from "./course/course.controller.js";

const app = express();

//to make app understand json file format
app.use(express.json());

// connect DB
connectDB();

// connect routes for API
app.use(CourseRoutes);

//network port assignment
const PORT = 9000;

app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});
