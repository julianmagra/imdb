import { DataTypes } from "sequelize";
import db from "../db/index.js";

const Rating = db.define("Ratings", {
  value: {
    type: DataTypes.ENUM(["1", "2", "3", "4", "5"]),
  },
});

export default Rating;
