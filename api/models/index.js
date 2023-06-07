/* import Rol from "./Rol";
import User from "./User";
import FavoriteList from "./FavoriteList";
import Movie from "./Movie";
import TvProgram from "./TvProgram";
import Rating from "./Rating"; */

// relation user to role
/* User.hasOne(Rol);
Rol.belongsTo(User);

// relation user to favoriteList
User.hasOne(FavoriteList);
FavoriteList.belongsToMany(User); */
/* 
// relation movie to favoriteList
FavoriteList.hasMany(Movie);
Movie.belongsToMany(FavoriteList);

// TvProgram
FavoriteList.hasMany(TvProgram);
TvProgram.belongsToMany(FavoriteList);

// Rating's
TvProgram.hasMany(Rating);
Movie.hasMany(Rating);
Rating.belongsTo(TvProgram);
Rating.belongsTo(Movie);
 */
/* 
export default {
  User,
  Rol,
  FavoriteList,
  Movie,
}; */
/* 
import Role from "./Rol.js";
import User from "./User.js";
// relation user to role
export default { Role, User }; */
