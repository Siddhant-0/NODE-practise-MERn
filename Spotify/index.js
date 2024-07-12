import express from "express";
import connectDB from "./connect.db.js";
import UserRoutes from "./user.controller.js";

const app = express();

// to make express understand json file format
app.use(express.json());

//connect database
connectDB();

//register music routes
app.use(UserRoutes);

//network port set
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});
