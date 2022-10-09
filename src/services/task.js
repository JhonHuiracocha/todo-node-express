import { Task } from "../models/task";

export const createTask = (task) => {
  return Task.create(task);
};

export const getTasks = (limit = 10, offset = 0) => {
  return Task.findAll({
    where: {
      states: ["completed", "pending"],
    },
    order: [["createdAt", "DESC"]],
    limit,
    offset,
  });
};
