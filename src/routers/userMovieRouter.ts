import express from 'express';
import UserMovieService from "../services/UserMovieService";

const userMovieRouter = express.Router();


userMovieRouter.post('/', async (req, res) => {
  const userMovie = req.body;
  console.log(userMovie);
  try {
    const addedUserMovie = await UserMovieService.addUserMovie(userMovie);
    return res.status(200).json(addedUserMovie);
  } catch (err) {
    console.log(err);
    res.status(500).json({ mesage: err.mesage });
  }
});

userMovieRouter.get('/', async (req, res) => {
  try {
    const { loginSubstring = '' } = req.query;
    const movies = await UserMovieService.getAllUserMovies(loginSubstring as string);

    if (!movies.length) {
      return res.status(404).send('There are no movies');
    }
    console.log(movies);
    return res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default userMovieRouter;
