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


@Table({ tableName: 'actor' })
export default class ActorModel extends Model<ActorModel> 
{
  @AutoIncrement
  @PrimaryKey
  @Unique
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.STRING)
  name: string; 
  
  @Column(DataType.STRING)
  surname: string;

  @Column(DataType.STRING)
  country: string;
  
}
