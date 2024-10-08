import express from "express";

import connectDB from "./connect.db.js";
import Movie from "./movie.model.js";
const app = express();

//? to make app understand json
app.use(express.json());

// connect database
connectDB();

//api
app.post("/movie/add", async (req, res) => {
  const newMovie = req.body;

  await Movie.create(newMovie);
  return res.status(200).send({ message: "Movie is added successfully..." });
});

//get all movies
app.get("/movie/list", async (req, res) => {
  const movies = await Movie.find();
  return res.status(200).send({ message: "Success..", movieList: movies });
});

//? network port and server
const PORT = 7600;
app.listen(PORT, () => {
  console.log(`APP listening on port ${PORT}`);
});
