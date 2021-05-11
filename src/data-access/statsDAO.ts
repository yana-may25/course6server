import { Sequelize } from 'sequelize-typescript';
import { sequelize } from '../utils/dbConnection';


export default class StatsDAO {
  public static async getAllStats() {
    return sequelize.query("select genre.genre, count(movie.movieName) as name,  avg (rating.rate) as rate  from sem6.movie    join genre on genre.genre = movie.genre   join rating on movie.idmovie = rating.idmovie group by movie.genre   order by avg (rating.rate) desc")
  }

  public static async getMaxStats() {
    return sequelize.query(" SELECT movie.movieName as name, movie.genre as genre, avg(rating.rate) as avgrate FROM sem6.movie inner join rating on  movie.idmovie = rating.idmovie where movie.idmovie = (select rating.idmovie from rating group by rating.idmovie  order by avg(rating.rate) desc limit 1)")
  }

  public static async getMinStats() {
    return sequelize.query(" SELECT movie.movieName as name, movie.genre as genre, avg(rating.rate) as avgrate FROM sem6.movie inner join rating on  movie.idmovie = rating.idmovie where movie.idmovie = (select rating.idmovie from rating group by rating.idmovie  order by avg(rating.rate) asc limit 1)")
  }

}
