import * as taskService from "../services/task";

export const createTask = async (req, res) => {
  try {
    const { title, description, states } = req.body;

    const newTask = {
      title,
      description,
      states,
    };

    const createdTask = await taskService.createTask(newTask);

    return res.status(201).json({ task: createdTask });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getTasks = async (req, res) => {
  try {
    const take = parseInt(req.query.take) || 10;
    const skip = parseInt(req.query.skip) || 0;
    const tasks = await taskService.getTasks(take, skip);

    return res.status(201).json({ tasks });
  } catch (error) {
    return res.status(500).json(error);
  }
};
