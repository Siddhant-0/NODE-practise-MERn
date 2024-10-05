import express from "express";
import connectDB from "./connect.db.js";
import CustomerRoutes from "./customer/customer.controller.js";
import restaurantRoutes from "./restaurant/restaurant.controller.js";
import foodRoutes from "./food/food.controller.js";

const app = express();

// t0 make app understand json
app.use(express.json());

// database connect
connectDB();

//register customer routes and food routes
app.use(CustomerRoutes);
app.use("/food", foodRoutes);

//register restaurant routes
app.use("/restaurant", restaurantRoutes); //! writing "/restaurant does not require to writ /restaurant in restaurant.controller apis again and again"

//network port and server
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
