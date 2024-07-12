import express from "express";
import User from "./user.model.js";
import mongoose from "mongoose";

const router = express.Router();

//? add music to the list
router.post("/music/add", async (req, res) => {
  //extract new music from req.body
  const newMusic = req.body;

  await User.create(newMusic);

  //sent request req
  return res.status(200).send({ message: "Music Added Successfully !!!!!" });
});

//? get music list from playlist of the user
router.get("/music/list", async (req, res) => {
  const Music = await User.find();

  return res
    .status(200)
    .send({ message: "Listed Successfully", musicList: Music });
});

export default router;
