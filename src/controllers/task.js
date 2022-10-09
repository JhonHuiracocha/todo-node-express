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
