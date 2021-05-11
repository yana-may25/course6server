import { IRating } from '../types/rating';
import StatsDAO from '../data-access/statsDAO';
import RatingModel from "../models/RatingModel";


export default class StatsService {
public static async getAllStats() {
  return StatsDAO.getAllStats();
}
public static async getMaxStats() {
  return StatsDAO.getMaxStats();
}

public static async getMinStats() {
  return StatsDAO.getMinStats();
}

}