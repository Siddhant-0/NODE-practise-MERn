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

//? delete a customer by id -->mongo DB gurrantes unique ids
router.delete("/customer/delete/:id", async (req, res) => {
  //extract customer id from req.params
  // console.log(req.params.id);
  const customerId = req.params.id;

  //check for mongo id validity
  const isValid = mongoose.isValidObjectId(customerId);
  // console.log(isValid); //!-->> checking isValid value

  //if not valid mongo id, throw error
  if (!isValid) {
    return res.status(400).send({ message: "Invalid  mongoID....." });
  }

  //find customer using customer id

  // const customer = await Customer.findOne({ _id: customerId });

  const customer = await Customer.findById(customerId); //!await -->> customer is the folder name in the DB  of Foodmandu
  // console.log(customer); //! checking customer detail

  //if not customer throw error
  if (!customer) {
    return res.status(404).send({ message: "Customer does not exist ......." });
  }

  //delete customer
  // await Customer.deleteOne({ _id: customerId });
  await Customer.findByIdAndDelete(customerId);

  //send  response
  return res.status(200).send("Customer is deleted Successfully...");
});

//? edit customer by id

router.put("/customer/edit/:id", async (req, res) => {
  // extract customer id from req.params
  const customerId = req.params.id;

  // check for mongo id validity
  const isValid = mongoose.isValidObjectId(customerId);

  // if not valid mongo id, throw error
  if (!isValid) {
    return res.status(400).send({ message: "Invalid Mongo ID...." });
  }

  // find customer using id
  const customer = await Customer.findOne({ _id: customerId });

  // if not customer, throw error
  if (customer.length === 0) {
    return res.status(404).send({ message: "Customer Id does not exist...." });
  }

  // extract new values from req.body
  const newValues = req.body;
  // console.log(newValues);

  // update customer

  // await Customer.updateOne(
  //   { _id: customerId },
  //   {
  //     $set: {
  //       ...newValues,
  //     },
  //   }
  // );
  //!alternative to above
  await Customer.findByIdAndUpdate(customerId, { ...newValues });

  // send res
  return res.status(200).send({ message: "Customer is updated Successfully" });
});

export default router;
