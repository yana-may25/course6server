import { IRating } from '../types/rating';
import { Sequelize } from 'sequelize-typescript';
import { v1 as uuid } from 'uuid';

import RatingModel from "../models/RatingModel";

export default class RatingDAO {
  public static async getAllRatings(idmovie: string) {
    return RatingModel.findAll<RatingModel>({
      where: {
        idmovie: Sequelize.where(
          Sequelize.fn('LOWER', Sequelize.col('idmovie')),
          'LIKE',
          '%' + idmovie + '%'
        )
      },
    //  attributes: { exclude: ['password'] },
    });
  }

  public static async addRating (rating: IRating): Promise<RatingModel> {
    // @ts-ignore
    return RatingModel.create(rating);
  }

  public static async updateRating(iduser: number, idmovie: number, rate: number) {
   
    return RatingModel.update({
        rate,
      },
      {
        where: {
          iduser,
          idmovie,
        },
        returning: true
      }
    ).then(([_, [rating]]) => rating);
  }

 
    public static async getRatingsByMovieId(idmovie: string) {
      return RatingModel.findAll<RatingModel>({
        where: {
          idmovie: Sequelize.where(
            Sequelize.fn('LOWER', Sequelize.col('idmovie')),
            'LIKE',
            '%' + idmovie + '%'
          )
        },
      //  attributes: { exclude: ['password'] },
      });
    }
  // public static async deleteUser(id: string): Promise<UserModel | null> {
  //   return UserModel.update(
  //     {
  //       isDeleted: true
  //     },
  //     {
  //       where: {
  //         id,
  //         isDeleted: false
  //       },
  //       returning: true
  //     }
  //   ).then(([_, [user]]) => user);
  // }
}
