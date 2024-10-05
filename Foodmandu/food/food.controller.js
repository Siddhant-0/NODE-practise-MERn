import express from "express";
import yup from "yup";
import Food from "./food.model.js";
import mongoose from "mongoose";
import {
  getFoodList,
  validateMongoId,
  validateFoodId,
  findFood,
  validateWithDb,
} from "./food.service.js";

const router = express.Router();

//? App API
//? add food item
router.post("/food/add", validateWithDb, async (req, res) => {
  //extract new data from req.body
  const newFoodItem = req.body;

  //insert to DB
  await Food.create(newFoodItem);

  //response
  return res
    .status(200)
    .send({ message: "Food has been added successfully .." });
});

//? get all food items
router.get("/list", getFoodList);

//? get food detail by id
router.get("/detail/:id", validateMongoId, validateFoodId, findFood);

//? delete food item by id
router.delete("/delete/:id", validateMongoId, async (req, res) => {});

//? edit food item by id
router.put("/edit/:id", validateWithDb, validateFoodId, (req, res) => {
  //extract food id from req.params
  const food = req.params.id;

  //find food item using food id

  //if not food item, throw error

  //extract new values from req.body

  //edit food item

  //send response

  return res.status(201).send({ message: "Food Edited Successfully.." });
});

export default router;
