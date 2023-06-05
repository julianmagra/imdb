import { DataTypes, Sequelize, Model } from "sequelize";
import db from "../db";

class Rol extends Model {}

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
    // timestamps: false,
  }
);

console.log(Rol === sequelize.models.Rol); // true
