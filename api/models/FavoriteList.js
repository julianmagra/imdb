import db from "../db/index.js";

class FavoriteList extends Model {}

FavoriteList.init(
  {
    // Model attributes are defined here
    title: DataTypes.STRING,
    release_date: DataTypes.DATE,
    genre: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    director: DataTypes.STRING,
    actors: DataTypes.STRING,
  },
  {
    // Other model options go here
    sequelize: db,
    modelName: "TvProgram",
    // timestamps: false,
  }
);

console.log(TvProgram === sequelize.models.FavoriteList); // true
