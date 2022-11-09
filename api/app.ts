import express, { Application } from "express";
import router from "./src/routes";

const app: Application = express();
const port = 9000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

try {
	app.listen(port, (): void => {
		console.log(`Connected successfully on port ${port}`);
	});
} catch (error: any) {
	console.log(`Error occured: ${error.message}`);
}
