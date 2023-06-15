import { DataTypes } from "sequelize";
import db from "../db/index.js";
import TvProgram from "./TvProgram.js";
import User from "./User.js";

// Evaluar esta tabla
const FavoriteTvListList = db.define("favoriteTvList", {
  tvPrograms: { type: DataTypes.ARRAY([DataTypes.STRING]) },
});

FavoriteTvList.hasMany(TvProgram, {
  foreignKey: "favoriteTvListId",
  sourceKey: "id",
});

TvProgram.belongsToMany(User, {
  foreignKey: "favoriteTvListId",
  targetId: "id",
});

export default FavoriteTvListList;
