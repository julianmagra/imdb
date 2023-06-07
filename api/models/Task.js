import { DataTypes } from "sequelize";
import db from "../db/index.js";

const Task = db.define("tasks", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING },
  done: { type: DataTypes.BOOLEAN, defaultValue: false },
});

export default Task;

//task y project no pertenecen al proyecto
//falta testear que puedan agregarse valores
//seedear datos
