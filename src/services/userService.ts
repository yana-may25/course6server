import { IUser } from '../types/user';
import UserDAO from '../data-access/userDAO';
import UserModel from "../models/UserModel";

export default class UserService {
  public static async getAllUsers(loginSubstring: string) {
    return UserDAO.getAllUsers(loginSubstring);
  }

  public static async addUser(user: IUser): Promise<UserModel> {
    return UserDAO.addUser(user);
  }

  public static async updateUser( login: string , codeWord: string, password: string) {
    return UserDAO.updateUser(login, codeWord, password);
  }

  public static async getUserById(id: string): Promise<UserModel | null> {
    return UserDAO.getUserById(id);
  }

  public static async loginUser(login: string, password: string): Promise<UserModel | null> {
    return UserDAO.loginUser(login, password);
  }
}
