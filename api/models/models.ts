import { RowDataPacket } from "mysql2";

export interface ITable extends RowDataPacket {
	"COUNT(TABLE_NAME)": number;
}

export interface ITodo {
	id?: number;
	name: string;
	completed: boolean;
}
