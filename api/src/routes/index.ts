import { Router } from "express";
import {
	deleteTodo,
	getAllTodo,
	saveTodo,
	updateTodo,
} from "../controller/todoController";

const router = Router();
/**
 * ToDoRouter
 * getAll
 * save
 * update
 * delete
 */

router.get("", getAllTodo);
router.post("/save", saveTodo);
router.put("/update", updateTodo);
router.delete("/{id}", deleteTodo);

export default router;
