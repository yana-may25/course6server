import { Sequelize } from 'sequelize-typescript';

import dbConfig from '../config/dbConfig';

// @ts-ignore
export const sequelize = new Sequelize({
  dialect: dbConfig.dialect,
  host: dbConfig.host,
  username: dbConfig.userName,
  password: dbConfig.password,
  database: dbConfig.database,
  define: {
    timestamps: false
  },
});
