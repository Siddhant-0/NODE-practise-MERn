import Food from "./food.model.js";
import mongoose from "mongoose";
import yup from "yup";

export const getFoodList = async (req, res) => {
  const foodItems = await Food.find();

  return res.status(200).send({ message: "success", foodList: foodItems });
};

export const validateMongoId = (req, res, next) => {
  //extract id from params
  const objectid = req.params.id;

  //check for mongo id
  const isValid = mongoose.isValidObjectId(objectid);

  // if not mongo id throw error
  if (!isValid) {
    return res.status(400).send({ message: "Invalid MOngo Id..." });
  }
  //call next function
  next();
};

export const validateFoodId = async (req, res, next) => {
  //extract fooId from req.params
  const foodId = req.params.id;

  //find food using food objectid
  const requiredFoodItem = await Food.findOne({ _id: foodId });

  //if not food id ,throw error
  if (!requiredFoodItem) {
    return res.status(404).send({ message: "Food item does not exist ..." });
  }
  req.foodItem = requiredFoodItem; // !---->>>>>req= {...req,foodItem :requiredFoodItem}; adding foodItem in the object req ...
  //call next function
  next();
};

export const findFood = (req, res) => {
  return res.status(201).send({
    message: "Succesfull..",
    foodItem: req.foodItem,
  });
};

export const validateWithDb = async (req, res, next) => {
  const data = req.body;

  const addFoodSchema = yup.object({
    name: yup.string().required().trim().max(50),
    price: yup.number().required().min(0),
  });

  try {
    const validatedData = await addFoodSchema.validate(data);
    req.body = validatedData;
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
  next();
};
