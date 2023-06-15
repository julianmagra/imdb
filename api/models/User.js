import { DataTypes } from "sequelize";
import db from "../db/index.js";
import Rol from "./Rol.js";

const User = db.define("users", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  username: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  firstName: { type: DataTypes.STRING, allowNull: false },
  lastName: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  age: { type: DataTypes.INTEGER, allowNull: false },
  gender: { type: DataTypes.ENUM("male", "female"), allowNull: false },
});

/* 
Rol.belongsTo(User, {
  foreignKey: "userId",
  targetId: "id",
}); */

export default User;
