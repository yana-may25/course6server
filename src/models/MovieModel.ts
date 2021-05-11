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


@Table({ tableName: 'movie' })
export default class MovieModel extends Model<MovieModel> 

{
  @AutoIncrement
  @PrimaryKey
  @Unique
  @Column(DataType.INTEGER)
  idmovie: number;

  @Column(DataType.STRING)
  movieName: string;

  @Default("false")
  @Column(DataType.INTEGER)
  year: number;

  @Default("false")
  @Column(DataType.STRING)
  country: string;

  @Default("false")
  @Column(DataType.STRING)
  genre: string;

  @Default("false")
  @Column(DataType.STRING)
  actor1: string;

  @Default("false")
  @Column(DataType.STRING)
  actor2: string;


  @Default("data:image/webp;base64,UklGRrYCAABXRUJQVlA4IKoCAADwIQCdASosAdEAPrFOnkgsJKGVTlw0xAsE87dwuHtTcwMt2bvM64Btz+d5APz+AxVHR0dHMaCh1L+Ip2XMheiaxr8bGxrxklb9pjhEdDbwYFsgkzPoPneYNId0A893M2vQdEK2r60dslyvyiGnNHLf+cAoczaqVdaH+OhxfCP0aO2S5X5RDTmjlv/OAUOZtVKutD/HQ4vhH6NHbJcr8ohpzRy3/nAKG3/1PhukYzdNb/OAUOZtVKutD/HQ4vhH6NHbJcr8ohpzRy3/nAKHM2qlXThI+wHJkLVqnQWZbl4AMngAxQhMC7L8F8l0FjmoONgf0r7YtLS0tLKrDR8uvW8t7jIyMF2rrdZeanw3yu/gzQxkfQbW0ipAAP74rKiGml3z16SfC4Rlo39TkZh7iTkLekV0GNPvG8hW+3MZz4oUcKpadB7uM0tuZiPiJX5ycpJPYGc6kprv1MNinRtapxu+nzHtC/UutTisY3Ll5Nv/ji/vv9T/r/cVee/yf9LiXI/v29WjCTYFJjI5VA4cb67fjMdn/j37EPELs7MIFnpVtRUl5oo5gA04IWoooFEN0ErlUEJhCi+sSogPkOIf4ZCVTYOTlRq0OkP7ZQXtq4+lxwFLGaSc9p8qm/gL70Ui+yMPlwU+Iv3CAjrDrpdVrd111n1SnMOseUjbcIB2OcImrHhr71h7URsOseGzzrRVGvbPaxivuqgxjzOETVjykbbhAKNjPozynceusH4uNQ2Aqu0+fCl3DrBRLqP0RKCPz+F1earx/Kk8D6DsD01AmBVQx+9zrSAukAhFpI8nNZsZPcMpM5AA2BSJaUvOTbdBkDrvYMgcZZfyDGQFbcEsQKCAh6IOFbo1dFlX+RRR5JvXP7DBSdFRZGrfRrRs50YpP9x8pNT+JTQTqAAA")
  @Column(DataType.TEXT)
  picture: string;

  @Default("false")
  @Column(DataType.TEXT)
  description: string;
  
}
