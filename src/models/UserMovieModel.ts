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


@Table({ tableName: 'user_movie' })
export default class UserMovieModel extends Model<UserMovieModel> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  idcomment: number;
  
  @Column(DataType.INTEGER)
  iduser: number;


  @Column(DataType.INTEGER)
  idmovie: string;



  @Column(DataType.TEXT)
  comment: string;
}

