import express from "express";
import connectDB from "./connect.db.js";
import CustomerRoutes from "./customer/customer.controller.js";
const app = express();

// t0 make app understand json
app.use(express.json());

// database connect
connectDB();

//register customer routes
app.use(CustomerRoutes);

//network port and server
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
