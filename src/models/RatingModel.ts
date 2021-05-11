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


@Table({ tableName: 'rating' })
export default class RatingModel extends Model<RatingModel> {
  @PrimaryKey
  @Column(DataType.INTEGER)
  iduser: number;

  @PrimaryKey
  @Column(DataType.INTEGER)
  idmovie: number;

  @Default("5")
  @Column(DataType.INTEGER)
  rate: number;

}
