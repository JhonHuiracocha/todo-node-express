import cors from "cors";
import express from "express";
import morgan from "morgan";
import taskRoutes from "./routes/task";

const app = express();

app.set("port", process.env.PORT || 4000);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/tasks", taskRoutes);

export default app;
