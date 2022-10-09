import { Router } from "express";
import * as taskController from "../controllers/task";

const router = Router();

router.post("/", taskController.createTask);
router.get("/", taskController.getTasks);

export default router;
