import mysql from "mysql2/promise";
const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "11J03s22$",
    database: "tododb",
    // rowsAsArray: true
});
const sync = async () => {
    const [rows] = await connection.execute(`SELECT COUNT(TABLE_NAME) FROM information_schema.TABLES WHERE TABLE_SCHEMA LIKE 'tododb' AND TABLE_TYPE LIKE 'BASE TABLE' AND TABLE_NAME = 'todo'`);
    console.log(rows);
    if (rows[0]["COUNT(TABLE_NAME)"] === 1)
        return true;
    else
        return false;
};
sync();
const getAll = async () => {
    const [rows, fields] = await connection.execute(`SELECT * FROM todo`);
    console.log(rows);
};
const saveOne = async (name) => {
    const [rows, fields] = await connection.execute(`INSERT INTO todo (Name, Completed) Values (?, false)`, [name]);
};
const confirmOne = async (todo) => {
    const [rows, fields] = await connection.execute(`UPDATE todo SET Completed = true WHERE idtodo = ? AND Name = ?`, [todo.id, todo.name]);
};
const deleteOne = async (todoId) => {
    const [rows, fields] = await connection.execute(`DELETE FROM todo WHERE idtodo = ?`, [todoId]);
};
export { getAll, saveOne, confirmOne, deleteOne };
