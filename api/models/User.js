import { DataTypes, Model } from "sequelize";
import db from "../db";

class User extends Model {}

User.init(
  {
    // Model attributes are defined here
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.VIRTUAL,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
        len: [3, 100],
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
        len: [3, 100],
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
      },
    },
    gender: {
      type: DataTypes.ENUM,
      values: ["male", "female"],
      allowNull: false,
    },
    /* favoriteList: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    }, */
  },
  {
    // Other model options go here
    sequelize: db, // We need to pass the connection instance
    modelName: "User", // We need to choose the model name
  }
);

console.log(User === sequelize.models.User); // true

// USER hasone(FavoriteLIST)
// Favorite list belongsto(USER)
