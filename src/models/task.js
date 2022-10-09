import { DataTypes } from "sequelize";
import { sequelize } from "../database";

export const Task = sequelize.define(
  "tasks",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    states: {
      type: DataTypes.ENUM,
      values: ["completed", "pending", "deleted"],
      defaultValue: "pending",
    },
  },
  { timestamps: true }
);
