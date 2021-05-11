import express from 'express';
import MovieService from "../services/movieServices";

const movieRouter = express.Router();


movieRouter.post('/', async (req, res) => {
  const movie = req.body;
  console.log("movie");

  try {
    const addedMovie = await MovieService.addMovie(movie);
    return res.status(200).json(addedMovie);
  } catch (err) {
    console.log(err);
    res.status(500).json({ mesage: err.mesage });
  }
});

movieRouter.get('/', async (req, res) => {
  try {
    const { loginSubstring = '' } = req.query;
    const movies = await MovieService.getAllMovies(loginSubstring as string);

    if (!movies.length) {
      return res.status(404).send('There are no movies');
    }

    return res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


movieRouter.get('/sort', async (req, res) => {
  try {
    const movies = await MovieService.sortMovies();



    return res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



movieRouter.get('/indstat/:id', async (req, res) => {
  try {
    const movies = await MovieService.indStatMovies(req.params.id);

    return res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

movieRouter.get('/indstattable/:id', async (req, res) => {
  try {
    const movies = await MovieService.indTableStatsMovies(req.params.id);
    return res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

movieRouter.get('/delete/:movieName', async (req, res) => {
  try {
    const movies = await MovieService.deleteMovie(req.params.movieName);
    return res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


export default movieRouter;
