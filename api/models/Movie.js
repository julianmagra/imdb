import { DataTypes } from "sequelize";
import db from "../db/index.js";

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

export default Movie;
