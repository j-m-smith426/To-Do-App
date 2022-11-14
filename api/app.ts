import express, { Application, NextFunction, Request, Response } from "express";
import router from "./src/routes";
import cors from "cors";
import StatusCodes from "http-status-codes";
import "express-async-errors";

const app: Application = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", router);

const { BAD_REQUEST } = StatusCodes;

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
	return res.status(BAD_REQUEST).json({
		error: error.message,
	});
});

try {
	app.listen(port, (): void => {
		console.log(`Connected successfully on port ${port}`);
	});
} catch (error: any) {
	console.log(`Error occured: ${error.message}`);
}
