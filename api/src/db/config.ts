import mysql, { RowDataPacket } from "mysql2/promise";
import { ITable, ITodo } from "../models/models";

const createConnection = async () => {
	const connection = await mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "11J03s22$",
		database: "tododb",
		// rowsAsArray: true
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
sync();
const getAll = async () => {
	const connection = await createConnection();
	const [rows, fields] = await connection.execute(`SELECT * FROM todo`);
	console.log(rows);
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
		[todo.id, todo.name]
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
