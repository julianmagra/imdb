import { DataTypes } from "sequelize";
import db from "../db/index.js";
import Movie from "./Movie.js";

// Evaluar esta tabla
const FavoriteMovie = db.define("favoriteMovie", {
  movies: { type: DataTypes.ARRAY([DataTypes.STRING]) },
});

FavoriteMovie.hasMany(Movie, {
  foreignKey: "favoriteMovieId",
  sourceKey: "id",
});
Movie.belongsTo(FavoriteMovie, {
  foreignKey: "favoriteMovieId",
  targetId: "id",
});

export default FavoriteMovie;
