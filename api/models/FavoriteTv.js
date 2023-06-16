import { DataTypes } from "sequelize";
import db from "../db/index.js";
import TvProgram from "./TvProgram.js";

// Evaluar esta tabla
const FavoriteTvListList = db.define("favoriteTvList", {
  tvPrograms: { type: DataTypes.ARRAY([DataTypes.STRING]) },
});

FavoriteTvList.hasMany(TvProgram, {
  foreignKey: "favoriteTvListId",
  sourceKey: "id",
});

TvProgram.belongsTo(FavoriteTvList, {
  foreignKey: "favoriteTvListId",
  targetId: "id",
});

export default FavoriteTvListList;
