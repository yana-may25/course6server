import { IUser } from '../types/user';
import { Sequelize } from 'sequelize-typescript';
import { v1 as uuid } from 'uuid';

import UserModel from "../models/UserModel";

export default class UserDAO {
  public static async getAllUsers(loginSubstring: string) {
    return UserModel.findAll<UserModel>({
      where: {
        login: Sequelize.where(
          Sequelize.fn('LOWER', Sequelize.col('login')),
          'LIKE',
          '%' + loginSubstring + '%'
        )
      },
      attributes: { exclude: ['password'] },
    });
  }

  public static async loginUser(login: string, password: string) {
    return UserModel.findOne<UserModel>({
      where: {
        login,
        password,
      },
    });
  }

  public static async addUser(user: IUser): Promise<UserModel> {
    // @ts-ignore
    return UserModel.create(user);
  }

  public static async updateUser(login: string,  codeWord: string, password: string) {
    console.log(login, codeWord, password)
   // const { password } = updatedUser;
    return UserModel.update({
        password,
      },
      {
        where: {
          login,
          codeWord,
        },
        returning: true
      }
    ).then(([_, [user]]) => user)
    .catch((err) => console.log(err));
  }

  public static async getUserById(id: string): Promise<UserModel | null> {
    return UserModel.findOne({
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
