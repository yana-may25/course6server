import { IGenre } from '../types/genre';
import GenreDAO from '../data-access/genreDAO';
import GenreModel from "../models/GenreModel";

export default class GenreService {
  public static async addGenre(genre: IGenre): Promise<GenreModel> {
    return GenreDAO.addGenre(genre);
  };
  public static async getAllGenres(loginSubstring: string) {
    return GenreDAO.getAllGenres(loginSubstring);
  };
}
