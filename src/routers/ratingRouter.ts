import express from 'express';
import RatingService from "../services/ratingService";

const ratingRouter = express.Router();


ratingRouter.post('/', async (req, res) => {
  const rating = req.body;
  console.log(rating);
  try {
    const addedRating = await RatingService.addRating(rating);
    return res.status(200).json(addedRating);
  } catch (err) {
    console.log(err);
    res.status(500).json({ mesage: err.mesage });
  }
});

ratingRouter.get('/', async (req, res) => {
  try {
    const { loginSubstring = '' } = req.query;
    const movies = await RatingService.getAllRatings(loginSubstring as string);

    if (!movies.length) {
      return res.status(404).send('No ratings are specified for this user');
    }
    console.log(movies);
    return res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

ratingRouter.post('/update', async (req, res) => {
  console.log(req.body);
  const {iduser, idmovie, rate} = req.body;
  try {
    console.log(iduser, idmovie, rate);
    const user = await RatingService.updateRating(iduser, idmovie, rate);
    console.log(user);
    if (!user) {
      return res.status(404).json({ mesage: 'User not found' });
    }
    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ mesage: err.mesage });
  }
});

export default ratingRouter;
