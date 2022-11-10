import { Request, Response } from "express";
import StatusCodes from "http-status-codes";
import { confirmOne, deleteOne, getAll, saveOne } from "../db/config";

const { BAD_REQUEST, OK } = StatusCodes;

export const getAllTodo = async (req: Request, res: Response) => {
	const data = await getAll();
	return res.status(OK).send(data).end();
};

export const saveTodo = async (req: Request, res: Response) => {
	const { todo } = req.body;
	console.log("Sent todo", todo);
	try {
		await saveOne(todo);
		return res.status(OK).end();
	} catch (err) {
		throw "Error Saving Todo";
	}
};

export const updateTodo = async (req: Request, res: Response) => {
	const { todo } = req.body;
	console.log("update todo", todo);
	try {
		await confirmOne(todo);
		return res.status(OK).end();
	} catch (err) {
		throw "Error Saving Todo";
	}
};

export const deleteTodo = async (req: Request, res: Response) => {
	const { id } = req.params;
	console.log("Sent todo id", id);
	try {
		await deleteOne(Number(id));
		return res.status(OK).end();
	} catch (err) {
		throw "Error Saving Todo";
	}
};
