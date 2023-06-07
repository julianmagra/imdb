import { DataTypes } from "sequelize";
import db from "../db/index.js";

const Rol = db.define("roles", {
  rol: {
    type: DataTypes.ENUM(["user", "admin", "superadmin"]),
    defaultValue: "user",
  },
});

export default Rol;
