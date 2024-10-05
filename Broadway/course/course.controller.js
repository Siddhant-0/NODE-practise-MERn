import mongoose from "mongoose";
import Course from "./course.model.js";
import yup from "yup";
import express from "express";

const router = express.Router();

//? add data into DB

//response
router.post("/course/add", (req, res) => {
  return res.status(200).send({ message: "Data is adding " });
});

export default router;
