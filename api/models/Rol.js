import { DataTypes, Sequelize, Model } from "sequelize";
import db from "../db";

class User extends Model {}

Rol.init(
  {
    // Model attributes are defined here
    rol: {
      type: DataTypes.ENUM(["user", "admin", "superAdmin"]),
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize: db,
    modelName: "Rol",
  }
);

console.log(User === sequelize.models.User); // true
