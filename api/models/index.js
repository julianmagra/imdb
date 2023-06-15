import Rol from "./Rol.js";
import User from "./User.js";
import Movie from "./Movie.js";
import TvProgram from "./TvProgram.js";
import FavoriteMovieList from "./FavoriteMovie.js";
import FavoriteTvListList from "./FavoriteTv.js";
import Rating from "./Rating.js";

// todo: Pasar los imports a formato require si eso me permite importar  en el formato {User,Movie,etc} require("./tal").

// todo: La idea es armar todas las relaciones en el index de models y exportarlas.

/* 
 ! Averiguar que son los Source Key y los Target Id. Entender que son los Foreign Key.
*/
/*
 *User Relations
 */
// Relation User to Rol
User.hasOne(Rol, {
  foreignKey: "rolId",
  sourceKey: "id",
});
// Relation User to FavLists
User.hasOne(FavoriteMovieList, {
  foreignKey: "movieListId",
  sourceKey: "id",
});
User.hasOne(FavoriteTvListList, {
  foreignKey: "tvListId",
  sourceKey: "id",
});

/*
 *Movie Relations
 */
Movie.hasMany(Rating, {
  foreignKey: "movieId",
  sourceKey: "id",
});
Movie.belongsToMany(FavoriteMovieList, {
  foreignKey: "favoriteMovieListId",
  targetKey: "id",
});

/*
 *Tv Relations
 */

TvProgram.hasMany(Rating, {
  foreignKey: "tvProgramId",
  sourceKey: "id",
});

TvProgram.belongsToMany(FavoriteTvListList, {
  foreignKey: "tvProgramListId",
  targetKey: "id",
});

export default {
  Rol,
  User,
  Movie,
  TvProgram,
  FavoriteMovieList,
  FavoriteTvListList,
  Rating,
};
