import { DataTypes } from "sequelize";
import db from "../db/index.js";
import Rol from "./Rol.js";

const User = db.define("users", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  username: { type: DataTypes.STRING },
  password: { type: DataTypes.BOOLEAN, defaultValue: false },
  firstName: { type: DataTypes.BOOLEAN, defaultValue: false },
  lastName: { type: DataTypes.BOOLEAN, defaultValue: false },
  email: { type: DataTypes.BOOLEAN, defaultValue: false },
  age: { type: DataTypes.BOOLEAN, defaultValue: false },
  gender: { type: DataTypes.BOOLEAN, defaultValue: false },
});

User.hasOne(Rol, {
  foreignKey: "rolId",
  sourceKey: "id",
});

Rol.belongsTo(User, {
  foreignKey: "userId",
  targetId: "id",
});

export default User;
