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


@Table({ tableName: 'genre' })
export default class GenreModel extends Model<GenreModel> 
{
  @AutoIncrement
  @PrimaryKey
  @Unique
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.STRING)
  genre: string;
  
}
