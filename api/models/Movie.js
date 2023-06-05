import { DataTypes, Sequelize, Model } from "sequelize";
import db from "../db";

class Movie extends Model {}

Movie.init(
  {
    // Model attributes are defined here
    title: DataTypes.STRING,
    release_date: DataTypes.DATE,
    genre: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    director: DataTypes.STRING,
    actors: DataTypes.STRING,
  },
  {
    // Other model options go here
    sequelize: db,
    modelName: "Movie",
    // timestamps: false,
  }
);

console.log(Movie === sequelize.models.Movie); // true

// MOVIE.
 Movie.findAll({})