import express from "express";
import log from "morgan";
import Cors from "cors";
import http from "http";
import indexRouter from "./routes/index";
var app = express();
var port = normalizePort(process.env.PORT || "9000");
app.set("port", port);
/**
 * Create HTTP server.
 */
var server = http.createServer(app);
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}
// view engine setup
app.use(log("dev"));
app.use(Cors);
app.use(express.json());
app.use("/", indexRouter);
export default app;
