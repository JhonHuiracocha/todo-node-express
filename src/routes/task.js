import { Router } from "express";
import * as taskController from "../controllers/task";

const router = Router();

router.post("/", taskController.createTask);

export default router;
