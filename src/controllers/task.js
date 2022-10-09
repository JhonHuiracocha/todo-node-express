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

    return res.status(201).json({
      task: createdTask,
      message: "Task has been created successfully.",
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error." });
  }
};

export const getTasks = async (req, res) => {
  try {
    const take = parseInt(req.query.take) || 10;
    const skip = parseInt(req.query.skip) || 0;
    
    const tasks = await taskService.getTasks(take, skip);

    return res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error." });
  }
};

export const getTask = async (req, res) => {
  try {
    const { id } = req.params;

    const taskFound = await taskService.getTaskById(id);

    if (!taskFound) {
      return res.status(404).json({ message: "Task has been not found." });
    }

    return res.json(taskFound);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error." });
  }
};

export const updateTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, states } = req.body;

    const newTask = {
      title,
      description,
      states,
    };

    const taskFound = await taskService.getTaskById(id);

    if (!taskFound) {
      return res.status(404).json({ message: "Task has been not found." });
    }

    await taskService.updateTaskById(id, newTask);

    return res.json({ message: "Task has been updated successfully." });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error." });
  }
};

export const deleteTaskById = async (req, res) => {
  try {
    const { id } = req.params;

    const taskFound = await taskService.getTaskById(id);

    if (!taskFound) {
      return res.status(404).json({ message: "Task has been not found." });
    }

    await taskService.deleteTaskById(id);

    return res.json({ message: "Task has been deleted successfully." });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error." });
  }
};
