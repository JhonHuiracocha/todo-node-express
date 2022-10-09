import { Task } from "../models/task";

export const createTask = (task) => Task.create(task);
