import { Router } from "express";
import * as taskController from "../controllers/task";

const router = Router();

router.post("/", taskController.createTask);
router.get("/", taskController.getTasks);
router.get("/:id", taskController.getTask);
router.patch("/:id", taskController.updateTaskById);
router.delete("/:id", taskController.deleteTaskById);

export default router;
