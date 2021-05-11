import express from 'express';
import cors from 'cors';

import { sequelize } from './utils/dbConnection';

import userRouter from './routers/userRouter';
import mainRouter from './routers/mainRouter';
import genreRouter from './routers/genreRouter';
import movieRouter from './routers/movieRouter';
import userMovieRouter from './routers/userMovieRouter';
import ratingRouter from './routers/ratingRouter';
import statsRouter from './routers/statsRouter';


import UserModel from  './models/UserModel';
import ActorModel from './models/ActorModel';
import GenreModel from './models/GenreModel';
import MovieModel from './models/MovieModel';
import UserMovieModel from './models/UserMovieModel';
import RatingModel from './models/RatingModel';


sequelize.addModels([UserModel, ActorModel, GenreModel, MovieModel, UserMovieModel, RatingModel]),
sequelize.authenticate()
  .then(() => console.log('Connected to DB'))

const SERVER_URL = 'http://localhost:8080';
const app: express.Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
  origin: SERVER_URL,
}));
app.use('/users', userRouter);
app.use('/', mainRouter);
app.use('/genres', genreRouter);
app.use('/movies', movieRouter);
app.use('/usermovies', userMovieRouter);
app.use('/rating', ratingRouter);
app.use('/stats', statsRouter);


app.listen(port, () => console.log('server is started'));
