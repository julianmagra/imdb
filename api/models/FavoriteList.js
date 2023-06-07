import { DataTypes } from "sequelize";
import db from "../db/index.js";

// Evaluar esta tabla
const FavoriteList = db.define("favoriteLists", {
  movies: { type: DataTypes.ARRAY([DataTypes.STRING]) },
  tvPrograms: { type: DataTypes.ARRAY([DataTypes.STRING]) },
});

export default FavoriteList;
