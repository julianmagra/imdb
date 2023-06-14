import { DataTypes } from "sequelize";
import db from "../db/index.js";
import Movie from "./Movie.js";
import User from "./User.js";

// Evaluar esta tabla
const FavoriteMovieList = db.define("favoriteMovieList", {
  movies: { type: DataTypes.ARRAY([DataTypes.STRING]) },
});

FavoriteMovieList.hasMany(Movie, {
  foreignKey: "favoriteMovieListId",
  sourceKey: "id",
});

FavoriteMovieList.belongsToMany(User, {
  foreignKey: "favoriteMovieListId",
  sourceKey: "id",
});

export default FavoriteMovieList;
