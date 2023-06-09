import { DataTypes } from "sequelize";
import db from "../db/index.js";
import Rating from "./Rating.js";
import FavoriteMovieList from "./FavoriteMovie.js";

const Movie = db.define("movies", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING },
  release_date: { type: DataTypes.DATE },
  genre: { type: DataTypes.STRING },
  duration: { type: DataTypes.INTEGER },
  description: { type: DataTypes.STRING },
  image: { type: DataTypes.STRING },
  director: { type: DataTypes.STRING },
  actors: { type: DataTypes.STRING },
});

Movie.hasMany(Rating);
Rating.belongsToMany(Movie);

Movie.belongsToMany(FavoriteMovieList, {
  foreignKey: "favoriteMovieListId",
  targetId: "id",
});

export default Movie;
