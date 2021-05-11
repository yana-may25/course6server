import { IMovie } from '../types/movie';
import { Sequelize } from 'sequelize-typescript';

import MovieModel from "../models/MovieModel";
import { sequelize } from '../utils/dbConnection';

export default class MovieDAO {
  public static async getAllMovies(movieName: string) {
    return MovieModel.findAll<MovieModel>({
      where: {
        movieName: Sequelize.where(
          Sequelize.fn('LOWER', Sequelize.col('movieName')),
          'LIKE',
          '%' + movieName + '%'
        )
      },
    });
  }
  public static async sortMovies() {
    return sequelize.query('SELECT * FROM sem6.movie order by movie.year desc');
  }


  public static async addMovie(movie: IMovie): Promise<MovieModel> {
    // @ts-ignore
    return MovieModel.create(movie);
  }

  public static async updateMovie(updatedMovie: MovieModel, id: string) {
    const { movieName, year, country } = updatedMovie;
    return MovieModel.update({
      movieName,
        year,
        country,
      },
      {
        where: {
          id,
        },
        returning: true
      }
    ).then(([_, [movie]]) => movie);
  }

  public static async getMovieById(id: string): Promise<MovieModel | null> {
    return MovieModel.findOne({
      where: {
        id,
      },
      attributes: { exclude: ['password'] }//?????
    });
  }

  public static async indStatMovies(id: string) {
    return sequelize.query('SELECT count(rating.iduser)  as count1   FROM sem6.rating    where iduser = ?   ',
    { replacements: [id]}
    )

  }

  public static async indTableStatsMovies(id: string) {
    return sequelize.query('select movie.genre as genre,  count(rating.idmovie) as count, avg(rating.rate) as avgrate from rating inner join movie on movie.idmovie=rating.idmovie where rating.iduser = ? group by movie.genre',
    { replacements: [id]}
    )

  }
  public static async deleteMovie(movieName: string) {
    return MovieModel.destroy({
      where: {
        movieName,      }
      })}
}
