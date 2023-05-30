import { Sequelize } from "sequelize";

const sequelize = new Sequelize("imdb", "julian", "123laclave", {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;
