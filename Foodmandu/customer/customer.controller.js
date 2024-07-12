import express from "express";
import Customer from "./customer.model.js";
import mongoose from "mongoose";

const router = express.Router();

//? add customer
router.post("/customer/add", async (req, res) => {
  //extract new customer from req.body
  const newCustomer = req.body;

  //insert customer
  await Customer.create(newCustomer);

  //sent request req
  return res.status(200).send({ message: "Customer Added Successfully !!!!!" });
});

//? get customer list
router.get("/customer/list", async (req, res) => {
  const customers = await Customer.find();
  return res
    .status(200)
    .send({ message: "Successfully...", customerList: customers });
});

//!create new api
//? create customer detail by id
router.get("/customer/detail/:id", async (req, res) => {
  //extract customer id from req.params
  const customerId = req.params.id;

  //check for mongo id validity
  const isValid = mongoose.isValidObjectId(customerId);

  //if not valid mongo id , throw error
  if (!isValid) {
    return res.status(200).send({ message: "Invalid  mongo ID....." });
  }
  // find customer using customerId
  const customer = await Customer.findOne({ _id: customerId });

  // if not customer, throw error
  if (!customer) {
    return res.status(200).send({ message: "Customer does not exist ......." });
  }
  //send res

  return res.status(200).send({
    message: "Successfull......",
    customerDetail: customer,
  });
});

export default router;
