import { Sequelize } from "sequelize";

const db = new Sequelize("imdb", "julian", "123laclave", {
  host: "localhost",
  dialect: "postgres",
});

export default db;
