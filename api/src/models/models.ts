import { RowDataPacket } from "mysql2";

export interface ITable extends RowDataPacket {
	"COUNT(TABLE_NAME)": number;
}

export interface ITodo {
	idtodo?: number;
	Name: string;
	Completed: boolean;
}
