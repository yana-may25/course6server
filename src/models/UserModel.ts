import {
  AutoIncrement,
  Table,
  Column,
  Model,
  Unique,
  PrimaryKey,
  Default,
  DataType
} from 'sequelize-typescript';


@Table({ tableName: 'user' })
export default class UserModel extends Model<UserModel> {
  @AutoIncrement
  @PrimaryKey
  @Unique
  @Column(DataType.INTEGER)
  id: number;

  @Unique
  @Column(DataType.STRING)
  login: string;

  @Column(DataType.STRING)
  password: string;

  @Default(false)
  @Column(DataType.BOOLEAN)
  isAdmin: boolean;

  @Column(DataType.STRING)
  codeWord: string;
}

