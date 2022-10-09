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

export const getTaskById = (id) => {
  return Task.findOne({
    where: {
      id,
      states: ["completed", "pending"],
    },
  });
};

export const updateTaskById = (id, updatedTask) => {
  return Task.update(updatedTask, {
    where: {
      id,
      states: ["completed", "pending"],
    },
  });
};

export const deleteTaskById = (id) => {
  return Task.update(
    { states: "deleted" },
    {
      where: {
        id,
        states: ["completed", "pending"],
      },
    }
  );
};
