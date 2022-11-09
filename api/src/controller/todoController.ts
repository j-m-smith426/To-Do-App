import { Request, Response } from "express";
import StatusCodes from "http-status-codes";
import { getAll } from "../db/config";

const { BAD_REQUEST, OK } = StatusCodes;

export const getAllTodo = async (req: Request, res: Response) => {
	const data = await getAll();
	return res.status(OK).send(data).end();
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
