import { getAll } from "../db/config";
export const getAllTodo = async () => {
    return await getAll();
};
export const saveTodo = async (req, res) => {
    const { todo } = req.body;
    console.log("Sent todo", todo);
};
export const updateTodo = async (req, res) => {
    const { todo } = req.body;
    console.log("update todo", todo);
};
export const deleteTodo = async (req, res) => {
    const { id } = req.params;
    console.log("Sent todo id", id);
};
