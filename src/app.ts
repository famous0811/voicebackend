import * as cors from "cors";
import * as express from "express";
import Router from "./routers";
import Socket from "./Module/socket";
const app = express();
const PORT = process.env.PORT || 4000;
const http = require("http");
const server = http.createServer(app);
app.use(cors());

app.use("/", Router);
app.get("/", (res, req) => {
  req.send("Hello word");
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});

const io = require("socket.io")(server);
Socket(io);
