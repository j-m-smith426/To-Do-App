import { Request, Response } from "express";
import { getAll } from "../db/config";

export const getAllTodo = async () => {
	return await getAll();
};

export const saveTodo = async (req: Request, res: Response) => {
	const { todo } = req.body;
	console.log("Sent todo", todo);
};

export const updateTodo = async (req: Request, res: Response) => {
	const { todo } = req.body;
	console.log("update todo", todo);
};

export const deleteTodo = async (req: Request, res: Response) => {
	const { id } = req.params;
	console.log("Sent todo id", id);
};
