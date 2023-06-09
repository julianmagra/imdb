import { DataTypes } from "sequelize";
import db from "../db/index.js";
import TvProgram from "./TvProgram.js";

// Evaluar esta tabla
const FavoriteTv = db.define("favoriteTv", {
  tvPrograms: { type: DataTypes.ARRAY([DataTypes.STRING]) },
});

FavoriteTv.hasMany(TvProgram, {
  foreignKey: "favoriteTvId",
  sourceKey: "id",
});
TvProgram.belongsTo(FavoriteTv, {
  foreignKey: "favoriteTvId",
  targetId: "id",
});

export default FavoriteTv;
