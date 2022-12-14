import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("⚡ Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("❌ Unable to connect to the database:", error);
  });

sequelize
  .sync()
  .then(() => {
    console.log("⚡ All models were synchronized successfully.");
  })
  .catch((error) => {
    console.error("❌ All models failed to sync: ", error);
  });
