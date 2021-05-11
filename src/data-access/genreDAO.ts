import { IGenre } from '../types/genre';
import { Sequelize } from 'sequelize-typescript';
import { v1 as uuid } from 'uuid';

import GenreModel from "../models/GenreModel";

export default class GenreDAO {
  public static async getAllGenres(nameSubstring: string) {
    return GenreModel.findAll<GenreModel>({
      where: {
        genre: Sequelize.where(
          Sequelize.fn('LOWER', Sequelize.col('genre')),
          'LIKE',
          '%' + nameSubstring + '%'
        )
      },
    //  attributes: { exclude: ['password'] },
    });
  }

  public static async updateGenre(updatedGenre: GenreModel, id: string) {
    const { genre } = updatedGenre;
    return GenreModel.update({
       genre,
      },
      {
        where: {
          id,
        },
        returning: true
      }
    ).then(([_, [genre]]) => genre);
  }


  public static async addGenre(genre: IGenre): Promise<GenreModel> {
    console.log(genre);
    // @ts-ignore
    return GenreModel.create(genre);
  }

  
  public static async getGenreById(id: string): Promise<GenreModel | null> {
    return GenreModel.findOne({
      where: {
        id,
      },
   
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
