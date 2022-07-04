import { Model, DataTypes } from 'sequelize';
import db from '.';
import Users from './Users';

export default class Todo extends Model {
  id: number;
  message: string;
  status: string;
  userId: number;
}

Todo.init(
  {
    message: DataTypes.STRING,
    status: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  },
  {
    sequelize: db,
    modelName: 'Todo',
    underscored: true,
    timestamps: false,
  },
);

Todo.belongsTo(Users, { foreignKey: 'userId', as: 'userId' });

Users.hasMany(Todo, { foreignKey: 'userId', as: 'userId' });
