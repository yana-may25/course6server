import { IRating } from '../types/rating';
import RatingDAO from '../data-access/ratingDAO';
import RatingModel from "../models/RatingModel";

export default class RatingService {
  public static async addRating(rating: IRating): Promise<RatingModel> {
    return RatingDAO.addRating(rating);
  };
  public static async getAllRatings(loginSubstring: string) {
    return RatingDAO.getAllRatings(loginSubstring);
  };

  public static async updateRating( iduser: number , idmovie: number, rate: number) {
    return RatingDAO.updateRating(iduser, idmovie, rate);
  }

}
