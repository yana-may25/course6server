import { IMovie } from '../types/movie';
import MovieDAO from '../data-access/MovieDAO';
import MovieModel from "../models/MovieModel";

export default class MovieService {
  public static async getAllMovies(loginSubstring: string) {
    return MovieDAO.getAllMovies(loginSubstring);
  }

  public static async addMovie(movie: IMovie): Promise<MovieModel> {
    return MovieDAO.addMovie(movie);
  }

  
  public static async deleteMovie( movieName: string) {
    return MovieDAO.deleteMovie(movieName);
  }


  public static async updateMovie(updatedMovie: MovieModel, id: string) {
    return MovieDAO.updateMovie(updatedMovie, id);
  }

  public static async getUserMovieById(id: string): Promise<MovieModel | null> {
    return MovieDAO.getMovieById(id);
  }

  public static async sortMovies() {
    return MovieDAO.sortMovies();
  }
  public static async indStatMovies(id: string){
    return MovieDAO.indStatMovies(id);
  }
  public static async indTableStatsMovies(id: string){
    return MovieDAO.indTableStatsMovies(id);
  }

}
