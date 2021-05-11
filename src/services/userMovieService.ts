import { IUserMovie } from '../types/userMovie';
import UserMovieDAO from '../data-access/userMovieDAO';
import UserMovieModel from "../models/UserMovieModel";

export default class UserMovieService {
  public static async addUserMovie(userMovie: IUserMovie): Promise<UserMovieModel> {
    return UserMovieDAO.addUserMovie(userMovie);
  };
  public static async getAllUserMovies(loginSubstring: string) {
    return UserMovieDAO.getAllUserMovies(loginSubstring);
  };
}
