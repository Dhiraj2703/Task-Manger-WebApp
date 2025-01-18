import express from 'express';
import { createTask, DeleteTask, getAllTask, ShowTask, UpdateTask } from '../controller/Task.controller.js';

const TaskRouter = express.Router();

TaskRouter.post("/create-task",createTask)

TaskRouter.get("/get-all-task",getAllTask)

TaskRouter.get("/show-task/:taskid",ShowTask)

TaskRouter.put("/update-task/:taskid",UpdateTask)

TaskRouter.delete("/delete-task/:taskid",DeleteTask)

export default TaskRouter;