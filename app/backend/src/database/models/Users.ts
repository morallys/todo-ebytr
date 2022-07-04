import { Model, DataTypes } from 'sequelize';
import db from '.';

export default class Users extends Model {
  id: number;
  username: string;
  email: string;
  password: string;
}
Users.init(
  {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: 'Users',
    underscored: true,
    timestamps: false,
  },
);
