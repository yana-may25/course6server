import { IUserMovie } from '../types/userMovie';
import { Sequelize } from 'sequelize-typescript';
import { v1 as uuid } from 'uuid';

import UserMovieModel from "../models/UserMovieModel";

export default class UserMovieDAO {
  public static async getAllUserMovies(idmovie: string) {
    return UserMovieModel.findAll<UserMovieModel>({
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

  public static async viewComment(iduser: string, idmovie: string) {
    return UserMovieModel.findOne<UserMovieModel>({
      where: {
        iduser,
        idmovie,
      },
    });
  }

  public static async addUserMovie(userMovie: IUserMovie): Promise<UserMovieModel> {
    // @ts-ignore
    return UserMovieModel.create(userMovie);
  }

  public static async updateUserMovie(updatedUserMovie: UserMovieModel, iduser: number, idmovie: number) {
    const { rate, comment,} = updatedUserMovie;
    return UserMovieModel.update({
        rate,
        comment,
      },
      {
        where: {
          idmovie,
          iduser,
        },
        returning: true
      }
    ).then(([_, [userMovie]]) => userMovie);
  }

  public static async getUserMovieById(id: string): Promise<UserMovieModel | null> {
    return UserMovieModel.findOne({
      where: {
        id,
      },
      attributes: { exclude: ['password'] }
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
