import mysql from "mysql2/promise";
import { ITable, ITodo } from "../models/models";
import Dotenv from "dotenv";

Dotenv.config();
const createConnection = async () => {
	const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;
	const connection = await mysql.createConnection({
		host: DB_HOST,
		user: DB_USER,
		password: DB_PASSWORD,
		database: DB_DATABASE,
	});
	return connection;
};

const sync = async () => {
	const connection = await createConnection();
	const [rows] = await connection.execute<ITable[]>(
		`SELECT COUNT(TABLE_NAME) FROM information_schema.TABLES WHERE TABLE_SCHEMA LIKE 'tododb' AND TABLE_TYPE LIKE 'BASE TABLE' AND TABLE_NAME = 'todo'`
	);

	console.log(rows);
	if (rows[0]["COUNT(TABLE_NAME)"] === 1) return true;
	else return false;
};
if (!sync()) {
	throw new Error("Table Not Created");
}
const getAll = async () => {
	const connection = await createConnection();
	const [rows, fields] = await connection.execute(`SELECT * FROM todo`);
	console.log(rows);
	return rows;
};
const saveOne = async (name: string) => {
	const connection = await createConnection();
	const [rows, fields] = await connection.execute(
		`INSERT INTO todo (Name, Completed) Values (?, false)`,
		[name]
	);
};
const confirmOne = async (todo: ITodo) => {
	const connection = await createConnection();
	const [rows, fields] = await connection.execute(
		`UPDATE todo SET Completed = true WHERE idtodo = ? AND Name = ?`,
		[todo.idtodo, todo.Name]
	);
};
const deleteOne = async (todoId: number) => {
	const connection = await createConnection();
	const [rows, fields] = await connection.execute(
		`DELETE FROM todo WHERE idtodo = ?`,
		[todoId]
	);
};

export { getAll, saveOne, confirmOne, deleteOne };
