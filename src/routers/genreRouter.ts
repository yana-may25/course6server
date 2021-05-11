import express from 'express';
import GenreService from "../services/genreServices";

const genreRouter = express.Router();


genreRouter.post('/', async (req, res) => {
  const genre = req.body;
  try {
    const addedGenre = await GenreService.addGenre(genre);
    return res.status(200).json(addedGenre);
  } catch (err) {
    console.log(err);
    res.status(500).json({ mesage: err.mesage });
  }
});

genreRouter.get('/', async (req, res) => {
  try {
    const { loginSubstring = '' } = req.query;
    const movies = await GenreService.getAllGenres(loginSubstring as string);

    if (!movies.length) {
      return res.status(404).send('There are no movies');
    }

    return res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default genreRouter;
