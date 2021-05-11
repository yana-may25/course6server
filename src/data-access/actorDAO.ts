import { IActor } from '../types/actor';
import { Sequelize } from 'sequelize-typescript';
import { v1 as uuid } from 'uuid';

import ActorModel from "../models/ActorModel";

export default class ActorDAO {
  public static async getAllUsers(nameSubstring: string) {
    return ActorModel.findAll<ActorModel>({
      where: {
        name: Sequelize.where(
          Sequelize.fn('LOWER', Sequelize.col('name')),
          'LIKE',
          '%' + nameSubstring + '%'
        )
      },
    //  attributes: { exclude: ['password'] },
    });
  }

  

  public static async addActor(actor: IActor): Promise<ActorModel> {
    // @ts-ignore
    return ActorModel.create(actor);
  }

  public static async updateActor(updatedActor: ActorModel, id: string) {
    const { name, surname } = updatedActor;
    return ActorModel.update({
        name,
        surname,
      },
      {
        where: {
          id,
        },
        returning: true
      }
    ).then(([_, [actor]]) => actor);
  }

  public static async getActorById(id: string): Promise<ActorModel | null> {
    return ActorModel.findOne({
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
